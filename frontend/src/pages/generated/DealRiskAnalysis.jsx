import React from 'react';

const DealRiskAnalysis = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from deal-risk-analysis.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">Deal Risk Analysis</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Deal Risk Analysis</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <select className="form-select w-auto" aria-label="Period">
                            <option selected>This Quarter (Q3 2026)</option>
                            <option>Next Quarter (Q4 2026)</option>
                            <option>All open deals</option>
                        </select>
                        <a href="/deals" className="btn btn-outline-light shadow">
                            <i className="ti ti-briefcase me-1"></i>All deals
                        </a>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* AI Section Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto">
                    <li className="nav-item"><a href="/ai-command-center" className="nav-link text-nowrap"><i className="ti ti-sparkles me-1"></i>Command Center</a></li>
                    <li className="nav-item"><a href="/ai-insights" className="nav-link text-nowrap"><i className="ti ti-bulb me-1"></i>Insights</a></li>
                    <li className="nav-item"><a href="/ai-lead-scoring" className="nav-link text-nowrap"><i className="ti ti-target-arrow me-1"></i>Lead Scoring</a></li>
                    <li className="nav-item"><a href="/deal-risk-analysis" className="nav-link text-nowrap active"><i className="ti ti-shield-half me-1"></i>Deal Risk</a></li>
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-risk>

                    {/* Risk summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-critical">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-danger text-danger"><i
                                            className="ti ti-alert-hexagon"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">1</div>
                                        <span className="fs-12 text-muted">High risk &middot; $48K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-high">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-warning text-warning"><i
                                            className="ti ti-alert-triangle"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">2</div>
                                        <span className="fs-12 text-muted">Medium risk &middot; $136K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-opportunity">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-success text-success"><i
                                            className="ti ti-shield-check"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">2</div>
                                        <span className="fs-12 text-muted">Low risk &middot; $224K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-medium">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-info text-info"><i
                                            className="ti ti-heartbeat"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">63</div>
                                        <span className="fs-12 text-muted">Avg. deal health</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Risk summary */}

                    <div className="row g-3">
                        {/* Deal list */}
                        <div className="col-xl-4">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <h6 className="mb-0">Deals by risk</h6>
                                        <span className="badge bg-light text-dark" data-risk-count></span>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 flex-wrap">
                                        <button type="button" className="btn btn-sm btn-outline-light shadow active"
                                            data-risk-filter="all">All</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-risk-filter="high">High</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-risk-filter="medium">Medium</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-risk-filter="low">Low</button>
                                    </div>
                                </div>
                                <div className="card-body" data-risk-list></div>
                            </div>
                        </div>

                        {/* Detail */}
                        <div className="col-xl-8" data-risk-detail></div>
                    </div>

                </div>
        </div>
    );
};

export default DealRiskAnalysis;
