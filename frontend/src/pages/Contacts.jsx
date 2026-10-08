import React, { useState, useEffect } from 'react';
import api from '../lib/api';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const navigate = useNavigate();
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Add/Edit Modal State
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        source: 'Direct Source'
    });

    const fetchLeads = async () => {
        try {
            setLoading(true);
            const res = await api.get('/api/leads');
            const data = res.data?.data || res.data || [];
            setLeads(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to fetch leads", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const openAddModal = () => {
        setIsEditing(false);
        setEditingId(null);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', source: 'Direct Source' });
        setShowModal(true);
    };

    const openEditModal = (lead) => {
        setIsEditing(true);
        setEditingId(lead.id);
        setFormData({
            firstName: lead.firstName || '',
            lastName: lead.lastName || '',
            phone: lead.phone || '',
            email: lead.email || '',
            source: lead.source || 'Direct Source'
        });
        setShowModal(true);
    };

    const handleDelete = async (id, name) => {
        if (confirm(`Are you sure you want to delete ${name}? This cannot be undone.`)) {
            try {
                await api.delete(`/api/leads/${id}`);
                fetchLeads();
            } catch (err) {
                console.error("Failed to delete", err);
                alert("Failed to delete: " + (err.response?.data?.message || err.message));
            }
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (isEditing) {
                await api.patch(`/api/leads/${editingId}`, formData);
            } else {
                await api.post('/api/leads', formData);
            }
            setShowModal(false);
            fetchLeads();
        } catch (err) {
            console.error("Failed to save", err);
            alert("Failed to save: " + (err.response?.data?.message || err.message));
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="content d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="content">
            {/* Page Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Contacts<span className="badge badge-soft-primary ms-2">{leads.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contacts</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <button className="btn btn-primary shadow-sm" onClick={openAddModal}>
                        <i className="ti ti-plus me-1"></i>Add Contact
                    </button>
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                            data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <ul>
                                <li>
                                    <a href="#" className="dropdown-item"><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item"><i className="ti ti-file-type-xls me-1"></i>Export as Excel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Header */}

            <div className="row">
                {leads.map(lead => (
                    <div className="col-xxl-3 col-xl-4 col-md-6" key={lead.id}>
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-md flex-shrink-0 me-2 bg-primary rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                                            {(lead.firstName?.[0] || 'U').toUpperCase()}
                                        </div>
                                        <div>
                                            <h6 className="fs-14"><a href={`/leads`} className="fw-medium">
                                                {lead.firstName} {lead.lastName || ''}
                                            </a></h6>
                                            <p className="text-default mb-0">{lead.source || 'Direct Source'}</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" onClick={() => navigate(`/clients/${lead.id}`)}><i className="ti ti-eye text-blue-light me-1"></i> View Profile</button>
                                            <button className="dropdown-item" onClick={() => openEditModal(lead)}><i className="ti ti-edit text-warning me-1"></i> Edit Details</button>
                                            <div className="dropdown-divider"></div>
                                            <button className="dropdown-item text-danger" onClick={() => handleDelete(lead.id, lead.firstName)}><i className="ti ti-trash me-1"></i> Delete Contact</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex flex-column">
                                        <p className="text-default d-inline-flex align-items-center mb-2">
                                            <i className="ti ti-mail text-dark me-1"></i>{lead.email || 'No email provided'}
                                        </p>
                                        <p className="text-default d-inline-flex align-items-center mb-2">
                                            <i className="ti ti-phone text-dark me-1"></i>{lead.phone || 'No phone provided'}
                                        </p>
                                        <p className="text-default d-inline-flex align-items-center">
                                            <i className="ti ti-map-pin-pin text-dark me-1"></i>{lead.preferredLocation || 'Location unspecified'}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <span className={`badge badge-tag me-2 ${
                                            lead.status === 'NEW' ? 'badge-soft-info' : 
                                            lead.status === 'CONTACTED' ? 'badge-soft-warning' : 
                                            'badge-soft-success'
                                        }`}>
                                            {lead.status}
                                        </span>
                                        {lead.budget && (
                                            <span className="badge badge-tag badge-soft-primary">
                                                Budget: {lead.budget.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {leads.length === 0 && (
                <div className="text-center p-5 bg-white rounded shadow-sm">
                    <h5 className="text-muted">No contacts found</h5>
                    <p className="text-muted mb-0">Start adding leads to see them appear here.</p>
                    <button className="btn btn-primary mt-3" onClick={openAddModal}><i className="ti ti-plus me-1"></i>Add First Contact</button>
                </div>
            )}

            {/* Add/Edit Modal */}
            {showModal && (
                <>
                    <div className="modal-backdrop fade show"></div>
                    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                                <form onSubmit={handleSave}>
                                    <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
                                        <h5 className="modal-title fs-18 fw-bold">{isEditing ? 'Edit Contact' : 'Add New Contact'}</h5>
                                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                    </div>
                                    <div className="modal-body px-4 py-4">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label fw-medium text-dark">First Name <span className="text-danger">*</span></label>
                                                <input required type="text" className="form-control" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-medium text-dark">Last Name</label>
                                                <input type="text" className="form-control" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-medium text-dark">Phone <span className="text-danger">*</span></label>
                                                <input required type="text" className="form-control" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-medium text-dark">Email</label>
                                                <input type="email" className="form-control" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 pt-0 px-4 pb-4">
                                        <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                                        <button type="submit" className="btn btn-primary rounded-pill px-4" disabled={saving}>
                                            {saving ? 'Saving...' : isEditing ? 'Save Changes' : 'Create Contact'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Contacts;
