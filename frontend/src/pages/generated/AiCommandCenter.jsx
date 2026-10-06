import React from 'react';

const AiCommandCenter = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ai-command-center.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">AI Command Center</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">AI CRM</li>
                                <li className="breadcrumb-item active" aria-current="page">AI Command Center</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <select className="form-select w-auto" aria-label="Scope">
                            <option selected>All Teams</option>
                            <option>Enterprise</option>
                            <option>Mid-Market</option>
                            <option>SMB</option>
                        </select>
                        <button type="button" className="btn btn-outline-light shadow" data-ai-refresh>
                            <i className="ti ti-refresh me-1"></i>Re-analyse
                        </button>
                        <a href="/ai-settings" className="btn btn-outline-light shadow">
                            <i className="ti ti-adjustments-bolt me-1"></i>AI Settings
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
                    <li className="nav-item"><a href="/ai-command-center" className="nav-link text-nowrap active"><i className="ti ti-sparkles me-1"></i>Command Center</a></li>
                    <li className="nav-item"><a href="/ai-insights" className="nav-link text-nowrap"><i className="ti ti-bulb me-1"></i>Insights</a></li>
                    <li className="nav-item"><a href="/ai-lead-scoring" className="nav-link text-nowrap"><i className="ti ti-target-arrow me-1"></i>Lead Scoring</a></li>
                    <li className="nav-item"><a href="/deal-risk-analysis" className="nav-link text-nowrap"><i className="ti ti-shield-half me-1"></i>Deal Risk</a></li>
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-command>

                    {/* AI Overview */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between gap-3 flex-wrap mb-3">
                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                    <span className="avatar avatar-lg rounded bg-soft-primary text-primary flex-shrink-0">
                                        <i className="ti ti-sparkles fs-24"></i>
                                    </span>
                                    <div>
                                        <h5 className="mb-1">Here is what needs your attention today</h5>
                                        <p className="text-muted fs-13 mb-0" data-ai-stamp>
                                            Analysed 53 open deals, 128 leads and 47 accounts &middot;
                                            last run 25 Aug 2026, 08:15
                                        </p>
                                    </div>
                                </div>
                                <a href="/ai-insights" className="btn btn-primary">
                                    <i className="ti ti-bulb me-1"></i>All insights
                                </a>
                            </div>

                            <div className="row g-3">
                                <div className="col-xl-3 col-sm-6">
                                    <div className="border rounded p-3 h-100">
                                        <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                            <i className="ti ti-alert-hexagon text-danger"></i>Revenue at risk
                                        </div>
                                        <div className="fs-22 fw-bold text-dark">$184K</div>
                                        <div className="fs-12 text-danger">3 deals gone quiet</div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="border rounded p-3 h-100">
                                        <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                            <i className="ti ti-coin text-success"></i>Revenue opportunity
                                        </div>
                                        <div className="fs-22 fw-bold text-dark">$240K</div>
                                        <div className="fs-12 text-success">6 accounts ready to expand</div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="border rounded p-3 h-100">
                                        <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                            <i className="ti ti-flame text-warning"></i>Hot leads waiting
                                        </div>
                                        <div className="fs-22 fw-bold text-dark">5</div>
                                        <div className="fs-12 text-warning">Uncontacted for 24h+</div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="border rounded p-3 h-100">
                                        <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                            <i className="ti ti-heart-broken text-danger"></i>Customer health alerts
                                        </div>
                                        <div className="fs-22 fw-bold text-dark">3</div>
                                        <div className="fs-12 text-danger">$248K ARR exposed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End AI Overview */}

                    {/* Top Insights */}
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
                        <h6 className="mb-0">AI-generated business insights</h6>
                        <a href="/ai-insights" className="link-primary fs-13">View all 9</a>
                    </div>
                    <div className="row g-3 mb-3" data-ai-feed></div>
                    {/* End Top Insights */}

                    <div className="row g-3 mb-3">
                        {/* High-priority leads */}
                        <div className="col-xxl-4 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 className="mb-0">High-priority leads</h6>
                                        <p className="text-muted fs-12 mb-0">Ranked by AI score</p>
                                    </div>
                                    <a href="/ai-lead-scoring" className="link-primary fs-13">View all</a>
                                </div>
                                <div className="card-body pt-2 d-flex flex-column">
                                    <div data-ai-priority-leads></div>
                                    <div className="ai-card-foot row g-2 text-center"
                                        data-ai-leads-foot></div>
                                </div>
                            </div>
                        </div>

                        {/* Deals at risk */}
                        <div className="col-xxl-4 col-xl-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 className="mb-0">Deals at risk</h6>
                                        <p className="text-muted fs-12 mb-0">Lowest health score first</p>
                                    </div>
                                    <a href="/deal-risk-analysis" className="link-primary fs-13">View all</a>
                                </div>
                                <div className="card-body pt-2 d-flex flex-column">
                                    <div data-ai-risk-deals></div>
                                    <div className="ai-card-foot row g-2 text-center"
                                        data-ai-deals-foot></div>
                                </div>
                            </div>
                        </div>

                        {/* Recommended actions */}
                        <div className="col-xxl-4 col-xl-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0"><i className="ti ti-sparkles text-primary me-1"></i>Recommended next
                                        actions</h6>
                                    <p className="text-muted fs-12 mb-0">Ordered by expected revenue impact</p>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <div data-ai-actions></div>
                                    <div className="ai-card-foot row g-2 text-center"
                                        data-ai-actions-foot></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-3">
                        {/* Pipeline health */}
                        <div className="col-xl-7 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Pipeline health by stage</h6>
                                    <p className="text-muted fs-12 mb-0">Deals flagged healthy vs at risk</p>
                                </div>
                                <div className="card-body">
                                    <div id="ai_pipeline_chart"></div>
                                </div>
                            </div>
                        </div>

                        {/* AI activity summary */}
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">AI activity this week</h6>
                                    <p className="text-muted fs-12 mb-0">What the assistant did for your team</p>
                                </div>
                                <div className="card-body">
                                    <div id="ai_activity_chart"></div>
                                    <div className="row g-2 mt-2">
                                        <div className="col-4 text-center">
                                            <div className="fs-18 fw-bold text-dark">390</div>
                                            <div className="fs-12 text-muted">Leads scored</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="fs-18 fw-bold text-dark">109</div>
                                            <div className="fs-12 text-muted">Emails drafted</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <div className="fs-18 fw-bold text-dark">61</div>
                                            <div className="fs-12 text-muted">Calls summarised</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick actions */}
                    <h6 className="mb-2">AI tools</h6>
                    <div className="row g-3 mb-3">
                        <div className="col-lg-3 col-sm-6 d-flex">
                            <a href="/ai-lead-scoring" className="ai-quick w-100">
                                <span className="ai-quick-icon bg-soft-warning text-warning"><i
                                        className="ti ti-target-arrow"></i></span>
                                <h6 className="ai-quick-title">AI Lead Scoring</h6>
                                <p className="ai-quick-desc">Rank every lead 0-100 with the reasoning behind the score.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex">
                            <a href="/deal-risk-analysis" className="ai-quick w-100">
                                <span className="ai-quick-icon bg-soft-danger text-danger"><i
                                        className="ti ti-shield-half"></i></span>
                                <h6 className="ai-quick-title">Deal Risk Analysis</h6>
                                <p className="ai-quick-desc">Spot stalling deals before they slip the forecast.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex">
                            <a href="/ai-email-composer" className="ai-quick w-100">
                                <span className="ai-quick-icon bg-soft-success text-success"><i
                                        className="ti ti-mail-star"></i></span>
                                <h6 className="ai-quick-title">AI Email Composer</h6>
                                <p className="ai-quick-desc">Draft, refine and re-tone outreach in seconds.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex">
                            <a href="/ask-your-data" className="ai-quick w-100">
                                <span className="ai-quick-icon bg-soft-primary text-primary"><i
                                        className="ti ti-message-chatbot"></i></span>
                                <h6 className="ai-quick-title">Ask Your Data</h6>
                                <p className="ai-quick-desc">Question your CRM in plain English, get charts back.</p>
                            </a>
                        </div>
                    </div>
                    {/* End Quick actions */}

                    {/* AI usage */}
                    <div className="card mb-0">
                        <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div>
                                <h6 className="mb-0">AI usage this month</h6>
                                <p className="text-muted fs-12 mb-0">Billing period 01 - 31 Aug 2026</p>
                            </div>
                            <a href="/ai-settings" className="link-primary fs-13">Manage limits</a>
                        </div>
                        <div className="card-body">
                            <div className="row g-4">
                                <div className="col-lg-8">
                                    <div className="ai-usage">
                                        <div className="ai-usage-head">
                                            <span>Tokens consumed</span>
                                            <span className="fw-medium text-dark">1.84M of 3M</span>
                                        </div>
                                        <div className="ai-usage-track"><span style={{ width: '61%' }}></span></div>
                                    </div>
                                    <div className="ai-usage is-warning">
                                        <div className="ai-usage-head">
                                            <span>Email drafts</span>
                                            <span className="fw-medium text-dark">742 of 1,000</span>
                                        </div>
                                        <div className="ai-usage-track"><span style={{ width: '74%' }}></span></div>
                                    </div>
                                    <div className="ai-usage">
                                        <div className="ai-usage-head">
                                            <span>Call transcriptions</span>
                                            <span className="fw-medium text-dark">168 of 500 hours</span>
                                        </div>
                                        <div className="ai-usage-track"><span style={{ width: '34%' }}></span></div>
                                    </div>
                                    <div className="ai-usage">
                                        <div className="ai-usage-head">
                                            <span>Deal risks</span>
                                            <span className="fw-medium text-dark">100 of 300 hours</span>
                                        </div>
                                        <div className="ai-usage-track"><span style={{ width: '54%' }} className="bg-info"></span></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="border rounded p-3 h-100">
                                        <h6 className="fs-13 mb-3">Estimated cost</h6>
                                        <div className="fs-24 fw-bold text-dark mb-1">$248.60</div>
                                        <p className="fs-12 text-muted mb-3">Projected $384 by month end</p>
                                        <div className="d-flex align-items-center justify-content-between fs-13 mb-2">
                                            <span className="text-muted">Model</span>
                                            <span className="fw-medium text-dark">Claude Sonnet 4.5</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between fs-13">
                                            <span className="text-muted">Avg. response</span>
                                            <span className="fw-medium text-dark">1.4s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End AI usage */}

                </div>
        </div>
    );
};

export default AiCommandCenter;
