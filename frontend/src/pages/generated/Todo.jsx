import React from 'react';

const Todo = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from todo.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Todo</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Todo</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
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

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <a href="todo.html#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#add_todo"><i
                            className="ti ti-circle-plus me-1"></i>Create New</a>
                    <ul className="d-flex align-items-center flex-shrink-0 list-unstyled mb-0">
                        <li>
                            <a href="/todo" className="btn btn-icon btn-sm bg-primary text-white active me-2"><i
                                    className="ti ti-layout-grid"></i></a>
                        </li>
                        <li>
                            <a href="/todo-list" className="btn btn-icon btn-white btn-sm text-dark me-2"><i
                                    className="ti ti-list-tree"></i></a>
                        </li>
                    </ul>
                </div>

                <div className="card shadow-none mb-0">
                    <div className="card-body">

                        {/* start row */}
                        <div className="row gy-3 mb-3">

                            <div className="col-sm-4">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-16 mb-0">Total Todo</h6>
                                    <span className="badge badge-dark rounded-pill badge-xs ms-2">+1</span>
                                </div>
                            </div> {/* end col */}

                            <div className="col-sm-8">
                                <div className="d-flex align-items-center justify-content-end">
                                    <p className="mb-0 me-2 pe-2 border-end fs-14">Total Task : <span className="text-dark"> 55
                                        </span></p>
                                    <p className="mb-0 me-2 pe-2 border-end fs-14">Pending : <span className="text-dark"> 15
                                        </span></p>
                                    <p className="mb-0 fs-14">Completed : <span className="text-dark"> 40 </span></p>
                                </div>
                            </div> {/* end col */}

                        </div>
                        {/* end row */}

                        <div className="border-bottom mb-3">

                            {/* start row */}
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <div className="input-group input-group-flat w-auto">
                                            <span className="input-group-text border-end-0 border-start">
                                                <i className="ti ti-calendar"></i>
                                            </span>
                                            <input type="text" className="form-control form-control-sm"
                                                placeholder="Due Date" data-provider="flatpickr"
                                                data-date-format="d-m-Y" />
                                        </div>

                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="dropdown">
                                                <a href="#"
                                                    className="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    All Tags
                                                </a>
                                                <ul className="dropdown-menu  dropdown-menu-end">
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">All Tags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Internal</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Projects</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Meetings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Reminder</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Research</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown">
                                                <a href="#"
                                                    className="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <span className="text-body me-1"> Sort By : </span> Recent
                                                </a>
                                                <ul className="dropdown-menu  dropdown-menu-end">
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Recently Added</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Ascending</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Desending</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Last Month</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="dropdown-item rounded-1">Last 7 Days</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                            </div>
                            {/* end row */}

                        </div>

                        <div className="accordion  accordion-arrow-none" id="accordionExample">

                            {/* Accordion Start */}
                            <div className="accordion-item mb-3 border-0 border-bottom pb-2">

                                {/* start row */}
                                <div className="row align-items-center mb-2 row-gap-3">

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="accordion-header cursor-pointer" id="headingTwo">
                                            <div className="accordion-button bg-transparent shadow-none p-0"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-controls="collapseTwo">
                                                <div className="d-flex align-items-center w-100">
                                                    <div className="me-2">
                                                        <a href="#">
                                                            <span><i className="ti ti-chevron-down"></i></span>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span><i
                                                                className="ti ti-square-rounded text-purple me-2"></i></span>
                                                        <h5 className="fw-semibold mb-0">High</h5>
                                                        <span
                                                            className="badge bg-light text-dark rounded-pill ms-2">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end col */}

                                    <div className="col-lg-8 col-sm-6">
                                        <div className="d-flex align-items-center justify-content-sm-end">
                                            <a href="todo.html#" className="btn btn-light btn-sm">See All<i
                                                    className="ti ti-arrow-right ms-2"></i></a>
                                        </div>
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-0">
                                        <div className="list-group list-group-flush">
                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                            <span
                                                                className="me-2 d-flex align-items-center rating-select"><i
                                                                    className="ti ti-star-filled filled"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Finalize project proposal</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>15 Jan 2025</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span
                                                                className="badge badge-success bg-success me-2">Projects</span>
                                                            <span
                                                                className="badge badge-soft-danger d-inline-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Onhold</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-03.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>
                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                            <span
                                                                className="me-2 rating-select d-flex align-items-center"><i
                                                                    className="ti ti-star"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Submit to supervisor by EOD</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>25 May 2024</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span className="badge bg-danger me-2">Internal</span>
                                                            <span
                                                                className="badge badge-soft-secondary d-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-03.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>
                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" checked />
                                                            </div>
                                                            <span
                                                                className="me-2 rating-select d-flex align-items-center"><i
                                                                    className="ti ti-star"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Prepare presentation slides</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>15 Jan 2025</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span className="badge bg-info me-2">Reminder</span>
                                                            <span
                                                                className="badge badge-soft-info d-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Pending</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-03.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordion End */}

                            {/* Accordion Start */}
                            <div className="accordion-item mb-3 border-0 border-bottom pb-2">

                                {/* start row */}
                                <div className="row align-items-center mb-2 row-gap-3">

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="accordion-header cursor-pointer" id="headingThree">
                                            <div className="accordion-button bg-transparent shadow-none p-0"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-controls="collapseThree">
                                                <div className="d-flex align-items-center w-100">
                                                    <div className="me-2">
                                                        <a href="#">
                                                            <span><i className="ti ti-chevron-down"></i></span>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span><i
                                                                className="ti ti-square-rounded text-warning me-2"></i></span>
                                                        <h5 className="fw-semibold mb-0">Medium</h5>
                                                        <span
                                                            className="badge bg-light text-dark rounded-pill ms-2">05</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end col */}

                                    <div className="col-lg-8 col-sm-6">
                                        <div className="d-flex align-items-center justify-content-sm-end">
                                            <a href="todo.html#" className="btn btn-light btn-sm">See All<i
                                                    className="ti ti-arrow-right ms-2"></i></a>
                                        </div>
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                                <div id="collapseThree" className="accordion-collapse collapse show"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-0">
                                        <div className="list-group list-group-flush">
                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                            <span
                                                                className="me-2 rating-select d-flex align-items-center"><i
                                                                    className="ti ti-star"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Check and respond to emails</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>Tomorrow</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span className="badge bg-info me-2">Reminder</span>
                                                            <span
                                                                className="badge badge-soft-success d-inline-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Completed</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-03.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>

                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                            <span
                                                                className="me-2 rating-select d-flex align-items-center"><i
                                                                    className="ti ti-star"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Coordinate with department head
                                                                    on progress</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>25 May 2024</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span className="badge bg-danger me-2">Internal</span>
                                                            <span
                                                                className="badge badge-soft-secondary d-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-06.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordion End */}

                            {/* Accordion Start */}
                            <div className="accordion-item border-0 pb-2">

                                {/* start row */}
                                <div className="row align-items-center mb-2 row-gap-3">

                                    <div className="col-lg-4 col-sm-6">
                                        <div className="accordion-header cursor-pointer" id="headingFour">
                                            <div className="accordion-button bg-transparent shadow-none p-0"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-controls="collapseFour">
                                                <div className="d-flex align-items-center w-100">
                                                    <div className="me-2">
                                                        <a href="#">
                                                            <span><i className="ti ti-chevron-down"></i></span>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span><i
                                                                className="ti ti-square-rounded text-success me-2"></i></span>
                                                        <h5 className="fw-semibold mb-0">Low</h5>
                                                        <span
                                                            className="badge bg-light text-dark rounded-pill ms-2">24</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end col */}

                                    <div className="col-lg-8 col-sm-6">
                                        <div className="d-flex align-items-center justify-content-sm-end">
                                            <a href="todo.html#" className="btn btn-light btn-sm">See All<i
                                                    className="ti ti-arrow-right ms-2"></i></a>
                                        </div>
                                    </div> {/* end col */}
                                </div>
                                {/* end row */}

                                <div id="collapseFour" className="accordion-collapse collapse show"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body p-0">
                                        <div className="list-group list-group-flush">
                                            <div className="list-group-item list-item-hover border rounded mb-2 p-3">

                                                {/* start row */}
                                                <div className="row align-items-center row-gap-3">

                                                    <div className="col-lg-6 col-md-7">
                                                        <div
                                                            className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                            <span className="me-2 d-flex align-items-center"><i
                                                                    className="ti ti-grid-dots text-dark"></i></span>
                                                            <div className="form-check form-check-md me-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                            <span
                                                                className="me-2 rating-select d-flex align-items-center"><i
                                                                    className="ti ti-star"></i></span>
                                                            <div className="strike-info">
                                                                <h4 className="fs-14 mb-0">Plan tasks for the next day</h4>
                                                            </div>
                                                            <span
                                                                className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"><i
                                                                    className="ti ti-calendar me-1"></i>Today</span>
                                                        </div>
                                                    </div> {/* end col */}

                                                    <div className="col-lg-6 col-md-5">
                                                        <div
                                                            className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                            <span className="badge bg-info me-2">Social</span>
                                                            <span
                                                                className="badge badge-soft-info d-flex align-items-center me-2"><i
                                                                    className="fas fa-circle fs-6 me-1"></i>Pending</span>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <img className="border border-white"
                                                                            src="assets/img/profiles/avatar-03.jpg"
                                                                            alt="img" />
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown ms-2">
                                                                    <a href="#"
                                                                        className="d-inline-flex align-items-center"
                                                                        data-bs-toggle="dropdown">
                                                                        <i className="ti ti-dots-vertical"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#edit_todo"><i
                                                                                    className="ti ti-edit me-2"></i>Edit</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#delete_modal"><i
                                                                                    className="ti ti-trash me-2"></i>Delete</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"
                                                                                className="dropdown-item rounded-1"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#view_todo"><i
                                                                                    className="ti ti-eye me-2"></i>View</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}

                                                </div>
                                                {/* end row */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Accordion End */}

                        </div>

                        <div className="text-center">
                            <a href="todo.html#" className="btn btn-primary btn-sm"><i className="ti ti-loader me-2"></i>Load More</a>
                        </div>
                    </div>{/* end card body */}
                </div>{/* end card */}
        </div>
    );
};

export default Todo;
