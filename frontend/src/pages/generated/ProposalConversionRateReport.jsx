import React from 'react';

const ProposalConversionRateReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from proposal-conversion-rate-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Proposal Conversion Rate <span className="badge badge-soft-primary ms-2">15</span>
                        </h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">Document Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Proposal Conversion Rate </li>
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

                {/* start row */}
                <div className="card">
                    <div className="card-body pb-2">
                        <div className="fs-16 fw-bold mb-1 text-dark">Proporsal Conversion Trend</div>
                        <p className="mb-0"> Monthly conversion performance over the year</p>
                        <div id="proposal-conversion-rate-chart"></div>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <p className="d-flex align-items-center gap-2 text-info"> <span><i
                                        className="ti ti-point-filled fs-20 d-flex align-items-center"></i></span> Total
                                Proporsal </p>
                            <p className="d-flex align-items-center gap-2 text-success"> <span><i
                                        className="ti ti-point-filled fs-20 d-flex align-items-center"></i></span>
                                Conversions </p>
                        </div>
                    </div>
                </div>

                {/* card start */}
                <div className="card">
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
                                                    <span>Proposal ID</span>
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
                                                    <span>Value</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Probability</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Timeline</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">
                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Status</span>
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
                                {/* 1nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-users me-2"></i>Client<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg bg-light p-0">
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content mb-0">
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div className="filter-content-list">
                                                            <div className="mb-2">
                                                                <div
                                                                    className="input-icon-start input-icon position-relative">
                                                                    <span className="input-icon-addon fs-12">
                                                                        <i className="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-md"
                                                                        placeholder="Search" />
                                                                </div>
                                                            </div>
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Robert Johnson
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-02.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Isabella Cooper
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-03.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>John Smith
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-04.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Sophia Parker
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Ethan Reynolds
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        <span
                                                                            className="avatar avatar-xs rounded-circle me-2"><img
                                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                                className="flex-shrink-0 rounded-circle"
                                                                                alt="img" /></span>Liam Carter
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 d-flex">View
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd Drop down */}
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-layout-grid me-2"></i>Status<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg bg-light p-0">
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample2">
                                                <div className="filter-set-content mb-0">
                                                    <div className="filter-set-contents accordion-collapse collapse show"
                                                        id="collapseThree2" data-bs-parent="#accordionExample2">
                                                        <div className="filter-content-list">
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Approved
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Sent
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Under Review
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Rejected
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <a href="#" className="btn btn-primary"><i
                                        className="ti ti-player-play me-1"></i>Run Report</a>
                                <div className="dropdown">
                                    <a href="#"
                                        className="dropdown-toggle download-toggle btn btn-icon btn-outline-light shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-download"></i></a>
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
                            </div>
                        </div>
                        {/* table header */}

                        {/* Leads List */}
                        <div className="table-responsive table-nowrap custom-table">
                            <table className="table table-nowrap" id="proposal-conversion-rate">
                                <thead className="table-light">
                                    <tr>
                                        <th>Proposal ID</th>
                                        <th>Client</th>
                                        <th>Value</th>
                                        <th>Probability</th>
                                        <th>Timeline</th>
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
                        {/* /Leads List */}

                    </div>
                </div>
                {/* card end */}
        </div>
    );
};

export default ProposalConversionRateReport;
