import React from 'react';

const EstimationsList = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from estimations-list.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Estimations<span className="badge badge-soft-primary ms-2">123</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Estimations</li>
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
                            data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                            Estimation</a>
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
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#project" aria-expanded="false"
                                                            aria-controls="project">Project</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="project" data-bs-parent="#accordionExample">
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
                                                                        Truelysell
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Dreamsports
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Best@laundry
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Doccure
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Client Name</a>
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
                                                                        BlueSky Industries
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Silver Hawk
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Summit Peak
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        RiverStone Ltd
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Bright Bridge Grp
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        CoastalStar Co.
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        HarborView
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Golden Gate Ltd
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
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date" aria-expanded="false"
                                                            aria-controls="date">Date of Estimation</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="date" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="input-group w-auto input-group-flat">
                                                                <input type="text" className="form-control"
                                                                    data-provider="flatpickr" data-date-format="d M, Y" />
                                                                <span className="input-group-text">
                                                                    <i className="ti ti-calendar"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">Estimated By</a>
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
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date2" aria-expanded="false"
                                                            aria-controls="date2">Expiry Date</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="date2" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="input-group w-auto input-group-flat">
                                                                <input type="text" className="form-control"
                                                                    data-provider="flatpickr" data-date-format="d M, Y" />
                                                                <span className="input-group-text">
                                                                    <i className="ti ti-calendar"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="estimations-list.html#" className="collapsed" data-bs-toggle="collapse"
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
                                                                        Accepted
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Draft
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Declined
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
                                                        <span>Estimations ID</span>
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
                                                        <span>Date</span>
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
                                                        <span>Expiry Date</span>
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
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Estimation By</span>
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
                                    <a href="/estimations-list" className="btn btn-sm p-1 border-0 fs-14 active"><i
                                            className="ti ti-list-tree"></i></a>
                                    <a href="/estimations"
                                        className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14"><i
                                            className="ti ti-grid-dots"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive table-nowrap custom-table no-filter">
                            <table className="table datatable">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" id="select-all" />
                                            </div>
                                        </th>
                                        <th className="no-sort"></th>
                                        <th>Estimations ID</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Project</th>
                                        <th>Estimation By</th>
                                        <th>Status</th>
                                        <th className="text-end no-sort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-md"><input className="form-check-input"
                                                    type="checkbox" /></div>
                                        </td>
                                        <td>
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274738</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-01.svg" alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="fs-14 fw-medium">NovaWave LLC</a>
                                            </h2>
                                        </td>
                                        <td>$2,15,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center">
                                                <a href="estimations-list.html#" className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/priority/truellysel.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="estimations-list.html#" className="fs-14 fw-medium">Truelysell</a>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center">
                                                <a href="estimations-list.html#" className="avatar avatar-sm me-2">
                                                    <img src="assets/img/profiles/avatar-19.jpg" alt="User Image"
                                                        className="rounded-circle" />
                                                </a>
                                                <a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Darlee
                                                    Robertson<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Facility Manager
                                                    </span>
                                                </a>
                                            </h2>
                                        </td>
                                        <td><span className="badge badge-status bg-teal">Sent</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"><i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274737</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center">
                                                <a href="/company-details"
                                                    className="avatar rounded-circle border me-2">
                                                    <img src="assets/img/icons/company-icon-02.svg" alt="User Image" />
                                                </a>
                                                <a href="/company-details" className="fs-14 fw-medium">BlueSky
                                                    Industries</a>
                                            </h2>
                                        </td>
                                        <td>$1,45,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center">
                                                <a href="estimations-list.html#" className="avatar rounded-circle border me-2">
                                                    <img className="w-auto h-auto" src="assets/img/priority/dreamchat.svg"
                                                        alt="User Image" />
                                                </a>
                                                <a href="estimations-list.html#" className="fs-14 fw-medium">Dreamschat</a>
                                            </h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-20.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Sharon Roy<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Installer
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-success">Accepted</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274736</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img
                                                        src="assets/img/icons/company-icon-03.svg" alt="User Image" /></a>
                                                <a href="/company-details" className="fs-14 fw-medium">Silver Hawk</a>
                                            </h2>
                                        </td>
                                        <td>$2,15,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/truellysell.svg"
                                                        alt="User Image" /></a><a href="estimations-list.html#"
                                                    className="fs-14 fw-medium">Truelysell</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-21.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Vaughan Lewis<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Senior Manager
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-warning">Draft</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274735</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-04.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">Summit Peak</a></h2>
                                        </td>
                                        <td>$4,80,380</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/servbook.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Servbook</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-23.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Jessica
                                                    Louise<span className="text-body d-flex mt-1 fs-13 fw-normal">Test
                                                        Engineer </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-success">Accepted</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274734</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-05.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">RiverStone Ventur</a></h2>
                                        </td>
                                        <td>$2,12,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/dream-pos.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">DreamPOS</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-16.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Carol Thomas<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">UI /UX Designer
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-danger">Declined</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274733</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-07.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">CoastalStar Co.</a></h2>
                                        </td>
                                        <td>$3,50,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/project-01.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Kofejob</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-22.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Dawn Mercha<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Technician
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-warning">Draft</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274732</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-08.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">HarborView</a></h2>
                                        </td>
                                        <td>$1,23,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/project-02.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Doccure</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-24.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Rachel
                                                    Hampton<span className="text-body d-flex mt-1 fs-13 fw-normal">Software
                                                        Developer </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-status bg-teal">Sent</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274731</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-09.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">Golden Gate Ltd</a></h2>
                                        </td>
                                        <td>$3,12,50</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/best.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Best@laundry</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-24.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Jonelle
                                                    Curtiss<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Supervisor
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-success">Accepted</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274730</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-10.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">Golden Gate Ltd</a></h2>
                                        </td>
                                        <td>$4,18,000</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/project-01.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Dreamsports</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-26.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Jonathan
                                                    Smith<span className="text-body d-flex mt-1 fs-13 fw-normal">Team Lead
                                                        Dev </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-danger">Declined</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                                            <div className="set-star rating-select"><i className="ti ti-star-filled"></i></div>
                                        </td>
                                        <td><a href="estimations-list.html#">#274729</a></td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="/company-details"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/icons/company-icon-01.svg"
                                                        alt="User Image" /></a><a href="/company-details"
                                                    className="fs-14 fw-medium">NovaWave LLC</a></h2>
                                        </td>
                                        <td>$4,80,380</td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar rounded-circle border me-2"><img className="w-auto h-auto"
                                                        src="assets/img/priority/truellysel.svg" alt="User Image" /></a><a
                                                    href="estimations-list.html#" className="fs-14 fw-medium">Truelysell</a></h2>
                                        </td>
                                        <td>
                                            <h2 className="d-flex align-items-center"><a href="estimations-list.html#"
                                                    className="avatar avatar-sm me-2"><img
                                                        src="assets/img/profiles/avatar-01.jpg" alt="User Image"
                                                        className="rounded-circle" /></a><a href="#"
                                                    className="d-flex flex-column fs-14 fw-medium d-flex">Brook Carter<span
                                                        className="text-body d-flex mt-1 fs-13 fw-normal">Team Lead Dev
                                                    </span></a></h2>
                                        </td>
                                        <td><span className="badge badge-pill badge-status bg-success">Accepted</span>
                                        </td>
                                        <td>
                                            <div className="dropdown table-action">
                                                <a href="estimations-list.html#"
                                                    className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvas_edit"> <i
                                                            className="ti ti-edit text-blue"></i> Edit</a>
                                                    <a className="dropdown-item" href="estimations-list.html#" data-bs-toggle="modal"
                                                        data-bs-target="#delete_estimations"><i className="ti ti-trash"></i>
                                                        Delete</a>
                                                    <a className="dropdown-item" href="#"
                                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvas_view"><i
                                                            className="ti ti-clipboard-copy text-violet"></i> View
                                                        Estimation</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-checks text-green"></i> Mark as
                                                        Accepted</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-file"></i> Mark as Draft</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-sticker text-blue"></i> Mark as
                                                        Declined</a>
                                                    <a className="dropdown-item" href="#"><i
                                                            className="ti ti-printer"></i> Print</a>
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
                        {/* /Projects List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default EstimationsList;
