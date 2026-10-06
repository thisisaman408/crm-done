import React, { useState, useEffect } from 'react';
import api from '../lib/api';

const RelationshipMap = () => {
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/brokers').then(res => {
            const list = res.data?.data || [];
            if(list.length > 0) {
                setAccount(list[0]);
            }
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="p-5 text-center">Loading Relationship Map...</div>;
    if (!account) return <div className="p-5 text-center">No accounts found.</div>;

    return (
<div className="content">

                
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Relationship Map</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="companies.html">Companies</a></li>
                                <li className="breadcrumb-item"><a href="account-360.html">Halcyon Partners</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Relationship Map</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="account-360.html" className="btn btn-outline-light shadow">
                            <i className="ti ti-layout-dashboard me-1"></i>Account 360
                        </a>
                        <a href="contacts.html" className="btn btn-outline-light shadow">
                            <i className="ti ti-users me-1"></i>All Contacts
                        </a>
                        <a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                

                <div data-relmap>

                    
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row g-2 align-items-end">
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_role">Contact role</label>
                                    <select className="form-select" id="rel_role" data-relmap-filter="role">
                                        <option value="all" selected>All roles</option>
                                        <option>Decision Maker</option>
                                        <option>Champion</option>
                                        <option>Influencer</option>
                                        <option>User</option>
                                        <option>Finance</option>
                                        <option>Technical Contact</option>
                                        <option>Executive Sponsor</option>
                                        <option>Blocker</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_dept">Department</label>
                                    <select className="form-select" id="rel_dept" data-relmap-filter="dept">
                                        <option value="all" selected>All departments</option>
                                        <option>Finance</option>
                                        <option>Technology</option>
                                        <option>Operations</option>
                                        <option>Executive</option>
                                        <option>Enterprise Sales</option>
                                        <option>Delivery</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_strength">Strength</label>
                                    <select className="form-select" id="rel_strength" data-relmap-filter="strength">
                                        <option value="all" selected>All strengths</option>
                                        <option value="strong">Strong</option>
                                        <option value="good">Good</option>
                                        <option value="neutral">Neutral</option>
                                        <option value="weak">Weak</option>
                                        <option value="risk">At Risk</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_deal">Deal</label>
                                    <select className="form-select" id="rel_deal" data-relmap-filter="deal">
                                        <option value="all" selected>All deals</option>
                                        <option>Halcyon Partners - Pilot</option>
                                        <option>Halcyon - Support Renewal</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_owner">Account owner</label>
                                    <select className="form-select" id="rel_owner" data-relmap-filter="owner">
                                        <option value="all" selected>All owners</option>
                                        <option>Tomas Lindqvist</option>
                                        <option>Adrian Herrera</option>
                                        <option>Ellis Vandermeer</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="rel_status">Status</label>
                                    <select className="form-select" id="rel_status" data-relmap-filter="status">
                                        <option value="all" selected>Active &amp; inactive</option>
                                        <option value="active">Active only</option>
                                        <option value="inactive">Inactive only</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-2 mt-3 flex-wrap">
                                <span className="badge bg-light text-dark" data-relmap-count></span>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-relmap-reset><i className="ti ti-filter-off me-1"></i>Reset filters</button>
                            </div>
                        </div>
                    </div>
                    

                    <div className="row g-3">
                        
                        <div className="col-xxl-9">
                            <div className="card mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <h6 className="mb-0">Halcyon Partners &middot; Relationship Graph</h6>
                                        <p className="text-muted fs-12 mb-0">Select any node to inspect the relationship
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-1">
                                        <button type="button" className="btn btn-sm btn-outline-light shadow active"
                                            data-relmap-view="graph"><i className="ti ti-affiliate me-1"></i>Graph</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-relmap-view="hierarchy"><i
                                                className="ti ti-sitemap me-1"></i>Hierarchy</button>
                                    </div>
                                </div>
                                <div className="card-body">

                                    
                                    <div data-relmap-pane="graph">
                                        <div className="relmap" data-relmap-canvas>
                                            <svg className="relmap-links" data-relmap-links
                                                preserveAspectRatio="none"></svg>
                                            <div className="relmap-center">
                                                <span className="avatar avatar-md rounded bg-soft-primary text-primary">
                                                    <i className="ti ti-building fs-20"></i>
                                                </span>
                                                <h6 className="mb-0 fs-14">Halcyon Partners</h6>
                                                <span className="fs-11 text-muted">Financial Services &middot; 640
                                                    staff</span>
                                                <span className="badge bg-soft-success text-success">Health 82</span>
                                            </div>
                                        </div>

                                        <div className="d-none mt-3" data-relmap-empty>
                                            <div className="ai-empty">
                                                <span className="ai-empty-icon"><i className="ti ti-affiliate"></i></span>
                                                <h6>No relationships match these filters</h6>
                                                <p>Try clearing a filter to bring nodes back onto the map.</p>
                                            </div>
                                        </div>

                                        <ul className="relmap-legend mt-3">
                                            <li><span className="relmap-legend-rail"
                                                    style={{ backgroundColor: "var(--primary)" }}></span>Contact</li>
                                            <li><span className="relmap-legend-rail"
                                                    style={{ backgroundColor: "var(--success)" }}></span>Deal</li>
                                            <li><span className="relmap-legend-rail"
                                                    style={{ backgroundColor: "var(--purple)" }}></span>Account owner</li>
                                            <li><span className="relmap-legend-rail"
                                                    style={{ backgroundColor: "var(--info)" }}></span>Project</li>
                                            <li><span className="relmap-legend-rail"
                                                    style={{ backgroundColor: "var(--warning)" }}></span>Related company
                                            </li>
                                            <li className="ms-auto"><span className="rel-strength is-strong">Strong</span></li>
                                            <li><span className="rel-strength is-good">Good</span></li>
                                            <li><span className="rel-strength is-neutral">Neutral</span></li>
                                            <li><span className="rel-strength is-weak">Weak</span></li>
                                            <li><span className="rel-strength is-risk">At Risk</span></li>
                                        </ul>
                                    </div>

                                    
                                    <div className="d-none" data-relmap-pane="hierarchy">
                                        <ul className="relmap-tree">
                                            <li>
                                                <div className="relmap-tree-item">
                                                    <span
                                                        className="avatar avatar-sm rounded bg-soft-warning text-warning flex-shrink-0">
                                                        <i className="ti ti-building-bank"></i></span>
                                                    <div className="flex-grow-1 min-w-0">
                                                        <a href="company-details.html"
                                                            className="fw-medium text-dark d-block">Halcyon Group
                                                            Holdings</a>
                                                        <span className="fs-12 text-muted">Parent company &middot; 2,400
                                                            employees &middot; New York</span>
                                                    </div>
                                                    <span className="badge bg-soft-secondary text-secondary">Parent</span>
                                                </div>

                                                <ul>
                                                    <li>
                                                        <div className="relmap-tree-item is-current">
                                                            <span
                                                                className="avatar avatar-sm rounded bg-soft-primary text-primary flex-shrink-0">
                                                                <i className="ti ti-building"></i></span>
                                                            <div className="flex-grow-1 min-w-0">
                                                                <a href="account-360.html"
                                                                    className="fw-medium text-dark d-block">Halcyon
                                                                    Partners</a>
                                                                <span className="fs-12 text-muted">Current account
                                                                    &middot; 640 employees &middot; Chicago</span>
                                                            </div>
                                                            <span
                                                                className="badge bg-soft-primary text-primary">Current</span>
                                                        </div>

                                                        <ul>
                                                            <li>
                                                                <div className="relmap-tree-item">
                                                                    <span
                                                                        className="avatar avatar-sm rounded bg-soft-info text-info flex-shrink-0">
                                                                        <i className="ti ti-building-store"></i></span>
                                                                    <div className="flex-grow-1 min-w-0">
                                                                        <a href="company-details.html"
                                                                            className="fw-medium text-dark d-block">Halcyon
                                                                            Nordics AB</a>
                                                                        <span className="fs-12 text-muted">Subsidiary
                                                                            &middot; 48 employees &middot;
                                                                            Stockholm</span>
                                                                    </div>
                                                                    <span
                                                                        className="badge bg-soft-info text-info">Subsidiary</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="relmap-tree-item">
                                                                    <span
                                                                        className="avatar avatar-sm rounded bg-soft-info text-info flex-shrink-0">
                                                                        <i className="ti ti-building-store"></i></span>
                                                                    <div className="flex-grow-1 min-w-0">
                                                                        <a href="company-details.html"
                                                                            className="fw-medium text-dark d-block">Halcyon
                                                                            Advisory LLC</a>
                                                                        <span className="fs-12 text-muted">Subsidiary
                                                                            &middot; 112 employees &middot;
                                                                            Boston</span>
                                                                    </div>
                                                                    <span
                                                                        className="badge bg-soft-info text-info">Subsidiary</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="relmap-tree-item">
                                                                    <span
                                                                        className="avatar avatar-sm rounded bg-soft-secondary text-secondary flex-shrink-0">
                                                                        <i className="ti ti-map-pin"></i></span>
                                                                    <div className="flex-grow-1 min-w-0">
                                                                        <a href="company-details.html"
                                                                            className="fw-medium text-dark d-block">Halcyon
                                                                            Partners &mdash; London Branch</a>
                                                                        <span className="fs-12 text-muted">Branch &middot;
                                                                            64 employees &middot; London</span>
                                                                    </div>
                                                                    <span
                                                                        className="badge bg-soft-secondary text-secondary">Branch</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <div className="relmap-tree-item">
                                                            <span
                                                                className="avatar avatar-sm rounded bg-soft-secondary text-secondary flex-shrink-0">
                                                                <i className="ti ti-building"></i></span>
                                                            <div className="flex-grow-1 min-w-0">
                                                                <a href="company-details.html"
                                                                    className="fw-medium text-dark d-block">Meridian
                                                                    Health</a>
                                                                <span className="fs-12 text-muted">Related company
                                                                    &middot; shared board member</span>
                                                            </div>
                                                            <span
                                                                className="badge bg-soft-secondary text-secondary">Related</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        
                        <div className="col-xxl-3">
                            
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-0">Relationship Details</h6>
                                </div>
                                <div className="card-body" data-relmap-panel>
                                    <div className="ai-empty py-4">
                                        <span className="ai-empty-icon"><i className="ti ti-hand-click"></i></span>
                                        <h6>Select a node</h6>
                                        <p>Choose any node on the map to see the full relationship.</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="card mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                                        <h6 className="mb-0">Relationship Insights</h6>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="ai-signals mb-3">
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-thumb-up"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Strongest relationship</span>
                                                <span className="fs-13 fw-medium text-dark">Ellis Vandermeer &middot;
                                                    CFO</span>
                                            </div>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-danger text-danger"><i
                                                    className="ti ti-thumb-down"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Weakest relationship</span>
                                                <span className="fs-13 fw-medium text-dark">Nadia Okonkwo &middot; Group
                                                    COO</span>
                                            </div>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-crown"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Key decision maker</span>
                                                <span className="fs-13 fw-medium text-dark">Ellis Vandermeer &middot;
                                                    engaged</span>
                                            </div>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-warning text-warning"><i
                                                    className="ti ti-user-question"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Missing stakeholder</span>
                                                <span className="fs-13 fw-medium text-dark">No Legal contact
                                                    mapped</span>
                                                <span className="fs-12 text-muted">Contracts stall 2.4x more often without
                                                    one</span>
                                            </div>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-clock"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Last interaction</span>
                                                <span className="fs-13 fw-medium text-dark">6 hours ago &middot; Ellis
                                                    Vandermeer</span>
                                            </div>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-danger text-danger"><i
                                                    className="ti ti-calendar-off"></i></span>
                                            <div className="flex-grow-1">
                                                <span className="fs-12 text-muted d-block">Longest silence</span>
                                                <span className="fs-13 fw-medium text-dark">34 days &middot; Nadia
                                                    Okonkwo</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <h6 className="fs-13 mb-2">Relationship risk</h6>
                                    <div className="d-flex align-items-center justify-content-between fs-13 mb-1">
                                        <span className="text-muted">Coverage of the buying committee</span>
                                        <span className="fw-medium text-dark">72%</span>
                                    </div>
                                    <span className="ai-meter is-warning mb-3"><span className="ai-meter-track"><span
                                                className="ai-meter-fill" style={{ width: "72%" }}></span></span></span>
                                    <p className="fs-12 text-muted">Two of seven stakeholders are weak or at risk, and the
                                        executive sponsor has not been contacted in over a month.</p>

                                    <div className="ai-action mb-0">
                                        <span className="ai-action-icon bg-soft-primary text-primary"><i
                                                className="ti ti-player-track-next"></i></span>
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Recommended action</h6>
                                            <p className="ai-action-meta">Ask the champion to re-introduce the executive
                                                sponsor before contract stage</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2 mt-3 flex-wrap">
                                        <a href="ai-email-composer.html" className="btn btn-primary btn-sm flex-grow-1">
                                            <i className="ti ti-mail-star me-1"></i>Draft intro request</a>
                                        <a href="activities.html" className="btn btn-outline-light shadow btn-sm flex-grow-1">
                                            <i className="ti ti-checklist me-1"></i>Log activity</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    );
};

export default RelationshipMap;
