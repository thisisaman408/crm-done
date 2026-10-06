import React from 'react';

const Notifications = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from notifications.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                    <div>
                        <h4 className="mb-1">Notifications</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Notifications</li>
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

                {/* card start */}
                <div className="card mb-0">

                    <div className="card-header d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="d-inline-flex align-items-center mb-0">Total Notifications <span
                                className="badge bg-danger ms-2">658</span></h6>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                            <a href="#" className="btn btn-light"><i className="ti ti-checks me-1"></i>Mark
                                all as read</a>
                            <a href="#" className="btn btn-danger"><i className="ti ti-trash me-1"></i>Delete
                                All</a>
                        </div>
                    </div>

                    <div className="card-body">

                        <div className="card notication-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex align-items-center">
                                        <a href="notifications.html#" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-07.jpg" alt="img" className="rounded-circle" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <p className="mb-1"><a href="notifications.html#" className="fw-medium">Daniel
                                                        Martinz</a> requested Sick Leave from <span
                                                        className="text-dark fw-medium">May 28 2025</span> to <span
                                                        className="text-dark fw-medium"> May 29 2025</span></p>
                                                <p className="fs-12 mb-0 d-inline-flex align-items-center"><i
                                                        className="ti ti-clock me-1"></i> 4 min ago<span className="ms-2"><i
                                                            className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-btn">
                                        <a href="#"
                                            className="btn btn-danger d-inline-flex align-items-center"><i
                                                className="ti ti-trash me-1"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card notication-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex align-items-center">
                                        <a href="notifications.html#" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-02.jpg" alt="img" className="rounded-circle" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <p className="mb-1">Leave for <a href="notifications.html#"
                                                        className="fw-medium">Emily Clark</a> <span
                                                        className="text-dark fw-medium">(May 26 2025)</span> has been
                                                    approved.</p>
                                                <p className="fs-12 mb-0 d-inline-flex align-items-center"><i
                                                        className="ti ti-clock me-1"></i> 15 min ago<span className="ms-2"><i
                                                            className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-btn">
                                        <a href="#"
                                            className="btn btn-danger d-inline-flex align-items-center"><i
                                                className="ti ti-trash me-1"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card notication-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex align-items-center">
                                        <a href="notifications.html#" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-04.jpg" alt="img" className="rounded-circle" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <p className="mb-1">Leave request from <a href="notifications.html#"
                                                        className="fw-medium">David Anderson</a> <span
                                                        className="text-dark fw-medium">(May 30 2025)</span> has been
                                                    rejected.</p>
                                                <p className="fs-12 mb-0 d-inline-flex align-items-center"><i
                                                        className="ti ti-clock me-1"></i> 45 Min Ago<span className="ms-2"><i
                                                            className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-btn">
                                        <a href="#"
                                            className="btn btn-danger d-inline-flex align-items-center"><i
                                                className="ti ti-trash me-1"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card notication-card mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div className="d-flex align-items-center">
                                        <a href="notifications.html#" className="avatar flex-shrink-0">
                                            <img src="assets/img/users/user-24.jpg" alt="img" className="rounded-circle" />
                                        </a>
                                        <div className="ms-2">
                                            <div>
                                                <p className="mb-1"><a href="notifications.html#" className="fw-medium">Ann
                                                        McClure</a> cancelled her appointment scheduled for <span
                                                        className="text-dark fw-medium">February 5, 2024</span></p>
                                                <p className="fs-12 mb-0 d-inline-flex align-items-center"><i
                                                        className="ti ti-clock me-1"></i> 58 Min Ago<span className="ms-2"><i
                                                            className="ti ti-point-filled text-danger fs-16 lh-sm"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti-btn">
                                        <a href="#"
                                            className="btn btn-danger d-inline-flex align-items-center"><i
                                                className="ti ti-trash me-1"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* card start */}
        </div>
    );
};

export default Notifications;
