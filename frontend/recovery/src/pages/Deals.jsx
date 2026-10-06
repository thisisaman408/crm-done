import React, { useEffect, useState } from 'react';
import api from '../lib/api';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { exportToCSV, exportToPDF } from '../utils/exportUtils';

const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
};

const Deals = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);
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

    const fetchRequests = async () => {
        try {
            setLoading(true);
            const res = await api.get('/api/approvals');
            const data = res.data?.data || res.data || [];
            setRequests(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch approvals", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchBookings = async () => {
        try {
            const res = await api.get('/api/bookings');
            const data = res.data?.data || res.data || [];
            setBookings(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch bookings", err);
        }
    };

    const handleCreateRequest = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            await api.post('/api/approvals', data);
            document.querySelector('#offcanvas_add .btn-close')?.click();
            e.target.reset();
            fetchRequests();
        } catch (error) {
            console.error("Error creating request", error);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    useEffect(() => {
        fetchRequests();
        fetchBookings();
    }, []);

    const statuses = ['REQUESTED', 'APPROVED', 'REJECTED', 'CLOSED'];
    
    const requestsByStatus = statuses.reduce((acc, status) => {
        acc[status] = requests.filter(req => (req.status || 'REQUESTED').toUpperCase() === status);
        return acc;
    }, {});

    const onDragEnd = async (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const destStatus = destination.droppableId;
        const reqId = draggableId;

        setRequests(prev => prev.map(r => {
            if (r.id === reqId) return { ...r, status: destStatus };
            return r;
        }));

        try {
            if (destStatus === 'CLOSED') {
                await api.patch(`/api/approvals/${reqId}/close`);
            } else if (destStatus === 'APPROVED' || destStatus === 'REJECTED') {
                const action = destStatus === 'APPROVED' ? 'APPROVE' : 'REJECT';
                await api.post(`/api/approvals/${reqId}/messages`, {
                    title: `Manager ${action}`,
                    description: `Automatically moved to ${destStatus} via Kanban board.`,
                    action: action
                });
            } else if (destStatus === 'REQUESTED') {
                await api.post(`/api/approvals/${reqId}/redo`);
            }
        } catch (error) {
            console.error("Failed to update status", error);
            fetchRequests();
            alert("Failed to update approval status.");
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'REQUESTED': return 'warning';
            case 'APPROVED': return 'success';
            case 'REJECTED': return 'danger';
            case 'CLOSED': return 'secondary';
            default: return 'primary';
        }
    };

    const exportColumns = [
        { header: 'Type', render: (req) => req.type || 'DISCOUNT' },
        { header: 'Status', render: (req) => req.status },
        { header: 'Request Title', render: (req) => req.messages?.[0]?.title || 'N/A' },
        { header: 'Sales Executive', render: (req) => req.salesExec?.name || 'N/A' },
        { header: 'Date', render: (req) => new Date(req.createdAt).toLocaleDateString() }
    ];

    const handleExportCSV = (e) => {
        e.preventDefault();
        exportToCSV(requests, exportColumns, 'Approvals_Export');
    };

    const handleExportPDF = (e) => {
        e.preventDefault();
        exportToPDF(requests, exportColumns, 'Deals & Approvals Report', 'Approvals_Export');
    };

    return (
        <div className="content">
            {/* Page Header Restored */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Deals & Approvals<span className="badge badge-soft-primary ms-2">{requests.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Deals & Approvals</li>
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
                    {userRole !== 'SALES_MANAGER' && (
                        <button className="btn btn-primary shadow" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_add">
                            <i className="ti ti-plus me-1"></i>New Request
                        </button>
                    )}
                    <button onClick={fetchRequests} className="btn btn-icon btn-outline-light shadow" title="Refresh">
                        <i className="ti ti-refresh"></i>
                    </button>
                    <a href="#" className="btn btn-icon btn-outline-light shadow" id="collapse-header"><i className="ti ti-transition-top"></i></a>
                </div>
            </div>

            {/* AI Panel Restored */}
            <div className="ai-embed mb-4" data-ai-embed>
                <div className="ai-embed-head border-bottom-0 pb-0">
                    <div className="d-flex align-items-center gap-2">
                        <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        <div>
                            <h6 className="mb-0 fs-14">AI Approval Intelligence</h6>
                            <span className="fs-12 text-muted">Risk assessed across open discount requests</span>
                        </div>
                    </div>
                </div>
                <div className="ai-embed-body pt-3" data-ai-embed-body>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-danger text-danger flex-shrink-0"><i className="ti ti-shield-half"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Requests at risk</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">2 requests &middot; Delayed</span>
                                    <span className="fs-12 text-muted">Pending manager review for 4+ days</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-info text-info flex-shrink-0"><i className="ti ti-heartbeat"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Avg. Approval Rate</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">78%</span>
                                    <span className="ai-meter is-info mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" style={{ width: '78%' }}></span></span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0"><i className="ti ti-percentage"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Avg. Negotiation Time</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">1.2 Days</span>
                                    <span className="ai-meter is-success mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" style={{ width: '85%' }}></span></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kanban Board */}
            {loading ? (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
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
                                                            <i className={`ti ti-circle-filled fs-10 text-${getStatusColor(status)} me-2`}></i>
                                                            {status}
                                                        </h6>
                                                        <span className="fw-medium text-muted fs-12">{requestsByStatus[status].length} Requests</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="kanban-drag-wrap">
                                            {requestsByStatus[status].map((req, index) => {
                                                const firstMessage = req.messages && req.messages.length > 0 ? req.messages[0] : null;
                                                return (
                                                    <Draggable key={req.id} draggableId={req.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div 
                                                                className={`card kanban-card border shadow-sm mb-3 ${snapshot.isDragging ? 'shadow-lg border-primary' : ''}`}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <div className="card-body">
                                                                    <div className={`card-topbar mb-3 pt-1 bg-${getStatusColor(status)}`}></div>
                                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                                        <span className={`badge badge-soft-${getStatusColor(status)} fs-10`}>{req.type || 'DISCOUNT'}</span>
                                                                        <span className="fs-12 text-muted">{timeAgo(req.createdAt)}</span>
                                                                    </div>
                                                                    
                                                                    <h6 className="fw-medium fs-15 mb-2">{firstMessage?.title || 'Approval Request'}</h6>
                                                                    <p className="text-muted fs-13 mb-3 text-truncate" style={{ maxWidth: '100%' }}>
                                                                        {firstMessage?.description || 'No description provided.'}
                                                                    </p>

                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="avatar avatar-sm rounded-circle bg-soft-info text-info me-2">
                                                                                {req.salesExec?.name?.charAt(0) || 'U'}
                                                                            </div>
                                                                            <span className="fs-13 fw-medium">{req.salesExec?.name || 'Agent'}</span>
                                                                        </div>
                                                                        {req.bookingId && (
                                                                            <span className="text-success fs-13 fw-medium">
                                                                                <i className="ti ti-link me-1"></i>Booking
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                            
                                            {requestsByStatus[status].length === 0 && !provided.placeholder && (
                                                <div className="text-center p-3 text-muted fs-12 border border-dashed rounded mt-2">
                                                    Drop requests here
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </DragDropContext>
            )}

            {/* Offcanvas Add Request */}
            <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_add">
                <div className="offcanvas-header border-bottom">
                    <h5 className="mb-0">New Approval Request</h5>
                    <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleCreateRequest}>
                        <div className="mb-3">
                            <label className="form-label">Request Title <span className="text-danger">*</span></label>
                            <input type="text" name="title" className="form-control" placeholder="e.g. 5% Discount for Unit A" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Type</label>
                            <select name="type" className="form-select">
                                <option value="DISCOUNT">Discount</option>
                                <option value="PAYMENT_PLAN">Payment Plan</option>
                                <option value="CANCELLATION">Cancellation</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description <span className="text-danger">*</span></label>
                            <textarea name="description" className="form-control" rows="4" placeholder="Explain why this approval is needed..." required></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Associated Booking (Optional)</label>
                            <select name="bookingId" className="form-select">
                                <option value="">Select a booking...</option>
                                {bookings.map(b => (
                                    <option key={b.id} value={b.id}>
                                        {b.customer?.firstName} {b.customer?.lastName} - Unit {b.unit?.unitNumber || 'N/A'}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                            <button type="submit" className="btn btn-primary">Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Deals;
