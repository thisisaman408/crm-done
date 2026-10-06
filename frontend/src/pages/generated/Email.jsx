import React from 'react';

const Email = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from email.html */}
            <div className="d-md-flex">

                    {/* Email Sidenav Start */}
                    <div className="email-sidebar border-end border-bottom bg-white w-100" data-simplebar="">
                        <div className="p-3">
                            <div className="border bg-white rounded p-2 mb-3">
                                <div className="d-flex align-items-center">
                                    <a href="#" className="avatar avatar-md flex-shrink-0 me-2">
                                        <img src="assets/img/profiles/avatar-02.jpg" className="rounded-circle" alt="Img" />
                                    </a>
                                    <div>
                                        <h6 className="mb-1 fs-16 fw-medium"><a href="#">James Hong</a>
                                        </h6>
                                        <p className="fs-14 mb-0">james@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary w-100" id="compose_mail"><i
                                    className="ti ti-edit me-2"></i>Compose</a>
                            <a href="/ai-email-composer" className="btn btn-outline-light shadow w-100 mt-2"><i className="ti ti-sparkles me-2"></i>AI Compose</a>
                            <div className="mt-3">
                                <h5 className="mb-2">Emails</h5>
                                <div className="d-block mb-3 pb-3 border-bottom">
                                    <a href="/email"
                                        className="d-flex bg-light align-items-center justify-content-between p-2 rounded active">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-inbox text-gray me-2"></i>Inbox</span>
                                        <span className="badge bg-danger bg-danger rounded-pill badge-xs">56</span>
                                    </a>
                                    <a href="#"
                                        className="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-star text-gray me-2"></i>Starred</span>
                                        <span className="fw-semibold fs-12 rounded-pill">46</span>
                                    </a>
                                    <a href="#"
                                        className="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-rocket text-gray me-2"></i>Sent</span>
                                        <span className="rounded-pill">14</span>
                                    </a>
                                    <a href="#"
                                        className="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-file text-gray me-2"></i>Drafts</span>
                                        <span className="rounded-pill">12</span>
                                    </a>
                                    <a href="#"
                                        className="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-trash text-gray me-2"></i>Deleted</span>
                                        <span className="rounded-pill">08</span>
                                    </a>
                                    <a href="#"
                                        className="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span className="d-flex align-items-center fw-medium"><i
                                                className="ti ti-info-octagon text-gray me-2"></i>Spam</span>
                                        <span className="rounded-pill">0</span>
                                    </a>
                                    <div>
                                        <div className="more-menu">
                                            <a href="#"
                                                className="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span className="d-flex align-items-center fw-medium"><i
                                                        className="ti ti-location-up text-gray me-2"></i>Important</span>
                                                <span className="rounded-pill">12</span>
                                            </a>
                                            <a href="#"
                                                className="d-flex align-items-center justify-content-between p-2 rounded">
                                                <span className="d-flex align-items-center fw-medium"><i
                                                        className="ti ti-transition-top text-gray me-2"></i>All
                                                    Emails</span>
                                                <span className="rounded-pill">34</span>
                                            </a>
                                        </div>
                                        <div className="view-all mt-2">
                                            <a href="#" className="viewall-button text-muted"><span>Show
                                                    More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom mb-3 pb-3">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h5 className="mb-0">Labels</h5>
                                    <a href="#"><i
                                            className="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-square-rounded text-success me-2"></i> Team Events
                                    </a>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-square-rounded text-warning me-2"></i> Work
                                    </a>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-square-rounded text-danger me-2"></i> External
                                    </a>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-square-rounded text-skyblue me-2"></i> Projects
                                    </a>
                                    <div>
                                        <div className="more-menu-2">
                                            <a href="#"
                                                className="fw-medium d-flex align-items-center text-dark py-1">
                                                <i className="ti ti-square-rounded text-purple me-2"></i> Applications
                                            </a>
                                            <a href="#"
                                                className="fw-medium d-flex align-items-center text-dark py-1">
                                                <i className="ti ti-square-rounded text-info me-2"></i> Desgin
                                            </a>
                                        </div>
                                        <div className="view-all mt-2">
                                            <a href="#" className="viewall-button-2 text-muted"><span>Show
                                                    More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h5 className="mb-0">Folders</h5>
                                    <a href="#"><i
                                            className="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-folder-filled text-danger me-2"></i> Projects
                                    </a>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-folder-filled text-warning me-2"></i> Personal
                                    </a>
                                    <a href="#"
                                        className="fw-medium d-flex align-items-center text-dark py-1">
                                        <i className="ti ti-folder-filled text-success me-2"></i> Finance
                                    </a>
                                    <div>
                                        <div className="more-menu-3">
                                            <a href="#"
                                                className="fw-medium d-flex align-items-center text-dark py-1">
                                                <i className="ti ti-folder-filled text-info me-2"></i> Projects
                                            </a>
                                            <a href="#"
                                                className="fw-medium d-flex align-items-center text-dark py-1">
                                                <i className="ti ti-folder-filled text-primary me-2"></i> Personal
                                            </a>
                                        </div>
                                        <div className="view-all mt-2">
                                            <a href="#" className="viewall-button-3 text-muted"><span>Show
                                                    More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Email Sidenav End */}

                    <div className="bg-white flex-fill border-end border-bottom mail-notifications" data-simplebar="">
                        <div className="active">
                            <div>
                                <div className="p-3 border-bottom">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                        <div>
                                            <h5 className="mb-1">Inbox</h5>
                                            <div className="d-flex align-items-center">
                                                <span>2345 Emails</span>
                                                <i className="ti ti-point-filled text-primary mx-1"></i>
                                                <span>56 Unread</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="input-group input-group-sm input-group-flat me-2">
                                                <span className="input-group-text border border-end-0 shadow-none">
                                                    <i className="ti ti-search"></i>
                                                </span>
                                                <input type="text" className="form-control shadow-none"
                                                    placeholder="Search..." autocomplete="off" />
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="#"
                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                        className="ti ti-filter-edit"></i></a>
                                                <a href="#"
                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                        className="ti ti-settings"></i></a>
                                                <a href="#"
                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                        className="ti ti-refresh"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group list-group-flush mails-list">

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply"
                                                    className="avatar bg-primary avatar-rounded me-2">
                                                    <span className="avatar-title">CD</span>
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Justin
                                                                    Lapoint</a></h6>
                                                            <span className="fw-semibold">Client Dashboard</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-success"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">It seems that recipients are receiving...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark me-2"><i
                                                        className="ti ti-folder-open me-2"></i>3</span>
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-photo me-2"></i>+24</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span><i className="ti ti-star-filled text-warning"></i></span>
                                                <span
                                                    className="badge badge-soft-info mx-2 d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>Projects</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Rufana
                                                                    Joe</a></h6>
                                                            <span className="fw-semibold">UI project</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">Regardless, you can usually expect an increase</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#"><img src="assets/img/icons/google-meet.svg"
                                                    alt="Img" /></a>
                                            <div className="d-flex align-items-center">
                                                <span><i className="ti ti-star-filled text-warning"></i></span>
                                                <span
                                                    className="badge badge-soft-primary  d-inline-flex align-items-center p-1 mx-2"><i
                                                        className="ti ti-square me-1"></i>Applications</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-03.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Cameron
                                                                    Drake</a></h6>
                                                            <span className="fw-semibold">You’re missing</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">Here are a few catchy email subject line examples 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark fs-14"><i
                                                        className="ti ti-video me-2"></i>1</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span><i className="ti ti-star-filled text-warning"></i></span>
                                                <span
                                                    className="badge badge-soft-danger d-inline-flex align-items-center p-1  mx-2"><i
                                                        className="ti ti-square me-1"></i>External</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-04.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Sean
                                                                    Hill</a></h6>
                                                            <span className="fw-semibold">How Have You Progressed</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">You can write effective retargeting subject</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-photo me-2"></i>1</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span
                                                    className="badge badge-soft-success d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>Team Events</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-05.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Kevin
                                                                    Alley</a></h6>
                                                            <span className="fw-semibold">Flash. Sale. Alert.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">You can also use casual language,</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-link me-2"></i>1</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span
                                                    className="badge badge-soft-danger me-2 d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>External</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-08.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Linda
                                                                    Zimmer</a></h6>
                                                            <span className="fw-semibold">Products the celebs are</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">It seems that recipients are receiving...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-link me-2"></i>1</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span
                                                    className="badge badge-soft-warning me-2 d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>Work</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply"
                                                    className="avatar bg-success avatar-rounded me-2">
                                                    <span className="avatar-title">ER</span>
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Emly
                                                                    Reachel</a></h6>
                                                            <span className="fw-semibold">No Subject</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">Announcing Fake Name Generator Premium</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-folder-open me-2"></i>3</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span
                                                    className="badge badge-soft-info d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                    {/* List Item Start */}
                                    <div className="list-group-item p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                                <input className="form-check-input" type="checkbox" />
                                            </div>
                                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                                <a href="/email-reply" className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="assets/img/profiles/avatar-07.jpg" alt="Img" />
                                                </a>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <h6 className="fs-16 mb-1"><a href="/email-reply">Sean
                                                                    Hill</a></h6>
                                                            <span className="fw-semibold">You’re missing</span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i className="ti ti-dots"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="/email-reply">Open Email</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Reply All</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Forward As
                                                                            Attachment</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mark As
                                                                            Unread</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move to Junk</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Mute</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Delete</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Archive</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item rounded-1"
                                                                            href="#">Move To</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <span className="d-inline-flex align-items-center"><i
                                                                    className="ti ti-point-filled text-danger"></i>3:13
                                                                PM</span>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0">Regardless, you can usually expect an increase</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark me-2"><i
                                                        className="ti ti-folder-open me-2"></i>3</span>
                                                <span className="d-flex align-items-center btn btn-sm bg-soft-dark"><i
                                                        className="ti ti-photo me-2"></i>+24</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span><i className="ti ti-star-filled text-warning"></i></span>
                                                <span
                                                    className="badge badge-soft-info mx-2 d-inline-flex align-items-center p-1"><i
                                                        className="ti ti-square me-1"></i>Applications</span>
                                                <a href="#"
                                                    className="badge bg-dark rounded-pill p-1">+1</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item End */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Email;
