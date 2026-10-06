import React from 'react';

const WinLossAnalysis = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from win-loss-analysis.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Win/Loss Analysis</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Win/Loss Analysis</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="/lost-deal-analysis-report" className="btn btn-outline-light shadow">
                            <i className="ti ti-thumb-down me-1"></i>Lost Deal Report
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
                    <li className="nav-item"><a href="/win-loss-analysis" className="nav-link text-nowrap active"><i className="ti ti-trophy me-1"></i>Win/Loss</a></li>
                    <li className="nav-item"><a href="/sales-velocity" className="nav-link text-nowrap"><i className="ti ti-rocket me-1"></i>Velocity</a></li>
                </ul>
                {/* End Reports Nav */}

                <div data-winloss>
                    <div className="alert d-none" role="status" data-report-toast></div>

                    {/* Filters */}
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row g-2 align-items-end">
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_range">Date range</label>
                                    <select className="form-select" id="wl_range" data-wl-filter>
                                        <option value="all" selected>Last 6 months</option>
                                        <option>This Quarter</option>
                                        <option>This Year</option>
                                        <option>Custom range</option>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_rep">Sales rep</label>
                                    <select className="form-select" id="wl_rep" data-wl-filter>
                                        <option value="all" selected>All reps</option>
                                        <option>Adrian Herrera</option>
                                        <option>Ellis Vandermeer</option>
                                        <option>Priya Raghunathan</option>
                                        <option>Tomas Lindqvist</option>
                                        <option>Nadia Okonkwo</option>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_team">Team</label>
                                    <select className="form-select" id="wl_team" data-wl-filter>
                                        <option value="all" selected>All teams</option>
                                        <option>Enterprise</option>
                                        <option>Mid-Market</option>
                                        <option>SMB</option>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_industry">Industry</label>
                                    <select className="form-select" id="wl_industry" data-wl-filter>
                                        <option value="all" selected>All industries</option>
                                        <option>Financial Services</option>
                                        <option>Healthcare</option>
                                        <option>Technology</option>
                                        <option>Logistics</option>
                                        <option>Manufacturing</option>
                                        <option>Media</option>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_source">Source</label>
                                    <select className="form-select" id="wl_source" data-wl-filter>
                                        <option value="all" selected>All sources</option>
                                        <option>Referral</option>
                                        <option>Webinar</option>
                                        <option>Outbound</option>
                                        <option>Trade Show</option>
                                        <option>Paid Search</option>
                                    </select>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-6">
                                    <label className="form-label" htmlFor="wl_reason">Lost reason</label>
                                    <select className="form-select" id="wl_reason" data-wl-filter>
                                        <option value="all" selected>All reasons</option>
                                        <option>Price too high</option>
                                        <option>Lost to competitor</option>
                                        <option>No budget</option>
                                        <option>No decision</option>
                                        <option>Missing feature</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                <button type="button" className="btn btn-sm btn-outline-light shadow" data-wl-reset>
                                    <i className="ti ti-filter-off me-1"></i>Reset filters</button>
                            </div>
                        </div>
                    </div>
                    {/* End Filters */}

                    {/* KPI Cards */}
                    <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-briefcase text-primary"></i>Total Deals
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">163</div>
                                    <div className="fs-12 text-muted">Closed in the period</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-trophy text-success"></i>Won Deals
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">98</div>
                                    <div className="fs-12 text-success">$4.52M won</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-thumb-down text-danger"></i>Lost Deals
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">65</div>
                                    <div className="fs-12 text-danger">$2.14M lost</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-percentage text-success"></i>Win Rate
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">60.1%</div>
                                    <div className="rep-winloss mt-2">
                                        <span className="rep-won" style={{ width: '60.1%' }}></span>
                                        <span className="rep-lost" style={{ width: '39.9%' }}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-coin text-info"></i>Avg. Deal Value
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">$46,122</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-up-right"></i> 6.4% vs prior
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 col-xx-2">
                            <div className="card mb-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-1 fs-12 text-muted mb-1">
                                        <i className="ti ti-clock-hour-4 text-warning"></i>Avg. Sales Cycle
                                    </div>
                                    <div className="fs-20 fw-bold text-dark">46 days</div>
                                    <div className="fs-12 text-success"><i className="ti ti-arrow-down-right"></i> 6 days
                                        faster</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End KPI Cards */}

                    {/* Trend + reasons */}
                    <div className="row g-3 mb-3">
                        <div className="col-xl-7 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Win/Loss Trend</h6>
                                    <p className="text-muted fs-12 mb-0">Closed deals by outcome, last 6 months</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="wl_trend_chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 className="mb-0">Lost Deal Reasons</h6>
                                        <p className="text-muted fs-12 mb-0">Why the 65 lost deals were lost</p>
                                    </div>
                                    <a href="/lost-reason" className="link-primary fs-13">Manage</a>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="wl_reason_chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Competitor + cycle */}
                    <div className="row g-3 mb-3">
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Competitor Analysis</h6>
                                    <p className="text-muted fs-12 mb-0">Head-to-head record where a competitor was named
                                    </p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="wl_competitor_chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-header">
                                    <h6 className="mb-0">Sales Cycle Comparison</h6>
                                    <p className="text-muted fs-12 mb-0">Days to close, won vs lost, by deal size</p>
                                </div>
                                <div className="card-body pb-0">
                                    <div id="wl_cycle_chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="card mb-0">
                        <div className="card-header">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-2">
                                <div>
                                    <h6 className="mb-0">Win Rate Breakdown</h6>
                                    <p className="text-muted fs-12 mb-0">Drill into any dimension to see the underlying
                                        records</p>
                                </div>
                                <a href="/deals" className="link-primary fs-13">All deals</a>
                            </div>
                            <div className="d-flex align-items-center gap-1 flex-wrap">
                                <button type="button" className="btn btn-sm btn-outline-light shadow active"
                                    data-wl-tab="rep">By Sales Rep</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-wl-tab="industry">By Industry</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-wl-tab="source">By Source</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-wl-tab="size">By Deal Size</button>
                                <button type="button" className="btn btn-sm btn-outline-light shadow"
                                    data-wl-tab="product">By Product</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light" data-wl-head></thead>
                                    <tbody data-wl-body></tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default WinLossAnalysis;
