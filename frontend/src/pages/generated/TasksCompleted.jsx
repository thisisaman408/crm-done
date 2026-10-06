import React from 'react';

const TasksCompleted = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from tasks-completed.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Tasks<span className="badge badge-soft-primary ms-2">123</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Tasks</li>
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
                            Task</a>
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a className="dropdown-toggle btn btn-outline-light shadow" data-bs-toggle="dropdown"
                                        href="#">
                                        Completed
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="/tasks" className="dropdown-item">
                                            All Tasks
                                        </a>
                                        <a href="/tasks-important" className="dropdown-item">
                                            Important
                                        </a>
                                        <a href="/tasks-completed" className="dropdown-item active">
                                            Completed
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-filter me-2"></i>Filter<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-xl p-0">
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
                                                        <a href="tasks-completed.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Task Name</a>
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
                                                                        Add a form to Update Task
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Make all strokes thinner
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Update original content
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Use only component colours
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Add images to the cards section
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Add images to the cards section
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Design description banner & landing page
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Make sure all the padding should be 24px
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="tasks-completed.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Status" aria-expanded="false"
                                                            aria-controls="Status">Task Type</a>
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
                                                                        Meeting
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Calls
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Task
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Email
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="tasks-completed.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Tags" aria-expanded="false"
                                                            aria-controls="Tags">Tags</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="Tags" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
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
                                                                        Rated
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Rejected
                                                                    </label>
                                                                </li>
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
                                                                        Calls
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="tasks-completed.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">Created By</a>
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
                                                        <a href="tasks-completed.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date" aria-expanded="false"
                                                            aria-controls="date">Created Date</a>
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
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href="#"
                                                    className="btn btn-outline-light w-100">Reset</a>
                                                <a href="#" className="btn btn-primary w-100">Filter</a>
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
                                <div className="form-check form-check-md">
                                    <input className="form-check-input" type="checkbox" id="select-all" />
                                    <label className="form-check-label" htmlFor="select-all">Mark all as read</label>
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
                            </div>
                        </div>
                        {/* table header */}

                        {/* Task List */}
                        <div className="task-wrap border-bottom mb-3">
                            <a href="tasks-completed.html#" className="d-flex align-items-center justify-content-between mb-3"
                                data-bs-toggle="collapse" data-bs-target="#task_3">
                                <h6 className="fs-16 mb-0">23 Apr 2025</h6>
                                <i className="ti ti-chevron-up arrow-rotate"></i>
                            </a>
                            <div className="collapse show" id="task_3">
                                <div className="card rounded-start-0 mb-3">
                                    <div className="card-body border-start border-3 border-success">
                                        <div
                                            className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                            <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                <span className="me-3"><i className="ti ti-grip-vertical"></i></span>
                                                <div className="form-check form-check-md me-3">
                                                    <input className="form-check-input" type="checkbox" />
                                                </div>
                                                <div className="set-star rating-select me-3">
                                                    <i className="ti ti-star-filled fs-16"></i>
                                                </div>
                                                <h6 className="fw-semibold mb-0 fs-14 me-3 text-decoration-line-through">
                                                    Make all strokes thinner</h6>
                                                <span className="badge badge-soft-warning border-0 me-2"><i
                                                        className="ti ti-mail me-1"></i>Email</span>
                                                <span className="badge badge-soft-success">Completed</span>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                <div className="me-2">
                                                    <span className="badge badge-soft-primary">Promotion</span>
                                                </div>
                                                <div className="me-2">
                                                    <i className="ti ti-calendar-exclamation me-1"></i>23 Apr 2025
                                                </div>
                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-21.jpg" alt="img" />
                                                </div>
                                                <div className="dropdown table-action">
                                                    <a href="tasks-completed.html#"
                                                        className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            className="ti ti-dots-vertical"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" data-bs-toggle="offcanvas"
                                                            data-bs-target="#offcanvas_edit" href="tasks-completed.html#"><i
                                                                className="ti ti-edit text-blue"></i> Edit</a>
                                                        <a className="dropdown-item" href="tasks-completed.html#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_task"><i className="ti ti-trash"></i>
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Task List */}

                        {/* Task List */}
                        <div className="task-wrap">
                            <a href="tasks-completed.html#" className="d-flex align-items-center justify-content-between mb-3"
                                data-bs-toggle="collapse" data-bs-target="#task_4">
                                <h6 className="fs-16 mb-0">22 Apr 2025</h6>
                                <i className="ti ti-chevron-up arrow-rotate"></i>
                            </a>
                            <div className="collapse show" id="task_4">
                                <div className="card rounded-start-0 mb-0">
                                    <div className="card-body border-start border-3 border-success">
                                        <div
                                            className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                            <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                <span className="me-3"><i className="ti ti-grip-vertical"></i></span>
                                                <div className="form-check form-check-md me-3">
                                                    <input className="form-check-input" type="checkbox" />
                                                </div>
                                                <div className="set-star rating-select me-3">
                                                    <i className="ti ti-star-filled fs-16"></i>
                                                </div>
                                                <h6 className="fw-semibold mb-0 fs-14 me-3 text-decoration-line-through">
                                                    Make all strokes thinner</h6>
                                                <span className="badge badge-soft-info border-0 me-2"><i
                                                        className="ti ti-user-share me-1"></i>Meeting</span>
                                                <span className="badge badge-soft-success">Completed</span>
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2">
                                                <div className="me-2">
                                                    <span className="badge badge-soft-danger">Rejected</span>
                                                </div>
                                                <div className="me-2">
                                                    <span className="badge badge-soft-success">Collab</span>
                                                </div>
                                                <div className="me-2">
                                                    <i className="ti ti-calendar-exclamation me-1"></i>22 Apr 2025
                                                </div>
                                                <div className="avatar avatar-xs avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-22.jpg" alt="img" />
                                                </div>
                                                <div className="dropdown table-action">
                                                    <a href="tasks-completed.html#"
                                                        className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            className="ti ti-dots-vertical"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" data-bs-toggle="offcanvas"
                                                            data-bs-target="#offcanvas_edit" href="tasks-completed.html#"><i
                                                                className="ti ti-edit text-blue"></i> Edit</a>
                                                        <a className="dropdown-item" href="tasks-completed.html#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_task"><i className="ti ti-trash"></i>
                                                            Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Task List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default TasksCompleted;
