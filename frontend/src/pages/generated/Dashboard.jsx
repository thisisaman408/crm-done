import React from 'react';

const Dashboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from dashboard.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Dashboard</h4>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                            <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
                        </div>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
                            data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* AI Insights Widget */}
                <div className="row g-3 mb-3" data-ai-embed>
                    <div className="col-xxl-5 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                                    <div>
                                        <h6 className="mb-0 fs-14">AI Insights</h6>
                                        <span className="fs-12 text-muted">Top priorities right now</span>
                                    </div>
                                </div>
                                <a href="/ai-insights" className="link-primary fs-13">View all</a>
                            </div>
                            <div className="card-body">
                                <div className="ai-insight is-critical mb-2">
                                    <div className="ai-insight-head mb-2">
                                        <span className="ai-insight-icon bg-soft-danger text-danger"><i
                                                className="ti ti-alert-hexagon"></i></span>
                                        <div>
                                            <h6 className="ai-insight-title">3 deals worth $184K have gone quiet</h6>
                                            <span className="fs-12 text-muted">22% of committed forecast</span>
                                        </div>
                                    </div>
                                    <a href="/deal-risk-analysis"
                                        className="btn btn-sm btn-outline-light shadow">Review stalled deals <i
                                            className="ti ti-arrow-right ms-1"></i></a>
                                </div>
                                <div className="ai-insight is-opportunity">
                                    <div className="ai-insight-head mb-2">
                                        <span className="ai-insight-icon bg-soft-success text-success"><i
                                                className="ti ti-coin"></i></span>
                                        <div>
                                            <h6 className="ai-insight-title">$240K expansion available in 6 accounts</h6>
                                            <span className="fs-12 text-muted">At or above 85% seat utilisation</span>
                                        </div>
                                    </div>
                                    <a href="/ai-insights" className="btn btn-sm btn-outline-light shadow">View
                                        accounts <i className="ti ti-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-6 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                <div>
                                    <h6 className="mb-0 fs-14">Deals at Risk</h6>
                                    <span className="fs-12 text-muted">Lowest AI health score</span>
                                </div>
                                <a href="/deal-risk-analysis" className="link-primary fs-13">View all</a>
                            </div>
                            <div className="card-body pt-2">
                                <div className="d-flex align-items-center gap-2 py-2 border-bottom">
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/deal-risk-analysis"
                                            className="fw-medium text-dark d-block text-truncate">Cobalt Studio - New
                                            Business</a>
                                        <span className="fs-12 text-muted">$48,000 &middot; quiet 14 days</span>
                                    </div>
                                    <span className="badge bg-soft-danger text-danger flex-shrink-0">High Risk</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 py-2 border-bottom">
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/deal-risk-analysis"
                                            className="fw-medium text-dark d-block text-truncate">Meridian Health -
                                            Expansion</a>
                                        <span className="fs-12 text-muted">$74,500 &middot; quiet 8 days</span>
                                    </div>
                                    <span className="badge bg-soft-warning text-warning flex-shrink-0">Medium Risk</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 py-2">
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/deal-risk-analysis"
                                            className="fw-medium text-dark d-block text-truncate">Arclight Media -
                                            Upsell</a>
                                        <span className="fs-12 text-muted">$62,000 &middot; champion changed</span>
                                    </div>
                                    <span className="badge bg-soft-warning text-warning flex-shrink-0">Medium Risk</span>
                                </div>

                                <h6 className="fs-13 mt-3 mb-2">Revenue opportunities</h6>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0"><i
                                            className="ti ti-coin"></i></span>
                                    <div>
                                        <span className="fs-15 fw-semibold text-dark d-block">$240K</span>
                                        <span className="fs-12 text-muted">6 accounts ready to expand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-lg-6 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                <div>
                                    <h6 className="mb-0 fs-14">High-Probability Leads</h6>
                                    <span className="fs-12 text-muted">Top AI scores</span>
                                </div>
                                <a href="/ai-lead-scoring" className="link-primary fs-13">All</a>
                            </div>
                            <div className="card-body pt-2">
                                <div className="d-flex align-items-center gap-2 py-2 border-bottom">
                                    <span className="avatar avatar-sm rounded flex-shrink-0"><img
                                            src="assets/img/profiles/avatar-01.jpg" alt="Lead"
                                            className="img-fluid rounded" /></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/ai-lead-scoring"
                                            className="fw-medium text-dark d-block text-truncate">Marcus Whitfield</a>
                                        <span className="fs-12 text-muted">78% to convert</span>
                                    </div>
                                    <span className="ai-cell-score is-hot flex-shrink-0"><span
                                            className="ai-cell-dot"></span><span className="ai-cell-value">92</span></span>
                                </div>
                                <div className="d-flex align-items-center gap-2 py-2 border-bottom">
                                    <span className="avatar avatar-sm rounded flex-shrink-0"><img
                                            src="assets/img/profiles/avatar-05.jpg" alt="Lead"
                                            className="img-fluid rounded" /></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/ai-lead-scoring"
                                            className="fw-medium text-dark d-block text-truncate">Ellis Vandermeer</a>
                                        <span className="fs-12 text-muted">71% to convert</span>
                                    </div>
                                    <span className="ai-cell-score is-hot flex-shrink-0"><span
                                            className="ai-cell-dot"></span><span className="ai-cell-value">88</span></span>
                                </div>
                                <div className="d-flex align-items-center gap-2 py-2">
                                    <span className="avatar avatar-sm rounded flex-shrink-0"><img
                                            src="assets/img/profiles/avatar-02.jpg" alt="Lead"
                                            className="img-fluid rounded" /></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <a href="/ai-lead-scoring"
                                            className="fw-medium text-dark d-block text-truncate">Priya Raghunathan</a>
                                        <span className="fs-12 text-muted">66% to convert</span>
                                    </div>
                                    <span className="ai-cell-score is-hot flex-shrink-0"><span
                                            className="ai-cell-dot"></span><span className="ai-cell-value">84</span></span>
                                </div>

                                <h6 className="fs-13 mt-3 mb-2">Recommended actions</h6>
                                <div className="ai-action mb-0">
                                    <span className="ai-action-icon bg-soft-danger text-danger"><i
                                            className="ti ti-phone"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <h6 className="ai-action-title">Call Meridian Health</h6>
                                        <p className="ai-action-meta">Stalled 8 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End AI Insights Widget */}

                {/* Start Welcome Wrap */}
                <div className="welcome-wrap mb-4">
                    <div className=" d-flex align-items-center justify-content-between flex-wrap gap-3 bg-dark rounded p-4">
                        <div>
                            <h2 className="mb-1 dark-text-white fs-24">Welcome Back, Adrian</h2>
                            <p className="text-light fs-14 mb-0">14 New Companies Subscribed Today !!!</p>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                            <a href="/company" className="btn btn-danger btn-sm">Companies</a>
                            <a href="/packages" className="btn btn-light btn-sm">All Packages</a>
                        </div>
                    </div>
                </div>
                {/* Endc Welcome Wrap */}

                {/* start row */}
                <div className="row row-gap-3 mb-4">
                    {/* Total Companies */}
                    <div className="col-xl-3 col-sm-6 d-flex">
                        <div className="card flex-fill mb-0 position-relative overflow-hidden">
                            <div className="card-body position-relative z-1">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1">Total Companies</p>
                                            <h2 className="mb-1 fs-16">5468</h2>
                                            <p className="text-success mb-0 fs-13"> <i
                                                    className="ti ti-arrow-bar-up me-1"></i>5.62%<span
                                                    className="text-body ms-1">from last month</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span
                                            className="avatar avatar-md rounded-circle bg-soft-primary border border-primary">
                                            <i className="ti ti-building fs-16 text-primary"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/img/icons/elemnt-01.svg" alt="elemnt-04"
                                className="img-fluid position-absolute top-0 Start-0" />
                        </div>
                    </div>
                    {/* /Total Companies */}

                    {/* Total Companies */}
                    <div className="col-xl-3 col-sm-6 d-flex">
                        <div className="card flex-fill mb-0 position-relative overflow-hidden">
                            <div className="card-body position-relative z-1">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1">Active Companies</p>
                                            <h2 className="mb-1 fs-16">4598</h2>
                                            <p className="text-danger mb-0 fs-13"> <i
                                                    className="ti ti-arrow-bar-down me-1"></i>12%<span
                                                    className="text-body ms-1">from last month</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span
                                            className="avatar avatar-md rounded-circle bg-soft-success border border-success">
                                            <i className="ti ti-carousel-vertical fs-16 text-success"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/img/icons/elemnt-02.svg" alt="elemnt-04"
                                className="img-fluid position-absolute top-0 Start-0" />
                        </div>
                    </div>
                    {/* /Total Companies */}

                    {/* Total Companies */}
                    <div className="col-xl-3 col-sm-6 d-flex">
                        <div className="card flex-fill mb-0 position-relative overflow-hidden">
                            <div className="card-body position-relative z-1">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1">Total Subscribers</p>
                                            <h2 className="mb-1 fs-16">5468</h2>
                                            <p className="text-success mb-0 fs-13"> <i
                                                    className="ti ti-arrow-bar-up me-1"></i>6%<span
                                                    className="text-body ms-1">from last month</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span
                                            className="avatar avatar-md rounded-circle bg-soft-warning border border-warning">
                                            <i className="ti ti-chalkboard-off fs-16 text-warning"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/img/icons/elemnt-03.svg" alt="elemnt-04"
                                className="img-fluid position-absolute top-0 Start-0" />
                        </div>
                    </div>
                    {/* /Total Companies */}

                    {/* Total Companies */}
                    <div className="col-xl-3 col-sm-6 d-flex">
                        <div className="card flex-fill mb-0 position-relative overflow-hidden">
                            <div className="card-body position-relative z-1">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1">Total Earnings</p>
                                            <h2 className="mb-1 fs-16">$89,878,58</h2>
                                            <p className="text-danger mb-0 fs-13"> <i
                                                    className="ti ti-arrow-bar-down me-1"></i>16%<span
                                                    className="text-body ms-1">from last month</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span
                                            className="avatar avatar-md rounded-circle bg-soft-danger border border-danger mb-3">
                                            <i className="ti ti-businessplan fs-16 text-primary"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <img src="assets/img/icons/elemnt-04.svg" alt="elemnt-04"
                                className="img-fluid position-absolute top-0 Start-0" />
                        </div>
                    </div>
                    {/* /Total Companies */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">
                    {/* Companies */}
                    <div className="col-xxl-3 col-lg-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h6 className="mb-0">Companies</h6>
                                <div className="dropdown">
                                    <a className="dropdown-toggle btn btn-outline-light shadow p-2"
                                        data-bs-toggle="dropdown" href="#">
                                        <i className="ti ti-calendar me-1"></i>This Week
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">
                                            This Month
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            This Week
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Today
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="company-chart"></div>
                                <p className="text-success mb-0 fs-13 text-center"> <i
                                        className="ti ti-arrow-bar-up me-1"></i>12.5%<span className="text-body ms-1">from last
                                        month</span></p>
                            </div>
                        </div>
                    </div>
                    {/* /Companies */}

                    {/* Revenue */}
                    <div className="col-lg-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h6 className="mb-0">Revenue</h6>
                                <div className="dropdown">
                                    <a className="dropdown-toggle btn btn-outline-light shadow p-2"
                                        data-bs-toggle="dropdown" href="#">
                                        <i className="ti ti-calendar me-1"></i>2025
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">
                                            2025
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            2024
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            2023
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                                    <div className="mb-1">
                                        <h5 className="mb-2 fs-16 fw-bold">$89,878,58</h5>
                                        <p className="mb-0 fs-13"><span className="text-success fw-normal me-1"><i
                                                    className="ti ti-arrow-bar-up me-1"></i>40%</span>increased from last
                                            year</p>
                                    </div>
                                    <p className="fs-14 text-dark d-flex align-items-center mb-1"><i
                                            className="ti ti-circle-filled me-1 fs-6 text-teal"></i>Revenue</p>
                                </div>
                                <div id="revenue-income"></div>
                            </div>
                        </div>
                    </div>
                    {/* /Revenue */}

                    {/* Top Plans */}
                    <div className="col-xxl-3 col-xl-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h6 className="mb-0">Top Plans</h6>
                                <div className="dropdown">
                                    <a className="dropdown-toggle btn btn-outline-light shadow p-2"
                                        data-bs-toggle="dropdown" href="#">
                                        <i className="ti ti-calendar me-1"></i>Last 30 Days
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="#" className="dropdown-item">
                                            Last 30 Days
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Last 10 Days
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Today
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="plan-overview"></div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p className="f-14 fw-medium text-dark mb-0"><i
                                            className="ti ti-circle-filled text-info me-1"></i>Basic </p>
                                    <p className="f-14 fw-medium text-dark mb-0">60%</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <p className="f-14 fw-medium text-dark mb-0"><i
                                            className="ti ti-circle-filled text-warning me-1"></i>Premium</p>
                                    <p className="f-14 fw-medium text-dark mb-0">20%</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-0">
                                    <p className="f-14 fw-medium text-dark mb-0"><i
                                            className="ti ti-circle-filled text-primary me-1"></i>Enterprise</p>
                                    <p className="f-14 fw-medium text-dark mb-0">20%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Top Plans */}
                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">
                    {/* Recent Transactions */}
                    <div className="col-xxl-4 col-xl-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h5 className="mb-0 fs-16 fw-bold">Recent Transactions</h5>
                                <a href="/purchase-transaction" className="btn btn-primary btn-xs">View All</a>
                            </div>
                            <div className="card-body">
                                {/* Item-1 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-01.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">NovaWave LLC</a></h6>
                                            <p className="fs-13 mb-0">14 Sep 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14">+$245</h6>
                                        <p className="fs-13 mb-0">Basic (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-2 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-02.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">BlueSky</a></h6>
                                            <p className="fs-13 mb-0">20 Mar 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14">+$395</h6>
                                        <p className="fs-13 mb-0">Enterprise (Yearly)</p>
                                    </div>
                                </div>

                                {/* Item-3 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-03.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Silver Hawk</a></h6>
                                            <p className="fs-13 mb-0">26 Mar 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14">+$145</h6>
                                        <p className="fs-13 mb-0">Advanced (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-4 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-04.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Summit Peak</a></h6>
                                            <p className="fs-13 mb-0">10 Feb 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14">+$758</h6>
                                        <p className="fs-13 mb-0">Enterprise (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-5 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-0">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-05.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">RiverStone Ltd</a></h6>
                                            <p className="fs-13 mb-0">10 Jan 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14">+$977</h6>
                                        <p className="fs-13 mb-0">Premium (Yearly)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Recent Transactions */}

                    {/* Recently Registered */}
                    <div className="col-xxl-4 col-xl-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h5 className="mb-0 fs-16 fw-bold">Recently Registered</h5>
                                <a href="/purchase-transaction" className="btn btn-primary btn-xs">View All</a>
                            </div>
                            <div className="card-body">
                                {/* Item-1 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-07.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Bright Bridge Grp</a></h6>
                                            <p className="fs-13 mb-0">Basic (Monthly)</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <p className="fs-14 mb-0">150 Users</p>
                                        <h6 className="fw-normal text-truncate mb-0 fs-14">bbg@example.com</h6>
                                    </div>
                                </div>

                                {/* Item-2 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-08.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">CoastalStar Co.</a></h6>
                                            <p className="fs-13 mb-0">2Enterprise (Yearly)</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <p className="fs-14 mb-0">200 Users</p>
                                        <h6 className="fw-normal text-truncate mb-0 fs-14">csc@example.com</h6>
                                    </div>
                                </div>

                                {/* Item-3 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-09.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">HarborView</a></h6>
                                            <p className="fs-13 mb-0">Advanced (Monthly)</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <p className="fs-14 mb-0">129 Users</p>
                                        <h6 className="fw-normal text-truncate mb-0 fs-14">hv@example.com</h6>
                                    </div>
                                </div>

                                {/* Item-4 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-10.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Golden Gate Ltd</a></h6>
                                            <p className="fs-13 mb-0">Enterprise (Monthly)</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <p className="fs-14 mb-0">103 Users</p>
                                        <h6 className="fw-normal text-truncate mb-0 fs-14">ggl@example.com</h6>
                                    </div>
                                </div>

                                {/* Item-5 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-0">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-11.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Redwood Inc</a></h6>
                                            <p className="fs-13 mb-0">Premium (Yearly)</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <p className="fs-14 mb-0">109 Users</p>
                                        <h6 className="fw-normal text-truncate mb-0 fs-14">rw@example.com</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Recent Registered */}

                    {/* Recent Plan Expired */}
                    <div className="col-xxl-4 col-xl-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h5 className="mb-0 fs-16 fw-bold">Recently Plan Expired</h5>
                                <a href="/purchase-transaction" className="btn btn-primary btn-xs">View All</a>
                            </div>
                            <div className="card-body">
                                {/* Item-1 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-12.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">VK Pvt Ltd </a></h6>
                                            <p className="fs-13 mb-0">14 Sep 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14"><a href="#"
                                                className="text-decoration-underline text-info">Send Reminder</a></h6>
                                        <p className="fs-13 mb-0">Basic (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-2 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-13.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">RiverStone Ltd</a></h6>
                                            <p className="fs-13 mb-0">20 Mar 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14"><a href="#"
                                                className="text-decoration-underline text-info">Send Reminder</a></h6>
                                        <p className="fs-13 mb-0">Enterprise (Yearly)</p>
                                    </div>
                                </div>

                                {/* Item-3 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-14.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Summit Peak</a></h6>
                                            <p className="fs-13 mb-0">26 Mar 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14"><a href="#"
                                                className="text-decoration-underline text-info">Send Reminder</a></h6>
                                        <p className="fs-13 mb-0">Advanced (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-4 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-15.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">Redwood Inc</a></h6>
                                            <p className="fs-13 mb-0">10 Feb 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14"><a href="#"
                                                className="text-decoration-underline text-info">Send Reminder</a></h6>
                                        <p className="fs-13 mb-0">Enterprise (Monthly)</p>
                                    </div>
                                </div>

                                {/* Item-5 */}
                                <div className="d-sm-flex justify-content-between flex-wrap mb-0">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar avatar-md border rounded-circle flex-shrink-0">
                                            <img src="assets/img/icons/company-icon-16.svg"
                                                className="img-fluid w-auto h-auto" alt="img" />
                                        </a>
                                        <div className="ms-2 flex-fill">
                                            <h6 className="fw-medium text-truncate mb-1 fs-14"><a
                                                    href="#">NovaWave LLC</a></h6>
                                            <p className="fs-13 mb-0">10 Jan 2025</p>
                                        </div>
                                    </div>
                                    <div className="text-sm-end mb-0">
                                        <h6 className="fw-medium text-truncate mb-1 fs-14"><a href="#"
                                                className="text-decoration-underline text-info">Send Reminder</a></h6>
                                        <p className="fs-13 mb-0">Premium (Yearly)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Recent Plan Expired */}
                </div>
                {/* end row */}
        </div>
    );
};

export default Dashboard;
