import React from 'react';

const DepartmentsList = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from departments-list.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Departments<span className="badge badge-soft-primary ms-2">125</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Departments</li>
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

                {/* card start */}
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <div className="d-inline-flex align-items-center flex-wrap gap-3">
                            <div className="d-inline-flex align-items-center shadow p-1 rounded border view-icons bg-white">
                                <a href="/departments-list" className="btn p-2 border-0 fs-14 active"><i
                                        className="ti ti-list-tree"></i></a>
                                <a href="/departments" className="flex-shrink-0 btn p-2 border-0 ms-1 fs-14"><i
                                        className="ti ti-grid-dots"></i></a>
                            </div>
                            <a href="#" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#add_department"><i
                                    className="ti ti-square-rounded-plus-filled me-1"></i>Add Department</a>
                        </div>
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
                                                        <a href="departments-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Department Name</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Sales
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Engineering
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Marketing
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Designing
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Finance
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 d-flex">Load
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="departments-list.html#" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="true"
                                                            aria-controls="collapseTwo">Department Head</a>
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
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-01.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>William Turner
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-13.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Ava Martinez
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-12.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Nathan Reed
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-03.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Lily Anderson
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/users/user-18.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Ryan Coleman
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 d-flex">Load
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="departments-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#location" aria-expanded="false"
                                                            aria-controls="location">Location</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="location" data-bs-parent="#accordionExample">
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
                                                        <a href="departments-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFive" aria-expanded="false"
                                                            aria-controls="collapseFive">Status</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseFive" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Active
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
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
                                                <a href="/contacts-list" className="btn btn-primary w-100">Filter</a>
                                            </div>
                                        </div>
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

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Department ID</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Department Name</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Department Head</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Members Count</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Associated Teams</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Location</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Status</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Action</span>
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
                        {/* table header */}

                        {/* Contact List */}
                        <div className="table-responsive custom-table">
                            <table className="table table-nowrap" id="departments-list">
                                <thead className="table-light">
                                    <tr>
                                        <th>Department ID</th>
                                        <th>Department Name</th>
                                        <th>Department Head</th>
                                        <th>Members Count</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th className="text-end no-sort">Action</th>
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
                        {/* /Contact List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default DepartmentsList;
