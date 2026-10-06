import React from 'react';

const Webhooks = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from webhooks.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Webhooks</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Automation</li>
                                <li className="breadcrumb-item active" aria-current="page">Webhooks</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/automation-logs" className="btn btn-outline-light shadow">
                            <i className="ti ti-history me-1"></i>View Logs
                        </a>
                        <button type="button" className="btn btn-primary" data-hook-add>
                            <i className="ti ti-plus me-1"></i>Add Webhook
                        </button>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* Automation Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto overflow-y-hidden">
                    <li className="nav-item"><a href="/workflow-builder" className="nav-link text-nowrap"><i className="ti ti-sitemap me-1"></i>Workflow Builder</a></li>
                    <li className="nav-item"><a href="/automation-rules" className="nav-link text-nowrap"><i className="ti ti-list-check me-1"></i>Automation Rules</a></li>
                    <li className="nav-item"><a href="/webhooks" className="nav-link text-nowrap active"><i className="ti ti-webhook me-1"></i>Webhooks</a></li>
                    <li className="nav-item"><a href="/automation-logs" className="nav-link text-nowrap"><i className="ti ti-history me-1"></i>Automation Logs</a></li>
                </ul>
                {/* End Automation Nav */}

                <div className="alert d-none" role="status" data-automation-toast></div>

                <div data-webhooks>

                    <div className="alert alert-light border d-flex align-items-start gap-2 fs-13">
                        <i className="ti ti-info-circle mt-1"></i>
                        <div>Webhooks push CRM events to your own endpoints. Secrets are masked here and
                            only shown when you explicitly reveal them.
                            <span className="text-muted">This template is static - no request leaves the
                                browser.</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-success text-success flex-shrink-0">
                                        <i className="ti ti-plug-connected fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-hooks-stat="active">0</div>
                                        <span className="fs-12 text-muted">Active endpoints</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-warning text-warning flex-shrink-0">
                                        <i className="ti ti-player-pause fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-hooks-stat="paused">0</div>
                                        <span className="fs-12 text-muted">Paused</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-danger text-danger flex-shrink-0">
                                        <i className="ti ti-plug-connected-x fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-hooks-stat="failing">0</div>
                                        <span className="fs-12 text-muted">Failing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-primary text-primary flex-shrink-0">
                                        <i className="ti ti-send fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">18,402</div>
                                        <span className="fs-12 text-muted">Deliveries this month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Summary */}

                    {/* Table */}
                    <div className="card mb-0">
                        <div className="card-header">
                            <div className="row g-2 align-items-end">
                                <div className="col-lg-4 col-md-6">
                                    <label className="form-label" htmlFor="hooks_search">Search</label>
                                    <input type="text" className="form-control" id="hooks_search"
                                        placeholder="Name, endpoint or event" data-hooks-search />
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label" htmlFor="hooks_event">Event</label>
                                    <select className="form-select" id="hooks_event" data-hooks-filter="event">
                                        <option value="all" selected>All events</option>
                                        <option>Lead Created</option>
                                        <option>Lead Updated</option>
                                        <option>Deal Created</option>
                                        <option>Deal Updated</option>
                                        <option>Deal Won</option>
                                        <option>Deal Lost</option>
                                        <option>Contact Created</option>
                                        <option>Company Created</option>
                                        <option>Invoice Created</option>
                                        <option>Payment Received</option>
                                        <option>Contract Created</option>
                                        <option>Task Created</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label" htmlFor="hooks_status">Status</label>
                                    <select className="form-select" id="hooks_status" data-hooks-filter="status">
                                        <option value="all" selected>All</option>
                                        <option value="active">Active</option>
                                        <option value="paused">Paused</option>
                                        <option value="failing">Failing</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <span className="badge bg-light text-dark w-100 py-2" data-hooks-count></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Webhook name</th>
                                            <th scope="col">Endpoint</th>
                                            <th scope="col">Method</th>
                                            <th scope="col">Event</th>
                                            <th scope="col">Last triggered</th>
                                            <th scope="col">Response</th>
                                            <th scope="col">Success rate</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-hooks-body></tbody>
                                </table>
                            </div>

                            <div className="d-none" data-hooks-empty>
                                <div className="ai-empty">
                                    <span className="ai-empty-icon"><i className="ti ti-plug-off"></i></span>
                                    <h6>No webhooks match your filters</h6>
                                    <p>Try a different event or clear the search box.</p>
                                    <button type="button" className="btn btn-primary btn-sm mt-3" data-hook-add>
                                        <i className="ti ti-plus me-1"></i>Add Webhook</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Table */}

                </div>
        </div>
    );
};

export default Webhooks;
