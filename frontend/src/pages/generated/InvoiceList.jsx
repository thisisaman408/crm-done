import React from 'react';

const InvoiceList = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from invoice-list.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Invoices<span className="badge badge-soft-primary ms-2">125</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Invoices</li>
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
                            Invoice</a>
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-outline-light px-2 fs-16 fw-bold border-0"
                                        data-bs-toggle="dropdown">All Invoices</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item"><i
                                                        className="ti ti-dots-vertical me-1"></i>All Invoices</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"><i
                                                        className="ti ti-dots-vertical me-1"></i>Paid</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"><i
                                                        className="ti ti-dots-vertical me-1"></i>Partially Paid</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"><i
                                                        className="ti ti-dots-vertical me-1"></i>Overdue</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"><i
                                                        className="ti ti-dots-vertical me-1"></i>Unpaid</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                                        <a href="invoice-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Client</a>
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
                                                                        NovaWave LLC
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Redwood Inc
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Harborview
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="invoice-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#owner" aria-expanded="false"
                                                            aria-controls="owner">Project</a>
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
                                                                        Turelysell
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Dreamschat
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        DreamGigs
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Servbook
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="invoice-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Status" aria-expanded="false"
                                                            aria-controls="Status">Amount</a>
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
                                                                        $2,15,000
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $1,45,000
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $2,12,000
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        $4,80,380
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
                                                <a href="/invoice-list" className="btn btn-primary w-100">Filter</a>
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

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Invoice ID</span>
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
                                                        <span>Client</span>
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
                                                        <span>Project</span>
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
                                                        <span>Due Date</span>
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
                                                        <span>Amount</span>
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
                                                        <span>Paid AMount</span>
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
                                            <li className="gap-1 d-flex align-items-center mb-0">
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
                                <div className="d-flex align-items-center shadow p-1 rounded border view-icons bg-white">
                                    <a href="/invoice-list" className="btn btn-sm p-1 border-0 fs-14 active"><i
                                            className="ti ti-list-tree"></i></a>
                                    <a href="/invoices" className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14"><i
                                            className="ti ti-grid-dots"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* table header */}

                        {/* contracts List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" id="select-all" />
                                            </div>
                                        </th>
                                        <th></th>
                                        <th>Invoice ID</th>
                                        <th>Client</th>
                                        <th>Project</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Paid Amount</th>
                                        <th>Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265781</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-01.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">NovaWave
                                                    LLC</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-01.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">Truelysell</a>
                                            </h6>
                                        </td>
                                        <td>22 Jun 2025</td>
                                        <td>$2,15,000</td>
                                        <td>$2,15,000</td>
                                        <td><span className="badge bg-warning">Partially Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265782</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-02.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">BlueSky
                                                    Industries</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-02.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">Dreamschat</a>
                                            </h6>
                                        </td>
                                        <td>20 May 2025</td>
                                        <td>$1,45,000</td>
                                        <td>$1,45,000</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265783</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-03.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">Silver
                                                    Hawk</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-03.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">DreamGigs</a>
                                            </h6>
                                        </td>
                                        <td>30 Apr 2025</td>
                                        <td>$2,15,000</td>
                                        <td>$1,00,000</td>
                                        <td><span className="badge bg-warning">Partially Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265784</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-04.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">Summit
                                                    Peak</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-04.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">Servbook</a>
                                            </h6>
                                        </td>
                                        <td>21 Apr 2025</td>
                                        <td>$4,80,380</td>
                                        <td>$4,80,380</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265785</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-05.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">RiverStone
                                                    Ltd</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-05.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">DreamPOS</a>
                                            </h6>
                                        </td>
                                        <td>19 Mar 2025</td>
                                        <td>$2,12,000</td>
                                        <td>$0</td>
                                        <td><span className="badge bg-danger">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265786</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-06.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">Bright Bridge
                                                    Grp</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-06.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">Kofejob</a>
                                            </h6>
                                        </td>
                                        <td>11 Mar 2025</td>
                                        <td>$3,50,000</td>
                                        <td>$1,50,000</td>
                                        <td><span className="badge bg-warning">Partially Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265787</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-07.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">CoastalStar
                                                    Co.</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-07.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">SmartHR</a>
                                            </h6>
                                        </td>
                                        <td>17 Feb 2025</td>
                                        <td>$1,23,000</td>
                                        <td>$1,23,000</td>
                                        <td><span className="badge bg-info">Overdue</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265788</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-08.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">HarborView</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-08.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details" className="d-flex flex-column">Doccure</a>
                                            </h6>
                                        </td>
                                        <td>07 Feb 2025</td>
                                        <td>$3,12,500</td>
                                        <td>$3,12,500</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265789</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-09.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">Golden Gate
                                                    Ltd</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-09.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details"
                                                    className="d-flex flex-column">Best@laundry</a>
                                            </h6>
                                        </td>
                                        <td>20 Jan 2025</td>
                                        <td>$4,18,000</td>
                                        <td>$0</td>
                                        <td><span className="badge bg-danger">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
                                            </div>
                                        </td>
                                        <td><a href="/invoices-details" className="title-name">#1265790</a></td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/company/company-10.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="d-flex flex-column">Redwood
                                                    Inc</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="d-flex align-items-center fs-14 mb-0 fw-medium">
                                                <a href="/project-details"
                                                    className="avatar avatar-rounded border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/projects/project-10.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="/project-details"
                                                    className="d-flex flex-column">Dreamsports</a>
                                            </h6>
                                        </td>
                                        <td>18 Jan 2025</td>
                                        <td>$5,00,000</td>
                                        <td>$5,00,000</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="invoice-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                                        className="ti ti-dots-vertical"></i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i className="ti ti-edit me-1"></i>
                                                        Edit</a>
                                                    <a className="dropdown-item" href="invoice-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_invoices"><i
                                                            className="ti ti-trash me-1"></i>Delete</a>
                                                    <a className="dropdown-item" href="/invoices-details"><i
                                                            className="ti ti-clipboard-copy me-1"></i> View Invoices</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks me-1"></i> Mark as Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file me-1"></i> Mark as Partially Paid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker me-1"></i> Mark ad Unpaid</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer me-1"></i> Print</a>
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
                        {/* /contracts List */}

                    </div>
                </div>
                {/* card end */}

                <div className="load-btn text-center">
                    <a href="#" className="btn btn-primary"><i className="ti ti-loader me-1"></i> Load
                        More</a>
                </div>
        </div>
    );
};

export default InvoiceList;
