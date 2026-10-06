import React from 'react';

const WorkflowBuilder = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from workflow-builder.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Workflow Builder</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item">Automation</li>
                                <li className="breadcrumb-item active" aria-current="page">Workflow Builder</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                        <button type="button" className="btn btn-outline-light shadow" data-bs-toggle="modal"
                            data-bs-target="#workflow_templates_modal">
                            <i className="ti ti-layout-grid me-1"></i>Templates
                        </button>
                        <a href="/automation-logs" className="btn btn-outline-light shadow">
                            <i className="ti ti-history me-1"></i>Run History
                        </a>
                        <button type="button" className="btn btn-outline-light shadow"
                            data-workflow-action="test">
                            <i className="ti ti-player-play me-1"></i>Test Run
                        </button>
                        <button type="button" className="btn btn-outline-light shadow"
                            data-workflow-action="draft">
                            <i className="ti ti-file-text me-1"></i>Save as Draft
                        </button>
                        <button type="button" className="btn btn-primary" data-workflow-action="save">
                            <i className="ti ti-device-floppy me-1"></i>Save Workflow
                        </button>
                        <div className="dropdown">
                            <button type="button" className="btn btn-icon btn-outline-light shadow"
                                data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                                <i className="ti ti-dots-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li><button type="button" className="dropdown-item"
                                        data-workflow-action="duplicate"><i
                                            className="ti ti-copy me-1"></i>Duplicate workflow</button></li>
                                <li><a className="dropdown-item" href="/automation-rules"><i
                                            className="ti ti-list-check me-1"></i>Automation rules</a></li>
                                <li><a className="dropdown-item" href="/webhooks"><i
                                            className="ti ti-webhook me-1"></i>Webhooks</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><button type="button" className="dropdown-item text-danger"
                                        data-workflow-action="delete"><i
                                            className="ti ti-trash me-1"></i>Delete workflow</button></li>
                            </ul>
                        </div>
                        <a href="#" className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
                            data-bs-original-title="Collapse" id="collapse-header"><i
                                className="ti ti-transition-top"></i></a>
                    </div>
                </div>
                {/* End Page Header */}

                {/* Automation Nav */}
                <ul className="nav nav-tabs nav-bordered mb-4 flex-nowrap overflow-x-auto overflow-y-hidden">
                    <li className="nav-item"><a href="/workflow-builder" className="nav-link text-nowrap active"><i className="ti ti-sitemap me-1"></i>Workflow Builder</a></li>
                    <li className="nav-item"><a href="/automation-rules" className="nav-link text-nowrap"><i className="ti ti-list-check me-1"></i>Automation Rules</a></li>
                    <li className="nav-item"><a href="/webhooks" className="nav-link text-nowrap"><i className="ti ti-webhook me-1"></i>Webhooks</a></li>
                    <li className="nav-item"><a href="/automation-logs" className="nav-link text-nowrap"><i className="ti ti-history me-1"></i>Automation Logs</a></li>
                </ul>
                {/* End Automation Nav */}

                <div className="alert d-none" role="status" data-workflow-toast></div>
                <div className="d-none" role="status" data-workflow-validation></div>

                {/* Workflow Meta */}
                <div className="card mb-3">
                    <div className="card-body py-3">
                        <div className="row g-3 align-items-end">
                            <div className="col-lg-4">
                                <label className="form-label" htmlFor="workflow_name">Workflow name</label>
                                <input type="text" className="form-control" id="workflow_name"
                                    value="High-intent deal follow-up" />
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label" htmlFor="workflow_module">Applies to</label>
                                <select className="form-select" id="workflow_module">
                                    <option selected>Deals</option>
                                    <option>Leads</option>
                                    <option>Contacts</option>
                                    <option>Companies</option>
                                </select>
                            </div>
                            <div className="col-lg-3">
                                <label className="form-label" htmlFor="workflow_folder">Folder</label>
                                <select className="form-select" id="workflow_folder">
                                    <option selected>Sales automation</option>
                                    <option>Onboarding</option>
                                    <option>Retention</option>
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <label className="form-label" htmlFor="workflow_desc">Description</label>
                                <input type="text" className="form-control" id="workflow_desc"
                                    value="Notify the owner and open a follow-up task when a high-intent deal moves stage." />
                            </div>
                            <div className="col-lg-2">
                                <div className="d-flex align-items-center justify-content-lg-end gap-2">
                                    <div className="form-check form-switch mb-0">
                                        <input className="form-check-input" type="checkbox" id="workflow_status" checked />
                                        <label className="form-check-label visually-hidden"
                                            htmlFor="workflow_status">Workflow active</label>
                                    </div>
                                    <span className="badge bg-soft-success text-success"
                                        data-workflow-status-label>Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3 flex-wrap mt-3 pt-3 border-top fs-12 text-muted">
                            <span><i className="ti ti-user me-1"></i>Created by
                                <span className="fw-medium text-dark">Tomas Lindqvist</span></span>
                            <span><i className="ti ti-calendar me-1"></i>Created
                                <span className="fw-medium text-dark">12 Aug 2026</span></span>
                            <span><i className="ti ti-device-floppy me-1"></i>Last saved
                                <span className="fw-medium text-dark" data-workflow-saved>2 hours ago</span></span>
                            <span className="ms-auto"><i className="ti ti-player-play me-1"></i>Executed
                                <span className="fw-medium text-dark">1,248 times</span></span>
                        </div>
                    </div>
                </div>
                {/* End Workflow Meta */}

                {/* Builder */}
                <div className="workflow-builder mb-3">

                    {/* Palette */}
                    <div className="workflow-palette">
                        <div className="card h-100 mb-0">
                            <div className="card-header">
                                <h6 className="mb-0">Blocks</h6>
                            </div>
                            <div className="card-body">
                                <p className="text-muted fs-12 mb-2">Click or drag a block onto the canvas.</p>
                                <div className="mb-3">
                                    <label className="visually-hidden" htmlFor="workflow_block_search">Search blocks</label>
                                    <input type="text" className="form-control form-control-sm"
                                        id="workflow_block_search" placeholder="Search triggers, conditions, actions"
                                        data-workflow-search />
                                </div>
                                <div className="workflow-palette-scroll" data-workflow-palette></div>
                            </div>
                        </div>
                    </div>
                    {/* End Palette */}

                    {/* Canvas */}
                    <div className="workflow-canvas-wrap">
                        <div className="card h-100 mb-0">
                            <div className="card-header d-flex align-items-center justify-content-between gap-2">
                                <h6 className="mb-0">Canvas</h6>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-dark" data-workflow-count>5 steps</span>
                                    <button type="button" className="btn btn-sm btn-outline-light shadow"
                                        data-workflow-clear>
                                        <i className="ti ti-trash me-1"></i>Clear
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="border rounded p-3 mb-3 d-none" data-workflow-testrun></div>
                                <div className="workflow-canvas">
                                    <div className="workflow-flow" data-workflow-flow></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Canvas */}

                    {/* Properties */}
                    <div className="workflow-props">
                        <div className="card h-100 mb-0">
                            <div className="card-header">
                                <h6 className="mb-0">Step settings</h6>
                            </div>
                            <div className="card-body" data-workflow-props></div>
                        </div>
                    </div>
                    {/* End Properties */}

                </div>
                {/* End Builder */}

                {/* Run History */}
                <div className="card mb-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2">
                        <h6 className="mb-0">Recent runs</h6>
                        <a href="#" className="link-primary fs-13">View all</a>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Record</th>
                                        <th scope="col">Triggered</th>
                                        <th scope="col">Steps run</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" className="no-sort"><span
                                                className="visually-hidden">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="/deals-details" className="fw-medium text-dark">Northwind
                                                Logistics - Renewal</a></td>
                                        <td>21 Aug 2026, 09:14</td>
                                        <td>5 of 5</td>
                                        <td>1.2s</td>
                                        <td><span className="workflow-run-status is-success">Completed</span></td>
                                        <td><a href="#" className="btn btn-icon btn-sm btn-outline-light"
                                                aria-label="View run detail"><i className="ti ti-eye"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="/deals-details" className="fw-medium text-dark">Meridian Health -
                                                Expansion</a></td>
                                        <td>21 Aug 2026, 08:47</td>
                                        <td>3 of 5</td>
                                        <td>0.9s</td>
                                        <td><span className="workflow-run-status is-failed">Failed at webhook</span></td>
                                        <td><a href="#" className="btn btn-icon btn-sm btn-outline-light"
                                                aria-label="View run detail"><i className="ti ti-eye"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="/deals-details" className="fw-medium text-dark">Cobalt Studio -
                                                New Business</a></td>
                                        <td>20 Aug 2026, 17:02</td>
                                        <td>4 of 5</td>
                                        <td>—</td>
                                        <td><span className="workflow-run-status is-running">Waiting 2 days</span></td>
                                        <td><a href="#" className="btn btn-icon btn-sm btn-outline-light"
                                                aria-label="View run detail"><i className="ti ti-eye"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="/deals-details" className="fw-medium text-dark">Arclight Media -
                                                Upsell</a></td>
                                        <td>20 Aug 2026, 11:38</td>
                                        <td>5 of 5</td>
                                        <td>1.4s</td>
                                        <td><span className="workflow-run-status is-success">Completed</span></td>
                                        <td><a href="#" className="btn btn-icon btn-sm btn-outline-light"
                                                aria-label="View run detail"><i className="ti ti-eye"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End Run History */}
        </div>
    );
};

export default WorkflowBuilder;
