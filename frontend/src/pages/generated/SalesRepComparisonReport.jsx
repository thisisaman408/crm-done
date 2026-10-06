import React from 'react';

const SalesRepComparisonReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from sales-rep-comparison-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Sales Rep Comparison Report<span
                                className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">User & Team Reports </li>
                                <li className="breadcrumb-item active" aria-current="page">Sales Rep Comparison Report </li>
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
                <div className="row row-gap-3">
                    {/* Item 1 */}
                    <div className="col-xxl-8 col-xl-7">
                        {/* start card */}
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-1 fs-16">Monthly Estimation Trend</h5>
                                <p className="mb-0">Deals & Revenue metrics</p>
                            </div>
                            <div className="card-body">
                                <div id="sales-rep-chart"></div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <p className="fs-14 fw-medium mb-0 text-dark d-flex align-items-center gap-2">Deals
                                        Closed <img src="assets/img/icons/arrow-icon.svg" alt="arrow" /> <span
                                            className="text-success">Revenue</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="col-xxl-4 col-xl-5">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0 fs-16">Top Performer</h5>
                            </div>
                            <div className="card-body">
                                {/* Item 1 */}
                                <div className="card border-0 mb-4 bg-light-gradient">
                                    <div className="card-body">
                                        <h6 className="fs-28 mb-3">$285K</h6>
                                        <div className="d-flex align-items-center fs-14 fw-medium mb-2">
                                            <a href="#" className="d-flex align-items-center">
                                                <span className="avatar me-2">
                                                    <img className="img-fluid rounded-circle"
                                                        src="assets/img/profiles/avatar-01.jpg" alt="User Image" />
                                                </span>Robert Sheldon
                                            </a>
                                        </div>
                                        <p className="d-flex align-items-center gap-1 mb-0">45 deals closed <span
                                                className="d-flex align-items-center fs-6"><i
                                                    className="ti ti-point-filled"></i></span> 86.5% conversion</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="card border-0 mb-0 bg-light-gradient">
                                    <div className="card-body">
                                        <h6 className="fs-28 mb-3">$194K</h6>
                                        <div className="d-flex align-items-center fs-14 fw-medium mb-2">
                                            <a href="#" className="d-flex align-items-center">
                                                <span className="avatar me-2">
                                                    <img className="img-fluid rounded-circle"
                                                        src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                                </span>John Smith
                                            </a>
                                        </div>
                                        <p className="d-flex align-items-center gap-1 mb-0">32 deals closed <span
                                                className="d-flex align-items-center fs-6"><i
                                                    className="ti ti-point-filled"></i></span> 78.2% conversion</p>
                                    </div>
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
                                                    <span>Sales Rep ID</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Sales Rep Name</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Team</span>
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
                                                    <span>Total Revenue</span>
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
                                {/* 1nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-user me-2"></i>Sales Rep Name<i
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
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Robert Sheldon
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-02.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Emma Sandoval
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-03.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Mike Matheson
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-04.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Natalie Ensley
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Antonio Warthen
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Carol Robillard
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
                            <table className="table table-nowrap" id="Leads-conversion-time-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>Sales Rep ID</th>
                                        <th>Sales Rep Name</th>
                                        <th>Team</th>
                                        <th>Total Deals</th>
                                        <th>Total Revenue</th>
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

export default SalesRepComparisonReport;
