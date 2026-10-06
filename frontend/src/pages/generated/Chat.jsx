import React from 'react';

const Chat = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from chat.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Chat</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Chat</li>
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

                <div className="chat-wrapper">

                    <div className="card shadow-none mb-0">
                        <div className="card-body p-0">

                            <div className="d-lg-flex">
                                <div className="chat-user-nav">
                                    <div>
                                        <div
                                            className="d-flex align-items-center justify-content-between border-bottom p-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar me-2 flex-shrink-0"><img
                                                        src="assets/img/users/avatar-2.jpg" className="rounded-circle"
                                                        alt="user" /></span>
                                                <div>
                                                    <h6 className="fs-14 mb-1">James Hong </h6>
                                                    <p className="mb-0">Admin</p>
                                                </div>
                                            </div>
                                            <a href="chat.html#" className="btn btn-icon btn-primary" data-bs-toggle="tooltip"
                                                data-bs-placement="top" data-bs-title="New Chat"><i
                                                    className="ti ti-plus"></i></a>
                                        </div>
                                        <div>
                                            <div className="input-group w-auto input-group-flat p-4 pb-0">
                                                <span className="input-group-text border-end-0"><i
                                                        className="ti ti-search"></i></span>
                                                <input type="text" className="form-control" placeholder="Search Keyword" />
                                            </div>
                                            <div className="chat-users p-4" data-simplebar>
                                                <h6 className="mb-3">All Messages</h6>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list active mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-5.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Mark Smith</a></h6>
                                                            <p className="mb-0 text-truncate">Hey Sam! Did you Ch...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block">10:10 AM</span>
                                                        <span className="d-block text-success"><i
                                                                className="ti ti-checks"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-4.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Eugene Sikora</a></h6>
                                                            <p className="mb-0 text-truncate">How are your Today</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">08:26 AM</span>
                                                        <span
                                                            className="badge ms-auto bg-danger rounded-circle message-count">5</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/user-08.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Robert Fassett</a></h6>
                                                            <p className="mb-0 text-truncate">Here are some of ve...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">yesterday</span>
                                                        <span
                                                            className="badge ms-auto bg-danger rounded-circle message-count">5</span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/user-04.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Andrew Fletcher</a></h6>
                                                            <p className="mb-0 text-truncate">Use tools like Trello...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">yesterday</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-checks"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#"
                                                            className="avatar badge-soft-purple fw-semibold me-2 flex-shrink-0">TD</a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Tyron Derby</a></h6>
                                                            <p className="mb-0 text-truncate">Let's reconvene next...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">12:55 PM</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-checks text-success"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-6.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Anna Johnson</a></h6>
                                                            <p className="mb-0 text-truncate">How are your Today</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">12:54 PM</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-check text-light"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-8.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Emily Davis</a></h6>
                                                            <p className="mb-0 text-truncate">Sure, I can help with...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">11:47 PM</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-checks text-light"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/user-06.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">Susan Denton</a></h6>
                                                            <p className="mb-0 text-truncate">I'll share the meeting...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">10:43 PM</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-checks text-light"></i></span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center justify-content-between rounded p-3 user-list">
                                                    <div className="d-flex align-items-center">
                                                        <a href="chat.html#" className="avatar me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-9.jpg"
                                                                className="rounded-circle" alt="user" /></a>
                                                        <div>
                                                            <h6 className="fs-14 mb-1"><a href="chat.html#">David Cruz</a></h6>
                                                            <p className="mb-0 text-truncate">Let me know if you...</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-dark d-block mb-1">10:43 PM</span>
                                                        <span className="d-block text-light"><i
                                                                className="ti ti-checks text-light"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>{/* end card body */}
                                </div>
                                <div className="flex-fill chat-messages">
                                    {/* card start */}
                                    <div className="card border-0 mb-0">

                                        <div
                                            className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3">
                                            <div className="d-flex align-items-center">
                                                <span className="avatar me-2 flex-shrink-0"><img
                                                        src="assets/img/users/avatar-5.jpg" alt="user"
                                                        className="rounded-circle" /></span>
                                                <div>
                                                    <h6 className="fs-14 fw-semibold mb-1">Mark Smith</h6>
                                                    <p className="mb-0 d-inline-flex align-items-center custom-dot"><i
                                                            className="ti ti-point-filled text-success"></i>Online</p>
                                                </div>
                                            </div>
                                            <div className="gap-2 d-flex align-items-center flex-wrap">
                                                <a href="/audio-call" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Voice Call"><i
                                                        className="ti ti-phone"></i></a>
                                                <a href="/video-call" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Video Call"><i
                                                        className="ti ti-video"></i></a>
                                                <a href="#" className="btn btn-icon btn-light"
                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Refresh" data-bs-original-title="Info"><i
                                                        className="ti ti-info-circle"></i></a>
                                                <a href="#"
                                                    className="btn btn-icon btn-light close-chat d-md-none"><i
                                                        className="ti ti-x"></i></a>
                                            </div>
                                        </div>

                                        <div className="card-body p-0">
                                            <div className="message-body p-4" data-simplebar>
                                                <div className="chat-list mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <span className="avatar online me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-5.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                        <div>
                                                            <div className="d-flex align-items-center mb-1">
                                                                <h6 className="fs-14 mb-0">Mark Smith</h6>
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="message-box receive-message p-3">
                                                                    <p className="mb-0 fs-14">Hey mark! Did you check out
                                                                        the new logo design?</p>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-list ms-auto mb-3">
                                                    <div className="d-flex align-items-start justify-content-end">
                                                        <div>
                                                            <div
                                                                className="d-flex align-items-center justify-content-end mb-1">
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-checks text-success me-1"></i>02:39
                                                                    PM<i className="ti ti-point-filled mx-2"></i></p>
                                                                <h6 className="fs-14 fw-semibold mb-0">You</h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="message-box sent-message p-3">
                                                                    <p className="mb-0 fs-14">Not yet. Can you send it here?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="avatar ms-2 online flex-shrink-0"><img
                                                                src="assets/img/users/avatar-2.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                    </div>
                                                </div>
                                                <div className="chat-list mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <span className="avatar online me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-5.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                        <div>
                                                            <div className="d-flex align-items-center mb-1">
                                                                <h6 className="fs-14 mb-0">Mark Smith</h6>
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="message-box receive-message p-3">
                                                                    <p className="mb-2 fs-14">Sure! Please check the below
                                                                        logo Attached!!!</p>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <span className="bg-white d-block rounded p-1"><img
                                                                                src="assets/img/social/attachment-03.jpg"
                                                                                className="rounded" alt="attachment" /></span>
                                                                        <span className="bg-white d-block rounded p-1"><img
                                                                                src="assets/img/social/attachment-04.jpg"
                                                                                className="rounded" alt="attachment" /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center"><span
                                                        className="badge bg-light rounded-pill px-3 text-dark fs-14">Today</span>
                                                </div>
                                                <div className="chat-list ms-auto mb-3">
                                                    <div className="d-flex align-items-start justify-content-end">
                                                        <div>
                                                            <div
                                                                className="d-flex align-items-center justify-content-end mb-1">
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-checks text-success me-1"></i>10:00
                                                                    AM<i className="ti ti-point-filled mx-2"></i></p>
                                                                <h6 className="fs-14 fw-semibold mb-0">You</h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="message-box sent-message p-3">
                                                                    <p className="mb-0 fs-14">Looks clean! I like the font.
                                                                        Maybe try a slightly darker blue?</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="avatar ms-2 online flex-shrink-0"><img
                                                                src="assets/img/users/avatar-2.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                    </div>
                                                </div>
                                                <div className="chat-list mb-3">
                                                    <div className="d-flex align-items-start">
                                                        <span className="avatar online me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-5.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                        <div>
                                                            <div className="d-flex align-items-center mb-1">
                                                                <h6 className="fs-14 mb-0">Mark Smith</h6>
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-point-filled mx-2"></i>10:05 AM</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="message-box receive-message p-3">
                                                                    <p className="mb-0 fs-14">Perfect! That layout will work
                                                                        great on the landing page. 👍</p>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-list ms-auto mb-3">
                                                    <div className="d-flex align-items-start justify-content-end">
                                                        <div>
                                                            <div
                                                                className="d-flex align-items-center justify-content-end mb-1">
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-checks text-success me-1"></i>10:00
                                                                    AM<i className="ti ti-point-filled mx-2"></i></p>
                                                                <h6 className="fs-14 fw-semibold mb-0">You</h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="message-box sent-message p-3">
                                                                    <p className="mb-0 fs-14">Perfect It looks Great!!!</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="avatar ms-2 online flex-shrink-0"><img
                                                                src="assets/img/users/avatar-2.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                    </div>
                                                </div>
                                                <div className="chat-list">
                                                    <div className="d-flex align-items-start">
                                                        <span className="avatar online me-2 flex-shrink-0"><img
                                                                src="assets/img/users/avatar-5.jpg"
                                                                className="rounded-circle" alt="user" /></span>
                                                        <div>
                                                            <div className="d-flex align-items-center mb-1">
                                                                <h6 className="fs-14 mb-0">Mark Smith</h6>
                                                                <p className="mb-0 d-inline-flex align-items-center"><i
                                                                        className="ti ti-point-filled mx-2"></i>02:39 PM</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="message-box receive-message p-3">
                                                                    <p className="mb-0 fs-14">Hey mark! Did you check out
                                                                        the new logo design?</p>
                                                                </div>
                                                                <div className="ms-2">
                                                                    <a href="#"
                                                                        data-bs-toggle="dropdown"><i
                                                                            className="ti ti-dots-vertical"></i></a>
                                                                    <ul className="dropdown-menu p-2">
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-back-up me-1"></i>Reply</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-arrow-forward-up me-1"></i>Forward</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-file-export me-1"></i>Copy</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-heart me-1"></i>Mark as
                                                                                Favourite</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-trash me-1"></i>Delete</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-check me-1"></i>Mark as
                                                                                Unread</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-box-align-right me-1"></i>Archeive
                                                                                Chat</a></li>
                                                                        <li><a className="dropdown-item" href="chat.html#"><i
                                                                                    className="ti ti-pinned me-1"></i>Pin
                                                                                Chat</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-footer d-flex align-items-center border-top p-3">
                                                <div className="flex-fill">
                                                    <input type="text" className="form-control border-0"
                                                        placeholder="Type Something..." />
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <a href="#" className="btn btn-icon btn-light"><i
                                                            className="ti ti-photo-plus"></i></a>
                                                    <a href="#" className="btn btn-icon btn-light"><i
                                                            className="ti ti-mood-smile-beam"></i></a>
                                                    <div>
                                                        <a href="#" className="btn btn-icon btn-light"
                                                            data-bs-toggle="dropdown" aria-label="more options"><i
                                                                className="ti ti-dots-vertical"></i></a>
                                                        <ul className="dropdown-menu p-2">
                                                            <li>
                                                                <a href="chat.html#" className="dropdown-item"><i
                                                                        className="ti ti-camera-selfie me-2"></i>Camera</a>
                                                            </li>
                                                            <li>
                                                                <a href="chat.html#" className="dropdown-item"><i
                                                                        className="ti ti-photo-up me-2"></i>Gallery</a>
                                                            </li>
                                                            <li>
                                                                <a href="chat.html#" className="dropdown-item"><i
                                                                        className="ti ti-music me-2"></i>Audio</a>
                                                            </li>
                                                            <li>
                                                                <a href="chat.html#" className="dropdown-item"><i
                                                                        className="ti ti-map-pin-share me-2"></i>Location</a>
                                                            </li>
                                                            <li>
                                                                <a href="chat.html#" className="dropdown-item"><i
                                                                        className="ti ti-user-check me-2"></i>Contact</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a className="btn btn-icon btn-primary" href="#"
                                                        data-discover="true"><i className="ti ti-send"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* card start */}
                                </div>
                            </div>
                        </div>{/* end card body */}
                    </div>{/* end card */}

                </div>
        </div>
    );
};

export default Chat;
