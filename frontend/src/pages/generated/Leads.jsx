import React from 'react';

const Leads = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from leads.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Leads<span className="badge badge-soft-primary ms-2">123</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Leads</li>
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

                {/* AI Panel */}
                <div className="ai-embed mb-3" data-ai-embed>
                    <div className="ai-embed-head">
                        <div className="d-flex align-items-center gap-2">
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                            <div>
                                <h6 className="mb-0 fs-14">AI lead intelligence</h6>
                                <span className="fs-12 text-muted">Scored across 128 open leads</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <a href="/ai-lead-scoring" className="btn btn-sm btn-outline-light shadow">Open lead scoring</a>
                            <button type="button" className="btn btn-icon btn-sm btn-outline-light shadow"
                                data-ai-embed-toggle aria-label="Hide AI panel" aria-expanded="true">
                                <i className="ti ti-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                    <div className="ai-embed-body" data-ai-embed-body>
                        <div className="row g-3">
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="ai-insight-icon bg-soft-warning text-warning flex-shrink-0"><i
                                            className="ti ti-target-arrow"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">Highest AI lead score</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">Marcus Whitfield &middot; 92</span>
                                        <span className="fs-12 text-muted">VP Operations at Northwind Logistics</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="ai-insight-icon bg-soft-primary text-primary flex-shrink-0"><i
                                            className="ti ti-percentage"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">Avg. conversion probability</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">55%</span>
                                        <span className="ai-meter mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" data-embed-meter="55"></span></span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0"><i
                                            className="ti ti-sparkles"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">AI recommendation</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">Contact 5 hot leads today</span>
                                        <span className="fs-12 text-muted">Uncontacted for 24h+ after a pricing-page visit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End AI Panel */}

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
                                                <a href="leads.html#" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="true" aria-controls="collapseTwo">Lead Name</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse show"
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
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-01.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>William Turner
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-13.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Ava Martinez
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-12.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Nathan Reed
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-03.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Lily Anderson
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
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
                                                <a href="leads.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">Company Name</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse"
                                                id="collapseThree" data-bs-parent="#accordionExample">
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
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                NovaWave LLC
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                BlueSky Industries
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Silver Hawk
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Summit Peak
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-set-content">
                                            <div className="filter-set-content-head">
                                                <a href="leads.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#status" aria-expanded="false"
                                                    aria-controls="status">Lead Status</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="status"
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
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Closed
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Not Closed
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Contacted
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Lost
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-set-content">
                                            <div className="filter-set-content-head">
                                                <a href="leads.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#date2" aria-expanded="false"
                                                    aria-controls="date2">Created Date</a>
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
                                                <a href="leads.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#owner" aria-expanded="false"
                                                    aria-controls="owner">Lead Owner</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="owner"
                                                data-bs-parent="#accordionExample">
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
                                                                        src="assets/img/users/user-17.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Robert Johnson
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-16.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Isabella Cooper
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-14.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>John Smith
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-22.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Sophia Parker
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-25.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Emma Reynolds
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-24.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Liam Carter
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-39.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Noah Mitchell
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-31.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Mason Hayes
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-21.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Ron Thompson
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="avatar avatar-xs rounded-circle me-2"><img
                                                                        src="assets/img/users/user-10.jpg"
                                                                        className="flex-shrink-0 rounded-circle"
                                                                        alt="img" /></span>Laura Bennett
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
                            <a href="/leads-list" className="btn btn-sm p-1 border-0 fs-14"><i
                                    className="ti ti-list-tree"></i></a>
                            <a href="/leads" className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14 active"><i
                                    className="ti ti-grid-dots"></i></a>
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                            Lead</a>
                    </div>
                </div>
                {/* table header */}

                {/* Leads Kanban */}
                <div className="d-flex overflow-x-auto align-items-start gap-3">
                    <div className="kanban-list-items p-2 rounded border">
                        <div className="card mb-0 border-0 shadow">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="d-flex align-items-center mb-1"><i
                                                className="ti ti-circle-filled fs-10 text-warning me-1"></i>Contacted
                                        </h6>
                                        <span className="fw-medium">45 Leads - $15,44,540</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a href="#" className="text-info"><i className="ti ti-plus"></i></a>
                                        <div className="dropdown table-action ms-2">
                                            <a href="leads.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_lead"><i
                                                        className="fa-regular fa-trash-can text-danger"></i>
                                                    Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-drag-wrap">
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-secondary"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">SM</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Schumm</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $03,50,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                darleeo@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 12445-47878
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Newyork, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-09.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-secondary"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">CS</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/leads-details">Collins</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,10,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                robertson@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 13987-90231
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Austin, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-01.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-secondary"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-warning flex-shrink-0 me-2"><span
                                                        className="avatar-title text-warning">KI</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/leads-details">Konopelski</a></h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,18,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                sharon@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 17932-04278
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Atlanta, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-02.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-list-items p-2 rounded border">
                        <div className="card mb-0 border-0 shadow">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="d-flex align-items-center mb-1"><i
                                                className="ti ti-circle-filled fs-10 text-info me-1"></i>Not
                                            Contacted</h6>
                                        <span className="fw-medium">45 Leads - $15,44,540</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a href="#" className="text-info"><i className="ti ti-plus"></i></a>
                                        <div className="dropdown table-action ms-2">
                                            <a href="leads.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_lead"><i
                                                        className="fa-regular fa-trash-can text-danger"></i>
                                                    Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-drag-wrap">
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-info"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">AS</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Adams</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,45,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                vaughan12@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 17392-27846
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                London, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-03.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-info"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">WK</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Wizosk</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $01,17,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                caroltho3@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 78982-09163
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Bristol, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-04.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-info"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-success flex-shrink-0 me-2"><span
                                                        className="avatar-title text-success">HR</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Heller</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,12,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                dawnmercha@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 27691-89246
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                San Francisco, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-05.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-list-items p-2 rounded border">
                        <div className="card mb-0 border-0 shadow">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="d-flex align-items-center mb-1"><i
                                                className="ti ti-circle-filled fs-10 text-success me-1"></i>Closed
                                        </h6>
                                        <span className="fw-medium">45 Leads - $15,44,540</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a href="#" className="text-info"><i className="ti ti-plus"></i></a>
                                        <div className="dropdown table-action ms-2">
                                            <a href="leads.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item " href="leads.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_lead"><i
                                                        className="fa-regular fa-trash-can text-danger"></i>
                                                    Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-drag-wrap">
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-success"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">GI</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/leads-details">Gutkowsi</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $01,84,043
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                rachel@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 17839-93617
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Dallas, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-06.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-success"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-warning flex-shrink-0 me-2"><span
                                                        className="avatar-title text-warning">WR</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Walter</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $09,35,189
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                jonelle@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 16739-47193
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Leicester, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-07.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-success"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-success flex-shrink-0 me-2"><span
                                                        className="avatar-title text-success">HN</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Hansen</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $04,27,940
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                jonathan@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 18390-37153
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Norwich, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-08.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-list-items p-2 rounded border">
                        <div className="card mb-0 border-0 shadow">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="d-flex align-items-center mb-1"><i
                                                className="ti ti-circle-filled fs-10 text-danger me-1"></i>Lost</h6>
                                        <span className="fw-medium">15 Leads - $14,89,543</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a href="#" className="text-info"><i className="ti ti-plus"></i></a>
                                        <div className="dropdown table-action ms-2">
                                            <a href="leads.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item " href="leads.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="leads.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_lead"><i
                                                        className="fa-regular fa-trash-can text-danger"></i>
                                                    Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kanban-drag-wrap">
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-danger"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">SE</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/leads-details">Steve</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $04,17,593
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                sidney@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 11739-38135
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Manchester, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-09.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-danger"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">LE</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/leads-details">Leuschke</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $08,81,389
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                brook@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 19302-91043
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Chicago, United States
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-10.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
                                    <div className="card-body">
                                        <div className="d-block">
                                            <div className="card-topbar mb-3 pt-1 bg-danger"></div>
                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/leads-details"
                                                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">AY</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/leads-details">Anthony</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $09,27,193
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                mickey@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 17280-92016
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Derby, United Kingdom
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                                            <span
                                                className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1"><img
                                                    src="assets/img/icons/company-icon-01.svg" alt="Img" /></span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="leads.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="leads.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Leads Kanban */}
        </div>
    );
};

export default Leads;
