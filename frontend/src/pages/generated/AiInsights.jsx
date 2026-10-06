import React from 'react';

const AiInsights = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ai-insights.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">AI Insights</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">AI Insights</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-insight-reset>
                            <i className="ti ti-filter-off me-1"></i>Reset filters
                        </button>
                        <div className="dropdown">
                            <a href="#" className="btn btn-outline-light shadow dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ti ti-file-export me-1"></i>Export
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li><a href="#" className="dropdown-item"><i
                                            className="ti ti-file-type-pdf me-1"></i>Export as PDF</a></li>
                                <li><a href="#" className="dropdown-item"><i
                                            className="ti ti-file-type-xls me-1"></i>Export as Excel</a></li>
                            </ul>
                        </div>
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
                    <li className="nav-item"><a href="/ai-insights" className="nav-link text-nowrap active"><i className="ti ti-bulb me-1"></i>Insights</a></li>
                    <li className="nav-item"><a href="/ai-lead-scoring" className="nav-link text-nowrap"><i className="ti ti-target-arrow me-1"></i>Lead Scoring</a></li>
                    <li className="nav-item"><a href="/deal-risk-analysis" className="nav-link text-nowrap"><i className="ti ti-shield-half me-1"></i>Deal Risk</a></li>
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-insights>

                    {/* Severity summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-critical">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-danger text-danger"><i
                                            className="ti ti-alert-hexagon"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">2</div>
                                        <span className="fs-12 text-muted">Critical</span>
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
                                        <span className="fs-12 text-muted">High priority</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-medium">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-info text-info"><i
                                            className="ti ti-info-circle"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">2</div>
                                        <span className="fs-12 text-muted">Medium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="ai-insight is-opportunity">
                                <div className="ai-insight-head mb-0">
                                    <span className="ai-insight-icon bg-soft-success text-success"><i
                                            className="ti ti-trending-up"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">3</div>
                                        <span className="fs-12 text-muted">Opportunities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Severity summary */}

                    {/* Filters */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
                                <button type="button" className="ai-suggestion active" data-cat-pill="all">All
                                    categories</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="revenue"><i
                                        className="ti ti-coin"></i>Revenue</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="lead"><i
                                        className="ti ti-target-arrow"></i>Leads</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="deal"><i
                                        className="ti ti-briefcase"></i>Deals</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="customer"><i
                                        className="ti ti-users"></i>Customers</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="performance"><i
                                        className="ti ti-chart-bar"></i>Performance</button>
                                <button type="button" className="ai-suggestion" data-cat-pill="risk"><i
                                        className="ti ti-alert-hexagon"></i>Risk</button>
                            </div>

                            <div className="row g-2 align-items-end">
                                <div className="col-lg-4 col-md-6">
                                    <label className="form-label" htmlFor="insight_search">Search insights</label>
                                    <div className="input-icon position-relative">
                                        <input type="text" className="form-control" id="insight_search"
                                            placeholder="Search by keyword..." data-insight-search />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="insight_category">Category</label>
                                    <select className="form-select" id="insight_category" data-filter="category">
                                        <option value="all" selected>All</option>
                                        <option value="revenue">Revenue</option>
                                        <option value="lead">Leads</option>
                                        <option value="deal">Deals</option>
                                        <option value="customer">Customers</option>
                                        <option value="performance">Performance</option>
                                        <option value="risk">Risk</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="insight_severity">Severity</label>
                                    <select className="form-select" id="insight_severity" data-filter="severity">
                                        <option value="all" selected>All</option>
                                        <option value="critical">Critical</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="opportunity">Opportunity</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="insight_period">Date range</label>
                                    <select className="form-select" id="insight_period" data-filter="period">
                                        <option value="all" selected>All time</option>
                                        <option value="1">Last 24 hours</option>
                                        <option value="3">Last 3 days</option>
                                        <option value="7">Last 7 days</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <span className="badge bg-light text-dark w-100 py-2" data-insight-count>9
                                        insights</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Filters */}

                    {/* Loading state */}
                    <div className="card d-none" data-insight-loading>
                        <div className="card-body text-center py-5">
                            <span className="ai-thinking"><span className="ai-thinking-dots"><span></span><span></span><span></span></span>
                                Re-ranking insights...</span>
                        </div>
                    </div>

                    {/* Insight grid */}
                    <div className="row g-3" data-insight-grid></div>

                    {/* Empty state */}
                    <div className="card d-none" data-insight-empty>
                        <div className="card-body">
                            <div className="ai-empty">
                                <span className="ai-empty-icon"><i className="ti ti-mood-search"></i></span>
                                <h6>No insights match these filters</h6>
                                <p>Try widening the date range or clearing the category filter.</p>
                                <button type="button" className="btn btn-outline-light shadow btn-sm mt-3"
                                    data-insight-reset>
                                    <i className="ti ti-filter-off me-1"></i>Reset filters
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default AiInsights;
