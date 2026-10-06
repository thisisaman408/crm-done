import React from 'react';

const Notes = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from notes.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Notes</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Notes</li>
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

                {/* start row */}
                <div className="row">

                    <div className="col-xl-3 col-md-12 theiaStickySidebar">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3 pb-3 border-bottom">
                                    <h6 className="fs-16 d-flex align-items-center mb-0"><i
                                            className="ti ti-file-text me-2"></i>Notes List</h6>
                                </div>

                                <div className="border-bottom pb-3">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button
                                            className="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                                            id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="true"><i
                                                className="ti ti-inbox me-2"></i>All Notes</button>
                                        <button
                                            className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                                            id="v-pills-messages-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages" type="button" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false"><i
                                                className="ti ti-star me-2"></i>Important</button>
                                        <button
                                            className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                                            id="v-pills-settings-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-settings" type="button" role="tab"
                                            aria-controls="v-pills-settings" aria-selected="false"><i
                                                className="ti ti-trash me-2"></i>Trash</button>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <div className="border-bottom px-2 pb-3 mb-3">
                                        <h6 className="fs-16 mb-2">Tags</h6>
                                        <div className="d-flex flex-column mt-2">
                                            <a href="#"
                                                className="text-info d-flex align-items-center mb-2"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Pending</a>
                                            <a href="#"
                                                className="text-danger d-flex align-items-center mb-2"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Onhold</a>
                                            <a href="#"
                                                className="text-warning d-flex align-items-center mb-2"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Inprogress</a>
                                            <a href="#"
                                                className="text-success d-flex align-items-center"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Done</a>
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <h6 className="fs-16 mb-2">Priority</h6>
                                        <div className="d-flex flex-column mt-2">
                                            <a href="#"
                                                className="text-warning d-flex align-items-center mb-2"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Medium</a>
                                            <a href="#"
                                                className="text-success d-flex align-items-center mb-2"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>High</a>
                                            <a href="#"
                                                className="text-danger d-flex align-items-center"><i
                                                    className="ti ti-square-filled square-rotate fs-10 me-2"></i>Low</a>
                                        </div>
                                    </div>
                                </div>

                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-xl-9">
                        <div className="card">
                            <div className="card-body">

                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <select className="form-select">
                                            <option>Bulk Actions</option>
                                            <option>Delete Marked</option>
                                            <option>Unmark All</option>
                                            <option>Mark All</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="dropdown">
                                            <a href="#"
                                                className="dropdown-toggle btn border bg-white rounded text-dark d-inline-flex align-items-center drop-arrow-none"
                                                data-bs-toggle="dropdown">
                                                <i className="ti ti-file-export me-1"></i>Export<i
                                                    className="ti ti-chevron-down align-middle ms-1"></i>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"><i
                                                            className="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="dropdown-item rounded-1"><i
                                                            className="ti ti-file-type-xls me-1"></i>Export as Excel </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="notes.html#" className="btn btn-primary btn-md d-flex align-items-center"
                                            data-bs-toggle="modal" data-bs-target="#add_note"><i
                                                className="ti ti-circle-plus me-1"></i>Add Notes</a>
                                    </div>
                                </div>

                            </div>{/* end card body */}
                        </div>{/* end card */}

                        <div className="tab-content" id="v-pills-tabContent2">

                            {/* Items */}
                            <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">
                                <div>

                                    {/* start row */}
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div
                                                className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                                                <div className="d-flex align-items-center">
                                                    <h4 className="mb-0">Important Notes </h4>
                                                </div>
                                            </div>
                                        </div> {/* end col */}

                                    </div>
                                    {/* end row */}

                                    {/* start row */}
                                    <div className="row">

                                        <div className="col-md-4 d-flex">
                                            <div className="card flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span
                                                            className="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                                className="ti ti-circle-filled fs-7 me-1"></i>Medium</span>
                                                        <div>
                                                            <a href="#" data-bs-toggle="dropdown"
                                                                aria-expanded="false"><i
                                                                    className="ti ti-dots-vertical"></i></a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#edit-note-units"><span><i
                                                                            className="ti ti-edit me-1"></i></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#delete_modal"><span><i
                                                                            className="ti ti-trash me-1"></i></span>Delete</a>
                                                                <a href="#"
                                                                    className="dropdown-item"><span><i
                                                                            className="ti ti-star me-1"></i></span>Not
                                                                    Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#view-note-units"><span><i
                                                                            className="ti ti-eye me-1"></i></span>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="my-3">
                                                        <h6 className="fs-16 text-truncate mb-1"><a
                                                                href="#">Plan a trip to another
                                                                country</a></h6>
                                                        <p className="mb-3 d-flex align-items-center text-dark"><i
                                                                className="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                        <p className="text-truncate line-clamb-2 text-wrap">Space, the final
                                                            frontier. These are the voyages of the Starship Enterprise.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-center justify-content-between border-top pt-3">
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="avatar avatar-md me-2">
                                                                <img src="assets/img/profiles/avatar-01.jpg"
                                                                    alt="Profile" className="img-fluid rounded-circle" />
                                                            </a>
                                                            <span className="text-info d-flex align-items-center"><i
                                                                    className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="me-2">
                                                                <span><i className="ti ti-star text-warning"></i></span>
                                                            </a>
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal">
                                                                <span><i className="ti ti-trash text-danger"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>{/* end card body */}
                                            </div>{/* end card */}
                                        </div> {/* end col */}

                                        <div className="col-md-4 d-flex">
                                            <div className="card flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span
                                                            className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                                className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                        <div>
                                                            <a href="#" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#edit-note-units"><span><i
                                                                            className="ti ti-edit me-1"></i></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#delete_modal"><span><i
                                                                            className="ti ti-trash me-1"></i></span>Delete</a>
                                                                <a href="#"
                                                                    className="dropdown-item"><span><i
                                                                            className="ti ti-star me-1"></i></span>Not
                                                                    Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#view-note-units"><span><i
                                                                            className="ti ti-eye me-1"></i></span>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="my-3">
                                                        <h6 className="fs-16 text-truncate mb-1"><a
                                                                href="#">Improve touch typing</a>
                                                        </h6>
                                                        <p className="mb-3 d-flex align-items-center text-dark"><i
                                                                className="ti ti-calendar me-1"></i>22 Jan 2024</p>
                                                        <p className="text-truncate line-clamb-2 text-wrap">Well, the way
                                                            they make shows is, they make one show.</p>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-center justify-content-between border-top pt-3">
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="avatar avatar-md me-2">
                                                                <img src="assets/img/profiles/avatar-02.jpg"
                                                                    alt="Profile" className="img-fluid rounded-circle" />
                                                            </a>
                                                            <span className="text-success d-flex align-items-center"><i
                                                                    className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="me-2">
                                                                <span><i className="ti ti-star text-warning"></i></span>
                                                            </a>
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal">
                                                                <span><i className="ti ti-trash text-danger"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>{/* end card body */}
                                            </div>{/* end card */}
                                        </div> {/* end col */}

                                        <div className="col-md-4 d-flex">
                                            <div className="card flex-fill">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span
                                                            className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                                className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                        <div>
                                                            <a href="#" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#edit-note-units"><span><i
                                                                            className="ti ti-edit me-1"></i></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#delete_modal"><span><i
                                                                            className="ti ti-trash me-1"></i></span>Delete</a>
                                                                <a href="#"
                                                                    className="dropdown-item"><span><i
                                                                            className="ti ti-star me-1"></i></span>Not
                                                                    Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                    data-bs-target="#view-note-units"><span><i
                                                                            className="ti ti-eye me-1"></i></span>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="my-3">
                                                        <h6 className="fs-16 text-truncate mb-1"><a
                                                                href="#">Learn calligraphy</a>
                                                        </h6>
                                                        <p className="mb-3 d-flex align-items-center text-dark"><i
                                                                className="ti ti-calendar me-1"></i>24 Jan 2024</p>
                                                        <p className="text-truncate line-clamb-2 text-wrap">Calligraphy, the
                                                            art of beautiful handwriting. It derive from Greek.</p>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-center justify-content-between border-top pt-3">
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="avatar avatar-md me-2">
                                                                <img src="assets/img/profiles/avatar-03.jpg"
                                                                    alt="Profile" className="img-fluid rounded-circle" />
                                                            </a>
                                                            <span className="text-info d-flex align-items-center"><i
                                                                    className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <a href="#" className="me-2">
                                                                <span><i className="ti ti-star text-warning"></i></span>
                                                            </a>
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal">
                                                                <span><i className="ti ti-trash text-danger"></i></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>{/* end card body */}
                                            </div>{/* end card */}
                                        </div> {/* end col */}

                                    </div>

                                </div>
                                {/* end row */}

                                {/* start row */}
                                <div className="row">

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-success d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>High</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Backup Files EOD</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Project files should
                                                        be took backup before end of the day.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-05.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-info d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Download Server Logs</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>25 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Server log is a text
                                                        document that contains a record of all activity.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-06.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-success d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}


                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Medium</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Team meet at Starbucks</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>26 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Meeting all teamets
                                                        at Starbucks for identifying them all.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-07.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-warning d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div> {/* end card body */}
                                        </div> {/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-success d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>High</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Create a compost pile</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Compost pile refers
                                                        to fruit and vegetable scraps, used tea etc..</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-08.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-warning d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Take a hike at a local park</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Hiking involves a
                                                        long energetic walk in a natural environment.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-09.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-info d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div> {/* end card body */}
                                        </div> {/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-info d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Research a topic interested</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Research a topic
                                                        interested by listen actively and attentively.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-10.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-success d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                            </div>

                            {/* Items */}
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                aria-labelledby="v-pills-messages-tab">

                                {/* start row */}
                                <div className="row">

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-success d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>High</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Backup Files EOD</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>20 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Project files should
                                                        be took backup before end of the day.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-05.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-info d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Download Server Logs</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>25 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Server log is a text
                                                        document that contains a record of all activity.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-06.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-success d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-warning d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Medium</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Team meet at Starbucks</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>26 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Meeting all teamets
                                                        at Starbucks for identifying them all.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-07.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-warning d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-success d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>High</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Create a compost pile</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Compost pile refers
                                                        to fruit and vegetable scraps, used tea etc..</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-08.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-warning d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Take a hike at a local park</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Hiking involves a
                                                        long energetic walk in a natural environment.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-09.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-info d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-info d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Research a topic interested</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Research a topic
                                                        interested by listen actively and attentively.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-10.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-success d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                            </div>

                            {/* Items */}
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="v-pills-settings-tab">
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center justify-content-end">
                                        <a href="notes.html#" className="btn btn-danger mb-3">
                                            <span> <i className="ti ti-trash f-20 me-2"></i> </span> Restore all
                                        </a>
                                    </div>
                                </div>

                                {/* start row */}
                                <div className="row">

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-success d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>High</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Create a compost pile</a></h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>27 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Compost pile refers
                                                        to fruit and vegetable scraps, used tea etc..</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-08.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-warning d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Social</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-danger d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>Low</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Take a hike at a local park</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Hiking involves a
                                                        long energetic walk in a natural environment.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-09.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-info d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Personal</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                    <div className="col-md-4 d-flex">
                                        <div className="card flex-fill">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span
                                                        className="badge badge-outline-info d-inline-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1"></i>medium</span>
                                                    <div>
                                                        <a href="#" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </a>
                                                        <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#edit-note-units"><span><i
                                                                        className="ti ti-edit me-1"></i></span>Edit</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#delete_modal"><span><i
                                                                        className="ti ti-trash me-1"></i></span>Delete</a>
                                                            <a href="#" className="dropdown-item"><span><i
                                                                        className="ti ti-star me-1"></i></span>Not
                                                                Important</a>
                                                            <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal"
                                                                data-bs-target="#view-note-units"><span><i
                                                                        className="ti ti-eye me-1"></i></span>View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-3">
                                                    <h6 className="fs-16 text-truncate mb-1"><a
                                                            href="#">Research a topic interested</a>
                                                    </h6>
                                                    <p className="mb-3 d-flex align-items-center text-dark"><i
                                                            className="ti ti-calendar me-1"></i>28 Jan 2024</p>
                                                    <p className="text-truncate line-clamb-2 text-wrap">Research a topic
                                                        interested by listen actively and attentively.</p>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between border-top pt-3">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="avatar avatar-md me-2">
                                                            <img src="assets/img/profiles/avatar-10.jpg" alt="Profile"
                                                                className="img-fluid rounded-circle" />
                                                        </a>
                                                        <span className="text-success d-flex align-items-center"><i
                                                                className="ti ti-square-filled square-rotate fs-10 me-1"></i>Work</span>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <a href="#" className="me-2">
                                                            <span><i className="ti ti-star text-warning"></i></span>
                                                        </a>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete_modal">
                                                            <span><i className="ti ti-trash text-danger"></i></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{/* end card body */}
                                        </div>{/* end card */}
                                    </div> {/* end col */}

                                </div>
                                {/* end row */}

                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default Notes;
