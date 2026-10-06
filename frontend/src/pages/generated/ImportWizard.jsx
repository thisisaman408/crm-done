import React from 'react';

const ImportWizard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from import-wizard.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Import Wizard</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">CRM Settings</li>
                                <li className="breadcrumb-item active" aria-current="page">Import Wizard</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <a href="#" className="btn btn-outline-light shadow">
                            <i className="ti ti-download me-1"></i>Download Sample CSV
                        </a>
                        <a href="#" className="btn btn-outline-light shadow">
                            <i className="ti ti-history me-1"></i>Import History
                        </a>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-0">
                            <div className="card-body import-wizard">

                                {/* Step Header */}
                                <ol className="import-steps">
                                    <li>
                                        <button type="button" className="import-step is-active" aria-current="step">
                                            <span className="import-step-num">1</span>
                                            <span>
                                                <span className="import-step-label">Upload File</span>
                                                <span className="import-step-hint">CSV or Excel</span>
                                            </span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="import-step is-locked">
                                            <span className="import-step-num">2</span>
                                            <span>
                                                <span className="import-step-label">Map Fields</span>
                                                <span className="import-step-hint">Match to CRM fields</span>
                                            </span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="import-step is-locked">
                                            <span className="import-step-num">3</span>
                                            <span>
                                                <span className="import-step-label">Review</span>
                                                <span className="import-step-hint">Duplicates &amp; errors</span>
                                            </span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="import-step is-locked">
                                            <span className="import-step-num">4</span>
                                            <span>
                                                <span className="import-step-label">Import</span>
                                                <span className="import-step-hint">Run &amp; summary</span>
                                            </span>
                                        </button>
                                    </li>
                                </ol>
                                {/* End Step Header */}

                                <div className="alert alert-danger d-none" role="alert" data-import-notice></div>

                                {/* Step 1 : Upload */}
                                <div className="import-pane is-active">
                                    <div className="row g-4">
                                        <div className="col-lg-7">
                                            <h6 className="mb-1">Choose what you are importing</h6>
                                            <p className="text-muted fs-13 mb-3">Each record type has its own set of
                                                required fields.</p>

                                            <div className="row g-3 mb-4">
                                                <div className="col-sm-6">
                                                    <label className="form-label" htmlFor="import_record_type">Record
                                                        type</label>
                                                    <select className="form-select" id="import_record_type">
                                                        <option selected>Leads</option>
                                                        <option>Contacts</option>
                                                        <option>Companies</option>
                                                        <option>Deals</option>
                                                        <option>Products</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label" htmlFor="import_owner">Assign records
                                                        to</label>
                                                    <select className="form-select" id="import_owner">
                                                        <option selected>Keep owner from file</option>
                                                        <option>Me (Adrian Herrera)</option>
                                                        <option>Round robin - Sales team</option>
                                                        <option>Unassigned</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <h6 className="mb-1">Upload your file</h6>
                                            <p className="text-muted fs-13 mb-3">CSV, XLS or XLSX up to 20 MB.</p>

                                            <div className="import-dropzone">
                                                <input type="file" id="import_file" accept=".csv,.xls,.xlsx"
                                                    aria-label="Choose a file to import" />
                                                <span className="import-dropzone-icon"><i className="ti ti-upload"></i></span>
                                                <h6 className="mb-1">Drag &amp; drop your file here</h6>
                                                <p className="text-muted fs-13 mb-0">or <span
                                                        className="link-primary text-decoration-underline">browse</span>
                                                    from your computer</p>
                                            </div>

                                            <div className="import-file d-none" data-import-file>
                                                <span className="import-file-icon"><i
                                                        className="ti ti-file-spreadsheet"></i></span>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 fw-medium text-dark" data-import-file-name></p>
                                                    <span className="fs-12 text-muted" data-import-file-meta></span>
                                                </div>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-light"
                                                    data-import-file-clear aria-label="Remove selected file">
                                                    <i className="ti ti-trash"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-lg-5">
                                            <div className="border rounded p-3 h-100">
                                                <h6 className="mb-3">File options</h6>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="import_delimiter">Delimiter</label>
                                                    <select className="form-select" id="import_delimiter">
                                                        <option selected>Comma ( , )</option>
                                                        <option>Semicolon ( ; )</option>
                                                        <option>Tab</option>
                                                        <option>Pipe ( | )</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="import_encoding">Encoding</label>
                                                    <select className="form-select" id="import_encoding">
                                                        <option selected>UTF-8</option>
                                                        <option>ISO-8859-1</option>
                                                        <option>Windows-1252</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="import_dateformat">Date
                                                        format</label>
                                                    <select className="form-select" id="import_dateformat">
                                                        <option selected>DD/MM/YYYY</option>
                                                        <option>MM/DD/YYYY</option>
                                                        <option>YYYY-MM-DD</option>
                                                    </select>
                                                </div>

                                                <div className="form-check form-switch mb-2">
                                                    <input className="form-check-input" type="checkbox"
                                                        id="import_has_header" checked />
                                                    <label className="form-check-label fs-13" htmlFor="import_has_header">First
                                                        row contains column names</label>
                                                </div>
                                                <div className="form-check form-switch mb-0">
                                                    <input className="form-check-input" type="checkbox"
                                                        id="import_trim_space" checked />
                                                    <label className="form-check-label fs-13"
                                                        htmlFor="import_trim_space">Trim leading &amp; trailing
                                                        spaces</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Step 1 */}

                                {/* Step 2 : Map Fields */}
                                <div className="import-pane">
                                    <div
                                        className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <div>
                                            <h6 className="mb-1">Match your columns to CRM fields</h6>
                                            <p className="text-muted fs-13 mb-0">Fields marked * are required. Columns set
                                                to <em>Do not import</em> are ignored.</p>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button type="button" className="btn btn-sm btn-outline-light shadow"
                                                data-import-clearmap>Clear all</button>
                                            <button type="button" className="btn btn-sm btn-primary flex-wrap" data-import-automap>
                                                <i className="ti ti-bolt me-1"></i>Auto-map
                                            </button>
                                        </div>
                                    </div>

                                    <div className="alert alert-light border d-flex align-items-center gap-2 fs-13"
                                        role="status" data-import-map-summary></div>

                                    <div className="table-responsive">
                                        <table className="table table-nowrap import-map-table">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Column in file</th>
                                                    <th scope="col">Sample value</th>
                                                    <th scope="col"><span className="visually-hidden">Maps to</span></th>
                                                    <th scope="col" style={{ width: '280px' }}>CRM field</th>
                                                </tr>
                                            </thead>
                                            <tbody data-import-map-body></tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* End Step 2 */}

                                {/* Step 3 : Review */}
                                <div className="import-pane">
                                    <h6 className="mb-1">Review before importing</h6>
                                    <p className="text-muted fs-13 mb-3">128 rows were read from your file.</p>

                                    <div className="row g-3 mb-4">
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="import-stat">
                                                <span
                                                    className="import-stat-icon bg-soft-success text-success"><i
                                                        className="ti ti-circle-check"></i></span>
                                                <div>
                                                    <div className="import-stat-value">121</div>
                                                    <div className="import-stat-label">Rows ready to import</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="import-stat">
                                                <span
                                                    className="import-stat-icon bg-soft-warning text-warning"><i
                                                        className="ti ti-alert-triangle"></i></span>
                                                <div>
                                                    <div className="import-stat-value">5</div>
                                                    <div className="import-stat-label">Rows with warnings</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="import-stat">
                                                <span className="import-stat-icon bg-soft-danger text-danger"><i
                                                        className="ti ti-alert-circle"></i></span>
                                                <div>
                                                    <div className="import-stat-value">2</div>
                                                    <div className="import-stat-label">Rows with errors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="import-stat">
                                                <span className="import-stat-icon bg-soft-info text-info"><i
                                                        className="ti ti-users"></i></span>
                                                <div>
                                                    <div className="import-stat-value">9</div>
                                                    <div className="import-stat-label">Possible duplicates</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className="mb-2">How should duplicates be handled?</h6>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-4">
                                            <label className="import-strategy is-selected">
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio"
                                                        name="import_dupe_strategy" id="import_dupe_skip" checked />
                                                    <span className="fw-medium text-dark">Skip duplicates</span>
                                                </div>
                                                <span className="fs-12 text-muted d-block">Keep the existing record
                                                    untouched and ignore the incoming row.</span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="import-strategy">
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio"
                                                        name="import_dupe_strategy" id="import_dupe_update" />
                                                    <span className="fw-medium text-dark">Update existing</span>
                                                </div>
                                                <span className="fs-12 text-muted d-block">Overwrite mapped fields on the
                                                    matching record with the new values.</span>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label className="import-strategy">
                                                <div className="form-check mb-1">
                                                    <input className="form-check-input" type="radio"
                                                        name="import_dupe_strategy" id="import_dupe_create" />
                                                    <span className="fw-medium text-dark">Create anyway</span>
                                                </div>
                                                <span className="fs-12 text-muted d-block">Import as a new record even when
                                                    a match is found.</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label" htmlFor="import_match_field">Match duplicates
                                                on</label>
                                            <select className="form-select" id="import_match_field">
                                                <option selected>Email address</option>
                                                <option>Email + Company</option>
                                                <option>Phone number</option>
                                                <option>Company name</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 d-flex align-items-end">
                                            <div className="form-check form-switch mb-2">
                                                <input className="form-check-input" type="checkbox"
                                                    id="import_skip_errors" checked />
                                                <label className="form-check-label fs-13" htmlFor="import_skip_errors">Skip
                                                    rows with errors and continue</label>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className="mb-2">Rows that need attention</h6>
                                    <div className="table-responsive">
                                        <table className="table table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Row</th>
                                                    <th scope="col">Column</th>
                                                    <th scope="col">Value</th>
                                                    <th scope="col">Issue</th>
                                                    <th scope="col">Severity</th>
                                                </tr>
                                            </thead>
                                            <tbody data-import-issues-body></tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* End Step 3 */}

                                {/* Step 4 : Result */}
                                <div className="import-pane">
                                    <div className="text-center py-4 d-none" data-import-progress>
                                        <h6 className="mb-3">Importing your records</h6>
                                        <div className="progress mx-auto mb-2" style={{ maxWidth: '420px', height: '8px' }}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0"
                                                aria-valuemax="100" data-import-progress-bar></div>
                                        </div>
                                        <p className="text-muted fs-13 mb-0" data-import-progress-text
                                            aria-live="polite"></p>
                                    </div>

                                    <div className="text-center py-4 pb-0 d-none" data-import-result>
                                        <span className="import-result-icon"><i className="ti ti-circle-check"></i></span>
                                        <h5 className="mb-1">Import complete</h5>
                                        <p className="text-muted fs-13 mb-4">121 of 128 rows were imported into
                                            <strong>Leads</strong>.</p>

                                        <div className="row g-3 justify-content-center mb-4">
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="import-stat">
                                                    <span
                                                        className="import-stat-icon bg-soft-success text-success"><i
                                                            className="ti ti-user-plus"></i></span>
                                                    <div>
                                                        <div className="import-stat-value">112</div>
                                                        <div className="import-stat-label">Created</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="import-stat">
                                                    <span className="import-stat-icon bg-soft-info text-info"><i
                                                            className="ti ti-refresh"></i></span>
                                                    <div>
                                                        <div className="import-stat-value">9</div>
                                                        <div className="import-stat-label">Updated</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="import-stat">
                                                    <span
                                                        className="import-stat-icon bg-soft-warning text-warning"><i
                                                            className="ti ti-player-skip-forward"></i></span>
                                                    <div>
                                                        <div className="import-stat-value">5</div>
                                                        <div className="import-stat-label">Skipped</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="import-stat">
                                                    <span
                                                        className="import-stat-icon bg-soft-danger text-danger"><i
                                                            className="ti ti-alert-circle"></i></span>
                                                    <div>
                                                        <div className="import-stat-value">2</div>
                                                        <div className="import-stat-label">Failed</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                            <a href="/leads" className="btn btn-primary">
                                                <i className="ti ti-eye me-1"></i>View imported leads
                                            </a>
                                            <a href="#" className="btn btn-outline-light shadow">
                                                <i className="ti ti-download me-1"></i>Download error log
                                            </a>
                                            <button type="button" className="btn btn-outline-light shadow"
                                                data-import-restart>
                                                <i className="ti ti-refresh me-1"></i>Import another file
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Step 4 */}

                                {/* Wizard Footer */}
                                <div className="d-flex align-items-center justify-content-between gap-2 border-top pt-3 mt-4">
                                    <button type="button" className="btn btn-outline-light shadow" data-import-prev>
                                        <i className="ti ti-arrow-left me-1"></i>Back
                                    </button>
                                    <button type="button" className="btn btn-primary" data-import-next>
                                        Continue <i className="ti ti-arrow-right ms-1"></i>
                                    </button>
                                </div>
                                {/* End Wizard Footer */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
        </div>
    );
};

export default ImportWizard;
