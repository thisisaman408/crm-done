import React from 'react';

const Holidays = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from holidays.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Holidays<span className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">HRM</li>
                                <li className="breadcrumb-item active" aria-current="page">Holidays</li>
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


                {/* row start */}
                <div className="row">
                    <div className="col-xxl-3 col-xl-6 col-md-6 col-sm-6">
                        <div className="card shadow holiday-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <p className="mb-1 fs-13 fw-medium">Total Holidays</p>
                                        <div className="mb-0 fs-29 text-indigo fw-bold">474</div>
                                    </div>
                                    <span
                                        className="avatar avatar-lg rounded-lg bg-soft-indigo text-indigo inset-indigo fs-24 flex-shrink-0"><i
                                            className="ti ti-box fs-24"></i></span>
                                </div>
                                <div>
                                    <span className="fs-13 fw-medium mb-1 d-block text-soft-indigo">Active Holidays in
                                        2026</span>
                                    <span className="bg-indigo border-line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-md-6 col-sm-6">
                        <div className="card shadow holiday-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <p className="mb-1 fs-13 fw-medium">National Holidays </p>
                                        <div className="mb-0 fs-29 text-success fw-bold">7</div>
                                    </div>
                                    <span
                                        className="avatar avatar-lg rounded-lg bg-soft-success text-success inset-success fs-24 flex-shrink-0"><i
                                            className="ti ti-map-pin fs-24"></i></span>
                                </div>
                                <div>
                                    <span className="fs-13 fw-medium mb-1 d-block text-soft-success">Public Holidays </span>
                                    <span className="bg-success border-line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-md-6 col-sm-6">
                        <div className="card shadow holiday-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <p className="mb-1 fs-13 fw-medium">Company Holidays</p>
                                        <div className="mb-0 fs-29 text-info fw-bold">474</div>
                                    </div>
                                    <span
                                        className="avatar avatar-lg rounded-lg bg-soft-info text-info inset-info fs-24 flex-shrink-0"><i
                                            className="ti ti-gift fs-24"></i></span>
                                </div>
                                <div>
                                    <span className="fs-13 fw-medium mb-1 d-block text-soft-info">Organization
                                        specific</span>
                                    <span className="bg-info border-line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-md-6 col-sm-6">
                        <div className="card shadow holiday-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div>
                                        <p className="mb-1 fs-13 fw-medium">Optional Holidays</p>
                                        <div className="mb-0 fs-29 text-danger fw-bold">8</div>
                                    </div>
                                    <span
                                        className="avatar avatar-lg rounded-lg bg-soft-danger text-danger inset-danger fs-24 flex-shrink-0"><i
                                            className="ti ti-chart-line fs-24"></i></span>
                                </div>
                                <div>
                                    <span className="fs-13 fw-medium mb-1 d-block text-soft-danger">Employee Choice</span>
                                    <span className="bg-danger border-line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row end */}

                {/* card start */}
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#add_holiday"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                            Holiday</a>
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
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
                                <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                                    <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                        className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-filter me-2"></i>Filter<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg p-0">
                                        <div
                                            className="filter-header d-flex align-items-center justify-content-between border-bottom">
                                            <h4 className="mb-0 fs-16"><i className="ti ti-filter me-1"></i>Filter</h4>
                                            <button type="button" className="btn-close close-filter-btn"
                                                data-bs-dismiss="dropdown-menu" aria-label="Close"></button>
                                        </div>
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="holidays.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Holiday Name</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="mb-1">
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
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Good Friday
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Company Foundation Day
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Diwali
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Christmas
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        New Year Eve
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 pt-0 d-flex">Load
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="holidays.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#owner" aria-expanded="false"
                                                            aria-controls="owner">Applicable Location</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="owner" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="mb-1">
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
                                                                        <img src="assets/img/flags/us.svg" alt="us"
                                                                            className="me-2 img-fluid avatar avatar-xs" /> USA
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <img src="assets/img/flags/ca.png" alt="us"
                                                                            className="me-2 img-fluid avatar avatar-xs" />
                                                                        Canada
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <img src="assets/img/flags/spain.svg"
                                                                            alt="spain"
                                                                            className="me-2 img-fluid avatar avatar-xs" />
                                                                        Spain
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <img src="assets/img/flags/india.svg"
                                                                            alt="india"
                                                                            className="me-2 img-fluid avatar avatar-xs" />
                                                                        India
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <img src="assets/img/flags/brazil.svg" alt="us"
                                                                            className="me-2 img-fluid avatar avatar-xs" />
                                                                        Brazil
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 pt-0 d-flex">Load
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="holidays.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Status" aria-expanded="false"
                                                            aria-controls="Status">Status</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="Status" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Active
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Inactive
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href="#"
                                                    className="btn btn-outline-light w-100">Reset</a>
                                                <a href="#" className="btn btn-primary w-100">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Campaign List */}
                        <div className="table-responsive table-nowrap custom-table">
                            <table className="table table-nowrap" id="holidays-list">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">Holiday ID</th>
                                        <th className="no-sort">Holiday Name</th>
                                        <th className="no-sort">Date</th>
                                        <th className="no-sort">Day</th>
                                        <th className="no-sort">Applicable Location</th>
                                        <th className="no-sort">Status</th>
                                        <th className="text-end no-sort">Action</th>
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
                        {/* /Campaign List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default Holidays;
