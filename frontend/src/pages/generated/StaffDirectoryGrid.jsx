import React from 'react';

const StaffDirectoryGrid = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from staff-directory-grid.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Staff Directory</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Staff Directory</li>
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

                {/* table header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <div className="dropdown">
                            <a href="#" className="btn btn-outline-light shadow px-2"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                    className="ti ti-filter me-2"></i>Filter<i className="ti ti-chevron-down ms-2"></i></a>
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
                                                <a href="staff-directory-grid.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false"
                                                    aria-controls="collapseTwo">Employee</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse"
                                                id="collapseTwo" data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <div className="mb-2">
                                                        <div className="input-icon-start input-icon position-relative">
                                                            <span className="input-icon-addon fs-12">
                                                                <i className="ti ti-search"></i>
                                                            </span>
                                                            <input type="text" className="form-control form-control-md"
                                                                placeholder="Search" />
                                                        </div>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-06.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Elizabeth Morgan
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-40.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Katherine Brooks
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-05.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Sophia Lopez
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-10.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>John Michael
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
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
                                                <a href="staff-directory-grid.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#owner" aria-expanded="false"
                                                    aria-controls="owner">Department Name</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="owner"
                                                data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <div className="mb-1">
                                                        <div className="input-icon-start input-icon position-relative">
                                                            <span className="input-icon-addon fs-12">
                                                                <i className="ti ti-search"></i>
                                                            </span>
                                                            <input type="text" className="form-control form-control-md"
                                                                placeholder="Search" />
                                                        </div>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Sales
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Marketing
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Engineering
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Designing
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Finance
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
                                                <a href="staff-directory-grid.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#type" aria-expanded="false"
                                                    aria-controls="type">Team Name</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="type"
                                                data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <div className="mb-1">
                                                        <div className="input-icon-start input-icon position-relative">
                                                            <span className="input-icon-addon fs-12">
                                                                <i className="ti ti-search"></i>
                                                            </span>
                                                            <input type="text" className="form-control form-control-md"
                                                                placeholder="Search" />
                                                        </div>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Customer Success
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Product Strategy
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Business Operations
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Legal & Compliance
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Business Intelligence
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
                                                <a href="staff-directory-grid.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#Status" aria-expanded="false"
                                                    aria-controls="Status">Status</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="Status"
                                                data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Active
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
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
                                        <a href="#" className="btn btn-outline-light w-100">Reset</a>
                                        <a href="#" className="btn btn-primary w-100">Filter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <div className="d-flex align-items-center shadow p-2 rounded border bg-white view-icons">
                            <a href="/staff-directory-list" className="btn btn-sm p-1 border-0 fs-14"><i
                                    className="ti ti-list-tree"></i></a>
                            <a href="/staff-directory-grid"
                                className="flex-shrink-0 btn btn-sm active p-1 border-0 ms-1 fs-14"><i
                                    className="ti ti-grid-dots"></i></a>
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#add-modal"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                            Staff</a>
                    </div>
                </div>
                {/* table header */}

                {/* staff Grid */}
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-16.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Albert Morgan</a></div>
                                            <p className="text-default mb-0 fs-13">albert@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Sales Lead</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Sales</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-12.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-danger position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Katherine Brooks</a></div>
                                            <p className="text-default mb-0 fs-13">katherine@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Content Writer</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Marketing</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-08.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Samantha Reed</a></div>
                                            <p className="text-default mb-0 fs-13">samantha@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Accountant</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Finance</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-10.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">William Anderson</a></div>
                                            <p className="text-default mb-0 fs-13">william@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">UI Designer</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Design</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-24.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Jonathan Mitchell</a></div>
                                            <p className="text-default mb-0 fs-13">jonathan@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Support Lead</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Support</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-25.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Jennifer Adams</a></div>
                                            <p className="text-default mb-0 fs-13">jennifer@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Finance Analyst</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Finance</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-27.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Alexander Carter</a></div>
                                            <p className="text-default mb-0 fs-13">alexander@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Sales Rep</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Sales</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-10.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">William Anderson</a></div>
                                            <p className="text-default mb-0 fs-13">william@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">UI Designer</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Design</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <a href="/contact-details"
                                            className="avatar avatar-md flex-shrink-0 me-2 position-relative">
                                            <img src="assets/img/profiles/avatar-16.jpg" alt="img"
                                                className="rounded-circle" />
                                            <span className="online text-success position-absolute end-0 bottom-0 fs-8"><i
                                                    className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"></i></span>
                                        </a>
                                        <div>
                                            <div className="fs-14 mb-1 text-dark"><a href="/contact-details"
                                                    className="fw-semibold">Albert Morgan</a></div>
                                            <p className="text-default mb-0 fs-13">albert@example.com</p>
                                        </div>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="staff-directory-grid.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#edit-modal"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="staff-directory-grid.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"><i className="ti ti-trash"></i> Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 border rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span><i className="ti ti-briefcase text-dark"></i> Role</span><span
                                            className="fw-medium text-dark">Sales Lead</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-0">
                                        <span><i className="ti ti-float-center text-dark"></i> Department</span><span
                                            className="fw-medium text-dark">Sales</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* staff Grid */}

                <div className="load-btn text-center">
                    <a href="#" className="btn btn-dark"><i className="ti ti-loader me-1"></i> Load More</a>
                </div>
        </div>
    );
};

export default StaffDirectoryGrid;
