import React from 'react';

const AiLeadScoring = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ai-lead-scoring.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">AI Lead Scoring</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">AI Lead Scoring</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/leads" className="btn btn-outline-light shadow">
                            <i className="ti ti-users me-1"></i>All leads
                        </a>
                        <a href="/ai-settings" className="btn btn-outline-light shadow">
                            <i className="ti ti-adjustments-bolt me-1"></i>Scoring model
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
                    <li className="nav-item"><a href="/ai-lead-scoring" className="nav-link text-nowrap active"><i className="ti ti-target-arrow me-1"></i>Lead Scoring</a></li>
                    <li className="nav-item"><a href="/deal-risk-analysis" className="nav-link text-nowrap"><i className="ti ti-shield-half me-1"></i>Deal Risk</a></li>
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-scoring>

                    {/* Summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-danger text-danger flex-shrink-0">
                                        <i className="ti ti-flame fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">3</div>
                                        <span className="fs-12 text-muted">Hot leads (75+)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-warning text-warning flex-shrink-0">
                                        <i className="ti ti-temperature fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">2</div>
                                        <span className="fs-12 text-muted">Warm leads (45-74)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-info text-info flex-shrink-0">
                                        <i className="ti ti-snowflake fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">1</div>
                                        <span className="fs-12 text-muted">Cold leads (&lt;45)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-primary text-primary flex-shrink-0">
                                        <i className="ti ti-percentage fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">55%</div>
                                        <span className="fs-12 text-muted">Avg. conversion probability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Summary */}

                    {/* Model note */}
                    <div className="ai-insight is-medium mb-3">
                        <div className="d-flex align-items-start gap-2 flex-wrap">
                            <span className="ai-chip flex-shrink-0"><i className="ti ti-sparkles"></i>Model</span>
                            <p className="mb-0 fs-13">Scores are generated from engagement behaviour, firmographic fit and
                                historical conversion patterns across your last 340 leads. Every score below can be
                                opened to see exactly which factors contributed and by how much.</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="card mb-0">
                        <div className="card-header">
                            <div className="row g-2 align-items-end">
                                <div className="col-xxl-3 col-xl-4 col-md-4">
                                    <label className="form-label" htmlFor="score_search">Search</label>
                                    <input type="text" className="form-control" id="score_search"
                                        placeholder="Name, company or email" data-score-search />
                                </div>
                                <div className="col-xxl-2 col-xl-4 col-md-4">
                                    <label className="form-label" htmlFor="score_band">Classification</label>
                                    <select className="form-select" id="score_band" data-score-filter="band">
                                        <option value="all" selected>All</option>
                                        <option value="hot">Hot</option>
                                        <option value="warm">Warm</option>
                                        <option value="cold">Cold</option>
                                    </select>
                                </div>
                                <div className="col-xxl-2 col-xl-4 col-md-4">
                                    <label className="form-label" htmlFor="score_owner">Owner</label>
                                    <select className="form-select" id="score_owner" data-score-filter="owner">
                                        <option value="all" selected>All owners</option>
                                        <option>Adrian Herrera</option>
                                        <option>Ellis Vandermeer</option>
                                        <option>Priya Raghunathan</option>
                                        <option>Tomas Lindqvist</option>
                                        <option>Nadia Okonkwo</option>
                                    </select>
                                </div>
                                <div className="col-xxl-5 col-xl-12 col-md-12">
                                    <label className="form-label d-block">Sort by</label>
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <button type="button" className="btn btn-outline-light shadow active"
                                            data-sort="score">Score <i className="ti ti-sort-descending ms-1"></i></button>
                                        <button type="button" className="btn btn-outline-light shadow"
                                            data-sort="probability">Probability <i
                                                className="ti ti-arrows-sort ms-1"></i></button>
                                        <button type="button" className="btn btn-outline-light shadow"
                                            data-sort="engagement">Engagement <i
                                                className="ti ti-arrows-sort ms-1"></i></button>
                                        <span className="badge bg-light text-dark ms-auto" data-score-count></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Lead</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">AI score</th>
                                            <th scope="col">Class</th>
                                            <th scope="col" style={{ minWidth: '150px' }}>Conversion probability</th>
                                            <th scope="col" style={{ minWidth: '140px' }}>Engagement</th>
                                            <th scope="col">Est. value</th>
                                            <th scope="col">Owner</th>
                                            <th scope="col">Last activity</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Explain</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-score-body></tbody>
                                </table>
                            </div>

                            <div className="d-none" data-score-empty>
                                <div className="ai-empty">
                                    <span className="ai-empty-icon"><i className="ti ti-mood-search"></i></span>
                                    <h6>No leads match your filters</h6>
                                    <p>Try a different classification or clear the search box.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Table */}

                </div>
        </div>
    );
};

export default AiLeadScoring;
