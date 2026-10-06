import React from 'react';

const AiEmailComposer = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ai-email-composer.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <h4 className="mb-0">AI Email Composer</h4>
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="/ai-command-center">AI CRM</a></li>
                                <li className="breadcrumb-item active" aria-current="page">AI Email Composer</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/email" className="btn btn-outline-light shadow">
                            <i className="ti ti-inbox me-1"></i>Open inbox
                        </a>
                        <a href="#" className="btn btn-outline-light shadow">
                            <i className="ti ti-template me-1"></i>Template library
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
                    <li className="nav-item"><a href="/ai-email-composer" className="nav-link text-nowrap active"><i className="ti ti-mail-star me-1"></i>Email Composer</a></li>
                    <li className="nav-item"><a href="/call-summary" className="nav-link text-nowrap"><i className="ti ti-phone-calling me-1"></i>Call Summary</a></li>
                    <li className="nav-item"><a href="/ask-your-data" className="nav-link text-nowrap"><i className="ti ti-message-chatbot me-1"></i>Ask Your Data</a></li>
                    <li className="nav-item"><a href="/ai-settings" className="nav-link text-nowrap"><i className="ti ti-adjustments-bolt me-1"></i>AI Settings</a></li>
                </ul>
                {/* End AI Section Nav */}

                <div className="ai-compose" data-ai-compose>
                    <div className="alert d-none" role="status" data-compose-toast></div>

                    <div className="row g-3">
                        {/* Setup panel */}
                        <div className="col-xl-4">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Who and why</h6>
                                    <p className="text-muted fs-12 mb-0">The AI uses these to personalise the draft</p>
                                </div>
                                <div className="card-body">

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="compose_contact">Contact / lead</label>
                                        <select className="form-select" id="compose_contact" name="contact">
                                            <option value="" selected>Select a contact...</option>
                                            <option value="marcus">Marcus Whitfield &middot; Northwind Logistics
                                            </option>
                                            <option value="priya">Priya Raghunathan &middot; Meridian Health</option>
                                            <option value="tomas">Tomas Lindqvist &middot; Cobalt Studio</option>
                                            <option value="ellis">Ellis Vandermeer &middot; Halcyon Partners</option>
                                            <option value="nadia">Nadia Okonkwo &middot; Ridgeway Manufacturing
                                            </option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="compose_deal">Related deal</label>
                                        <select className="form-select" id="compose_deal" name="deal">
                                            <option value="" selected>No deal linked</option>
                                            <option>Northwind Logistics - Renewal &middot; $96K</option>
                                            <option>Meridian Health - Expansion &middot; $74.5K</option>
                                            <option>Cobalt Studio - New Business &middot; $48K</option>
                                            <option>Halcyon Partners - Pilot &middot; $128K</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="compose_purpose">Email purpose</label>
                                        <select className="form-select" id="compose_purpose" name="purpose">
                                            <option value="followup" selected>Follow-up after a call</option>
                                            <option value="intro">Cold introduction</option>
                                            <option value="proposal">Send a proposal</option>
                                            <option value="reengage">Re-engage a quiet deal</option>
                                            <option value="renewal">Renewal outreach</option>
                                            <option value="thanks">Thank you &amp; recap</option>
                                        </select>
                                    </div>

                                    <div className="row g-2 mb-3">
                                        <div className="col-6">
                                            <label className="form-label" htmlFor="compose_tone">Tone</label>
                                            <select className="form-select" id="compose_tone" name="tone">
                                                <option value="friendly" selected>Friendly</option>
                                                <option value="formal">Formal</option>
                                                <option value="direct">Direct</option>
                                                <option value="consultative">Consultative</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label" htmlFor="compose_length">Length</label>
                                            <select className="form-select" id="compose_length" name="length">
                                                <option value="short">Short</option>
                                                <option value="medium" selected>Medium</option>
                                                <option value="long">Long</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="compose_notes">Anything to include?</label>
                                        <textarea className="form-control" id="compose_notes" rows="3"
                                            placeholder="e.g. mention the Q3 rollout timeline and the volume discount"></textarea>
                                    </div>

                                    <button type="button" className="btn btn-primary w-100" data-compose-generate>
                                        <i className="ti ti-sparkles me-1"></i>Generate email
                                    </button>
                                </div>
                            </div>

                            {/* Personalisation variables */}
                            <div className="card mt-3 mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Personalisation variables</h6>
                                    <p className="text-muted fs-12 mb-0">Click to insert into the draft</p>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-1">
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="first_name">{{first_name}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="last_name">{{last_name}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="company">{{company}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="job_title">{{job_title}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="deal_name">{{deal_name}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="deal_value">{{deal_value}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="renewal_date">{{renewal_date}}</button>
                                        <button type="button" className="ai-suggestion"
                                            data-compose-var="sender_name">{{sender_name}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Draft panel */}
                        <div className="col-xl-8">
                            <div className="card mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <h6 className="mb-0">Draft</h6>
                                    <div data-compose-meta></div>
                                </div>
                                <div className="card-body">

                                    {/* Empty state */}
                                    <div data-compose-placeholder>
                                        <div className="ai-empty">
                                            <span className="ai-empty-icon"><i className="ti ti-mail-star"></i></span>
                                            <h6>No draft yet</h6>
                                            <p>Pick a contact and a purpose on the left, then generate a first draft.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Loading state */}
                                    <div className="d-none py-5 text-center" data-compose-loading>
                                        <span className="ai-thinking mb-3"><span className="ai-thinking-dots">
                                                <span></span><span></span><span></span></span>
                                            Writing your email...</span>
                                        <div className="ai-skeleton mt-4 mx-auto" style={{ maxWidth: '520px' }}>
                                            <span style={{ width: '40%' }}></span>
                                            <span style={{ width: '96%' }}></span>
                                            <span style={{ width: '88%' }}></span>
                                            <span style={{ width: '92%' }}></span>
                                            <span style={{ width: '64%' }}></span>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="d-none" data-compose-result>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="compose_subject">Subject</label>
                                            <input type="text" className="form-control" id="compose_subject"
                                                data-compose-subject />
                                        </div>

                                        <label className="form-label" htmlFor="compose_body">Body</label>
                                        <div className="ai-compose-output" id="compose_body" contenteditable="true"
                                            role="textbox" aria-multiline="true" aria-label="Email body"
                                            data-compose-output></div>

                                        {/* Refinement toolbar */}
                                        <div className="mt-3">
                                            <span className="fs-12 text-muted d-block mb-2">Refine with AI</span>
                                            <div className="ai-compose-toolbar mb-3">
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-refine="regenerate"><i
                                                        className="ti ti-refresh me-1"></i>Regenerate</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-refine="improve"><i
                                                        className="ti ti-wand me-1"></i>Improve</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-refine="shorten"><i
                                                        className="ti ti-arrows-minimize me-1"></i>Shorten</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-refine="expand"><i
                                                        className="ti ti-arrows-maximize me-1"></i>Expand</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-refine="followup"><i
                                                        className="ti ti-corner-down-right me-1"></i>Follow-up
                                                    version</button>
                                            </div>

                                            <span className="fs-12 text-muted d-block mb-2">Change tone</span>
                                            <div className="ai-compose-toolbar">
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-tone="friendly">Friendly</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-tone="formal">Formal</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-tone="direct">Direct</button>
                                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                    data-compose-tone="consultative">Consultative</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <span className="fs-12 text-muted">
                                        <i className="ti ti-info-circle me-1"></i>Merge fields resolve when the email is
                                        sent.
                                    </span>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <button type="button" className="btn btn-outline-light shadow"
                                            data-compose-save><i className="ti ti-bookmark me-1"></i>Save as
                                            template</button>
                                        <button type="button" className="btn btn-outline-light shadow"
                                            data-compose-copy><i className="ti ti-copy me-1"></i>Copy</button>
                                        <button type="button" className="btn btn-primary" data-compose-send><i
                                                className="ti ti-send me-1"></i>Send email</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AiEmailComposer;
