import React from 'react';

const CustomFieldsSetting = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from custom-fields-setting.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Settings</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Settings</li>
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

				<div className="card border-0">
					<div className="card-body pb-0 pt-0 px-2">
						<ul className="nav nav-tabs nav-bordered nav-bordered-primary">
							<li className="nav-item me-3">
								<a href="/profile-settings" className="nav-link p-2">
									<i className="ti ti-settings-cog me-2"></i>General Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/company-settings" className="nav-link p-2">
									<i className="ti ti-world-cog me-2"></i>Website Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/invoice-settings" className="nav-link p-2 active">
									<i className="ti ti-apps me-2"></i>App Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/email-settings" className="nav-link p-2">
									<i className="ti ti-device-laptop me-2"></i>System Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/payment-gateways" className="nav-link p-2">
									<i className="ti ti-moneybag me-2"></i>Financial Settings
								</a>
							</li>
							<li className="nav-item">
								<a href="/sitemap" className="nav-link p-2">
									<i className="ti ti-flag-cog me-2"></i>Other Settings
								</a>
							</li>
						</ul>
					</div> {/* end card body */}
				</div> {/* end card */}

				{/* start row */}
				<div className="row">
					<div className="col-xl-3 col-lg-12">

						<div className="card mb-3 mb-xl-0">
							<div className="card-body">
								<div className="settings-sidebar">
									<h5 className="mb-3 fs-17">App Settings</h5>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/invoice-settings" className="d-block p-2 fw-medium">Invoice
											Settings</a>
										<a href="/printers-settings" className="d-block p-2 fw-medium">Printer</a>
										<a href="/custom-fields-setting" className="d-block p-2 fw-medium active">Custom
											Fields</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">
						<div className="card mb-0">
							<div className="card-body">
								<div
									className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
									<h5 className="mb-0 fs-17">Custom Fields</h5>
									<a href="#" className="btn btn-primary btn-sm" data-bs-toggle="modal"
										data-bs-target="#add_fields"><i
											className="ti ti-square-rounded-plus-filled me-1"></i>Add New Field</a>
								</div>
								{/* start table */}
								<div className="table-responsive">
									<table className="table table-nowrap">
										<thead className="table-light">
											<tr>
												<th>Module</th>
												<th>Label</th>
												<th>Type</th>
												<th>Default Value</th>
												<th>Required</th>
												<th>status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Contacts</td>
												<td>Preferred Language</td>
												<td>Select</td>
												<td>English</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center justify-content-center">
															<input className="form-check-input switchCheckDefault"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>
													<span className="badge badge-tag badge-soft-success">Connected</span>
												</td>

												<td>
													<div className="dropdown table-action">
														<a href="custom-fields-setting.html#"
															className="action-icon btn btn-xs shadow d-inline-flex btn-outline-light"
															data-bs-toggle="dropdown" aria-expanded="false"><i
																className="ti ti-dots-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal" data-bs-target="#edit_fields"><i
																	className="ti ti-edit me-1"></i> Edit</a>
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal"
																data-bs-target="#delete_fields"><i
																	className="ti ti-trash me-1"></i> Delete</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>Projects</td>
												<td>Project Type</td>
												<td>Select</td>
												<td>Internal</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center justify-content-center">
															<input className="form-check-input switchCheckDefault"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>
													<span className="badge badge-tag badge-soft-success">Connected</span>
												</td>

												<td>
													<div className="dropdown table-action">
														<a href="custom-fields-setting.html#"
															className="action-icon btn btn-xs shadow d-inline-flex btn-outline-light"
															data-bs-toggle="dropdown" aria-expanded="false"><i
																className="ti ti-dots-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal" data-bs-target="#edit_fields"><i
																	className="ti ti-edit me-1"></i> Edit</a>
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal"
																data-bs-target="#delete_fields"><i
																	className="ti ti-trash me-1"></i> Delete</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>Tasks</td>
												<td>Task Type</td>
												<td>Select</td>
												<td>Design</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center justify-content-center">
															<input className="form-check-input switchCheckDefault"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>
													<span className="badge badge-tag badge-soft-success">Connected</span>
												</td>

												<td>
													<div className="dropdown table-action">
														<a href="custom-fields-setting.html#"
															className="action-icon btn btn-xs shadow d-inline-flex btn-outline-light"
															data-bs-toggle="dropdown" aria-expanded="false"><i
																className="ti ti-dots-vertical"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal" data-bs-target="#edit_fields"><i
																	className="ti ti-edit me-1"></i> Edit</a>
															<a className="dropdown-item d-flex align-items-center" href="custom-fields-setting.html#"
																data-bs-toggle="modal"
																data-bs-target="#delete_fields"><i
																	className="ti ti-trash me-1"></i> Delete</a>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* end table */}
							</div>
						</div>
					</div> {/* end col */}
				</div> {/* end row */}
        </div>
    );
};

export default CustomFieldsSetting;
