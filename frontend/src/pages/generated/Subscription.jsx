import React from 'react';

const Subscription = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from subscription.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Subscription<span className="badge badge-soft-primary ms-2">178</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Subscription</li>
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
                                                        <a href="subscription.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Plan</a>
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
                                                                        Basic
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Advanced
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Enterprise
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="subscription.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#country" aria-expanded="false"
                                                            aria-controls="country">Payment</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="country" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Paypal
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Credit Card
                                                                    </label>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Debit Card
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="subscription.html#" className="collapsed" data-bs-toggle="collapse"
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
                                                                        Paid
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Unpaid
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
                                                <a href="/subscription" className="btn btn-primary w-100">Filter</a>
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
                                                        <span>Plan Name</span>
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
                                                        <span>Plan Type</span>
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
                                                        <span>Total Subscribers</span>
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
                                                        <span>Price</span>
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
                                                        <span>Created Date</span>
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
                                        <th>Subscriber</th>
                                        <th>Plan</th>
                                        <th>Billing Cycle</th>
                                        <th>Payment Method</th>
                                        <th>Amount</th>
                                        <th>Created Date</th>
                                        <th>Expiring On</th>
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
                                        <td>Advanced (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Credit Card</td>
                                        <td>$200</td>
                                        <td>01 Nov 2025</td>
                                        <td>01 Nov 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Basic (Yearly)</td>
                                        <td>365 Days</td>
                                        <td>Paypal</td>
                                        <td>$600</td>
                                        <td>10 Oct 2025</td>
                                        <td>10 Oct 2026</td>
                                        <td><span className="badge bg-danger">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Advanced (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Debit Card</td>
                                        <td>$200</td>
                                        <td>16 Sep 2025</td>
                                        <td>16 Sep 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Advanced (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Paypal</td>
                                        <td>$200</td>
                                        <td>20 Jul 2025</td>
                                        <td>20 Jul 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Enterprise (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Credit Card</td>
                                        <td>$400</td>
                                        <td>17 Jul 2025</td>
                                        <td>17 Jul 2026</td>
                                        <td><span className="badge bg-danger">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Advanced (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Paypal</td>
                                        <td>$200</td>
                                        <td>01 July 2025</td>
                                        <td>01 July 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Enterprise (Yearly)</td>
                                        <td>365 Days</td>
                                        <td>Credit Card</td>
                                        <td>$4800</td>
                                        <td>28 May 2025</td>
                                        <td>28 May 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Basic (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Credit Card</td>
                                        <td>$50</td>
                                        <td>20 May 2025</td>
                                        <td>20 May 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Basic (Yearly)</td>
                                        <td>365 Days</td>
                                        <td>Paypal</td>
                                        <td>$600</td>
                                        <td>12 May 2025</td>
                                        <td>12 May 2026</td>
                                        <td><span className="badge bg-danger">Unpaid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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
                                        <td>Advanced (Monthly)</td>
                                        <td>30 Days</td>
                                        <td>Credit Card</td>
                                        <td>$200</td>
                                        <td>14 Apr 2025</td>
                                        <td>14 Apr 2026</td>
                                        <td><span className="badge bg-success">Paid</span></td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="subscription.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_download">
                                                        <i className="ti ti-edit text-blue me-1"></i>Download
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_subscribe">
                                                        <i className="ti ti-trash text-blue me-1"></i>Delete
                                                    </a>
                                                    <a className="dropdown-item" href="subscription.html#" data-bs-toggle="modal"
                                                        data-bs-target="#subscribe_detail">
                                                        <i className="ti ti-eye text-blue me-1"></i>Preview
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

export default Subscription;
