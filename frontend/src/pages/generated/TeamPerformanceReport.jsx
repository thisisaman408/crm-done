import React from 'react';

const TeamPerformanceReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from team-performance-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Team Performance Report <span className="badge badge-soft-primary ms-2">15</span>
                        </h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">User & Team Reports </li>
                                <li className="breadcrumb-item active" aria-current="page">Team Performance Report </li>
                            </ol>
                        </nav>
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

                {/* start row */}
                <div className="row row-gap-3 mb-4">
                    {/* Item 1 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="avatar avatar-lg rounded-circle bg-success flex-shrink-0 mb-2"><i
                                                className="ti ti-users fs-20"></i></span>
                                        <div className="mb-1 fs-13 fw-medium text-dark">Team Performance</div>
                                    </div>
                                    <h2 className="fs-24 fw-bold mb-0">600</h2>
                                </div>
                                <p className="mb-0 fs-12 fw-medium d-flex align-items-center gap-1"> <span
                                        className="text-success"> <i className="ti ti-trending-up"></i> +12%</span> vs Last
                                    Month </p>
                            </div>
                            <div id="members-chart"></div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="avatar avatar-lg rounded-circle bg-danger flex-shrink-0 mb-2"><i
                                                className="ti ti-target-arrow fs-20"></i></span>
                                        <div className="mb-1 fs-13 fw-medium text-dark">Pending Target</div>
                                    </div>
                                    <h2 className="fs-24 fw-bold mb-0">120</h2>
                                </div>
                                <p className="mb-0 fs-12 fw-medium d-flex align-items-center gap-1"> <span
                                        className="text-success"> <i className="ti ti-clock"></i></span> Urgent Attention </p>
                            </div>
                            <div id="pending-chart"></div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="avatar avatar-lg rounded-circle bg-indigo flex-shrink-0 mb-2"><i
                                                className="ti ti-medal fs-20"></i></span>
                                        <div className="mb-1 fs-13 fw-medium text-dark">Total Deals</div>
                                    </div>
                                    <h2 className="fs-24 fw-bold mb-0">348</h2>
                                </div>
                                <p className="mb-0 fs-12 fw-medium d-flex align-items-center gap-1"> <span
                                        className="text-success"> <i className="ti ti-trending-up"></i> +12%</span>Success Rate
                                </p>
                            </div>
                            <div id="total-deals-chart"></div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card overflow-hidden mb-0">
                            <div className="card-body pb-0">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="avatar avatar-lg rounded-circle bg-info flex-shrink-0 mb-2"><i
                                                className="ti ti-currency-dollar fs-20"></i></span>
                                        <div className="mb-1 fs-13 fw-medium text-dark">Total Revenue</div>
                                    </div>
                                    <h2 className="fs-24 fw-bold mb-0">$4348</h2>
                                </div>
                                <p className="mb-0 fs-12 fw-medium d-flex align-items-center gap-1"> <span
                                        className="text-success"> <i className="ti ti-trending-up"></i> +12%</span> Pipeline
                                    Growth </p>
                            </div>
                            <div id="total-revenue-chart"></div>
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
                                                    <span>Team ID</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Team Name</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Total Members</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Total Deals</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Target Achieved</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Status</span>
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
                                {/* 2nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-user me-2"></i>Team Name<i
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
                                                                        Business Development
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Brand & Communications
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Application Development
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Systems Engineering
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Accounting & Finance
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Customer Support
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
                                {/* 3rd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-category me-2"></i> Status<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg bg-light p-0">
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample2">
                                                <div className="filter-set-content mb-0">
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapsefour" data-bs-parent="#accordionExample2">
                                                        <div className="filter-content-list">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Excellent
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Good
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Average
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Poor
                                                                    </label>
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
                            <table className="table table-nowrap" id="Leads-conversion-time-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>Team ID</th>
                                        <th>Team Name</th>
                                        <th>Total Members</th>
                                        <th>Total Deals</th>
                                        <th>Target Achieved</th>
                                        <th>Status</th>
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

export default TeamPerformanceReport;
