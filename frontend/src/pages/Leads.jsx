import React, { useEffect, useState } from 'react';
import AIPanel from '../components/leads/AIPanel';
import AddLeadOffcanvas from '../components/leads/AddLeadOffcanvas';
import api from '../lib/api';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { exportToCSV, exportToPDF } from '../utils/exportUtils';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('kanban'); // 'kanban' or 'list'
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            try {
                const user = JSON.parse(userJson);
                setUserRole(user.roleCode);
            } catch (e) {
                console.error("Failed to parse user from localStorage");
            }
        }
    }, []);

    const fetchLeads = async () => {
        try {
            console.log("Fetching leads from backend...");
            setLoading(true);
            const res = await api.get('/api/leads');
            const data = res.data?.data || res.data || [];
            console.log("Successfully fetched leads. Total count:", data.length);
            console.log("First lead sample (if any):", data.length > 0 ? data[0] : null);
            setLeads(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch leads", err);
        } finally {
            setLoading(false);
        }
    };

    const exportColumns = [
        { header: 'Status', render: (l) => l.status || 'NEW' },
        { header: 'Name', render: (l) => `${l.firstName} ${l.lastName || ''}`.trim() },
        { header: 'Email', render: (l) => l.email || 'N/A' },
        { header: 'Phone', render: (l) => l.phone || 'N/A' },
        { header: 'Budget', render: (l) => l.budget ? `₹${l.budget.toLocaleString()}` : 'N/A' }
    ];

    const handleExportCSV = (e) => {
        e.preventDefault();
        exportToCSV(leads, exportColumns, 'Leads_Export');
    };

    const handleExportPDF = (e) => {
        e.preventDefault();
        exportToPDF(leads, exportColumns, 'Leads Report', 'Leads_Export');
    };

    const handleCreateLead = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        console.log("Form submitted. Raw data:", data);

        // Remove empty strings so @IsOptional() backend validators don't fail (e.g. empty email string failing @IsEmail())
        const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v !== "")
        );
        
        console.log("Cleaned data being sent to POST /api/leads:", cleanedData);
        
        try {
            const createRes = await api.post('/api/leads', cleanedData);
            console.log("Backend responded with Success:", createRes.data);
            
            document.querySelector('#offcanvas_add .btn-close')?.click();
            e.target.reset(); // Clear the form
            
            console.log("Triggering re-fetch of leads to update the Kanban board...");
            fetchLeads();
        } catch (error) {
            console.error("Error creating lead. Full error object:", error);
            if (error.response) {
                console.error("Backend Error Response Data:", error.response.data);
            }
            alert(`Error creating lead: ${error.response?.data?.message || error.message}`);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    // Group leads by status for Kanban view
    const baseStatuses = ['NEW', 'CONTACTED', 'SITE_VISIT_SCHEDULED', 'SITE_VISIT_COMPLETED', 'NEGOTIATION', 'BOOKING'];
    
    // Hide NEW and CONTACTED from Sales roles as per backend logic
    const statuses = (userRole === 'SALES_MANAGER' || userRole === 'SALES_EXECUTIVE')
        ? baseStatuses.filter(s => s !== 'NEW' && s !== 'CONTACTED')
        : baseStatuses;
    
    const leadsByStatus = statuses.reduce((acc, status) => {
        acc[status] = leads.filter(lead => (lead.status || 'NEW').toUpperCase() === status);
        return acc;
    }, {});

    const onDragEnd = async (result) => {
        const { source, destination, draggableId } = result;

        // Dropped outside the list
        if (!destination) return;
        
        // Dropped in the same place
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const sourceStatus = source.droppableId;
        const destStatus = destination.droppableId;
        const leadId = draggableId;

        // Optimistically update the UI
        setLeads(prevLeads => prevLeads.map(lead => {
            if (lead.id === leadId) {
                return { ...lead, status: destStatus };
            }
            return lead;
        }));

        // Call backend API
        try {
            await api.patch(`/api/leads/${leadId}/status`, { status: destStatus });
        } catch (error) {
            console.error("Failed to update lead status", error);
            // Revert state if it fails
            fetchLeads();
            alert("Failed to update status on server.");
        }
    };

    return (
        <div className="content">
            {/* Page Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Leads<span className="badge badge-soft-primary ms-2">{leads.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Leads</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow" data-bs-toggle="dropdown">
                            <i className="ti ti-package-export me-2"></i>Export
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <ul>
                                <li><a href="#" onClick={handleExportPDF} className="dropdown-item"><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</a></li>
                                <li><a href="#" onClick={handleExportCSV} className="dropdown-item"><i className="ti ti-file-type-xls me-1"></i>Export as Excel (CSV)</a></li>
                            </ul>
                        </div>
                    </div>
                    {userRole !== 'SALES_MANAGER' && userRole !== 'SALES_EXECUTIVE' && (
                        <button className="btn btn-primary shadow" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add">
                            <i className="ti ti-plus me-1"></i>Add Lead
                        </button>
                    )}
                    <button onClick={() => setViewMode('list')} className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-light'} shadow`}>
                        <i className="ti ti-list-details me-1"></i> List
                    </button>
                    <button onClick={() => setViewMode('kanban')} className={`btn btn-sm ${viewMode === 'kanban' ? 'btn-primary' : 'btn-outline-light'} shadow`}>
                        <i className="ti ti-layout-kanban me-1"></i> Kanban
                    </button>
                    <button onClick={fetchLeads} className="btn btn-icon btn-outline-light shadow" title="Refresh">
                        <i className="ti ti-refresh"></i>
                    </button>
                </div>
            </div>
            
            <AIPanel />

            {loading ? (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : viewMode === 'kanban' ? (
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="d-flex overflow-x-auto align-items-start gap-3 pb-3">
                        {statuses.map(status => (
                            <Droppable key={status} droppableId={status}>
                                {(provided) => (
                                    <div 
                                        className="kanban-list-items p-2 rounded border bg-light" 
                                        style={{ minWidth: '320px', minHeight: '500px' }}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <div className="card mb-3 border-0 shadow-sm">
                                            <div className="card-body p-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h6 className="d-flex align-items-center mb-1">
                                                            <i className="ti ti-circle-filled fs-10 text-primary me-2"></i>
                                                            {status.replace(/_/g, ' ')}
                                                        </h6>
                                                        <span className="fw-medium text-muted fs-12">{leadsByStatus[status].length} Leads</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kanban-drag-wrap">
                                            {leadsByStatus[status].map((lead, index) => (
                                                <Draggable key={lead.id} draggableId={lead.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div 
                                                            className={`card kanban-card border shadow-sm mb-3 ${snapshot.isDragging ? 'shadow-lg border-primary' : ''}`}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div className="card-body">
                                                                <div className="d-block">
                                                                    <div className={`card-topbar mb-3 pt-1 ${snapshot.isDragging ? 'bg-primary' : 'bg-secondary'}`}></div>
                                                                    <div className="d-flex align-items-center mb-3">
                                                                        <div className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2">
                                                                            <span className="avatar-title text-info">{lead.firstName?.charAt(0) || 'U'}</span>
                                                                        </div>
                                                                        <h6 className="fw-medium fs-14 mb-0">{lead.firstName} {lead.lastName}</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column text-muted fs-13">
                                                                    {lead.email && (
                                                                        <p className="d-inline-flex align-items-center mb-1">
                                                                            <i className="ti ti-mail text-dark me-2"></i> {lead.email}
                                                                        </p>
                                                                    )}
                                                                    {lead.phone && (
                                                                        <p className="d-inline-flex align-items-center mb-1">
                                                                            <i className="ti ti-phone text-dark me-2"></i> {lead.phone}
                                                                        </p>
                                                                    )}
                                                                    {lead.budget && (
                                                                        <p className="d-inline-flex align-items-center mb-0 mt-2 text-success fw-medium">
                                                                            <i className="ti ti-currency-rupee me-2"></i> Budget: ₹{lead.budget.toLocaleString()}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            
                                            {leadsByStatus[status].length === 0 && !provided.placeholder && (
                                                <div className="text-center p-3 text-muted fs-12 border border-dashed rounded mt-2">
                                                    Drop leads here
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            ) : (
                /* List View */
                <div className="card shadow-sm border-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Status</th>
                                        <th>Score</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm rounded-circle bg-soft-primary text-primary me-2 flex-shrink-0">
                                                        {lead.firstName?.charAt(0) || 'U'}
                                                    </div>
                                                    <div className="fw-medium">{lead.firstName} {lead.lastName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="fs-13">{lead.email || '-'}</div>
                                                <div className="text-muted fs-12">{lead.phone || '-'}</div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-soft-${lead.status === 'NEW' ? 'info' : lead.status === 'BOOKING' ? 'success' : 'secondary'} text-dark`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                            <td>{lead.score || 0}</td>
                                            <td className="text-end">
                                                <button className="btn btn-sm btn-icon btn-outline-light"><i className="ti ti-edit"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {leads.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="text-center p-4 text-muted">No leads found. Create one using 'Add Lead'.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            
            <AddLeadOffcanvas handleCreateLead={handleCreateLead} />
        </div>
    );
};

export default Leads;
