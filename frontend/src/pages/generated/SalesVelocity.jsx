import React from 'react';

const SalesVelocity = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from sales-velocity.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Sales Velocity</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Sales Velocity</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/pipeline" className="btn btn-outline-light shadow">
                            <i className="ti ti-chart-funnel me-1"></i>View Pipeline
                        </a>
                        <div className="dropdown">
                            <a href="#" className="btn btn-outline-light shadow dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ti ti-file-export me-1"></i>Export Data
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

                {/* Reports Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto overflow-y-hidden">
                    <li className="nav-item"><a href="/report-builder" className="nav-link text-nowrap"><i className="ti ti-tool me-1"></i>Report Builder</a></li>
                    <li className="nav-item"><a href="/scheduled-reports" className="nav-link text-nowrap"><i className="ti ti-clock-hour-4 me-1"></i>Scheduled</a></li>
                    <li className="nav-item"><a href="/sales-forecasting" className="nav-link text-nowrap"><i className="ti ti-chart-arrows-vertical me-1"></i>Forecasting</a></li>
                    <li className="nav-item"><a href="/win-loss-analysis" className="nav-link text-nowrap"><i className="ti ti-trophy me-1"></i>Win/Loss</a></li>
                    <li className="nav-item"><a href="/sales-velocity" className="nav-link text-nowrap active"><i className="ti ti-rocket me-1"></i>Velocity</a></li>
                </ul>
                {/* End Reports Nav */}

                <div data-velocity>
                    <div className="alert d-none" role="status" data-report-toast></div>

                    {/* Formula */}
                    <div className="card mb-3">
                        <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div>
                                <h6 className="mb-0">How sales velocity is calculated</h6>
                                <p className="text-muted fs-12 mb-0">Opportunities &times; average deal value &times; win
                                    rate &divide; sales cycle length</p>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <select className="form-select form-select-sm w-auto" aria-label="Team"
                                    data-vel-filter>
                                    <option value="all" selected>All teams</option>
                                    <option>Enterprise</option>
                                    <option>Mid-Market</option>
                                    <option>SMB</option>
                                </select>
                                <select className="form-select form-select-sm w-auto" aria-label="Period"
                                    data-vel-filter>
                                    <option value="all" selected>This Quarter</option>
                                    <option>Last Quarter</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="rep-formula" data-vel-formula></div>
                        </div>
                    </div>
                    {/* End Formula */}

                    {/* KPI Cards */}
                    <div className="row g-3 justify-content-center mb-3">
                        <div className="col-sm-6 col-xl">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-rocket text-primary"></i>Sales Velocity
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">$29,800</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-up-right"></i> 16.1% vs last
                                        quarter</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-briefcase text-info"></i>Open Opportunities
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">53</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-up-right"></i> 10.4%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-coin text-success"></i>Avg. Deal Value
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">$42,400</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-up-right"></i> 6.5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-percentage text-warning"></i>Win Rate
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">61%</div>
                                    <span className="ai-meter is-success mt-1"><span className="ai-meter-track"><span
                                                className="ai-meter-fill" data-bar="61"></span></span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-clock-hour-4 text-danger"></i>Avg. Sales Cycle
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">46 days</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-down-right"></i> 6 days
                                        faster</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End KPI Cards */}

                    {/* Trend */}
                    <div className="row g-3 mb-3">
                        <div className="col-xxl-8">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Sales Velocity Trend</h6>
                                    <p className="text-muted fs-12 mb-0">Revenue generated per day, against target</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="vel_trend_chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Velocity by Team</h6>
                                    <p className="text-muted fs-12 mb-0">Revenue per day by segment</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="vel_team_chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison */}
                    <div className="row g-3 mb-3">
                        <div className="col-xl-7 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Period Comparison</h6>
                                    <p className="text-muted fs-12 mb-0">Current period against the previous period and
                                        target</p>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Metric</th>
                                                    <th scope="col">This Quarter</th>
                                                    <th scope="col">Last Quarter</th>
                                                    <th scope="col">Change</th>
                                                    <th scope="col">Target</th>
                                                    <th scope="col">vs Target</th>
                                                </tr>
                                            </thead>
                                            <tbody data-vel-compare></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Velocity by Sales Representative</h6>
                                    <p className="text-muted fs-12 mb-0">Revenue per day, current quarter</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="vel_rep_chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="row g-3 mb-3">
                        <div className="col-xl-7 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Velocity Inputs Over Time</h6>
                                    <p className="text-muted fs-12 mb-0">Opportunity volume, win rate and cycle length
                                        together</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="vel_inputs_chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Deal Value Trend</h6>
                                    <p className="text-muted fs-12 mb-0">Average closed-won value per month</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="vel_value_chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="card mb-0">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-2">
                                <div>
                                    <h6 className="mb-0">Velocity by <span data-vel-dim-label>Stage</span></h6>
                                    <p className="text-muted fs-12 mb-0">Each dimension recalculated with its own inputs
                                    </p>
                                </div>
                                <a href="/deals" className="link-primary fs-13">All deals</a>
                            </div>
                            <div className="d-flex align-items-center gap-1 flex-wrap">
                                <button type="button" className="btn btn-sm btn-outline-light shadow active"
                                    data-vel-dim="stage">By Pipeline Stage</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-vel-dim="source">By Source</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-vel-dim="product">By Product</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Dimension</th>
                                            <th scope="col">Opportunities</th>
                                            <th scope="col">Avg. deal value</th>
                                            <th scope="col">Win rate</th>
                                            <th scope="col">Sales cycle</th>
                                            <th scope="col">Velocity / day</th>
                                            <th scope="col" className="no-sort"><span
                                                    className="visually-hidden">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody data-vel-body></tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default SalesVelocity;
