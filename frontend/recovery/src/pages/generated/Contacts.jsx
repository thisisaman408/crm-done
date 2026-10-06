import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const Contacts = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                setLoading(true);
                const res = await api.get('/api/leads');
                const data = res.data?.data || res.data || [];
                setLeads(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch leads for contacts page", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

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
                                            <a className="dropdown-item" href="/leads"><i className="ti ti-eye text-blue-light"></i> View Lead</a>
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
                </div>
            )}
        </div>
    );
};

export default Contacts;
