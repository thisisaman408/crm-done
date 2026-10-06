import React from 'react';

const DealAgingReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from deal-aging-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Deal Aging</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Deal Aging</li>
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
                                <div className="mb-0 fs-16 fw-bold text-dark">Deal Aging Vs Conversion</div>
                            </div>
                            <div className="card-body">
                                <div id="deal-aging"></div>
                                <div className="d-flex alig-items-center gap-2 justify-content-center mt-2">
                                    <span
                                        className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
                                            className="ti ti-circle-filled fs-8 text-success"></i> Won</span>
                                    <span
                                        className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
                                            className="ti ti-circle-filled fs-8 text-danger"></i> Lost</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-5 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <div className="mb-0 fs-16 fw-bold text-dark">Risk Level Split</div>
                            </div>
                            <div className="card-body">
                                <div id="risk-level"></div>
                                <div className="row g-4 mt-2">

                                    {/* Critical */}
                                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 rounded-3 bg-purple p-1 py-2 pe-0"></span>
                                            <span className="mb-0 text-dark">Critical</span>
                                        </div>
                                        <span className="badge badge-tag badge-soft-purple">
                                            16 Deals
                                        </span>
                                    </div>

                                    {/* Medium */}
                                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 rounded-3 bg-warning p-1 py-2 pe-0"></span>
                                            <span className="mb-0 text-dark">Medium</span>
                                        </div>
                                        <span className="badge badge-tag badge-soft-warning text-warning">
                                            67 Deals
                                        </span>
                                    </div>

                                    {/* High */}
                                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 rounded-3 bg-danger p-1 py-2 pe-0"></span>
                                            <span className="mb-0 text-dark">High</span>
                                        </div>
                                        <span className="badge badge-tag badge-soft-danger text-danger">
                                            24 Deals
                                        </span>
                                    </div>

                                    {/* Low */}
                                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 rounded-3 bg-success p-1 py-2 pe-0"></span>
                                            <span className="mb-0 text-dark">Low</span>
                                        </div>
                                        <span className="badge badge-tag badge-soft-success text-success">
                                            34 Deals
                                        </span>
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
                                                    <span>Deal ID</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Deal Name</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Stage</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Days in Stage</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Stage SLA Days</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Aging Bucket</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Risk Level</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-0">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Closed Date</span>
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
                                        data-bs-toggle="dropdown"><i className="ti ti-medal me-2"></i>Deal Name</a>
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
                                                <a href="#" className="dropdown-item">Annual Software
                                                    Subscription</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> CRM Onboarding
                                                    Package</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Enterprise Plan
                                                    Upgrade</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> BrightWorks
                                                    Campaign</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Sales Pipeline
                                                    Optimization</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> CRM Migration
                                                    Project</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Multi-Store License
                                                    Renewal</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle btn btn-outline-light px-2 shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-dashboard me-2"></i>Risk Level</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item">High</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Medium</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Critical</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Low</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <a href="deal-aging-report.html#" className="btn btn-primary"><i className="ti ti-player-play me-1"></i>Run Report</a>
                                <a href="deal-aging-report.html#" className="btn btn-icon btn-outline-light shadow"><i
                                        className="ti ti-download"></i></a>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="deal-aging-list">
                                <thead className="table-light">
                                    <tr>
                                        <th>Deal ID</th>
                                        <th>Deal Name</th>
                                        <th>Stage</th>
                                        <th>Days in Stage</th>
                                        <th>Stage SLA Days</th>
                                        <th>Aging Bucket</th>
                                        <th>Risk Level</th>
                                        <th>Closed Date</th>
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

export default DealAgingReport;
