import React from 'react';

const Company = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from company.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Companies<span className="badge badge-soft-primary ms-2">152</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Companies</li>
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
                        <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New
                            Page</a>
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
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
                                                        <a href="company.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#country" aria-expanded="false"
                                                            aria-controls="country">Country</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="country" data-bs-parent="#accordionExample">
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
                                                                        USA
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        France
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Italy
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Germany
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
                                                        <a href="company.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#owner" aria-expanded="false"
                                                            aria-controls="owner">Owner</a>
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
                                                                        Hendry Milner
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Guilory Berggren
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Jami Carlile
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Theresa Nelson
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Smith Cooper
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
                                                        <a href="company.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Tags</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Collab
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Promotion
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        VIP
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="company.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="false"
                                                            aria-controls="collapseOne">Rating</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseOne" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span className="rating">
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <span className="ms-1">5.0</span>
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span className="rating">
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <span className="ms-1">4.0</span>
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span className="rating">
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <span className="ms-1">3.0</span>
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span className="rating">
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <span className="ms-1">2.0</span>
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span className="rating">
                                                                            <i
                                                                                className="ti ti-star-filled text-warning"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <i className="ti ti-star-filled"></i>
                                                                            <span className="ms-1">1.0</span>
                                                                        </span>
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="company.html#" className="collapsed" data-bs-toggle="collapse"
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
                                                <a href="/company" className="btn btn-primary w-100">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                                    <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                        className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle btn btn-outline-light shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item">Recently Viewed</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">Recently Added</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">Ascending</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">Descending</a>
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

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Name</span>
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
                                                        <span>Email</span>
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
                                                        <span>Account URL</span>
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
                                                        <span>Plan</span>
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
                                                        <span>Created Dated</span>
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
                                                        <span>Status</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
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

                        {/* Report List */}
                        <div className="table-responsive custom-table">
                            <table className="table table-nowrap">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" id="select-all" />
                                            </div>
                                        </th>
                                        <th className="no-sort"></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Account URL</th>
                                        <th>Plan</th>
                                        <th>Created Dated</th>
                                        <th>Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select filled"><i
                                                    className="ti ti-star-filled fs-16"></i></div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-01.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">NovaWave LLC</a>
                                            </div>
                                        </td>
                                        <td>nova@llc.com</td>
                                        <td>nw.nova.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Advanced (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>25 Feb 2025, 01:22 PM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-02.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">BlueSky Industries</a>
                                            </div>
                                        </td>
                                        <td>bluesky@ind.com</td>
                                        <td>bl.blue.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Enterprise (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>03 Apr 2025, 09:45AM</td>
                                        <td><span className="badge bg-danger">Inactive</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-03.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">Silver Hawk</a>
                                            </div>
                                        </td>
                                        <td>silver@hawk.com</td>
                                        <td>sh.silver.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Advanced (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>14 Apr 2025, 11:11AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-04.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">Summit Peak</a>
                                            </div>
                                        </td>
                                        <td>sumpK@peak.com</td>
                                        <td>sp.summer.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Advanced (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>12 May 2025, 01:09AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-05.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">RiverStone Ventur</a>
                                            </div>
                                        </td>
                                        <td>stone@river.com</td>
                                        <td>ro.stone.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Basic (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>28 May 2025, 07:08AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-06.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">Bright Bridge Grp</a>
                                            </div>
                                        </td>
                                        <td>bright@grp.com</td>
                                        <td>bb.bright.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Enterprise (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>01 July 2025, 02:15AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-07.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">CoastalStar Co.</a>
                                            </div>
                                        </td>
                                        <td>coastal@star.com</td>
                                        <td>cs.coastal.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Advanced (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>20 Jul 2025, 10:25AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-08.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">HarborView</a>
                                            </div>
                                        </td>
                                        <td>harbor@view.com</td>
                                        <td>hv.harbor.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Advanced (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>16 Sep 2025, 02:10 PM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-09.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">Golden Gate Ltd</a>
                                            </div>
                                        </td>
                                        <td>golden@gate.com</td>
                                        <td>ggt.golden.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Enterprise (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>10 Oct 2025, 10:15AM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar rounded-circle border p-1 me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-10.svg" alt="User Image" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fw-medium">Redwood Inc</a>
                                            </div>
                                        </td>
                                        <td>wood@inc.com</td>
                                        <td>ri.redwood.com</td>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Basic (Monthly)</span>
                                                <a href="#"
                                                    className="badge badge-tag badge-soft-info ms-2"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#upgrade_plan">Upgrade</a>
                                            </div>
                                        </td>
                                        <td>01 Nov 2025, 01:32 PM</td>
                                        <td><span className="badge bg-success">Active</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="company.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit">
                                                        <i className="ti ti-edit text-blue me-1"></i>Edit
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_company">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="company.html#" data-bs-toggle="modal"
                                                        data-bs-target="#company_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>View
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
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

export default Company;
