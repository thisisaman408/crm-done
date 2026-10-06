import React from 'react';

const ContractRenewalExpiryReport = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from contract-renewal-expiry-report.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Contract Renewal & Expiry Report <span
                                className="badge badge-soft-primary ms-2">15</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Document Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Contract Renewal & Expiry Report
                                </li>
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
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="mb-0 fs-16 fw-bold text-dark">Renewal vs Expiry Comparision</div>
                            </div>
                            <div className="card-body pt-0">
                                <div id="renewal_expiry"></div>
                                <div className="d-flex alig-items-center justify-content-center text-center gap-3">
                                    <span className="fs-12 text-purple fw-medium">Renewed Contracts</span>
                                    <span className="fs-12 text-danger fw-medium">Expired Contracts</span>
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
                                                    <span>Contract ID</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Contract Name</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Start Date</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>End Date</span>
                                                    <input className="form-check-input switchCheckDefault ms-auto"
                                                        type="checkbox" role="switch" checked />
                                                </label>
                                            </div>
                                        </li>
                                        <li className="gap-1 d-flex align-items-center mb-2">
                                            <i className="ti ti-columns me-1"></i>
                                            <div className="form-check form-switch w-100 ps-0">

                                                <label className="form-check-label d-flex align-items-center gap-2 w-100">
                                                    <span>Contract Value</span>
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
                                            className="ti ti-users me-2"></i>Contract Name</a>
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
                                                <a href="#" className="dropdown-item">NovaWave LLC</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> BlueSky
                                                    Industries</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Silver Hawk</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Sophia Parker</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Summit LLC</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> RiverStone Ltd</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item"> Brightbridge
                                                    Corp</a>
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
                                <a href="contract-renewal-expiry-report.html#" className="btn btn-primary"><i className="ti ti-player-play me-1"></i>Run Report</a>
                                <a href="contract-renewal-expiry-report.html#" className="btn btn-icon btn-outline-light shadow"><i
                                        className="ti ti-download"></i></a>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Projects List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="contract-renewal">
                                <thead className="table-light">
                                    <tr>
                                        <th>Contract ID</th>
                                        <th>Contract Name</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Contract Value</th>
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

export default ContractRenewalExpiryReport;
