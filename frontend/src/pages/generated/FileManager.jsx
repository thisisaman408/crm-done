import React from 'react';

const FileManager = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from file-manager.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">File Manager</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                <li className="breadcrumb-item active" aria-current="page">File Manager</li>
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

                <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                    <div className="mb-2">
                        <div className="dropdown">
                            <a href="#"
                                className="dropdown-toggle btn btn-sm btn-outline-white bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                data-bs-toggle="dropdown">
                                All Files<i className="ti ti-chevron-down align-middle ms-1"></i>
                            </a>
                            <ul className="dropdown-menu  dropdown-menu-start">
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">All Files</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Music</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Video</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Documents</a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown-item rounded-1">Photos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-2">
                        <a href="file-manager.html#" data-bs-toggle="modal" data-bs-target="#add_folder"
                            className="btn btn-sm btn-primary d-flex align-items-center"><i
                                className="ti ti-circle-plus me-1"></i>Create Folder</a>
                    </div>
                </div>

                {/* start row */}
                <div className="row">

                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/icons/dropbox.svg" alt="img" />
                                        <h5 className="fs-16 ms-2 mb-0">Dropbox</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown">
                                            <i className="ti ti-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-folder-open me-2"></i>Open</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-trash me-1"></i>Delete All</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-status-change me-1"></i>Reset</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="progress progress-xs flex-grow-1 mb-2">
                                    <div className="progress-bar bg-pink rounded" role="progressbar" style={{ width: '20%' }}
                                        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">200 Files</p>
                                    <p className="text-dark mb-0">28GB</p>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/icons/drive.svg" alt="img" />
                                        <h5 className="fs-16 ms-2 mb-0">Google Drive</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown">
                                            <i className="ti ti-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-folder-open me-2"></i>Open</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-trash me-1"></i>Delete All</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-status-change me-1"></i>Reset</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="progress progress-xs flex-grow-1 mb-2">
                                    <div className="progress-bar bg-pink rounded" role="progressbar" style={{ width: '80%' }}
                                        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">144 Files</p>
                                    <p className="text-dark mb-0">54GB</p>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/icons/cloud.svg" alt="img" />
                                        <h5 className="fs-16 ms-2 mb-0">Cloud Storage</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown">
                                            <i className="ti ti-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-folder-open me-2"></i>Open</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-trash me-1"></i>Delete All</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-status-change me-1"></i>Reset</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="progress progress-xs flex-grow-1 mb-2">
                                    <div className="progress-bar bg-purple rounded" role="progressbar" style={{ width: '50%' }}
                                        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">144 Files</p>
                                    <p className="text-dark mb-0">54GB</p>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-3 col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/icons/storage.svg" alt="img" />
                                        <h5 className="fs-16 ms-2 mb-0">Internal Storage</h5>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown">
                                            <i className="ti ti-dots"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-folder-open me-2"></i>Open</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-trash me-1"></i>Delete All</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item rounded-1"><i
                                                        className="ti ti-status-change me-1"></i>Reset</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="progress progress-xs flex-grow-1 mb-2">
                                    <div className="progress-bar bg-purple rounded" role="progressbar" style={{ width: '20%' }}
                                        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0">144 Files</p>
                                    <p className="text-dark mb-0">54GB</p>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}

                {/* start row */}
                <div className="row">

                    {/* Start Sidebar */}
                    <div className="col-xl-3 theiaStickySidebar">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center overflow-hidden">
                                            <span className="avatar flex-shrink-0">
                                                <img src="assets/img/profiles/avatar-01.jpg" alt="img"
                                                    className="rounded-circle" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h5 className="fs-16 text-truncate mb-1">James Hong</h5>
                                                <p className="fs-13 text-truncate mb-0">jameshong@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded position-relative p-3 mb-3 text-center">
                                    <span className="avatar avatar-sm bg-primary text-white mb-2">
                                        <i className="ti ti-upload fs-16"></i>
                                    </span>
                                    <h6 className="mb-2">Drop files here</h6>
                                    <p className="fs-13 mb-0">Select files to upload</p>
                                    <input type="file" className="position-absolute top-0 start-0 opacity-0 w-100 h-100" />
                                </div>
                                <div className="files-list nav d-block">
                                    <a href="#"
                                        className="d-flex align-items-center fw-medium p-2 active"><i
                                            className="ti ti-folder-up me-2"></i>All Folder / Files</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-star me-2"></i>Drive</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-octahedron me-2"></i>Dropbox</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-share-2 me-2"></i>Shared with Me</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-file me-2"></i>Document</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-clock-hour-11 me-2"></i>Recent File</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-star me-2"></i>Important</a>
                                    <a href="#" className="d-flex align-items-center fw-medium p-2"><i
                                            className="ti ti-music me-2"></i>Media</a>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}

                        <div className="card mb-3 mb-xl-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-2">
                                    <h6 className="mb-2">Storage Details</h6>
                                    <span className="badge bg-success mb-2">Used 77%</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <span className="avatar avatar-md bg-info-subtle">
                                            <i className="ti ti-music fs-20 text-info"></i>
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h6 className="text-truncate fs-14">Music</h6>
                                            <p className="fs-13 text-truncate mb-0">35 Files</p>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-0">8.5 GB</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <span className="avatar avatar-md bg-warning-subtle">
                                            <i className="ti ti-video fs-20 text-warning"></i>
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h6 className="text-truncate fs-14">Video</h6>
                                            <p className="fs-13 text-truncate mb-0">145 Files</p>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-0">2 GB</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <span className="avatar avatar-md bg-secondary-subtle">
                                            <i className="ti ti-file-description fs-20 text-secondary"></i>
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h6 className="text-truncate fs-14">Documents</h6>
                                            <p className="fs-13 text-truncate mb-0">487 Files</p>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-0">24.5 GB</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <span className="avatar avatar-md bg-primary-subtle">
                                            <i className="ti ti-photo fs-20 text-primary"></i>
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h6 className="text-truncate fs-14">Photos</h6>
                                            <p className="fs-13 text-truncate mb-0">35 Files</p>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-0">8.5 GB</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-0">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <span className="avatar avatar-md bg-danger-subtle">
                                            <i className="ti ti-file-type-doc fs-20 text-danger"></i>
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h6 className="text-truncate fs-14">Other</h6>
                                            <p className="fs-13 text-truncate mb-0">487 Files</p>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-0">16.2 GB</p>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}

                    </div> {/* end col */}
                    {/* End Sidebar */}

                    <div className="col-xl-9">

                        {/* Start Quick Access */}
                        <div className="border-bottom mb-3">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-2">Quick Access</h6>
                                <div>
                                    <a href="#" className="mb-2 fw-medium link-default">View All</a>
                                </div>
                            </div>

                            {/* start row */}
                            <div
                                className="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/file.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas" data-bs-target="#preview">Final.doc</a>
                                            </h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star-filled filled text-warning"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/pdf-icon.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">Marklist.pdf</a></h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/image.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas" data-bs-target="#preview">Nature.png</a>
                                            </h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star-filled filled text-warning"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/xls-icon.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas" data-bs-target="#preview">List.xlsx</a>
                                            </h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/folder-icon.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas" data-bs-target="#preview">Group
                                                    Photos</a></h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                                <div className="col d-flex">
                                    <div className="card position-relative flex-fill">
                                        <div className="card-body text-center">
                                            <img src="assets/img/icons/file.svg" alt="img" className="mb-3" />
                                            <h6 className="mb-2 fw-medium"><a href="#"
                                                    data-bs-toggle="offcanvas" data-bs-target="#preview">Final.doc</a>
                                            </h6>
                                            <span className="badge badge-soft-primary">2.4 GB</span>
                                        </div>{/* end card body */}
                                        <span className="position-absolute end-0 top-0 p-2"><i
                                                className="ti ti-star-filled filled text-warning"></i></span>
                                    </div>{/* end card */}
                                </div> {/* end col */}

                            </div>
                            {/* end row */}

                        </div>
                        {/* End Quick Access */}

                        {/* Start Recent Folders */}
                        <div className="border-bottom mb-3">

                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-2">Recent Folders</h6>
                                <div className="dropdown mb-2">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-sm btn-outline-white bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        Last 7 Days<i className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last 7
                                                Days</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last Month</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* start row */}
                            <div className="row">

                                <div className="col-lg-4 col-md-6 d-flex">
                                    <div
                                        className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3 flex-fill">
                                        <div className="d-flex align-items-center">
                                            <span className="text-warning fs-24">
                                                <i className="ti ti-folder-filled"></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="mb-1"><a href="file-manager.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#preview">Assets</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fs-12 mb-0 me-1">2.4 GB</p>
                                                    <p className="fs-12 mb-0 d-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1 text-dark"></i>35 files
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-07.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-4 col-md-6 d-flex">
                                    <div
                                        className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3 flex-fill">
                                        <div className="d-flex align-items-center">
                                            <span className="text-warning fs-24">
                                                <i className="ti ti-folder-filled"></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="mb-1"><a href="file-manager.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#preview">Document</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fs-12 mb-0 me-1">4 GB</p>
                                                    <p className="fs-12 mb-0 d-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1 text-dark"></i>15 files
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-4 col-md-6 d-flex">
                                    <div
                                        className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3 flex-fill">
                                        <div className="d-flex align-items-center">
                                            <span className="text-warning fs-24">
                                                <i className="ti ti-folder-filled"></i>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="mb-1"><a href="file-manager.html#" data-bs-toggle="offcanvas"
                                                        data-bs-target="#preview">Handyimages</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fs-12 mb-0 me-1">1.4 GB</p>
                                                    <p className="fs-12 mb-0 d-flex align-items-center"><i
                                                            className="ti ti-circle-filled fs-7 me-1 text-dark"></i>115 files
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                            </div>
                            {/* end row */}

                        </div>
                        {/* End Recent Folders */}

                        {/* Start Recent Files */}
                        <div className="border-bottom mb-3">

                            <div className="d-flex align-items-center justify-content-between mb-2 table-header">
                                <h6 className="mb-2"><a href="file-manager.html#" data-bs-toggle="offcanvas" data-bs-target="#preview">Recent
                                        Files</a></h6>
                                <div className="dropdown mb-2">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-sm bg-white text-dark btn-outline-white drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        Last Modified<i className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Newest to
                                                Oldest</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Last
                                                Modified</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Oldest to
                                                Newest</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* start row */}
                            <div className="row">

                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded border mb-3">
                                        <div
                                            className="bg-light p-5 d-flex align-items-center justify-content-center rounded-top">
                                            <i className="ti ti-file-description fs-24 text-dark"></i>
                                        </div>
                                        <div
                                            className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                                            <h6 className="fw-medium mb-0"><a href="file-manager.html#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">customer_data.txt</a></h6>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded border mb-3">
                                        <div
                                            className="bg-light p-5 d-flex align-items-center justify-content-center rounded-top">
                                            <i className="ti ti-file-type-pdf fs-24 text-dark"></i>
                                        </div>
                                        <div
                                            className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                                            <h6 className="fw-medium text-truncate mb-0"><a href="file-manager.html#"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">video_player_installer_setup.rar</a></h6>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded border mb-3">
                                        <div
                                            className="bg-light p-5 d-flex align-items-center justify-content-center rounded-top">
                                            <i className="ti ti-headphones fs-24 text-dark"></i>
                                        </div>
                                        <div
                                            className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                                            <h6 className="fw-medium text-truncate mb-0"><a href="file-manager.html#"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">recording.mp3</a></h6>
                                            <div className="dropdown ms-2">
                                                <a href="#" className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown">
                                                    <i className="ti ti-dots"></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a href="#" data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview" className="dropdown-item rounded-1"><i
                                                                className="ti ti-folder-open me-2"></i>Preview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-copy me-2"></i>Duplicate</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-arrow-left-right me-2"></i>Move</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-user-plus me-2"></i>Invite</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-share-3 me-2"></i>Share Link</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider my-2" />
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-eye me-2"></i>View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item rounded-1"><i
                                                                className="ti ti-download me-2"></i>Download</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-bs-toggle="modal"
                                                            data-bs-target="#delete-modal"
                                                            className="dropdown-item rounded-1"><i
                                                                className="ti ti-trash-x me-2"></i>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col */}

                            </div>
                            {/* end row */}

                        </div>
                        {/* End Recent Files */}

                        {/* Start table list */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <h6 className="mb-0">Files</h6>
                            <div className="d-flex align-items-center">
                                <div className="dropdown me-2">
                                    <a href="#"
                                        className="dropdown-toggle btn bg-white text-dark btn-sm btn-outline-white drop-arrow-none"
                                        data-bs-toggle="dropdown">
                                        Sort By : Docs Type<i className="ti ti-chevron-down align-middle ms-1"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end">
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Docs</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Pdf</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Image</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Folder</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item rounded-1">Xml</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="link-primary fw-medium">View All</a>
                            </div>
                        </div>

                        <div className="table-responsive table-nowrap">

                            {/* Start Table List*/}
                            <table className="table table-nowrap border">
                                <thead className="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Size</th>
                                        <th>Type</th>
                                        <th>Modified</th>
                                        <th>Share</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="file-manager.html#" className="avatar avatar-md bg-light" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">
                                                    <img src="assets/img/icons/file-01.svg"
                                                        className="img-fluid w-auto h-auto" alt="img" /></a>
                                                <div className="ms-2">
                                                    <p className="text-dark fw-medium  mb-0"><a href="file-manager.html#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview">Secret</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>7.6 MB</td>
                                        <td>Doc</td>
                                        <td>
                                            <p className="text-dark mb-0">Mar 15, 2025</p>
                                            <span>05:00:14 PM</span>
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-12.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-select me-2">
                                                    <a href="#"><i className="ti ti-star"></i></a>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="file-manager.html#" className="d-flex align-items-center justify-content-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots fs-14"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#"
                                                                data-bs-toggle="modal" data-bs-target="#delete-modal">
                                                                <i className="ti ti-trash me-2"></i>Permanent Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#">
                                                                <i className="ti ti-edit-circle me-2"></i>Restore File
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="file-manager.html#" className="avatar avatar-md bg-light" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">
                                                    <img src="assets/img/icons/file-02.svg"
                                                        className="img-fluid w-auto h-auto" alt="img" /></a>
                                                <div className="ms-2">
                                                    <p className="text-dark fw-medium  mb-0"><a href="file-manager.html#"
                                                            data-bs-toggle="offcanvas" data-bs-target="#preview">Sophie
                                                            Headrick</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>7.4 MB</td>
                                        <td>PDF</td>
                                        <td>
                                            <p className="text-dark mb-0">Jan 8, 2025</p>
                                            <span>08:20:13 PM</span>
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-15.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-16.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-select me-2">
                                                    <a href="#"><i className="ti ti-star"></i></a>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="file-manager.html#" className="d-flex align-items-center justify-content-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots fs-14"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#"
                                                                data-bs-toggle="modal" data-bs-target="#delete-modal">
                                                                <i className="ti ti-trash me-2"></i>Permanent Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#">
                                                                <i className="ti ti-edit-circle me-2"></i>Restore File
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="file-manager.html#" className="avatar avatar-md bg-light" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">
                                                    <img src="assets/img/icons/file-03.svg"
                                                        className="img-fluid w-auto h-auto" alt="img" /></a>
                                                <div className="ms-2">
                                                    <p className="text-dark fw-medium  mb-0"><a href="file-manager.html#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview">Gallery</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>6.1 MB</td>
                                        <td>Image</td>
                                        <td>
                                            <p className="text-dark mb-0">Aug 6, 2025</p>
                                            <span>04:10:12 PM</span>
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-06.jpg" alt="img" />
                                                </span>
                                                <a className="avatar bg-primary avatar-rounded text-fixed-white"
                                                    href="#">
                                                    +1
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-select me-2">
                                                    <a href="#"><i className="ti ti-star"></i></a>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="file-manager.html#" className="d-flex align-items-center justify-content-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots fs-14"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#"
                                                                data-bs-toggle="modal" data-bs-target="#delete-modal">
                                                                <i className="ti ti-trash me-2"></i>Permanent Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#">
                                                                <i className="ti ti-edit-circle me-2"></i>Restore File
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="file-manager.html#" className="avatar avatar-md bg-light" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">
                                                    <img src="assets/img/icons/file-04.svg"
                                                        className="img-fluid w-auto h-auto" alt="img" /></a>
                                                <div className="ms-2">
                                                    <p className="text-dark fw-medium  mb-0"><a href="file-manager.html#"
                                                            data-bs-toggle="offcanvas" data-bs-target="#preview">Doris
                                                            Crowley</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>5.2 MB</td>
                                        <td>Folder</td>
                                        <td>
                                            <p className="text-dark mb-0">Jan 6, 2025</p>
                                            <span>03:40:14 PM</span>
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-06.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-10.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-select me-2">
                                                    <a href="#"><i className="ti ti-star"></i></a>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="file-manager.html#" className="d-flex align-items-center justify-content-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots fs-14"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#"
                                                                data-bs-toggle="modal" data-bs-target="#delete-modal">
                                                                <i className="ti ti-trash me-2"></i>Permanent Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#">
                                                                <i className="ti ti-edit-circle me-2"></i>Restore File
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <a href="file-manager.html#" className="avatar avatar-md bg-light" data-bs-toggle="offcanvas"
                                                    data-bs-target="#preview">
                                                    <img src="assets/img/icons/file-05.svg"
                                                        className="img-fluid w-auto h-auto" alt="img" /></a>
                                                <div className="ms-2">
                                                    <p className="text-dark fw-medium  mb-0"><a href="file-manager.html#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#preview">Cheat_codez</a></p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>8 MB</td>
                                        <td>Xml</td>
                                        <td>
                                            <p className="text-dark mb-0">Oct 12, 2025</p>
                                            <span>05:00:14 PM</span>
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked avatar-group-sm">
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-12.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img className="border border-white"
                                                        src="assets/img/profiles/avatar-11.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="rating-select me-2">
                                                    <a href="#"><i className="ti ti-star"></i></a>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="file-manager.html#" className="d-flex align-items-center justify-content-center"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots fs-14"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#"
                                                                data-bs-toggle="modal" data-bs-target="#delete-modal">
                                                                <i className="ti ti-trash me-2"></i>Permanent Delete
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item rounded-1" href="file-manager.html#">
                                                                <i className="ti ti-edit-circle me-2"></i>Restore File
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* End Table List */}

                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default FileManager;
