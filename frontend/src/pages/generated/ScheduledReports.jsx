import React from 'react';

const ScheduledReports = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from scheduled-reports.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Scheduled Reports</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Scheduled Reports</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/report-builder" className="btn btn-outline-light shadow">
                            <i className="ti ti-plus me-1"></i>Create Report
                        </a>
                        <button type="button" className="btn btn-primary" data-sched-create>
                            <i className="ti ti-clock-plus me-1"></i>Create Schedule
                        </button>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* Reports Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto">
                    <li className="nav-item"><a href="/report-builder" className="nav-link text-nowrap"><i className="ti ti-tool me-1"></i>Report Builder</a></li>
                    <li className="nav-item"><a href="/scheduled-reports" className="nav-link text-nowrap active"><i className="ti ti-clock-hour-4 me-1"></i>Scheduled</a></li>
                    <li className="nav-item"><a href="/sales-forecasting" className="nav-link text-nowrap"><i className="ti ti-chart-arrows-vertical me-1"></i>Forecasting</a></li>
                    <li className="nav-item"><a href="/win-loss-analysis" className="nav-link text-nowrap"><i className="ti ti-trophy me-1"></i>Win/Loss</a></li>
                    <li className="nav-item"><a href="/sales-velocity" className="nav-link text-nowrap"><i className="ti ti-rocket me-1"></i>Velocity</a></li>
                </ul>
                {/* End Reports Nav */}

                <div data-scheduled-reports>
                    <div className="alert d-none" role="status" data-report-toast></div>

                    {/* Summary */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-success text-success flex-shrink-0">
                                        <i className="ti ti-player-play fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1" data-sched-stat="active">0</div>
                                        <span className="fs-12 text-muted">Active schedules</span>
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
                                        <div className="fs-22 fw-bold text-dark lh-1" data-sched-stat="paused">0</div>
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
                                        <div className="fs-22 fw-bold text-dark lh-1" data-sched-stat="failed">0</div>
                                        <span className="fs-12 text-muted">Failed last run</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card mb-0 h-100">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <span className="avatar avatar-lg rounded bg-soft-primary text-primary flex-shrink-0">
                                        <i className="ti ti-mail-fast fs-20"></i></span>
                                    <div>
                                        <div className="fs-22 fw-bold text-dark lh-1">412</div>
                                        <span className="fs-12 text-muted">Reports sent this month</span>
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
                                    <label className="form-label" htmlFor="sched_search">Search</label>
                                    <input type="text" className="form-control" id="sched_search"
                                        placeholder="Report name, type or owner" data-sched-search />
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="sched_freq">Frequency</label>
                                    <select className="form-select" id="sched_freq" data-sched-filter="freq">
                                        <option value="all" selected>All</option>
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                        <option>Quarterly</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="sched_format">Format</label>
                                    <select className="form-select" id="sched_format" data-sched-filter="format">
                                        <option value="all" selected>All</option>
                                        <option>PDF</option>
                                        <option>Excel</option>
                                        <option>CSV</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-6">
                                    <label className="form-label" htmlFor="sched_status">Status</label>
                                    <select className="form-select" id="sched_status" data-sched-filter="status">
                                        <option value="all" selected>All</option>
                                        <option value="active">Active</option>
                                        <option value="paused">Paused</option>
                                        <option value="failed">Failed</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <span className="badge bg-light text-dark w-100 py-2" data-sched-count></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Report name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Frequency</th>
                                            <th scope="col">Recipients</th>
                                            <th scope="col">Format</th>
                                            <th scope="col">Last sent</th>
                                            <th scope="col">Next run</th>
                                            <th scope="col">Owner</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-sched-body></tbody>
                                </table>
                            </div>

                            <div className="d-none" data-sched-empty>
                                <div className="ai-empty">
                                    <span className="ai-empty-icon"><i className="ti ti-calendar-off"></i></span>
                                    <h6>No schedules match your filters</h6>
                                    <p>Try a different frequency or clear the search box.</p>
                                    <button type="button" className="btn btn-primary btn-sm mt-3" data-sched-create>
                                        <i className="ti ti-clock-plus me-1"></i>Create Schedule
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Table */}

                </div>
        </div>
    );
};

export default ScheduledReports;
