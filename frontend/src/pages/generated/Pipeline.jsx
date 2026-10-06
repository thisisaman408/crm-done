import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const Pipeline = () => {
    const [pipeline, setPipeline] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const fetchPipeline = async () => {
        try {
            setLoading(true);
            const res = await api.get('/api/leads');
            setPipeline(res.data?.data || res.data || []);
        } catch (err) {
            console.error("Failed to fetch pipeline", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPipeline();
    }, []);

    const handleExport = (type) => {
        alert(`Exporting pipeline as ${type}... (Feature coming soon)`);
    };

    return (<>
        <div className="content">
            {/* Page Header */}
            {!isCollapsed && (
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Active Deal Pipeline<span className="badge badge-soft-primary ms-2">{pipeline.length}</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pipeline</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-outline-light px-3 shadow-sm"
                                data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <ul>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleExport('PDF')}><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleExport('Excel')}><i className="ti ti-file-type-xls me-1"></i>Export as Excel</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={fetchPipeline} className="btn btn-icon btn-outline-light shadow-sm" title="Refresh">
                            <i className="ti ti-refresh"></i>
                        </button>
                        <button onClick={() => setIsCollapsed(true)} className="btn btn-icon btn-outline-light shadow-sm" title="Collapse Header">
                            <i className="ti ti-arrows-maximize"></i>
                        </button>
                    </div>
                </div>
            )}
            
            {isCollapsed && (
                <div className="mb-3 d-flex justify-content-end">
                    <button onClick={() => setIsCollapsed(false)} className="btn btn-sm btn-outline-light shadow-sm" title="Expand Header">
                        <i className="ti ti-arrows-minimize me-2"></i>Show Header
                    </button>
                </div>
            )}

            {/* Tabbed Pipeline Navigation */}
            <ul className="nav nav-pills mb-4 gap-2 border-bottom pb-3" style={{ borderColor: 'var(--bs-border-color)' }} id="pipeline-tab" role="tablist">
                {['NEW', 'CONTACTED', 'SITE_VISIT', 'NEGOTIATION', 'DEAL', 'WON', 'LOST'].map((status, index) => {
                    const statusColors = {
                        'NEW': 'info',
                        'CONTACTED': 'warning',
                        'SITE_VISIT': 'primary',
                        'NEGOTIATION': 'secondary',
                        'DEAL': 'success',
                        'WON': 'success',
                        'LOST': 'danger'
                    };
                    const color = statusColors[status] || 'primary';
                    const items = pipeline.filter(p => (p.status === status) || (status === 'NEW' && !p.status));
                    const formattedName = status.replace(/_/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
                    const isActive = index === 0;

                    return (
                        <li className="nav-item" role="presentation" key={status}>
                            <button 
                                className={`nav-link ${isActive ? 'active' : ''} d-flex align-items-center gap-2 rounded-pill px-4 py-2 border`}
                                style={{ 
                                    backgroundColor: isActive ? `var(--bs-${color})` : 'var(--bs-card-bg, #1a1c22)',
                                    color: isActive ? '#fff' : 'var(--bs-body-color)',
                                    borderColor: isActive ? `var(--bs-${color})` : 'var(--bs-border-color)'
                                }}
                                id={`pills-${status}-tab`} 
                                data-bs-toggle="pill" 
                                data-bs-target={`#pills-${status}`} 
                                type="button" 
                                role="tab" 
                                aria-controls={`pills-${status}`} 
                                aria-selected={isActive ? "true" : "false"}
                            >
                                <span className="fw-semibold">{formattedName}</span>
                                <span className={`badge rounded-pill ${isActive ? 'bg-white text-dark' : `bg-soft-${color} text-${color}`}`}>
                                    {items.length}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Tab Content (Expanded List) */}
            <div className="tab-content" id="pipeline-tabContent">
                {['NEW', 'CONTACTED', 'SITE_VISIT', 'NEGOTIATION', 'DEAL', 'WON', 'LOST'].map((status, index) => {
                    const statusColors = {
                        'NEW': 'info',
                        'CONTACTED': 'warning',
                        'SITE_VISIT': 'primary',
                        'NEGOTIATION': 'secondary',
                        'DEAL': 'success',
                        'WON': 'success',
                        'LOST': 'danger'
                    };
                    const color = statusColors[status] || 'primary';
                    const items = pipeline.filter(p => (p.status === status) || (status === 'NEW' && !p.status));
                    const isActive = index === 0;

                    return (
                        <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} id={`pills-${status}`} role="tabpanel" aria-labelledby={`pills-${status}-tab`} tabIndex="0" key={status}>
                            {loading ? (
                                <div className="text-center p-5">
                                    <div className="spinner-border text-primary" role="status"></div>
                                </div>
                            ) : items.length === 0 ? (
                                <div className="text-center p-5 rounded-4" style={{ backgroundColor: 'var(--bs-card-bg, #1a1c22)', border: '1px dashed var(--bs-border-color)' }}>
                                    <i className={`ti ti-folder-off fs-1 mb-3 text-muted opacity-50`}></i>
                                    <h5 className="text-muted fw-normal">No leads found in this stage.</h5>
                                    <p className="text-muted fs-13">Move leads here from other stages to see them.</p>
                                </div>
                            ) : (
                                <div className="row g-4">
                                    {items.map(deal => (
                                        <div className="col-xl-3 col-lg-4 col-md-6" key={deal.id}>
                                            <div className={`card h-100 shadow-sm border border-${color} border-opacity-25 rounded-4 overflow-hidden position-relative`} style={{ transition: 'all 0.3s ease', cursor: 'pointer', backgroundColor: 'var(--bs-card-bg, #1a1c22)' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                                {/* Top Accent Line */}
                                                <div className={`bg-${color}`} style={{ height: '4px', width: '100%', position: 'absolute', top: 0, left: 0 }}></div>
                                                
                                                <div className="card-body p-4 pt-4 mt-2">
                                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                                        <h5 className="fs-16 mb-0 fw-bold text-truncate pe-2">{deal.firstName} {deal.lastName || ''}</h5>
                                                    </div>
                                                    <div className="mb-4">
                                                        <p className="text-muted fs-13 mb-2 d-flex align-items-center text-truncate" title={deal.email}>
                                                            <i className="ti ti-mail text-primary me-2 fs-15"></i>
                                                            {deal.email || 'No email'}
                                                        </p>
                                                        <p className="text-muted fs-13 mb-0 d-flex align-items-center">
                                                            <i className="ti ti-calendar text-primary me-2 fs-15"></i>
                                                            {deal.createdAt ? new Date(deal.createdAt).toLocaleDateString() : 'N/A'}
                                                        </p>
                                                    </div>
                                                    <div className="p-3 rounded-3 mt-auto d-flex align-items-center justify-content-between" style={{ backgroundColor: 'var(--bs-body-bg, #0f1014)' }}>
                                                        <span className="fs-12 text-muted fw-medium">Budget</span>
                                                        <span className="fs-15 fw-bold text-success">
                                                            ₹{deal.budget?.toLocaleString('en-IN') || 0}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    </>);
};

export default Pipeline;
