import React from 'react';

const Deals = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from deals.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Deals<span className="badge badge-soft-primary ms-2">125</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Deals</li>
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
                                <h6 className="mb-0 fs-14">AI deal intelligence</h6>
                                <span className="fs-12 text-muted">Risk assessed across 53 open deals</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <a href="/deal-risk-analysis" className="btn btn-sm btn-outline-light shadow">Open risk analysis</a>
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
                                    <span className="ai-insight-icon bg-soft-danger text-danger flex-shrink-0"><i
                                            className="ti ti-shield-half"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">Deals at risk</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">3 deals &middot; $184K</span>
                                        <span className="fs-12 text-muted">No logged contact for 8+ days</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="ai-insight-icon bg-soft-info text-info flex-shrink-0"><i
                                            className="ti ti-heartbeat"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">Avg. deal health score</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">63 / 100</span>
                                        <span className="ai-meter is-warning mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" data-embed-meter="63"></span></span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="d-flex align-items-start gap-2">
                                    <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0"><i
                                            className="ti ti-percentage"></i></span>
                                    <div className="flex-grow-1 min-w-0">
                                        <span className="fs-12 text-muted d-block">Avg. closing probability</span>
                                        <span className="fs-15 fw-semibold text-dark d-block">64%</span>
                                        <span className="ai-meter is-success mt-1"><span className="ai-meter-track"><span className="ai-meter-fill" data-embed-meter="64"></span></span></span>
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
                                                <a href="deals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">Deals Name</a>
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
                                                                Konopelski
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Adams
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Gutkowski
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Walter
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
                                                <a href="deals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#owner" aria-expanded="false"
                                                    aria-controls="owner">Owner</a>
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
                                                                Hendry Milner
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Guilory Berggren
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Jami Carlile
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Theresa Nelson
                                                            </label>
                                                        </li>
                                                        <li className="mb-1">
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
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
                                                <a href="deals.html#" className="collapsed" data-bs-toggle="collapse"
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
                                                                Won
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Open
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
                                                <a href="deals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="false"
                                                    aria-controls="collapseOne">Rating</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse"
                                                id="collapseOne" data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="rating">
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <span className="ms-1">5.0</span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="rating">
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <span className="ms-1">4.0</span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="rating">
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <span className="ms-1">3.0</span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="rating">
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled text-warning"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <i className="ti ti-star-filled"></i>
                                                                    <span className="ms-1">2.0</span>
                                                                </span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                <span className="rating">
                                                                    <i className="ti ti-star-filled text-warning"></i>
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
                                                <a href="deals.html#" className="collapsed" data-bs-toggle="collapse"
                                                    data-bs-target="#tags" aria-expanded="false"
                                                    aria-controls="tags">Tags</a>
                                            </div>
                                            <div className="filter-set-contents accordion-collapse collapse" id="tags"
                                                data-bs-parent="#accordionExample">
                                                <div
                                                    className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                    <ul>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Promotion
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Rated
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Rejected
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Collab
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="dropdown-item px-2 d-flex align-items-center">
                                                                <input className="form-check-input m-0 me-1"
                                                                    type="checkbox" />
                                                                Calls
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
                            <a href="/deals-list" className="btn btn-sm p-1 border-0 fs-14"><i
                                    className="ti ti-list-tree"></i></a>
                            <a href="/deals" className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14 active"><i
                                    className="ti ti-grid-dots"></i></a>
                        </div>
                        <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
                            Deal</a>
                    </div>
                </div>
                {/* table header */}

                {/* Deals Kanban */}
                <div className="d-flex overflow-x-auto align-items-start mb-0 gap-3">
                    <div className="kanban-list-items p-2 rounded border">
                        <div className="card mb-0 border-0 shadow">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="d-flex align-items-center mb-1"><i
                                                className="ti ti-circle-filled fs-10 text-info me-1"></i>Qualify
                                            To Buy</h6>
                                        <span>45 Leads - $15,44,540</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown table-action ms-2">
                                            <a href="deals.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_deal"><i
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
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-success">HT</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Howell,
                                                        Tremblay <br /> and Rath</a></h6>
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
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-19.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Darlee
                                                    Robertson</a>
                                            </div>
                                            <span className="badge bg-success">85%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 10 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-warning text-warning rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-warning">RJ</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Robert,
                                                        John
                                                        and <br /> Carlos</a></h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,10,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                sheron@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 12445-47878
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Exeter, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-20.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Sharon
                                                    Roy</a>
                                            </div>
                                            <span className="badge bg-warning">15%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 12 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">WS</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Wendy,
                                                        Star
                                                        and <br /> David</a></h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $04,22,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                vau@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 12445-47878
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Phoenix, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-21.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Vaughan Lewis</a>
                                            </div>
                                            <span className="badge bg-info">95%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 14 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
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
                                                className="ti ti-circle-filled fs-10 text-info me-1"></i>Contact Made
                                        </h6>
                                        <span>30 Leads - $19,94,938</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown table-action ms-2">
                                            <a href="deals.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_deal"><i
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
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">BR</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Byron,
                                                        Roman
                                                        and <br /> Bailey</a></h6>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-report-money text-dark me-1"></i>
                                                $02,45,000
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-mail text-dark me-1"></i>
                                                jessica13@example.com
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-phone text-dark me-1"></i>
                                                +1 89351-90346
                                            </p>
                                            <p className="text-default d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-pin text-dark me-1"></i>
                                                Chester, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-01.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Jessica Louise</a>
                                            </div>
                                            <span className="badge bg-danger">47%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 06 Feb 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-success">RJ</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Robert,
                                                        John
                                                        and <br /> Carlos</a></h6>
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
                                                Charlotte, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-16.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Carol
                                                    Thomas</a>
                                            </div>
                                            <span className="badge bg-success">98%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 15 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">IC</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Irene,
                                                        Charles and <br /> Wilston</a></h6>
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
                                                Bristol, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-22.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Dawn
                                                    Mercha</a>
                                            </div>
                                            <span className="badge bg-danger">95%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 25 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
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
                                                className="ti ti-circle-filled fs-10 text-info me-1"></i>Presentation
                                        </h6>
                                        <span>25 Leads - $10,36.390</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown table-action ms-2">
                                            <a href="deals.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_deal"><i
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
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">HT</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Jody,
                                                        Powell
                                                        and <br /> Cecil</a></h6>
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
                                                Baltimore, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-23.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Rachel
                                                    Hampton</a>
                                            </div>
                                            <span className="badge bg-info">25%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 18 Mar 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">BL</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Bonnie,
                                                        Linda
                                                        and <br /> Mullin</a></h6>
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
                                                Coventry, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-24.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Jonelle
                                                    Curtiss</a>
                                            </div>
                                            <span className="badge bg-danger">70%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 15 Feb 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-success">CJ</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Carlos,
                                                        Jones
                                                        and <br /> Jim</a></h6>
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
                                                Seattle
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-25.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Jonathan Smith</a>
                                            </div>
                                            <span className="badge bg-success">45%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 30 Jan 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
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
                                                className="ti ti-circle-filled fs-10 text-info me-1"></i>Proposal
                                            Made</h6>
                                        <span>50 Leads - $18,83,013</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown table-action ms-2">
                                            <a href="deals.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item " href="deals.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_deal"><i
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
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">FJ</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a
                                                        href="/deals-details">Freda,Jennfier and <br />
                                                        Thompson</a></h6>
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
                                                London, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-17.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Sidney
                                                    Franks</a>
                                            </div>
                                            <span className="badge bg-info">59%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 11 Apr 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">BF</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Bruce,
                                                        Faulkner and <br /> Lela</a></h6>
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
                                                Detroit, United State
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-26.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Brook Carter</a>
                                            </div>
                                            <span className="badge bg-danger">72%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 17 Apr 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">LP</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Lawrence,
                                                        Patrick and <br /> Vandorn</a></h6>
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
                                                Manchester, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-15.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Mickey</a>
                                            </div>
                                            <span className="badge bg-danger">20%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 10 Feb 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
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
                                        <h6 className="fw-semibold d-flex align-items-center mb-1">
                                            <i className="ti ti-circle-filled fs-10 text-info me-1"></i>Appointment
                                        </h6>
                                        <span>45 Leads - $15,44,540</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown table-action ms-2">
                                            <a href="deals.html#" className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item " href="deals.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvas_edit"><i
                                                        className="fa-solid fa-pencil text-blue"></i> Edit</a>
                                                <a className="dropdown-item" href="deals.html#" data-bs-toggle="modal"
                                                    data-bs-target="#delete_deal"><i
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
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">HT</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Howell,
                                                        Tremblay <br />
                                                        and Rath</a></h6>
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
                                                London, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-17.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Sidney
                                                    Franks</a>
                                            </div>
                                            <span className="badge bg-danger">59%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 11 Apr 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-danger">BF</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Bruce,
                                                        Faulkner and <br /> Lela</a></h6>
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
                                                Detroit, United State
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-26.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Brook Carter</a>
                                            </div>
                                            <span className="badge bg-danger">72%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 17 Apr 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card kanban-card border mb-0 mt-3 shadow">
                                    <div className="card-body">
                                        <div className="d-block">

                                            <div className="d-flex align-items-center mb-3">
                                                <a href="/deals-details"
                                                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"><span
                                                        className="avatar-title text-info">LP</span></a>
                                                <h6 className="fw-medium fs-14 mb-0"><a href="/deals-details">Lawrence,
                                                        Patrick and <br /> Vandorn</a></h6>
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
                                                Manchester, United States
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="avatar avatar-xs flex-shrink-0 me-2"><img
                                                        src="assets/img/profiles/avatar-15.jpg" alt="Img"
                                                        className="rounded-circle" /></a>
                                                <a href="#" className="text-default">Mickey</a>
                                            </div>
                                            <span className="badge bg-info">20%</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <span><i className="ti ti-calendar-due"></i> 10 Feb 2024</span>
                                            <div className="icons-social d-flex align-items-center gap-1">
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-phone-check"></i></a>
                                                <a href="deals.html#"
                                                    className="d-flex align-items-center justify-content-center me-1"><i
                                                        className="ti ti-message-circle-2"></i></a>
                                                <a href="deals.html#" className="d-flex align-items-center justify-content-center"><i
                                                        className="ti ti-color-swatch"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Deals Kanban */}
        </div>
    );
};

export default Deals;
