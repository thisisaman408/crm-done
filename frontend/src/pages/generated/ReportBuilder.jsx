import React from 'react';

const ReportBuilder = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from report-builder.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Report Builder</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Reports</li>
                                <li className="breadcrumb-item active" aria-current="page">Report Builder</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-rb-action="export">
                            <i className="ti ti-file-export me-1"></i>Export
                        </button>
                        <button type="button" className="btn btn-outline-light shadow" data-rb-action="print">
                            <i className="ti ti-printer me-1"></i>Print
                        </button>
                        <button type="button" className="btn btn-outline-light shadow" data-rb-action="share">
                            <i className="ti ti-share me-1"></i>Share
                        </button>
                        <a href="/scheduled-reports" className="btn btn-outline-light shadow">
                            <i className="ti ti-clock me-1"></i>Schedule
                        </a>
                        <button type="button" className="btn btn-primary" data-rb-action="save">
                            <i className="ti ti-device-floppy me-1"></i>Save Report
                        </button>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* Reports Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto">
                    <li className="nav-item"><a href="/report-builder" className="nav-link text-nowrap active"><i className="ti ti-tool me-1"></i>Report Builder</a></li>
                    <li className="nav-item"><a href="/scheduled-reports" className="nav-link text-nowrap"><i className="ti ti-clock-hour-4 me-1"></i>Scheduled</a></li>
                    <li className="nav-item"><a href="/sales-forecasting" className="nav-link text-nowrap"><i className="ti ti-chart-arrows-vertical me-1"></i>Forecasting</a></li>
                    <li className="nav-item"><a href="/win-loss-analysis" className="nav-link text-nowrap"><i className="ti ti-trophy me-1"></i>Win/Loss</a></li>
                    <li className="nav-item"><a href="/sales-velocity" className="nav-link text-nowrap"><i className="ti ti-rocket me-1"></i>Velocity</a></li>
                </ul>
                {/* End Reports Nav */}

                <div className="report-builder" data-report-builder>
                    <div className="alert d-none" role="status" data-report-toast></div>

                    <div className="card mb-0">
                        <div className="card-body">

                            {/* Workflow steps */}
                            <ol className="import-steps">
                                <li><button type="button" className="import-step is-active" aria-current="step">
                                        <span className="import-step-num">1</span>
                                        <span><span className="import-step-label">Select Object</span>
                                            <span className="import-step-hint">CRM record type</span></span>
                                    </button></li>
                                <li><button type="button" className="import-step">
                                        <span className="import-step-num">2</span>
                                        <span><span className="import-step-label">Select Fields</span>
                                            <span className="import-step-hint">Report columns</span></span>
                                    </button></li>
                                <li><button type="button" className="import-step">
                                        <span className="import-step-num">3</span>
                                        <span><span className="import-step-label">Add Filters</span>
                                            <span className="import-step-hint">Narrow the data</span></span>
                                    </button></li>
                                <li><button type="button" className="import-step">
                                        <span className="import-step-num">4</span>
                                        <span><span className="import-step-label">Group &amp; Sort</span>
                                            <span className="import-step-hint">Aggregate</span></span>
                                    </button></li>
                                <li><button type="button" className="import-step">
                                        <span className="import-step-num">5</span>
                                        <span><span className="import-step-label">Visualization</span>
                                            <span className="import-step-hint">Chart type</span></span>
                                    </button></li>
                                <li><button type="button" className="import-step">
                                        <span className="import-step-num">6</span>
                                        <span><span className="import-step-label">Preview</span>
                                            <span className="import-step-hint">Save &amp; share</span></span>
                                    </button></li>
                            </ol>
                            {/* End Workflow steps */}

                            {/* Step 1 : Object */}
                            <div className="import-pane is-active">
                                <div className="row g-3 mb-4">
                                    <div className="col-lg-5">
                                        <label className="form-label" htmlFor="rb_name">Report name</label>
                                        <input type="text" className="form-control" id="rb_name"
                                            value="Pipeline by Stage - Q3 2026" />
                                    </div>
                                    <div className="col-lg-7">
                                        <label className="form-label" htmlFor="rb_desc">Description</label>
                                        <input type="text" className="form-control" id="rb_desc"
                                            value="Open pipeline grouped by stage, excluding closed-lost deals." />
                                    </div>
                                </div>

                                <h6 className="mb-1">Which CRM object is this report about?</h6>
                                <p className="text-muted fs-13 mb-3">The object decides which fields and filters are
                                    available in the next steps.</p>
                                <div className="row g-2" data-rb-objects></div>
                            </div>
                            {/* End Step 1 */}

                            {/* Step 2 : Fields */}
                            <div className="import-pane">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                                    <div>
                                        <h6 className="mb-1">Choose the columns for your
                                            <span data-rb-object-label>Deals</span> report</h6>
                                        <p className="text-muted fs-13 mb-0">Click a field to add or remove it. Order
                                            follows the order you pick.</p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-fields-none>Clear all</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-fields-all>Select all</button>
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-lg-5">
                                        <span className="fs-12 text-muted d-block mb-2">Available fields</span>
                                        <div className="rb-fields" data-rb-fields></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <span className="fs-12 text-muted d-block mb-2">Selected columns</span>
                                        <div className="rb-selected" data-rb-selected></div>

                                        <div className="ai-insight is-medium mt-3">
                                            <div className="d-flex align-items-start gap-2">
                                                <span className="ai-chip flex-shrink-0"><i
                                                        className="ti ti-bulb"></i>Tip</span>
                                                <p className="mb-0 fs-13">Reports with 5-8 columns stay readable when
                                                    exported to PDF. Add more only if the report is meant for Excel.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Step 2 */}

                            {/* Step 3 : Filters */}
                            <div className="import-pane">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                                    <div>
                                        <h6 className="mb-1">Filter the data</h6>
                                        <p className="text-muted fs-13 mb-0">Conditions inside a group combine with
                                            AND/OR. Groups always combine with AND.</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <span className="badge bg-light text-dark" data-rb-filter-count></span>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-clearfilters><i className="ti ti-filter-off me-1"></i>Clear All</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-addgroup><i className="ti ti-layers-intersect me-1"></i>Add
                                            group</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-addfilter><i className="ti ti-plus me-1"></i>Add filter</button>
                                        <button type="button" className="btn btn-sm btn-primary"
                                            data-rb-applyfilters><i className="ti ti-check me-1"></i>Apply
                                            Filters</button>
                                    </div>
                                </div>

                                <div data-rb-filters></div>
                            </div>
                            {/* End Step 3 */}

                            {/* Step 4 : Group & Sort */}
                            <div className="import-pane">
                                <h6 className="mb-1">Group, sort and aggregate</h6>
                                <p className="text-muted fs-13 mb-3">Grouping rolls records up; aggregation decides how
                                    numeric columns are summarised.</p>

                                <div className="row g-3">
                                    <div className="col-lg-3 col-md-6">
                                        <label className="form-label" htmlFor="rb_groupby">Group by</label>
                                        <select className="form-select" id="rb_groupby" data-rb-groupby
                                            data-rb-set="groupBy"></select>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <label className="form-label" htmlFor="rb_sortby">Sort by</label>
                                        <select className="form-select" id="rb_sortby" data-rb-sortby
                                            data-rb-set="sortBy"></select>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <label className="form-label" htmlFor="rb_sortdir">Direction</label>
                                        <select className="form-select" id="rb_sortdir" data-rb-set="sortDir">
                                            <option value="desc" selected>Descending</option>
                                            <option value="asc">Ascending</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <label className="form-label" htmlFor="rb_agg">Aggregation</label>
                                        <select className="form-select" id="rb_agg" data-rb-set="aggregation">
                                            <option value="sum" selected>Sum</option>
                                            <option value="count">Count</option>
                                            <option value="avg">Average</option>
                                            <option value="min">Minimum</option>
                                            <option value="max">Maximum</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <label className="form-label" htmlFor="rb_range">Date range</label>
                                        <select className="form-select" id="rb_range" data-rb-set="range">
                                            <option value="quarter" selected>This Quarter</option>
                                            <option value="month">This Month</option>
                                            <option value="lastmonth">Last Month</option>
                                            <option value="year">This Year</option>
                                            <option value="custom">Custom range</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="ai-insight is-medium mt-4">
                                    <div className="d-flex align-items-start gap-2">
                                        <span className="ai-chip flex-shrink-0"><i className="ti ti-bulb"></i>Tip</span>
                                        <p className="mb-0 fs-13">Grouping by <strong>Stage</strong> with a
                                            <strong>Sum</strong> of Amount produces the classic pipeline report -
                                            pair it with a Funnel or Stacked chart on the next step.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Step 4 */}

                            {/* Step 5 : Visualization */}
                            <div className="import-pane">
                                <h6 className="mb-1">How should this report be displayed?</h6>
                                <p className="text-muted fs-13 mb-3">You can change this at any time without rebuilding
                                    the report.</p>

                                <div className="row g-2">
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz is-selected" data-rb-viz="table">
                                            <i className="ti ti-table"></i><span>Table</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="kpi">
                                            <i className="ti ti-number-123"></i><span>KPI</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="bar">
                                            <i className="ti ti-chart-bar"></i><span>Bar Chart</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="line">
                                            <i className="ti ti-chart-line"></i><span>Line Chart</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="area">
                                            <i className="ti ti-chart-area-line"></i><span>Area Chart</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="donut">
                                            <i className="ti ti-chart-donut"></i><span>Pie / Donut</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="funnel">
                                            <i className="ti ti-filter"></i><span>Funnel</span></button>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-6 d-flex">
                                        <button type="button" className="rb-viz" data-rb-viz="stacked">
                                            <i className="ti ti-chart-histogram"></i><span>Stacked Chart</span></button>
                                    </div>
                                </div>
                            </div>
                            {/* End Step 5 */}

                            {/* Step 6 : Preview */}
                            <div className="import-pane">
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                                    <div>
                                        <h6 className="mb-1">Report preview</h6>
                                        <p className="text-muted fs-12 mb-0" data-rb-summary></p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-action="dashboard"><i className="ti ti-layout-dashboard me-1"></i>Pin
                                            to dashboard</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-action="edit"><i className="ti ti-edit me-1"></i>Edit</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow"
                                            data-rb-action="saveas"><i className="ti ti-copy me-1"></i>Save As</button>
                                        <button type="button" className="btn btn-sm btn-outline-light shadow text-danger"
                                            data-rb-action="delete"><i className="ti ti-trash me-1"></i>Delete</button>
                                    </div>
                                </div>

                                {/* loading state */}
                                <div className="d-none py-5 text-center" data-rb-loading>
                                    <span className="ai-thinking mb-3"><span className="ai-thinking-dots">
                                            <span></span><span></span><span></span></span>
                                        Building your report...</span>
                                    <div className="ai-skeleton mt-4 mx-auto" style={{ maxWidth: '640px' }}>
                                        <span style={{ width: '100%' }}></span>
                                        <span style={{ width: '94%' }}></span>
                                        <span style={{ width: '88%' }}></span>
                                        <span style={{ width: '92%' }}></span>
                                    </div>
                                </div>

                                <div className="border rounded p-3" data-rb-preview></div>
                            </div>
                            {/* End Step 6 */}

                            {/* Wizard footer */}
                            <div className="d-flex align-items-center justify-content-between gap-2 border-top pt-3 mt-4">
                                <button type="button" className="btn btn-outline-light shadow" data-rb-prev>
                                    <i className="ti ti-arrow-left me-1"></i>Back
                                </button>
                                <button type="button" className="btn btn-primary" data-rb-next>
                                    Continue <i className="ti ti-arrow-right ms-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default ReportBuilder;
