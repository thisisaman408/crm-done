import React from 'react';

const UserActivityReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from user-activity-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">User Activity Report</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">User Activity Report</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                            <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
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

                <div className="row row-gap-3 mb-4 row-cols-1 row-cols-md-3 row-cols-xl-5">
                    <div className="col d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body">
                                <p className="mb-2 fs-13">Total Users</p>
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2 mb-2">
                                    <span className="avatar avatar-md rounded-circle bg-orange text-white">
                                        <i className="ti ti-users fs-20"></i>
                                    </span>
                                    <span className="d-block mb-0 fw-bold fs-28 text-dark">460</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap fs-13">
                                    <span
                                        className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                    From Last Month
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body">
                                <p className="mb-2 fs-13">Total Calls Made</p>
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2 mb-2">
                                    <span className="avatar avatar-md rounded-circle bg-info text-white">
                                        <i className="ti ti-phone-call fs-20"></i>
                                    </span>
                                    <span className="d-block mb-0 fw-bold fs-28 text-dark">1200</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap fs-13">
                                    <span
                                        className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                    From Last Month
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body">
                                <p className="mb-2 fs-13">Total Emails Sent</p>
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2 mb-2">
                                    <span className="avatar avatar-md rounded-circle bg-warning text-white">
                                        <i className="ti ti-mail fs-20"></i>
                                    </span>
                                    <span className="d-block mb-0 fw-bold fs-28 text-dark">1340</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap fs-13">
                                    <span
                                        className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                    From Last Month
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body">
                                <p className="mb-2 fs-13">Total Meetings Conducted</p>
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2 mb-2">
                                    <span className="avatar avatar-md rounded-circle bg-pink text-white">
                                        <i className="ti ti-headset fs-20"></i>
                                    </span>
                                    <span className="d-block mb-0 fw-bold fs-28 text-dark">400</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap fs-13">
                                    <span
                                        className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                    From Last Month
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body">
                                <p className="mb-2 fs-13">Total Tasks Completed</p>
                                <div className="d-flex align-items-center gap-2 border-bottom pb-2 mb-2">
                                    <span className="avatar avatar-md rounded-circle bg-cyan text-white">
                                        <i className="ti ti-subtask fs-20"></i>
                                    </span>
                                    <span className="d-block mb-0 fw-bold fs-28 text-dark">380</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap fs-13">
                                    <span
                                        className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                    From Last Month
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card start */}
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
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
                            <div className="dropdown">
                                <a href="#" className="btn bg-soft-indigo border-0"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                        className="ti ti-columns-3 me-2"></i>Manage Columns</a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
                                    <ul>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>User</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Calls</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Emails</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Meetings</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Tasks Completed</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Follow ups</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Avg Response Time (hrs)</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-0">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Productivity Score</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-user me-2"></i>User Name</a>
                                    <div className="dropdown-menu">
                                        <div className="mb-2">
                                            <div className="input-icon-start input-icon position-relative">
                                                <span className="input-icon-addon fs-12">
                                                    <i className="ti ti-search"></i>
                                                </span>
                                                <input type="text" className="form-control form-control-md"
                                                    placeholder="Search" />
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item">Robert Johnson</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Isabella Cooper</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> John Smith</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Sophia Parker</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Ethan Reynolds</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Liam Carter</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Noah Mitchell</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <a href="user-activity-report.html#" className="btn btn-primary"><i className="ti ti-player-play me-1"></i>Run Report</a>
                                <a href="user-activity-report.html#" className="btn btn-icon btn-outline-light shadow"><i
                                        className="ti ti-download"></i></a>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="user-activity-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>User</th>
                                        <th>Calls</th>
                                        <th>Emails</th>
                                        <th>Meetings</th>
                                        <th>Tasks Completed</th>
                                        <th>Follow ups</th>
                                        <th>Avg Response Time (hrs)</th>
                                        <th>Productivity Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="datatable-length"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="datatable-paginate"></div>
                            </div>
                        </div>
                        {/* /Projects List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default UserActivityReport;
