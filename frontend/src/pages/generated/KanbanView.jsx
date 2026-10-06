import React from 'react';

const KanbanView = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from kanban-view.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Kanban View</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Kanban View</li>
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

                <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <h6 className="fs-16 mb-0">Kanban View</h6>
                        <div className="d-flex align-items-center flex-wrap row-gap-3">
                            <div className="avatar-list-stacked avatar-group-sm me-2">
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="assets/img/profiles/avatar-19.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img className="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded bg-primary fs-12">
                                    1+
                                </span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2 me-3">
                                <p className="mb-0 pe-2 border-end fs-14">Total Task : <span className="text-dark"> 55 </span>
                                </p>
                                <p className="mb-0 pe-2 border-end fs-14">Pending : <span className="text-dark"> 15 </span></p>
                                <p className="mb-0 fs-14">Completed : <span className="text-dark"> 40 </span></p>
                            </div>
                            <div className="input-group input-group-flat w-auto">
                                <span className="input-group-text border-end-0 border-start">
                                    <i className="ti ti-search"></i>
                                </span>
                                <input type="text" className="form-control form-control-sm" placeholder="Search Project" />
                            </div>
                        </div>
                    </div>{/* end header end */}
                    <div className="card-body overflow-hidden">

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">

                            <div className="dropdown">
                                <a href="#"
                                    className="dropdown-toggle btn btn-outline-white bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                    data-bs-toggle="dropdown">
                                    Select Priority<i className="ti ti-chevron-down align-middle ms-1"></i>
                                </a>
                                <ul className="dropdown-menu  dropdown-menu-start">
                                    <li>
                                        <a href="#" className="dropdown-item rounded-1">All</a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item rounded-1">High</a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item rounded-1">Medium</a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item rounded-1">Completed</a>
                                    </li>
                                </ul>
                            </div> {/* end col */}

                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn  bg-white btn-outline-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        Clients<i className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Clients</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Sophie</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Cameron</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Doris</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn bg-white btn-outline-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        Select Status<i className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Inprogress</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">On-hold</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Completed</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn bg-white btn-outline-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        <span className="text-body me-1"> Sort By : </span> Recent<i
                                            className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Recently
                                                Added</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Ascending</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Desending</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last Month</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last 7
                                                Days</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> {/* end col */}

                        </div>

                        <div className="d-flex align-items-start overflow-auto project-status" data-plugin="dragula"
                            data-containers='["drag-one", "drag-two", "drag-three", "drag-four"]'>

                            <div className="p-2 rounded bg-light border w-100 me-3">

                                <div className="bg-white border p-3 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-warning p-1 d-flex rounded-circle me-2"><span
                                                    className="bg-warning rounded-circle d-block p-1"></span></span>
                                            <h6 className="me-2 mb-0">New</h6>
                                            <span className="badge bg-light  text-dark rounded-pill">02</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" className="d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            className="ti ti-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="kanban-drag" id="drag-one">

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-success badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>Low</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Doccure</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-08.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-07.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-danger badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>High</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Tour</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-07.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-09.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                </div>

                                <div className="pt-2">
                                    <a href="kanban-view.html#"
                                        className="btn btn-secondary d-flex align-items-center justify-content-center"
                                        data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ti ti-plus me-2"></i> New Project
                                    </a>
                                </div>

                            </div>

                            <div className="p-2 rounded bg-light border w-100 me-3">

                                <div className="bg-white border p-3 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-primary p-1 d-flex rounded-circle me-2"><span
                                                    className="bg-primary rounded-circle d-block p-1"></span></span>
                                            <h6 className="me-2 mb-0">Inprogress</h6>
                                            <span className="badge bg-light  text-dark rounded-pill">13</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" className="d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            className="ti ti-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="kanban-drag" id="drag-two">

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-danger badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>High</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Gigs</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-warning badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>Medium</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Rent</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                </div>

                                <div className="pt-2">
                                    <a href="kanban-view.html#"
                                        className="btn btn-secondary d-flex align-items-center justify-content-center"
                                        data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ti ti-plus me-2"></i> New Project
                                    </a>
                                </div>

                            </div>

                            <div className="p-2 rounded bg-light border w-100 me-3">

                                <div className="bg-white border p-3 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2"><span
                                                    className="bg-danger rounded-circle d-block p-1"></span></span>
                                            <h6 className="me-2 mb-0">On-hold</h6>
                                            <span className="badge bg-light text-dark rounded-pill">04</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" className="d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            className="ti ti-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="kanban-drag" id="drag-three">
                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-success badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>Low</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Sports</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-success badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>Low</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Estate</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                </div>

                                <div className="pt-2">
                                    <a href="kanban-view.html#"
                                        className="btn btn-secondary d-flex align-items-center justify-content-center"
                                        data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ti ti-plus me-2"></i> New Project
                                    </a>
                                </div>

                            </div>

                            <div className="p-2 rounded bg-light border w-100">

                                <div className="bg-white border p-3 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2"><span
                                                    className="bg-success rounded-circle d-block p-1"></span></span>
                                            <h6 className="me-2 mb-0">Completed</h6>
                                            <span className="badge bg-light  text-dark rounded-pill">10</span>
                                        </div>
                                        <div className="dropdown">
                                            <a href="#" className="d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            className="ti ti-trash me-2"></i>Delete</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="kanban-drag" id="drag-four">

                                    <div>
                                        <div className="card kanban-card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <span
                                                            className="badge bg-warning badge-xs d-flex align-items-center justify-content-center"><i
                                                                className="fas fa-circle fs-7 me-1"></i>Medium</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#delete_modal"><i
                                                                        className="ti ti-trash me-2"></i>Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                        <img src="assets/img/icons/kanban-arrow.svg"
                                                            className="w-auto h-auto" alt="Img" />
                                                    </span>
                                                    <h6 className="d-flex align-items-center fs-16 mb-0">Dreams Rent</h6>
                                                </div>
                                                <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Budget</span>
                                                        <p className="fs-12 text-dark mb-0">$24,000</p>
                                                    </div>
                                                    <div className="me-2 pe-2 border-end">
                                                        <span className="fw-medium fs-12 d-block mb-1">Tasks</span>
                                                        <p className="fs-12 text-dark mb-0">12/15</p>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium fs-12 d-block mb-1">Due on</span>
                                                        <p className="fs-12 text-dark mb-0">15 Apr</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="avatar-list-stacked avatar-group-sm me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-01.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <img className="border border-white"
                                                                src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                        </span>
                                                        <a href="kanban-view.html#"
                                                            className="avatar avatar-rounded bg-primary fs-12 text-white">1+</a>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                            className="d-flex align-items-center me-2"><i
                                                                className="ti ti-message-circle me-1"></i></a>
                                                        <a href="#"
                                                            className="d-flex align-items-center"><i
                                                                className="ti ti-paperclip"></i></a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div>

                                </div>

                                <div className="pt-2">
                                    <a href="kanban-view.html#"
                                        className="btn btn-secondary d-flex align-items-center justify-content-center"
                                        data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ti ti-plus me-2"></i> New Project
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>{/* end card body */}
                </div>{/* end card */}
        </div>
    );
};

export default KanbanView;
