import React from 'react';

const GrowthDashboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from growth-dashboard.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Growth Dashboard</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Growth Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                            <div className="dropdown-menu  dropdown-menu-end">
                                <ul>
                                    <li>
                                        <a href="#" className="dropdown-item"><i
                                                className="ti ti-file-type-pdf me-1"></i>Export as
                                            PDF</a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item"><i
                                                className="ti ti-file-type-xls me-1"></i>Export as
                                            Excel </a>
                                    </li>
                                </ul>
                            </div>
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

                {/* start row */}
                <div className="row flex-fill">

                    <div className="col-xl-9 d-flex">
                        <div className="row g-3 flex-fill">
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card growth-card flex-fill bg-soft-success border-0 shadow-none">
                                    <div className="card-header text-center border-0 py-3">
                                        <div className="avatar rounded avatar-md bg-success">
                                            <img src="assets/img/icons/carbon_growth.svg" alt="icon"
                                                className="img-fluid p-2" />
                                        </div>
                                    </div>
                                    <div className="card-body bg-white rounded border mb-1 p-3">
                                        <p className="mb-2 fs-13 fw-medium text-dark">Total Revenue Growth</p>
                                        <div className="fs-28 text-dark fw-bold mb-3">$400k</div>
                                        <div className="fs-13 fw-medium"><span className="text-success"><i
                                                    className="ti ti-clock"></i> +12%</span> vs Last Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card growth-card flex-fill bg-soft-danger border-0 shadow-none">
                                    <div className="card-header text-center border-0 py-3">
                                        <div className="avatar rounded avatar-md bg-danger">
                                            <img src="assets/img/icons/hand-icon.svg" alt="icon" className="img-fluid p-2" />
                                        </div>
                                    </div>
                                    <div className="card-body bg-white rounded border mb-1 p-3">
                                        <p className="mb-2 fs-13 fw-medium text-dark">Conversion Rate</p>
                                        <div className="fs-28 text-dark fw-bold mb-3">12.2%</div>
                                        <div className="fs-13 fw-medium"><span className="text-danger"><i
                                                    className="ti ti-clock"></i> +90%</span> vs Last Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card growth-card flex-fill bg-purple-subtle border-0 shadow-none">
                                    <div className="card-header text-center border-0 py-3">
                                        <div className="avatar rounded avatar-md bg-purple">
                                            <img src="assets/img/icons/users.svg" alt="icon" className="img-fluid p-2" />
                                        </div>
                                    </div>
                                    <div className="card-body bg-white rounded border mb-1 p-3">
                                        <p className="mb-2 fs-13 fw-medium text-dark">New Customers</p>
                                        <div className="fs-28 text-dark fw-bold mb-3">560</div>
                                        <div className="fs-13 fw-medium"><span className="text-purple"><i
                                                    className="ti ti-clock"></i> +10%</span> vs Last Month</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card growth-card flex-fill bg-soft-warning border-0 shadow-none">
                                    <div className="card-header text-center border-0 py-3">
                                        <div className="avatar rounded avatar-md bg-warning">
                                            <img src="assets/img/icons/fluent_arrow.svg" alt="icon"
                                                className="img-fluid p-2" />
                                        </div>
                                    </div>
                                    <div className="card-body bg-white rounded border mb-1 p-3">
                                        <p className="mb-2 fs-13 fw-medium text-dark">Monthly Grow</p>
                                        <div className="fs-28 text-dark fw-bold mb-3">8.9%</div>
                                        <div className="fs-13 fw-medium"><span className="text-warning"><i
                                                    className="ti ti-clock"></i> +24%</span> vs Last Month</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between border-0">
                                <span className="fs-18 fw-bold text-dark">Retention</span>
                                <a href="growth-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
                                        className="ti ti-refresh"></i></a>
                            </div>
                            <div className="card-body pt-0">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                                    <div id="retained-chart"></div>
                                    <div className="text-end">
                                        <div className="fs-24 text-dark fw-semibold mb-1 d-flex align-items-center gap-1">
                                            82% <i className="ti ti-arrow-big-up-filled text-success fs-16"></i></div>
                                        <p className="mb-0 fs-13 fw-medium">Retained </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div id="churned-chart"></div>
                                    <div className="text-end">
                                        <div className="fs-24 text-dark fw-semibold mb-1 d-flex align-items-center gap-1">
                                            18% <i className="ti ti-arrow-big-down-filled text-danger fs-16"></i></div>
                                        <p className="mb-0 fs-13 fw-medium">Churned</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">
                    <div className="col-md-12 col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                    <div className="mb-0 fs-18 fw-bold text-dark">Revenue</div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle btn btn-outline-light shadow"
                                            data-bs-toggle="dropdown" href="#">
                                            Last 6 Months
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#" className="dropdown-item">
                                                Last 30 Days
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Last 6 months
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Last 12 months
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div id="revenue-chart2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                    <div className="mb-0 fs-18 fw-bold text-dark">Region-wise Growth</div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle btn btn-outline-light shadow"
                                            data-bs-toggle="dropdown" href="#">
                                            2026
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
                                <div id="region-wise-growth"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="mb-0 fs-18 fw-bold text-dark">Growth Trend</div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle btn btn-outline-light shadow"
                                            data-bs-toggle="dropdown" href="#">
                                            2026
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
                                <div id="growth-trend"></div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span
                                        className="position-relative p-1 d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-25 rounded-circle me-1 z-1">

                                        <span
                                            className="p-1 bg-danger pb-0 position-absolute top-50 start-50 translate-middle w-100 z-n1"></span>
                                        <span className="bg-danger rounded-circle p-1 border border-2 border-white"></span>
                                    </span>
                                    <span className="mb-0 fw-medium text-dark fs-12">Revenue</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    <div className="col-md-12 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="mb-4 fs-18 fw-bold text-dark">Growth Overview</div>

                                {/* Growth Overview List */}
                                <div className="table-responsive custom-table table-nowrap">
                                    <table className="table table-nowrap" id="growth-overview-list">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Period</th>
                                                <th>Customers</th>
                                                <th>Conversion Rate</th>
                                                <th>Revenue</th>
                                                <th>Retention Rate</th>
                                                <th>Growth</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Growth Overview List */}

                            </div> {/* end card body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default GrowthDashboard;
