import React from 'react';

const TodoList = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from todo-list.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Todo List</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Todo List</li>
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
                    <a href="todo-list.html#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#add_todo"><i
                            className="ti ti-circle-plus me-1"></i>Create New</a>
                    <ul className="d-flex align-items-center flex-shrink-0 list-unstyled mb-0">
                        <li>
                            <a href="/todo" className="btn btn-icon btn-sm btn-outline-white text-dark me-2"><i
                                    className="ti ti-layout-grid"></i></a>
                        </li>
                        <li>
                            <a href="/todo-list" className="btn btn-icon btn-sm bg-primary text-white active me-2"><i
                                    className="ti ti-list-tree"></i></a>
                        </li>
                    </ul>
                </div>

                <div>

                    <div className="table-responsive">
                        <table className="table table-nowrap border">
                            <thead className="table-light">
                                <tr>
                                    <th>
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" id="select-all" />
                                        </div>
                                    </th>
                                    <th></th>
                                    <th>Company Name</th>
                                    <th>Tags</th>
                                    <th>Assignee</th>
                                    <th>Created On</th>
                                    <th>Progress</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check form-check-md ms-3"><input className="form-check-input"
                                                type="checkbox" /></div>
                                    </td>
                                    <td>
                                        <div className="set-star rating-select mx-3"><i className="ti ti-star-filled fs-16"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-medium text-dark mb-0">Respond to any pending messages</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">Social</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>14 Jan 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 100%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-success rounded" role="progressbar"
                                                style={{ width: '100%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>14 Jan 2024</td>
                                    <td>
                                        <span className="badge badge-soft-success">
                                            Completed
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Update calendar and schedule</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-primary">Meetings</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>21 Jan 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 15%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-danger rounded" role="progressbar"
                                                style={{ width: '15%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>21 Jan 2024</td>
                                    <td>
                                        <span className="badge badge-soft-secondary">
                                            Pending
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Respond to any pending messages</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">Research</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-04.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-06.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>20 Feb 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 45%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-warning rounded" role="progressbar"
                                                style={{ width: '45%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>20 Feb 2024</td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Attend team meeting at 10:00 AM</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-primary">Web Design</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-06.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-07.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>15 Mar 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 40%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-warning rounded" role="progressbar"
                                                style={{ width: '40%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>15 Mar 2024</td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Check and respond to emails</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">Reminder</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-08.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-09.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-10.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>12 Apr 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 65%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-purple rounded" role="progressbar"
                                                style={{ width: '65%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>12 Apr 2024</td>
                                    <td>
                                        <span className="badge badge-soft-secondary">
                                            Pending
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Coordinate with department head</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">Internal</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-11.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-12.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-13.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>20 Apr 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 85%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-pink rounded" role="progressbar"
                                                style={{ width: '85%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>20 Apr 2024</td>
                                    <td>
                                        <span className="badge badge-soft-danger">
                                            Onhold
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Plan tasks for the next day</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">Social</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-14.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-15.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-16.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>06 Jul 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 100%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-success rounded" role="progressbar"
                                                style={{ width: '100%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>06 Jul 2024</td>
                                    <td>
                                        <span className="badge badge-soft-success">
                                            Completed
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Finalize project proposal</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-success">Projects</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-17.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-18.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-19.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>02 Sep 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 65%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-danger rounded" role="progressbar"
                                                style={{ width: '65%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>02 Sep 2024</td>
                                    <td>
                                        <span className="badge badge-soft-danger">
                                            Onhold
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Submit to supervisor by EOD</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-info">Reminder</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>15 Nov 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 75%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-purple rounded" role="progressbar"
                                                style={{ width: '75%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>15 Nov 2024</td>
                                    <td>
                                        <span className="badge badge-soft-primary">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
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
                                        <p className="fw-medium text-dark mb-0">Prepare presentation slides</p>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">Research</span>
                                    </td>
                                    <td>
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <img className="border border-white" src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>10 Dec 2024</td>
                                    <td>
                                        <span className="d-block mb-1">Progress : 90%</span>
                                        <div className="progress progress-xs flex-grow-1 mb-2" style={{ width: '190px' }}>
                                            <div className="progress-bar bg-pink rounded" role="progressbar"
                                                style={{ width: '90%' }} aria-valuenow="30" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>10 Dec 2024</td>
                                    <td>
                                        <span className="badge badge-soft-secondary">
                                            Pending
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-inline-flex align-items-center">
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#edit_todo">
                                                <i className="ti ti-edit"></i>
                                            </a>
                                            <a href="todo-list.html#" className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                <i className="ti ti-trash"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> {/* end table responsive */}

                </div>
        </div>
    );
};

export default TodoList;
