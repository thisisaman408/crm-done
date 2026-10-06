import React from 'react';

const EmailReply = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from email-reply.html */}
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
                                                    More</span><i className="ti ti-chevron-down fs-10 ms-2"></i></a>
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
                                                    More</span><i className="ti ti-chevron-down fs-10 ms-2"></i></a>
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
                                                    More</span><i className="ti ti-chevron-down fs-10 ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Email Sidenav End */}

                    <div className="mail-detail bg-white border-bottom p-3 w-100" data-simplebar="">
                        <div>
                            <div
                                className="d-flex align-items-center table-header justify-content-between flex-wrap row-gap-2 border-bottom mb-3 pb-3">
                                <div className="dropdown">
                                    <button className="btn border dropdown-toggle drop-arrow-none" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="badge bg-dark rounded-circle badge-xs me-1">5</span> Peoples<i
                                            className="ti ti-chevron-down align-middle ms-1"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item rounded-1" href="#">Peoples</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item rounded-1" href="#">Rufana</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item rounded-1" href="#">Sean Hill</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item rounded-1" href="#">Cameron
                                                Drake</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-arrow-back-up"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-arrow-back-up-double"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-arrow-forward"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-bookmarks-filled"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-archive-filled"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-mail-opened-filled"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-printer"></i></a>
                                    <a href="#"
                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                            className="ti ti-star-filled text-warning"></i></a>
                                </div>
                            </div>

                            <div className="bg-light card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center flex-fill border-bottom mb-3 pb-3">
                                        <a href="#"
                                            className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                            <img src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                                        </a>
                                        <div className="flex-fill">
                                            <div
                                                className="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                                <div>
                                                    <h6 className="fs-16 mb-1"><a href="#">Angela
                                                            Thomas</a></h6>
                                                    <p className="mb-0">Subject: Client Dashboard</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="me-2 mb-0">12:45 AM</p>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-arrow-back-up"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-arrow-back-up-double"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-printer"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                        <p className="mb-0 text-dark me-3"><span className="text-gray">From: </span> Arman Janes
                                        </p>
                                        <p className="mb-0 text-dark me-3"><span className="text-gray">To: </span> Angela Thomas
                                        </p>
                                        <p className="mb-0 text-dark"><span className="text-gray">Cc: </span> Angela Thomas,
                                            Justin Lapointe</p>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}

                            <div className="card shadow-none">
                                <div className="card-body">
                                    <div>
                                        <h6 className="fs-16 mb-2">Dear Angela</h6>
                                        <p className="text-dark">I am writing to request a meeting to discuss the progress
                                            and next steps for Project. We have reached a critical milestone, and I
                                            believe a discussion will help align our efforts and ensure we are on track
                                            to meet our goals.
                                        </p>
                                        <p className="text-dark">
                                            am available on Tuesday and Thursday afternoons, but I am flexible and can
                                            adjust to a time that suits you best
                                        </p>
                                        <p className="text-dark">
                                            Looking forward to your response.
                                        </p>
                                        <p className="text-dark">Best regards, <br /><b
                                                className="fw-medium d-flex mt-1">Arman</b> </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between my-3 pt-3 border-top">
                                        <h5>Attachments</h5>
                                        <a href="#" className="text-primary fw-medium">Download All</a>
                                    </div>
                                    <div className="d-flex align-items-center img-full-view">
                                        <a href="assets/img/media/email-attach-big-01.jpg" data-glightbox data-gallery="gallery"
                                            className="avatar avatar-xl me-3 gallery-item">
                                            <img src="assets/img/media/email-attach-01.jpg" className=" rounded" alt="img" />
                                            <span className="avatar avatar-md avatar-rounded"><i
                                                    className="ti ti-eye"></i></span>
                                        </a>
                                        <a href="assets/img/media/email-attach-big-02.jpg" data-glightbox data-gallery="gallery"
                                            className="avatar avatar-xl me-3 gallery-item">
                                            <img src="assets/img/media/email-attach-02.jpg" className="rounded" alt="img" />
                                            <span className="avatar avatar-md avatar-rounded"><i
                                                    className="ti ti-eye"></i></span>
                                        </a>
                                        <a href="assets/img/media/email-attach-big-03.jpg" data-glightbox data-gallery="gallery"
                                            className="avatar avatar-xl me-3 gallery-item">
                                            <img src="assets/img/media/email-attach-03.jpg" className="rounded" alt="img" />
                                            <span className="avatar avatar-md avatar-rounded"><i
                                                    className="ti ti-eye"></i></span>
                                        </a>
                                    </div>
                                </div> {/* end card body */}
                            </div> {/* end card */}

                            <div className="card shadow-none">
                                <div className="card-body">
                                    <div className="bg-light rounded p-3 mb-3">
                                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                            <a href="#"
                                                className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                                <img src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                                            </a>
                                            <div className="flex-fill">
                                                <div
                                                    className="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                                    <div>
                                                        <h6 className="fs-16 mb-1"><a href="#">Arman
                                                                Janes</a></h6>
                                                        <div className="d-flex align-items-center">
                                                            <p className="mb-0"><span>To: </span> Me</p>
                                                            <div className="dropdown">
                                                                <a href="#"
                                                                    className="dropdown-toggle bg-transparent text-dark border-0 p-0 btn-sm"
                                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                                </a>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                            href="#"><span
                                                                                className="text-gray">From :</span> Arman
                                                                            Janes arman@example.com</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                            href="#"><span
                                                                                className="text-gray">To :</span> Angela
                                                                            Thomas angela@example.com</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item"
                                                                            href="#"><span
                                                                                className="text-gray">Date :</span> 12 May
                                                                            2025, 09:45 PM </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <p className="me-2 mb-0">Yesterday 01:22 AM</p>
                                                        <a href="#"
                                                            className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                                className="ti ti-arrow-back-up"></i></a>
                                                        <a href="#"
                                                            className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                                className="ti ti-arrow-back-up-double"></i></a>
                                                        <a href="#"
                                                            className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                                className="ti ti-printer"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="fs-16 mb-2">Dear Arman</h6>
                                        <p className="text-dark">Introduction Mail from Techsolutions!!!</p>
                                        <p className="text-dark">Best regards <br /><b
                                                className="fw-medium d-inline-flex mt-1">Arman</b></p>
                                    </div>
                                    <form action="email.html">
                                        <div className="border rounded mt-3">
                                            <div className="p-3 position-relative border-bottom">
                                                <div className="tag-with-img d-flex align-items-center">
                                                    <label className="form-label me-2 mb-0">To</label>
                                                    <input className="input-tags form-control border-0 h-100 shadow-none"
                                                        data-choices data-choices-limit="3" data-choices-removeItem
                                                        type="text" value="Angela Thomas" />
                                                </div>
                                                <div
                                                    className="d-flex align-items-center position-absolute end-0 pe-3 top-50 translate-middle-y">
                                                    <a href="#" className="d-inline-flex me-2">Cc</a>
                                                    <a href="#" className="d-inline-flex">Bcc</a>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <div className="mb-3">
                                                    <textarea rows="2"
                                                        className="form-control border-0 p-0 bg-transparent shadow-none"></textarea>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex align-items-center justify-content-between border-top p-3 flex-wrap">
                                                <div className="d-flex align-items-center">
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-paperclip"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-photo"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-link"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-pencil"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-mood-smile"></i></a>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-calendar-repeat"></i></a>
                                                    <a href="#"
                                                        className="btn btn-icon btn-sm btn-outline-white border-0 rounded-circle"><i
                                                            className="ti ti-trash"></i></a>
                                                    <button type="submit"
                                                        className="btn btn-primary d-inline-flex align-items-center ms-2">Send
                                                        <i className="ti ti-arrow-right ms-2"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> {/* end card body */}
                            </div> {/* end card */}

                            <div className="text-center">
                                <a href="#" className="btn btn-dark btn-sm">View Older Messages</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default EmailReply;
