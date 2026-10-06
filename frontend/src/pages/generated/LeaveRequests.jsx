import React from 'react';

const LeaveRequests = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from leave-requests.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Leave Requests<span className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">HRM</li>
                                <li className="breadcrumb-item active" aria-current="page">Leave Requests</li>
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
                <div className="row">
                    <div className="col-xl-6 d-flex">
                        <div className="row flex-fill">
                            <div className="col-lg-6 d-flex">
                                <div className="card flex-fill mb-4 bg-success-gradient w-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <span className="avatar avatar-lg rounded bg-success text-white">
                                                <i className="ti ti-circle-check fs-24"></i>
                                            </span>
                                            <div className="text-end">
                                                <p className="mb-0 text-white">Success Rate</p>
                                                <span className="d-block fw-bold fs-28 text-white">228</span>
                                            </div>
                                        </div>
                                        <p className="mb-2 pb-2 text-white border-bottom">Approved</p>
                                        <div className="d-flex align-items-center justify-content-between fs-12 text-white">
                                            Approval Rate <span>92%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className="card flex-fill mb-4 bg-danger-gradient w-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <span className="avatar avatar-lg rounded bg-danger text-white">
                                                <i className="ti ti-x fs-24"></i>
                                            </span>
                                            <div className="text-end">
                                                <p className="mb-0 text-white">Declined</p>
                                                <span className="d-block fw-bold fs-28 text-white">8</span>
                                            </div>
                                        </div>
                                        <p className="mb-2 pb-2 text-white border-bottom">Rejected</p>
                                        <div className="d-flex align-items-center justify-content-between fs-12 text-white">
                                            Rejection Rate <span>3.2%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className="card flex-fill mb-4 bg-info-gradient w-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <span className="avatar avatar-lg rounded bg-info text-white">
                                                <i className="ti ti-user-question fs-24"></i>
                                            </span>
                                            <div className="text-end">
                                                <p className="mb-0 text-white">Total</p>
                                                <span className="d-block fw-bold fs-28 text-white">300</span>
                                            </div>
                                        </div>
                                        <p className="mb-2 pb-2 text-white border-bottom">Leave Request</p>
                                        <div className="d-flex align-items-center justify-content-between fs-12 text-white">
                                            This Month <span>+10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className="card flex-fill mb-4 bg-warning-gradient w-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                            <span className="avatar avatar-lg rounded bg-warning text-white">
                                                <i className="ti ti-clock fs-24"></i>
                                            </span>
                                            <div className="text-end">
                                                <p className="mb-0 text-white">Urgent</p>
                                                <span className="d-block fw-bold fs-28 text-white">12</span>
                                            </div>
                                        </div>
                                        <p className="mb-2 pb-2 text-white border-bottom">Pending Approvals</p>
                                        <div className="d-flex align-items-center justify-content-between fs-12 text-white">
                                            Action Required <span>+10%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header border-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <div className="mb-0 fs-17 fw-bold text-dark">Attendance Status</div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle btn btn-outline-light shadow"
                                            data-bs-toggle="dropdown" href="#">
                                            Last 30 days
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#" className="dropdown-item">
                                                Last 15 days
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Last 30 days
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div id="attendance-status"></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row row-gap-3">
                                            <div className="col-6 pe-1">
                                                <div className="p-3 rounded bg-light">
                                                    <div className="d-flex align-items-center gap-1 mb-1 fs-13"><i
                                                            className="ti ti-circle-filled fs-10 text-success"></i> Approved
                                                    </div>
                                                    <span className="text-dark fs-18 fw-bold">45</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="p-3 rounded bg-light">
                                                    <div className="d-flex align-items-center gap-1 mb-1 fs-13"><i
                                                            className="ti ti-circle-filled fs-10 text-warning"></i> Pending
                                                    </div>
                                                    <span className="text-dark fs-18 fw-bold">3</span>
                                                </div>
                                            </div>
                                            <div className="col-6 pe-1">
                                                <div className="p-3 rounded bg-light">
                                                    <div className="d-flex align-items-center gap-1 mb-1 fs-13"><i
                                                            className="ti ti-circle-filled fs-10 text-danger"></i> Declined
                                                    </div>
                                                    <span className="text-dark fs-18 fw-bold">5</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="p-3 rounded bg-light">
                                                    <div className="d-flex align-items-center gap-1 mb-1 fs-13"><i
                                                            className="ti ti-circle-filled fs-10 text-info"></i> Request
                                                    </div>
                                                    <span className="text-dark fs-18 fw-bold">23</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Header */}

                {/* card start */}
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#add-modal"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add Leave
                            Request</a>
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
                                                        <a href="leave-requests.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">Employee</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseTwo" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
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
                                                                                src="assets/img/users/user-06.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Elizabeth Morgan
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-40.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Katherine Brooks
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-05.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Sophia Lopez
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-10.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>John Michael
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-15.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Natalie Brooks
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 pt-0 d-flex">View
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="leave-requests.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFive" aria-expanded="false"
                                                            aria-controls="collapseFive">Leave Type</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseFive" data-bs-parent="#accordionExample">
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
                                                                        Annual Leave
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
                                                                        Casual Leave
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Emergency Leave
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 pt-0 d-flex">View
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="leave-requests.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#type" aria-expanded="false"
                                                            aria-controls="type">Status</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="type" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Approved
                                                                    </label>
                                                                </li>
                                                                <li className="mb-0">
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

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="leave-request-list">
                                <thead className="table-light">
                                    <tr>
                                        <th>Leave ID</th>
                                        <th>Employee</th>
                                        <th>Leave Type</th>
                                        <th>Duration</th>
                                        <th>Days</th>
                                        <th>Status</th>
                                        <th className="no-sort">Action</th>
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
                        {/* /Projects List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default LeaveRequests;
