import React from 'react';

const EstimationReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from estimation-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Estimation Reports <span className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Document Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Estimation Reports</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
                            <i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
                                className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
                            <div className="dropdown-menu  dropdown-menu-end">
                                <ul>
                                    <li>
                                        <a href="#" className="dropdown-item"><i
                                                className="ti ti-file-type-pdf me-1"></i>Export as
                                            PDF</a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item"><i
                                                className="ti ti-file-type-xls me-1"></i>Export as
                                            Excel </a>
                                    </li>
                                </ul>
                            </div>
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
                                <div className="mb-0 fs-16 fw-bold text-dark">Monthly Estimation Trend</div>
                            </div>
                            <div className="card-body">
                                <div id="monthly-estimation"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-5 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="mb-0 fs-16 fw-bold text-dark">Performance Metrics</div>
                            </div>
                            <div className="card-body pt-0">
                                <div id="performance-metrics"></div>
                                <div className="row g-2 row-gap-3">
                                    <div className="col-md-4">
                                        <div className="p-3 bg-light rounded px-2">
                                            <p className="mb-1 fs-12 d-flex alig-items-center"><span
                                                    className="me-2 bg-success p-1 pb-0 pe-1"></span>Conversion Rate</p>
                                            <div className="mb-0 fw-bold text-success">85%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 bg-light rounded px-2">
                                            <p className="mb-1 fs-12 d-flex alig-items-center"><span
                                                    className="me-2 bg-info p-1 pb-0 pe-1"></span>Satisfaction</p>
                                            <div className="mb-0 fw-bold text-info">42%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="p-3 bg-light rounded px-2">
                                            <p className="mb-1 fs-12 d-flex alig-items-center"><span
                                                    className="me-2 bg-warning p-1 pb-0 pe-1"></span>On-Time Delivery</p>
                                            <div className="mb-0 fw-bold text-warning">8%</div>
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
                                                    <span>Estimation ID</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Client</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Estimation Date</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Estimation Value</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Created By</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-0">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Status</span>
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
                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                            className="ti ti-users me-2"></i>Client Name</a>
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
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                            className="ti ti-category me-2"></i>Status</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item">Active</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Expiring Soon</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Rejected</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <a href="estimation-report.html#" className="btn btn-primary"><i className="ti ti-player-play me-1"></i>Run Report</a>
                                <a href="estimation-report.html#" className="btn btn-icon btn-outline-light shadow"><i
                                        className="ti ti-download"></i></a>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="estimation-report">
                                <thead className="table-light">
                                    <tr>
                                        <th>Estimation ID</th>
                                        <th>Client</th>
                                        <th>Estimation Date</th>
                                        <th>Estimation Value</th>
                                        <th>Created By</th>
                                        <th>Status</th>
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

export default EstimationReport;
