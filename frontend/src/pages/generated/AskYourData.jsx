import React from 'react';

const AskYourData = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ask-your-data.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">Ask Your Data</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Ask Your Data</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-ask-clear>
                            <i className="ti ti-eraser me-1"></i>Clear conversation
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
                    <li className="nav-item"><a href="/ai-command-center" className="nav-link text-nowrap"><i className="ti ti-sparkles me-1"></i>Command Center</a></li>
                    <li className="nav-item"><a href="/ai-insights" className="nav-link text-nowrap"><i className="ti ti-bulb me-1"></i>Insights</a></li>
                    <li className="nav-item"><a href="/ai-lead-scoring" className="nav-link text-nowrap"><i className="ti ti-target-arrow me-1"></i>Lead Scoring</a></li>
                    <li className="nav-item"><a href="/deal-risk-analysis" className="nav-link text-nowrap"><i className="ti ti-shield-half me-1"></i>Deal Risk</a></li>
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap active"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-ask>
                    <div className="row g-3">

                        {/* Conversation */}
                        <div className="col-xl-9">
                            <div className="card mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <span className="avatar avatar-sm rounded bg-soft-primary text-primary">
                                            <i className="ti ti-message-chatbot"></i></span>
                                        <div>
                                            <h6 className="mb-0">CRM Analyst</h6>
                                            <span className="fs-12 text-muted">Connected to 53 deals, 128 leads, 47
                                                accounts</span>
                                        </div>
                                    </div>
                                    <span className="ai-chip ai-chip-muted"><i className="ti ti-database"></i>Live CRM
                                        data</span>
                                </div>

                                <div className="card-body">
                                    <div className="ai-chat">

                                        {/* Intro / empty state */}
                                        <div data-ask-intro>
                                            <div className="text-center py-4">
                                                <span className="ai-empty-icon mb-3"><i
                                                        className="ti ti-message-chatbot"></i></span>
                                                <h5 className="mb-1">Ask anything about your CRM</h5>
                                                <p className="text-muted fs-13 mb-4">Plain English in, KPIs, charts and
                                                    tables out. Try one of these to start.</p>
                                            </div>

                                            <div className="row g-2">
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="Which deals are most likely to close this month?">
                                                        <i className="ti ti-briefcase"></i>Which deals are most likely to
                                                        close this month?</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="Which leads have the highest conversion probability?">
                                                        <i className="ti ti-target-arrow"></i>Which leads have the highest
                                                        conversion probability?</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="Show my top-performing sales representatives.">
                                                        <i className="ti ti-users"></i>Show my top-performing sales
                                                        representatives.</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="Which customers are at risk?">
                                                        <i className="ti ti-heart-broken"></i>Which customers are at
                                                        risk?</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="What is our current pipeline value?">
                                                        <i className="ti ti-chart-bar"></i>What is our current pipeline
                                                        value?</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" className="ai-suggestion w-100"
                                                        data-ask-q="Which deals have been inactive for more than 30 days?">
                                                        <i className="ti ti-clock-exclamation"></i>Which deals have been
                                                        inactive for more than 30 days?</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Conversation log */}
                                        <div className="ai-chat-log" data-ask-log></div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <form data-ask-form>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="flex-grow-1">
                                                <label className="visually-hidden" htmlFor="ask_input">Ask a question about
                                                    your CRM data</label>
                                                <input type="text" className="form-control" id="ask_input"
                                                    placeholder="Ask a question about your CRM data..."
                                                    autocomplete="off" data-ask-input />
                                            </div>
                                            <button type="submit" className="btn btn-primary flex-shrink-0">
                                                <i className="ti ti-send me-1"></i>Ask
                                            </button>
                                        </div>
                                        <p className="fs-12 text-muted mb-0 mt-2">
                                            <i className="ti ti-info-circle me-1"></i>Demo dataset - answers come from a
                                            fixed library of example questions in this template.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Side rail */}
                        <div className="col-xl-3">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-0">Suggested questions</h6>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="ai-suggestion w-100"
                                        data-ask-q="What is our current pipeline value?">
                                        <i className="ti ti-chart-bar"></i><span className="text-truncate">Pipeline
                                            value</span></button>
                                    <button type="button" className="ai-suggestion w-100"
                                        data-ask-q="Which deals are most likely to close this month?">
                                        <i className="ti ti-briefcase"></i><span className="text-truncate">Likely to
                                            close</span></button>
                                    <button type="button" className="ai-suggestion w-100"
                                        data-ask-q="Which customers are at risk?">
                                        <i className="ti ti-heart-broken"></i><span className="text-truncate">Customers at
                                            risk</span></button>
                                    <button type="button" className="ai-suggestion w-100"
                                        data-ask-q="Which deals have been inactive for more than 30 days?">
                                        <i className="ti ti-clock-exclamation"></i><span className="text-truncate">Inactive
                                            deals</span></button>
                                    <button type="button" className="ai-suggestion w-100"
                                        data-ask-q="Show my top-performing sales representatives.">
                                        <i className="ti ti-users"></i><span className="text-truncate">Top reps</span></button>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header">
                                    <h6 className="mb-0">Recent questions</h6>
                                </div>
                                <div className="card-body" data-ask-recent>
                                    <p className="fs-12 text-muted mb-0">Your recent questions will appear here.</p>
                                </div>
                            </div>

                            <div className="card mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Data sources</h6>
                                </div>
                                <div className="card-body">
                                    <ul className="ai-signals mb-0">
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span className="fs-13">Deals &amp; pipeline</span></li>
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span className="fs-13">Leads &amp; scoring</span></li>
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span className="fs-13">Accounts &amp; usage</span></li>
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span className="fs-13">Activities &amp; calls</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default AskYourData;
