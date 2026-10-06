import React from 'react';

const CallSummary = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from call-summary.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">Call Summary</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Call Summary</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/call-history" className="btn btn-outline-light shadow">
                            <i className="ti ti-history me-1"></i>Call history
                        </a>
                        <button type="button" className="btn btn-outline-light shadow" data-call-copy>
                            <i className="ti ti-copy me-1"></i>Copy summary
                        </button>
                        <button type="button" className="btn btn-primary"
                            data-call-toast-msg="Summary logged to the Halcyon Partners deal.">
                            <i className="ti ti-checklist me-1"></i>Log to deal
                        </button>
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
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap active"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div data-ai-call>
                    <div className="alert d-none" role="status" data-call-toast></div>

                    {/* Call header */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row g-4">
                                <div className="col-xl-5">
                                    <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                                        <span className="avatar avatar-xl rounded flex-shrink-0">
                                            <img src="assets/img/profiles/avatar-05.jpg" alt="Ellis Vandermeer"
                                                className="img-fluid rounded" />
                                        </span>
                                        <div>
                                            <h5 className="mb-1">Ellis Vandermeer</h5>
                                            <p className="text-muted fs-13 mb-1">CFO &middot; <a href="/company-details"
                                                    className="link-primary">Halcyon Partners</a></p>
                                            <a href="/deals-details"
                                                className="badge bg-soft-primary text-primary">Halcyon Partners - Pilot
                                                &middot; $128K</a>
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-6">
                                            <span className="fs-12 text-muted d-block">Date &amp; time</span>
                                            <span className="fw-medium text-dark">24 Aug 2026, 14:30</span>
                                        </div>
                                        <div className="col-6">
                                            <span className="fs-12 text-muted d-block">Duration</span>
                                            <span className="fw-medium text-dark">32 min 14 sec</span>
                                        </div>
                                        <div className="col-6">
                                            <span className="fs-12 text-muted d-block">Direction</span>
                                            <span className="fw-medium text-dark">Outbound</span>
                                        </div>
                                        <div className="col-6">
                                            <span className="fs-12 text-muted d-block">Recorded by</span>
                                            <span className="fw-medium text-dark">Tomas Lindqvist</span>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <span className="fs-12 text-muted d-block mb-2">Participants</span>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span className="badge bg-light text-dark d-inline-flex align-items-center gap-1">
                                                <span className="avatar avatar-xs rounded-circle"><img
                                                        src="assets/img/profiles/avatar-03.jpg" alt=""
                                                        className="img-fluid rounded-circle" /></span>
                                                Tomas Lindqvist <span className="text-muted">· Sales</span></span>
                                            <span className="badge bg-light text-dark d-inline-flex align-items-center gap-1">
                                                <span className="avatar avatar-xs rounded-circle"><img
                                                        src="assets/img/profiles/avatar-05.jpg" alt=""
                                                        className="img-fluid rounded-circle" /></span>
                                                Ellis Vandermeer <span className="text-muted">· CFO</span></span>
                                            <span className="badge bg-light text-dark d-inline-flex align-items-center gap-1">
                                                <span className="avatar avatar-xs rounded-circle"><img
                                                        src="assets/img/profiles/avatar-07.jpg" alt=""
                                                        className="img-fluid rounded-circle" /></span>
                                                Dana Reyes <span className="text-muted">· CTO</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4">
                                    <h6 className="fs-13 mb-3">Conversation metrics</h6>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center justify-content-between fs-13 mb-1">
                                            <span className="text-muted">Customer sentiment</span>
                                            <span className="badge bg-soft-success text-success"><i
                                                    className="ti ti-mood-happy me-1"></i>Positive</span>
                                        </div>
                                        <span className="ai-meter is-success"><span className="ai-meter-track">
                                                <span className="ai-meter-fill" data-meter="78"></span></span>
                                            <span className="ai-meter-value">78</span></span>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center justify-content-between fs-13 mb-1">
                                            <span className="text-muted">Buying intent</span>
                                            <span className="fw-medium text-dark">High</span>
                                        </div>
                                        <span className="ai-meter is-success"><span className="ai-meter-track">
                                                <span className="ai-meter-fill" data-meter="84"></span></span>
                                            <span className="ai-meter-value">84</span></span>
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center justify-content-between fs-13 mb-1">
                                            <span className="text-muted">Engagement</span>
                                            <span className="fw-medium text-dark">Strong</span>
                                        </div>
                                        <span className="ai-meter is-info"><span className="ai-meter-track">
                                                <span className="ai-meter-fill" data-meter="81"></span></span>
                                            <span className="ai-meter-value">81</span></span>
                                    </div>
                                </div>

                                <div className="col-xl-3">
                                    <h6 className="fs-13 mb-2">Talk ratio</h6>
                                    <div id="call_talk_chart"></div>
                                    <p className="fs-12 text-muted text-center mb-0">Customer spoke 62% of the time -
                                        above your 45% benchmark.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Call header */}

                    <div className="row g-3 mb-3">
                        {/* AI summary */}
                        <div className="col-xl-7 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <h6 className="mb-0"><i className="ti ti-sparkles text-primary me-1"></i>AI summary</h6>
                                    <span className="ai-chip ai-chip-muted"><i className="ti ti-clock"></i>Generated in
                                        4.2s</span>
                                </div>
                                <div className="card-body" data-call-summary>
                                    <p className="mb-3">Tomas walked Ellis and Dana through the pilot scope and
                                        commercial structure for Halcyon Partners. Ellis confirmed budget is approved
                                        for the current fiscal year and asked directly about multi-year pricing -
                                        the clearest buying signal on the call. Dana raised two technical questions
                                        around SSO and data residency, both of which were answered on the call.</p>
                                    <p className="mb-3">The main open item is the implementation timeline. Ellis needs
                                        confirmation that onboarding can complete before the end of Q4, as their
                                        finance close would otherwise delay adoption by a full quarter.</p>
                                    <p className="mb-0">Overall the conversation moved the deal materially forward.
                                        Sentiment stayed positive throughout and the customer drove most of the
                                        agenda, which historically correlates with a shorter time to close.</p>

                                    <h6 className="fs-13 mt-4 mb-2">Key discussion points</h6>
                                    <ul className="ai-signals">
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-point"></i></span>
                                            <span>Pilot scope confirmed at 40 seats across two regions</span></li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-point"></i></span>
                                            <span>Multi-year pricing requested by the CFO</span></li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-point"></i></span>
                                            <span>SSO via Okta and EU data residency both confirmed as supported</span>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-point"></i></span>
                                            <span>Implementation must complete before the Q4 finance close</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Requirements, pain points, objections */}
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">What the customer told us</h6>
                                </div>
                                <div className="card-body">
                                    <h6 className="fs-13 mb-2"><i className="ti ti-list-check text-success me-1"></i>Customer
                                        requirements</h6>
                                    <ul className="ai-signals mb-3">
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span>SSO through their existing Okta tenant</span></li>
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span>EU data residency for client records</span></li>
                                        <li><span className="ai-signal-icon bg-soft-success text-success"><i
                                                    className="ti ti-check"></i></span>
                                            <span>Onboarding complete before the Q4 close</span></li>
                                    </ul>

                                    <h6 className="fs-13 mb-2"><i
                                            className="ti ti-alert-triangle text-warning me-1"></i>Pain points</h6>
                                    <ul className="ai-signals mb-3">
                                        <li><span className="ai-signal-icon bg-soft-warning text-warning"><i
                                                    className="ti ti-minus"></i></span>
                                            <span>Current tooling needs 3 exports to produce one board report</span>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-warning text-warning"><i
                                                    className="ti ti-minus"></i></span>
                                            <span>No single view of pipeline across the two regions</span></li>
                                    </ul>

                                    <h6 className="fs-13 mb-2"><i className="ti ti-thumb-down text-danger me-1"></i>Objections
                                        raised</h6>
                                    <ul className="ai-signals mb-0">
                                        <li><span className="ai-signal-icon bg-soft-danger text-danger"><i
                                                    className="ti ti-x"></i></span>
                                            <span>Concerned the rollout could slip past the finance close
                                                <span className="badge bg-soft-warning text-warning ms-1">Open</span></span>
                                        </li>
                                        <li><span className="ai-signal-icon bg-soft-danger text-danger"><i
                                                    className="ti ti-x"></i></span>
                                            <span>Asked why pricing is per-seat rather than flat
                                                <span
                                                    className="badge bg-soft-success text-success ms-1">Handled</span></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        {/* Transcript */}
                        <div className="col-xl-7">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                        <h6 className="mb-0"><i className="ti ti-microphone me-1"></i>Transcript</h6>
                                        <span className="badge bg-light text-dark" data-call-hits>12 turns</span>
                                    </div>
                                    <input type="text" className="form-control form-control-sm"
                                        placeholder="Search the transcript..." aria-label="Search transcript"
                                        data-call-search />
                                </div>
                                <div className="card-body">
                                    <div className="ai-transcript" data-call-transcript>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">00:04</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">Thanks both for making the time. I thought
                                                    we'd start with the pilot scope and then move to commercials -
                                                    does that work?</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">00:18</span>
                                            <div><span className="ai-turn-name">Ellis</span>
                                                <p className="ai-turn-text">That works. I'll say up front that budget is
                                                    approved for this fiscal year, so the question for us is really
                                                    about structure rather than whether we're doing it.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">01:02</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">Good to know. The pilot as scoped covers 40
                                                    seats across your London and Frankfurt teams.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">02:47</span>
                                            <div><span className="ai-turn-name">Dana</span>
                                                <p className="ai-turn-text">Before we go further on commercials - can you
                                                    confirm SSO works with our Okta tenant, and that client records
                                                    stay in the EU?</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">03:10</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">Both yes. Okta is a supported identity
                                                    provider out of the box, and we run an EU region in Frankfurt
                                                    with data residency guaranteed contractually.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">08:22</span>
                                            <div><span className="ai-turn-name">Ellis</span>
                                                <p className="ai-turn-text">Right now producing one board report takes
                                                    three separate exports and someone manually reconciling them. That
                                                    is the thing I actually want to stop doing.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">14:51</span>
                                            <div><span className="ai-turn-name">Ellis</span>
                                                <p className="ai-turn-text">What would multi-year pricing look like? If
                                                    there's a meaningful difference we'd consider committing for
                                                    three years rather than one.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">15:20</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">There is - roughly 14% off the annual figure
                                                    on a three-year term. I'll put both options in writing today.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">19:38</span>
                                            <div><span className="ai-turn-name">Ellis</span>
                                                <p className="ai-turn-text">One thing I want to be careful about is the
                                                    timeline. If onboarding runs past our Q4 close, adoption slips a
                                                    whole quarter and the business case weakens.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">20:15</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">Understood. Standard onboarding is three to
                                                    four weeks. I'll send an implementation plan with dates so you can
                                                    see it lands well before the close.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-customer">
                                            <span className="ai-turn-time">26:04</span>
                                            <div><span className="ai-turn-name">Dana</span>
                                                <p className="ai-turn-text">Why per-seat rather than a flat platform fee?
                                                    Our headcount moves around a fair bit.</p>
                                            </div>
                                        </div>
                                        <div className="ai-turn is-rep">
                                            <span className="ai-turn-time">26:30</span>
                                            <div><span className="ai-turn-name">Tomas</span>
                                                <p className="ai-turn-text">Per-seat keeps the entry cost lower, and we
                                                    band it so you're not repricing every time headcount shifts by
                                                    one or two.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="col-xl-5">
                            <div className="card mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <h6 className="mb-0">Action items</h6>
                                    <span className="badge bg-soft-warning text-warning" data-call-remaining></span>
                                </div>
                                <div className="card-body">
                                    <label className="ai-action">
                                        <input className="form-check-input mt-0 flex-shrink-0" type="checkbox"
                                            data-call-task />
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Send multi-year pricing options</h6>
                                            <p className="ai-action-meta">Owner: Tomas &middot; due today</p>
                                        </div>
                                    </label>
                                    <label className="ai-action">
                                        <input className="form-check-input mt-0 flex-shrink-0" type="checkbox"
                                            data-call-task />
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Share the implementation plan with dates</h6>
                                            <p className="ai-action-meta">Owner: Tomas &middot; due 26 Aug</p>
                                        </div>
                                    </label>
                                    <label className="ai-action">
                                        <input className="form-check-input mt-0 flex-shrink-0" type="checkbox"
                                            data-call-task checked />
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Confirm Okta SSO support in writing</h6>
                                            <p className="ai-action-meta">Owner: Tomas &middot; completed</p>
                                        </div>
                                    </label>
                                    <label className="ai-action">
                                        <input className="form-check-input mt-0 flex-shrink-0" type="checkbox"
                                            data-call-task />
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Book the technical deep-dive with Dana</h6>
                                            <p className="ai-action-meta">Owner: Tomas &middot; due 28 Aug</p>
                                        </div>
                                    </label>

                                    <h6 className="fs-13 mt-4 mb-2"><i
                                            className="ti ti-sparkles text-primary me-1"></i>Follow-up recommendations
                                    </h6>
                                    <ul className="ai-signals mb-3">
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-arrow-right"></i></span>
                                            <span>Send pricing within 24 hours - contract-terms requests answered
                                                same-day close 1.8x more often</span></li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-arrow-right"></i></span>
                                            <span>Attach the implementation plan pre-emptively to close the timeline
                                                objection</span></li>
                                        <li><span className="ai-signal-icon bg-soft-primary text-primary"><i
                                                    className="ti ti-arrow-right"></i></span>
                                            <span>Keep Dana on the thread - multi-stakeholder deals close 40%
                                                faster</span></li>
                                    </ul>

                                    <div className="ai-action mb-0">
                                        <span className="ai-action-icon bg-soft-primary text-primary"><i
                                                className="ti ti-player-track-next"></i></span>
                                        <div className="flex-grow-1">
                                            <h6 className="ai-action-title">Next best action</h6>
                                            <p className="ai-action-meta">Draft and send the multi-year pricing email
                                                today</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2 mt-3 flex-wrap">
                                        <a href="/ai-email-composer" className="btn btn-primary btn-sm">
                                            <i className="ti ti-mail-star me-1"></i>Draft follow-up</a>
                                        <button type="button" className="btn btn-outline-light shadow btn-sm"
                                            data-call-toast-msg="4 tasks created and assigned to Tomas Lindqvist.">
                                            <i className="ti ti-checklist me-1"></i>Create tasks</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default CallSummary;
