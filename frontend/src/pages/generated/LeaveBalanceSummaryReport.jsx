import React from 'react';

const LeaveBalanceSummaryReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from leave-balance-summary-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Leave Balance Summary <span className="badge badge-soft-primary ms-2">10</span>
                        </h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">HRM Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Leave Balance Summary </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
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
                <div className="row row-gap-3 mb-4">
                    {/* Item 1 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0 border-0">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center justify-content-between flex-xl-nowrap gap-2 mb-2 pb-2 border-bottom">
                                    <div>
                                        <div className="avatar rounded-lg bg-success text-white fs-20">
                                            <i className="ti ti-sort-ascending-2"></i>
                                        </div>
                                        <p className="text-dark mt-1  mb-0 fs-13 fw-medium">Total Allocated</p>
                                    </div>
                                    <div id="leave-balance-report-chart-1"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <h2 className="fs-28 text-success mb-0">254</h2>
                                    <span className="badge badge-soft-success border-0 rounded-pill px-3 py-2">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0 border-0">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2 pb-2 border-bottom">
                                    <div>
                                        <div className="avatar rounded-lg bg-pink text-white fs-20">
                                            <i className="ti ti-user-x"></i>
                                        </div>
                                        <p className="text-dark mt-1  mb-0 fs-13 fw-medium">Leave Used</p>
                                    </div>
                                    <div id="leave-balance-report-chart-2"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <h2 className="fs-28 text-pink mb-0">37</h2>
                                    <span className="badge badge-soft-pink border-0 rounded-pill px-3 py-2">In Use</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0 border-0">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2 pb-2 border-bottom">
                                    <div>
                                        <div className="avatar rounded-lg bg-purple text-white fs-20">
                                            <i className="ti ti-brand-gravatar"></i>
                                        </div>
                                        <p className="text-dark mt-1  mb-0 fs-13 fw-medium">Available Leave</p>
                                    </div>
                                    <div id="leave-balance-report-chart-3"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <h2 className="fs-28 text-purple mb-0">204</h2>
                                    <span
                                        className="badge badge-soft-purple border-0 rounded-pill px-3 py-2">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0 border-0">
                            <div className="card-body">
                                <div
                                    className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2 pb-2 border-bottom">
                                    <div>
                                        <div className="avatar rounded-lg bg-danger text-white fs-20">
                                            <i className="ti ti-clock-share"></i>
                                        </div>
                                        <p className="text-dark mt-1 mb-0 fs-13 fw-medium">Pending Request</p>
                                    </div>
                                    <div id="leave-balance-report-chart-4"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <h2 className="fs-28 text-danger mb-0">6</h2>
                                    <span className="badge badge-soft-danger border-0 rounded-pill px-3 py-2">Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card start */}
                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle btn btn-outline-light shadow"
                                    data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li>
                                            <a href="#" className="dropdown-item">Newest</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">Oldest</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="btn bg-soft-indigo border-0"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                        className="ti ti-columns-3 me-2"></i>Manage Columns</a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
                                    <ul>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Leave Type</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Allocated</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Remaining</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Used</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Pending</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Utilization</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                                    <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                        className="reportrange-picker-field">01 Jan 2026 - 31 Dec 2026</span>
                                </div>
                                {/* 1nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-outbound me-2"></i>Leave Type<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg bg-light p-0">
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content mb-0">
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div className="filter-content-list">
                                                            <div className="mb-2">
                                                                <div
                                                                    className="input-icon-start input-icon position-relative">
                                                                    <span className="input-icon-addon fs-12">
                                                                        <i className="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-md"
                                                                        placeholder="Search" />
                                                                </div>
                                                            </div>
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Annual Leave
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Sick Leave
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Casual Leave
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Maternity Leave
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Paternity Leave
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 d-flex">View
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <a href="#" className="btn btn-primary"><i
                                        className="ti ti-player-play me-1"></i>Run Report</a>
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle download-toggle btn btn-icon btn-outline-light shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-download"></i></a>
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
                            </div>
                        </div>
                        {/* table header */}

                        {/* Leads List */}
                        <div className="table-responsive table-nowrap custom-table">
                            <table className="table table-nowrap" id="leave-balance-summary-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>Leave Type</th>
                                        <th>Allocated</th>
                                        <th>Remaining</th>
                                        <th>Used</th>
                                        <th>Pending</th>
                                        <th>Utilization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="datatable-length"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="datatable-paginate"></div>
                            </div>
                        </div>
                        {/* /Leads List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default LeaveBalanceSummaryReport;
