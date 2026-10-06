import React from 'react';

const AutomationRules = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from automation-rules.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Automation Rules</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Automation</li>
                                <li className="breadcrumb-item active" aria-current="page">Automation Rules</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-rules-reset>
                            <i className="ti ti-filter-off me-1"></i>Reset filters
                        </button>
                        <a href="/automation-logs" className="btn btn-outline-light shadow">
                            <i className="ti ti-history me-1"></i>View Logs
                        </a>
                        <a href="/workflow-builder" className="btn btn-primary">
                            <i className="ti ti-plus me-1"></i>Create Rule
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
                    <li className="nav-item"><a href="/automation-rules" className="nav-link text-nowrap active"><i className="ti ti-list-check me-1"></i>Automation Rules</a></li>
                    <li className="nav-item"><a href="/webhooks" className="nav-link text-nowrap"><i className="ti ti-webhook me-1"></i>Webhooks</a></li>
                    <li className="nav-item"><a href="/automation-logs" className="nav-link text-nowrap"><i className="ti ti-history me-1"></i>Automation Logs</a></li>
                </ul>
                {/* End Automation Nav */}

                <div className="alert d-none" role="status" data-automation-toast></div>

                <div data-automation-rules>

                    {/* Summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-success text-success flex-shrink-0">
                                        <i className="ti ti-player-play fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-rules-stat="active">0</div>
                                        <span className="fs-12 text-muted">Active rules</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span
                                        className="avatar avatar-lg rounded bg-soft-secondary text-secondary flex-shrink-0">
                                        <i className="ti ti-file-text fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-rules-stat="draft">0</div>
                                        <span className="fs-12 text-muted">Drafts</span>
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
                                        <div className="fs-22 fw-bold text-dark lh-1" data-rules-stat="paused">0</div>
                                        <span className="fs-12 text-muted">Paused</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-danger text-danger flex-shrink-0">
                                        <i className="ti ti-alert-triangle fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-rules-stat="error">0</div>
                                        <span className="fs-12 text-muted">In error</span>
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
                                    <label className="form-label" htmlFor="rules_search">Search</label>
                                    <input type="text" className="form-control" id="rules_search"
                                        placeholder="Rule name, trigger or owner" data-rules-search />
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="rules_status">Status</label>
                                    <select className="form-select" id="rules_status" data-rules-filter="status">
                                        <option value="all" selected>All</option>
                                        <option value="active">Active</option>
                                        <option value="draft">Draft</option>
                                        <option value="paused">Paused</option>
                                        <option value="error">Error</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="rules_applies">Applies to</label>
                                    <select className="form-select" id="rules_applies" data-rules-filter="applies">
                                        <option value="all" selected>All modules</option>
                                        <option>Leads</option>
                                        <option>Contacts</option>
                                        <option>Deals</option>
                                        <option>Proposals</option>
                                        <option>Contracts</option>
                                        <option>Invoices</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="rules_trigger">Trigger</label>
                                    <select className="form-select" id="rules_trigger" data-rules-filter="trigger">
                                        <option value="all" selected>All triggers</option>
                                        <option>Lead Created</option>
                                        <option>Lead Qualified</option>
                                        <option>Deal Created</option>
                                        <option>Deal Won</option>
                                        <option>Proposal Created</option>
                                        <option>Contract Expiring</option>
                                        <option>Invoice Overdue</option>
                                        <option>Contact Created</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="rules_owner">Owner</label>
                                    <select className="form-select" id="rules_owner" data-rules-filter="owner">
                                        <option value="all" selected>All owners</option>
                                        <option>Adrian Herrera</option>
                                        <option>Ellis Vandermeer</option>
                                        <option>Priya Raghunathan</option>
                                        <option>Tomas Lindqvist</option>
                                        <option>Nadia Okonkwo</option>
                                    </select>
                                </div>
                                <div className="col-lg-1 col-md-6">
                                    <span className="badge bg-light text-dark w-100 py-2" data-rules-count></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Rule name</th>
                                            <th scope="col">Applies to</th>
                                            <th scope="col">Trigger</th>
                                            <th scope="col">Conditions</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Executions</th>
                                            <th scope="col">Success rate</th>
                                            <th scope="col">Last executed</th>
                                            <th scope="col">Created by</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-rules-body></tbody>
                                </table>
                            </div>

                            <div className="d-none" data-rules-empty>
                                <div className="ai-empty">
                                    <span className="ai-empty-icon"><i className="ti ti-list-search"></i></span>
                                    <h6>No rules match your filters</h6>
                                    <p>Try a different status or clear the search box.</p>
                                    <button type="button" className="btn btn-outline-light shadow btn-sm mt-3"
                                        data-rules-reset><i className="ti ti-filter-off me-1"></i>Reset filters</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Table */}

                </div>
        </div>
    );
};

export default AutomationRules;
