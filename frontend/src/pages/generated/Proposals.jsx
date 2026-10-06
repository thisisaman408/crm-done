import React from 'react';

const Proposals = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from proposals.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Proposals<span className="badge badge-soft-primary ms-2">125</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Proposals</li>
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
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">Subjects</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse"
                                                id="collapseThree" data-bs-parent="#accordionExample">
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
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                SEO Proposals
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Web Design
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Logo & Branding
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Development
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Logo
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-set-content">
                                            <div className="filter-set-content-head">
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#owner" aria-expanded="false"
                                                    aria-controls="owner">Sent to</a>
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
                                                                NovaWave LLC
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Redwood Inc
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                HarborVie w
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                CoastalStar Co.
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                RiverStone Ventur
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
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#date" aria-expanded="false"
                                                    aria-controls="date">Date of Proposals</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="date"
                                                data-bs-parent="#accordionExample">
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
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#date2" aria-expanded="false"
                                                    aria-controls="date2">Create Date</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="date2"
                                                data-bs-parent="#accordionExample">
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
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#project" aria-expanded="false"
                                                    aria-controls="project">Project</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="project"
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
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Truelysell
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Dreamsports
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Best@laundry
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
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
                                                <a href="proposals.html#" className="collapsed" data-bs-toggle="collapse"
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
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <div className="d-flex align-items-center shadow p-1 rounded border view-icons bg-white">
                            <a href="/proposals-list" className="btn btn-sm p-1 border-0 fs-14"><i
                                    className="ti ti-list-tree"></i></a>
                            <a href="/proposals" className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14 active"><i
                                    className="ti ti-grid-dots"></i></a>
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New
                            Proposal</a>
                    </div>
                </div>
                {/* table header */}

                {/* Proposal Grid */}
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success">Accepted</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-01.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">NovaWave
                                                LLC</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger">Deleted</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-02.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">Redwood
                                                Inc</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-info">Draft</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-03.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">HarborView</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-secondary">Declined</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-04.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">CoastalStar Co.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-secondary">Declined</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-05.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">Summit
                                                Peak</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-teal">Sent</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-07.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">Silver
                                                Hawk</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger">Deleted</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-06.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">BlueSky
                                                Industries</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                    <div className="flex-shrink-0">
                                        <span className="badge badge-soft-info">#1493016</span>
                                    </div>
                                    <div className="dropdown table-action">
                                        <a href="proposals.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvas_edit"><i className="ti ti-edit text-blue"></i>
                                                Edit</a>
                                            <a className="dropdown-item" href="proposals.html#" data-bs-toggle="modal"
                                                data-bs-target="#delete_proposals"><i className="ti ti-trash"></i>
                                                Delete</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-clipboard-copy text-green"></i> View
                                                Proposal</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-checks"></i> Mark As
                                                Accepted</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file text-tertiary"></i> Mark as
                                                Draft</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-sticker text-blue"></i> Mark ad
                                                Declined</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-subtask"></i> Convert to
                                                estimate</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-file-invoice text-tertiary"></i>
                                                Convert to Invoice</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="ti ti-printer"></i> Print</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <h4 className="mb-1 fs-14 fw-semibold">SEO Proposal</h4>
                                            <p className="fs-13 mb-0">Project : Truelysell</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-info">Draft</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-moneybag fs-12"></i></span>Total Value
                                            : $2,04,214</p>
                                        <p className="d-flex align-items-center mb-2"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-event fs-12"></i></span>Date :
                                            25 May 2024</p>
                                        <p className="d-flex align-items-center"><span className="me-2 text-dark"><i
                                                    className="ti ti-calendar-stats fs-12"></i></span>Open
                                            till : 31 Jun 2024</p>
                                    </div>
                                </div>
                                <div className="rounded">
                                    <div className="d-flex align-items-center">
                                        <a href="#"
                                            className="avatar rounded-circle bg-white border me-2">
                                            <img src="assets/img/icons/company-icon-08.svg" className="w-auto h-auto"
                                                alt="img" />
                                        </a>
                                        <div className="d-flex flex-column">
                                            <span className="d-block">Sent to</span>
                                            <a href="#" className="text-default">NovaWave
                                                LLC</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Proposal Grid */}

                <div className="load-btn text-center">
                    <a href="#" className="btn btn-primary"><i className="ti ti-loader me-1"></i>Load More</a>
                </div>
        </div>
    );
};

export default Proposals;
