import React from 'react';

const AutomationLogs = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from automation-logs.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Automation Logs</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Automation</li>
                                <li className="breadcrumb-item active" aria-current="page">Automation Logs</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-logs-reset>
                            <i className="ti ti-filter-off me-1"></i>Reset filters
                        </button>
                        <div className="dropdown">
                            <a href="#" className="btn btn-outline-light shadow dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ti ti-file-export me-1"></i>Export
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li><a href="#" className="dropdown-item"><i
                                            className="ti ti-file-type-csv me-1"></i>Export as CSV</a></li>
                                <li><a href="#" className="dropdown-item"><i
                                            className="ti ti-file-type-xls me-1"></i>Export as Excel</a></li>
                            </ul>
                        </div>
                        <a href="/workflow-builder" className="btn btn-primary">
                            <i className="ti ti-sitemap me-1"></i>Workflow Builder
                        </a>
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
                    <li className="nav-item"><a href="/webhooks" className="nav-link text-nowrap"><i className="ti ti-webhook me-1"></i>Webhooks</a></li>
                    <li className="nav-item"><a href="/automation-logs" className="nav-link text-nowrap active"><i className="ti ti-history me-1"></i>Automation Logs</a></li>
                </ul>
                {/* End Automation Nav */}

                <div className="alert d-none" role="status" data-automation-toast></div>

                <div data-automation-logs>

                    {/* Summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-success text-success flex-shrink-0">
                                        <i className="ti ti-circle-check fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-logs-stat="success">0</div>
                                        <span className="fs-12 text-muted">Successful</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-danger text-danger flex-shrink-0">
                                        <i className="ti ti-alert-circle fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-logs-stat="failed">0</div>
                                        <span className="fs-12 text-muted">Failed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-warning text-warning flex-shrink-0">
                                        <i className="ti ti-loader fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-logs-stat="running">0</div>
                                        <span className="fs-12 text-muted">Running</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span
                                        className="avatar avatar-lg rounded bg-soft-secondary text-secondary flex-shrink-0">
                                        <i className="ti ti-player-skip-forward fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-logs-stat="skipped">0</div>
                                        <span className="fs-12 text-muted">Skipped</span>
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
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label" htmlFor="logs_search">Search</label>
                                    <input type="text" className="form-control" id="logs_search"
                                        placeholder="Workflow, rule or record" data-logs-search />
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="logs_range">Date range</label>
                                    <select className="form-select" id="logs_range">
                                        <option selected>Last 7 days</option>
                                        <option>Last 24 hours</option>
                                        <option>Last 30 days</option>
                                        <option>Custom range</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="logs_kind">Source</label>
                                    <select className="form-select" id="logs_kind" data-logs-filter="kind">
                                        <option value="all" selected>Workflows &amp; rules</option>
                                        <option>Workflow</option>
                                        <option>Rule</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="logs_trigger">Trigger</label>
                                    <select className="form-select" id="logs_trigger" data-logs-filter="trigger">
                                        <option value="all" selected>All triggers</option>
                                        <option>Lead Created</option>
                                        <option>Lead Qualified</option>
                                        <option>Deal Stage Changed</option>
                                        <option>Deal Won</option>
                                        <option>Proposal Created</option>
                                        <option>Contract Expiring</option>
                                        <option>Invoice Overdue</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="logs_status">Status</label>
                                    <select className="form-select" id="logs_status" data-logs-filter="status">
                                        <option value="all" selected>All</option>
                                        <option value="success">Success</option>
                                        <option value="failed">Failed</option>
                                        <option value="running">Running</option>
                                        <option value="skipped">Skipped</option>
                                    </select>
                                </div>
                                <div className="col-lg-1 col-md-6">
                                    <label className="form-label" htmlFor="logs_user">User</label>
                                    <select className="form-select" id="logs_user" data-logs-filter="user">
                                        <option value="all" selected>All</option>
                                        <option>System</option>
                                        <option>Adrian Herrera</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-2">
                                <span className="badge bg-light text-dark" data-logs-count></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Workflow / Rule</th>
                                            <th scope="col">Trigger</th>
                                            <th scope="col">Record</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Executed</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">User</th>
                                            <th scope="col">Error message</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Details</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-logs-body></tbody>
                                </table>
                            </div>

                            <div className="d-none" data-logs-empty>
                                <div className="ai-empty">
                                    <span className="ai-empty-icon"><i className="ti ti-history-off"></i></span>
                                    <h6>No executions match your filters</h6>
                                    <p>Try widening the date range or clearing the status filter.</p>
                                    <button type="button" className="btn btn-outline-light shadow btn-sm mt-3"
                                        data-logs-reset><i className="ti ti-filter-off me-1"></i>Reset filters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Table */}

                </div>
        </div>
    );
};

export default AutomationLogs;
