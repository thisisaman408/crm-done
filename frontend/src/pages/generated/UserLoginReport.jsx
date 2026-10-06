import React from 'react';

const UserLoginReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from user-login-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">User Login Report</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">User Login Report</li>
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

                <div className="row">
                    <div className="col-md-12 col-xl-7 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="mb-0 fs-16 fw-bold text-dark">Login Split</div>
                            </div>
                            <div className="card-body">
                                <div id="login-split"></div>
                                <div className="d-flex alig-items-center gap-2 justify-content-center mt-2">
                                    <span
                                        className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
                                            className="ti ti-circle-filled fs-8 text-success"></i> Successful Logins</span>
                                    <span
                                        className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
                                            className="ti ti-circle-filled fs-8 text-danger"></i> Failed Logins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-5 d-flex">
                        <div className="row row-gap-3 mb-4 flex-fill">
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">Total Users</p>
                                                <span className="fw-bold fs-28 text-dark">460</span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-orange text-white">
                                                <i className="ti ti-users fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">Active Users</p>
                                                <span className="fw-bold fs-28 text-dark">380</span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-teal text-white">
                                                <i className="ti ti-user-edit fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">New Users</p>
                                                <span className="fw-bold fs-28 text-dark">280</span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-info text-white">
                                                <i className="ti ti-user-plus fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">Login Success Rate</p>
                                                <span className="fw-bold fs-28 text-dark">85%</span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-success text-white">
                                                <i className="ti ti-login fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">Inactive Users</p>
                                                <span className="fw-bold fs-28 text-dark">120</span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-danger text-white">
                                                <i className="ti ti-user-x fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="card flex-fill mb-0">
                                    <div className="card-body">
                                        <div
                                            className="d-flex align-items-center justify-content-between gap-2 border-bottom pb-2 mb-2">
                                            <div>
                                                <p className="mb-1 fs-13">Avg Login Time</p>
                                                <span className="fw-bold fs-28 text-dark">1.2 <span
                                                        className="fs-14 text-muted fw-normal">sec</span></span>
                                            </div>
                                            <span className="avatar avatar-md rounded bg-pink text-white">
                                                <i className="ti ti-device-desktop fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span
                                                className="badge bg-success bg-opacity-10 px-2 text-success border-0 fs-10 rounded-pill">+2.5%</span>
                                            <p className="mb-0 fs-13">From Last Month</p>
                                        </div>
                                    </div>
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
                                                    <span>Total Logins</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Successful Logins</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Failed Logins</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Avg Session Time (Min)</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-0">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Last Login</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" />
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
                                <a href="user-login-report.html#" className="btn btn-primary"><i className="ti ti-player-play me-1"></i>Run Report</a>
                                <a href="user-login-report.html#" className="btn btn-icon btn-outline-light shadow"><i
                                        className="ti ti-download"></i></a>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="user-login-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>User</th>
                                        <th>Total Logins</th>
                                        <th>Successful Logins</th>
                                        <th>Failed Logins</th>
                                        <th>Avg Session Time (Min)</th>
                                        <th>Last Login</th>
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

export default UserLoginReport;
