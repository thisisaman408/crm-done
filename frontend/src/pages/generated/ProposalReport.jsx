import React from 'react';

const ProposalReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from proposal-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Proposal Report <span className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">Document Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Proposal Report </li>
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
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card overflow-hidden proposal-card mb-0">
                            <div
                                className="d-flex align-items-start justify-content-between flex-wrap gap-2 bg-success-gradient-5 p-3">
                                <div>
                                    <p className="text-white mb-1">Total Proposals</p>
                                    <h2 className="fs-32 text-white mb-0">6</h2>
                                </div>
                                <div className="avatar rounded-lg shadow fs-16">
                                    <i className="ti ti-file"></i>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-center gap-2 p-3">
                                <span
                                    className="avatar avatar-xs rounded-lg bg-soft-success text-success border border-success"><i
                                        className="ti ti-clock"></i></span>
                                <p className="d-flex align-items-center fw-semibold mb-0 gap-1"> <span
                                        className="text-success">+12</span> vs Last Month </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card overflow-hidden proposal-card mb-0">
                            <div
                                className="d-flex align-items-start justify-content-between flex-wrap gap-2 bg-danger-gradient-5 p-3">
                                <div>
                                    <p className="text-white mb-1">Pending Review</p>
                                    <h2 className="fs-32 text-white mb-0">20</h2>
                                </div>
                                <div className="avatar rounded-lg shadow fs-16">
                                    <i className="ti ti-cash-edit"></i>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-center gap-2 p-3">
                                <span
                                    className="avatar avatar-xs rounded-lg bg-soft-danger text-danger border border-danger"><i
                                        className="ti ti-trending-up"></i></span>
                                <p className="d-flex align-items-center fw-semibold mb-0 gap-1"> Urgent Attention </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card overflow-hidden proposal-card mb-0">
                            <div
                                className="d-flex align-items-start justify-content-between flex-wrap gap-2 bg-info-gradient-5 p-3">
                                <div>
                                    <p className="text-white mb-1">Approved</p>
                                    <h2 className="fs-32 text-white mb-0">44</h2>
                                </div>
                                <div className="avatar rounded-lg shadow fs-16">
                                    <i className="ti ti-checkbox"></i>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-center gap-2 p-3">
                                <span className="avatar avatar-xs rounded-lg bg-soft-info text-info border border-info"><i
                                        className="ti ti-trending-up"></i></span>
                                <p className="d-flex align-items-center fw-semibold mb-0 gap-1"> <span
                                        className="text-info">+12</span> Success Rate </p>
                            </div>
                        </div>
                    </div>
                    {/* Item 4 */}
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card overflow-hidden proposal-card mb-0">
                            <div
                                className="d-flex align-items-start justify-content-between flex-wrap gap-2 bg-warning-gradient-5 p-3">
                                <div>
                                    <p className="text-white mb-1">Total Value</p>
                                    <h2 className="fs-32 text-white mb-0">$2000</h2>
                                </div>
                                <div className="avatar rounded-lg shadow fs-16">
                                    <i className="ti ti-cash-banknote"></i>
                                </div>
                            </div>
                            <div className="card-body d-flex align-items-center gap-2 p-3">
                                <span
                                    className="avatar avatar-xs rounded-lg bg-soft-warning text-warning border border-warning"><i
                                        className="ti ti-trending-up"></i></span>
                                <p className="d-flex align-items-center fw-semibold mb-0 gap-1"> Pipeline Growth </p>
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
                                                    <span>Proposal</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Client</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Value</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Submited Date</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Due Date</span>
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
                                            className="ti ti-users me-2"></i>Client<i
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
                                                                                alt="img" /></span>Robert Johnson
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
                                                                                alt="img" /></span>Isabella Cooper
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
                                                                                alt="img" /></span>John Smith
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
                                                                                alt="img" /></span>Sophia Parker
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
                                                                                alt="img" /></span>Ethan Reynolds
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
                                                                                alt="img" /></span>Liam Carter
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
                                {/* 2nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-layout-grid me-2"></i>Status<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg bg-light p-0">
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample2">
                                                <div className="filter-set-content mb-0">
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseThree2" data-bs-parent="#accordionExample2">
                                                        <div className="filter-content-list">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Approved
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Sent
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Pending
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Rejected
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
                            <table className="table table-nowrap" id="proposal-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>Proposal</th>
                                        <th>Client</th>
                                        <th>Value</th>
                                        <th>Submited Date</th>
                                        <th>Due Date</th>
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

export default ProposalReport;
