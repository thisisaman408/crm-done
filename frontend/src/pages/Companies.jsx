import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addLoading, setAddLoading] = useState(false);

    const fetchCompanies = async () => {
        try {
            setLoading(true);
            const res = await api.get('/api/brokers');
            const data = res.data?.brokers || res.data?.data || res.data || [];
            setCompanies(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Failed to fetch brokers/companies", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    const handleAddCompany = async (e) => {
        e.preventDefault();
        setAddLoading(true);
        const formData = new FormData(e.target);
        const body = {
            companyName: formData.get('companyName'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            reraNumber: formData.get('reraNumber'),
        };

        try {
            await api.post('/api/brokers', body);
            e.target.reset();
            fetchCompanies();
            // Close offcanvas
            try {
                const offcanvasEl = document.getElementById('offcanvas_add');
                if (offcanvasEl && window.bootstrap) {
                    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl) || new window.bootstrap.Offcanvas(offcanvasEl);
                    bsOffcanvas.hide();
                } else {
                    document.querySelector('#offcanvas_add .btn-close')?.click();
                }
            } catch (closeErr) {
                document.querySelector('#offcanvas_add .btn-close')?.click();
            }
        } catch (err) {
            console.error("Failed to add broker", err);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setAddLoading(false);
        }
    };

    const activeCount = companies.filter(c => c.isActive !== false).length;
    const inactiveCount = companies.length - activeCount;

    return (
        <div className="content">
            {/* Page Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">Companies<span className="badge badge-soft-primary ms-2">{companies.length}</span></h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Companies</li>
                        </ol>
                    </nav>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                            data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <ul>
                                <li><a href="#" className="dropdown-item"><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</a></li>
                                <li><a href="#" className="dropdown-item"><i className="ti ti-file-type-xls me-1"></i>Export as Excel</a></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={fetchCompanies} className="btn btn-icon btn-outline-light shadow" title="Refresh">
                        <i className="ti ti-refresh"></i>
                    </button>
                    <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                        Company</a>
                </div>
            </div>

            {/* AI Panel */}
            <div className="ai-embed mb-4" data-ai-embed>
                <div className="ai-embed-head border-bottom-0 pb-0">
                    <div className="d-flex align-items-center gap-2">
                        <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        <div>
                            <h6 className="mb-0 fs-14">AI account intelligence</h6>
                            <span className="fs-12 text-muted">Across {companies.length} broker accounts</span>
                        </div>
                    </div>
                </div>
                <div className="ai-embed-body pt-3" data-ai-embed-body>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0"><i className="ti ti-heartbeat"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Active accounts</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">{activeCount} Active</span>
                                    <span className="ai-meter is-success mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" style={{ width: companies.length > 0 ? `${(activeCount / companies.length * 100)}%` : '0%' }}></span></span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-info text-info flex-shrink-0"><i className="ti ti-building-community"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Total broker companies</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">{companies.length} registered</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-start gap-2">
                                <span className="ai-insight-icon bg-soft-danger text-danger flex-shrink-0"><i className="ti ti-alert-triangle"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <span className="fs-12 text-muted d-block">Inactive accounts</span>
                                    <span className="fs-15 fw-semibold text-dark d-block">{inactiveCount} inactive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Grid */}
            {loading ? (
                <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : companies.length === 0 ? (
                <div className="text-center p-5 bg-white rounded shadow-sm">
                    <h5 className="text-muted">No companies found</h5>
                    <p className="text-muted mb-0">Add broker companies to see them here.</p>
                </div>
            ) : (
                <div className="row">
                    {companies.map((company, idx) => (
                        <div className="col-xxl-3 col-xl-4 col-md-6" key={company.id || idx}>
                            <div className="card border shadow">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-md flex-shrink-0 me-2 bg-success rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                                                {(company.companyName?.[0] || company.name?.[0] || 'B').toUpperCase()}
                                            </div>
                                            <div>
                                                <h6 className="fs-14 fw-medium mb-1">{company.companyName || company.name || 'Unnamed'}</h6>
                                                <p className="text-muted mb-0 fs-12">{company.brokerCode || 'No code'}</p>
                                            </div>
                                        </div>
                                        <div className="dropdown table-action">
                                            <a href="#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="ti ti-eye text-blue-light"></i> View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block mt-3">
                                        <div className="d-flex flex-column gap-2">
                                            <p className="text-default d-inline-flex align-items-center mb-0">
                                                <i className="ti ti-user text-dark me-2"></i>{company.name || 'N/A'}
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-0">
                                                <i className="ti ti-phone text-dark me-2"></i>{company.phone || 'N/A'}
                                            </p>
                                            {company.email && (
                                                <p className="text-default d-inline-flex align-items-center mb-0 text-truncate">
                                                    <i className="ti ti-mail text-dark me-2"></i>{company.email}
                                                </p>
                                            )}
                                            {company.reraNumber && (
                                                <p className="text-default d-inline-flex align-items-center mb-0">
                                                    <i className="ti ti-certificate text-dark me-2"></i>RERA: {company.reraNumber}
                                                </p>
                                            )}
                                        </div>
                                        <div className="d-flex align-items-center mt-3 pt-3 border-top">
                                            <span className={`badge badge-tag ${company.isActive !== false ? 'badge-soft-success' : 'badge-soft-danger'} me-2`}>
                                                {company.isActive !== false ? 'Active' : 'Inactive'}
                                            </span>
                                            {company.sourcingManager && (
                                                <span className="badge badge-tag badge-soft-info" title="Sourcing Manager">
                                                    <i className="ti ti-user-shield me-1"></i>
                                                    {company.sourcingManager.name || company.sourcingManager.username}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Company Offcanvas */}
            <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_add">
                <div className="offcanvas-header border-bottom">
                    <h5 className="mb-0">Add New Company (Broker)</h5>
                    <button type="button" className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleAddCompany}>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Company Name <span className="text-danger">*</span></label>
                                <input type="text" name="companyName" className="form-control" placeholder="e.g. ABC Realty" required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Contact Person Name <span className="text-danger">*</span></label>
                                <input type="text" name="name" className="form-control" placeholder="e.g. Rajesh Sharma" required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Phone <span className="text-danger">*</span></label>
                                <input type="tel" name="phone" className="form-control" placeholder="e.g. +91 98765 43210" required />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="e.g. rajesh@abcrealty.com" />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">RERA Number</label>
                                <input type="text" name="reraNumber" className="form-control" placeholder="e.g. RERA/2024/000123" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end mt-4">
                            <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={addLoading}>
                                {addLoading ? 'Adding...' : 'Add Company'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Companies;
