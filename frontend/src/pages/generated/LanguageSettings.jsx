import React from 'react';

const LanguageSettings = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from language-settings.html */}
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
								<a href="/company-settings" className="nav-link p-2 active">
									<i className="ti ti-world-cog me-2"></i>Website Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/invoice-settings" className="nav-link p-2">
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

						<div className="card">
							<div className="card-body">
								<div className="settings-sidebar">
									<h5 className="mb-3 fs-17">Website Settings</h5>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/company-settings" className="d-block p-2 fw-medium">Company
											Settings</a>
										<a href="/localization-settings"
											className="d-block p-2 fw-medium">Localization</a>
										<a href="/prefixes-settings" className="d-block p-2 fw-medium">Prefixes</a>
										<a href="/preference-settings" className="d-block p-2 fw-medium">Preference</a>
										<a href="/appearance-settings" className="d-block p-2 fw-medium">Appearance</a>
										<a href="/language-settings"
											className="d-block p-2 fw-medium active">Language</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						{/* Custom Fields */}
						<div className="card">
							<div className="card-body">
								<div
									className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
									<h4 className="fs-17 mb-0">Language</h4>
									<div className="d-flex align-items-center gap-2">
										<div className="dropdown">
											<a href="#"
												className="dropdown-toggle btn btn-outline-light px-2 shadow"
												data-bs-toggle="dropdown"><i
													className="ti ti-language me-2"></i>Language</a>
											<div className="dropdown-menu  dropdown-menu-end">
												<ul>
													<li>
														<a href="#"
															className="dropdown-item d-flex align-items-center gap-2"><img
																src="assets/img/flags/us.svg" alt="Img"
																height="16" />English</a>
													</li>
													<li>
														<a href="#"
															className="dropdown-item d-flex align-items-center gap-2"><img
																src="assets/img/flags/de.svg" alt="Img"
																height="16" />German</a>
													</li>
													<li>
														<a href="#"
															className="dropdown-item d-flex align-items-center gap-2"><img
																src="assets/img/flags/ae.svg" alt="Img"
																height="16" />Arabic</a>
													</li>
													<li>
														<a href="#"
															className="dropdown-item d-flex align-items-center gap-2"><img
																src="assets/img/flags/fr.svg" alt="Img"
																height="16" />French</a>
													</li>
												</ul>
											</div>
										</div>
										<a href="#" className="btn btn-primary" data-bs-toggle="modal"
											data-bs-target="#add_lang"><i
												className="ti ti-square-rounded-plus-filled me-1"></i>Add Language</a>
									</div>
								</div>

								{/* Contact List */}
								<div className="table-responsive custom-table mb-4">
									<table className="table table-nowrap">
										<thead className="table-light">
											<tr>
												<th>Language</th>
												<th>Code</th>
												<th>RTL</th>
												<th>Total</th>
												<th>Done</th>
												<th>Progress</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<a href="#"
														className="d-flex align-items-center gap-2"><img
															src="assets/img/flags/us.svg" alt="Img"
															height="16" />English</a>
												</td>
												<td>en</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center gap-2 w-100">
															<input className="form-check-input switchCheckDefault ms-auto"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>3481</td>
												<td>2861</td>
												<td>
													<div className="pipeline-progress d-flex align-items-center w-100">
														<div className="progress w-100 bg-light"
															style={{ height: '5px', borderRadius: '10px' }}>
															<div className="progress-bar bg-warning" role="progressbar"
																style={{ width: '80%', borderRadius: '10px' }}
																aria-valuenow="80" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="ms-2 text-body">80%</span>
													</div>
												</td>
												<td>
													<a href="#" className="badge bg-success">Connected</a>
												</td>
												<td className="d-flex align-items-center gap-2">
													<a href="/language-web"
														className="badge bg-light text-dark me-2">Web</a>
													<a href="#"
														className="badge bg-light text-dark me-2">App</a>
													<a href="#"
														className="badge bg-light text-dark me-2">Admin</a>
													<div className="dropdown table-action">
														<a href="language-settings.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#edit_lang">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#delete_lang">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="#"
														className="d-flex align-items-center gap-2"><img
															src="assets/img/flags/de.svg" alt="Img"
															height="16" />German</a>
												</td>
												<td>de</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center gap-2 w-100">
															<input className="form-check-input switchCheckDefault ms-auto"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>4815</td>
												<td>4815</td>
												<td>
													<div className="pipeline-progress d-flex align-items-center w-100">
														<div className="progress w-100 bg-light"
															style={{ height: '5px', borderRadius: '10px' }}>
															<div className="progress-bar bg-success" role="progressbar"
																style={{ width: '100%', borderRadius: '10px' }}
																aria-valuenow="80" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="ms-2 text-body">100%</span>
													</div>
												</td>
												<td>
													<a href="#" className="badge bg-success">Connected</a>
												</td>
												<td className="d-flex align-items-center gap-2">
													<a href="/language-web"
														className="badge bg-light text-dark me-2">Web</a>
													<a href="#"
														className="badge bg-light text-dark me-2">App</a>
													<a href="#"
														className="badge bg-light text-dark me-2">Admin</a>
													<div className="dropdown table-action">
														<a href="language-settings.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#edit_lang">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#delete_lang">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="#"
														className="d-flex align-items-center gap-2"><img
															src="assets/img/flags/ae.svg" alt="Img"
															height="16" />Arabic</a>
												</td>
												<td>ar</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center gap-2 w-100">
															<input className="form-check-input switchCheckDefault ms-auto"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>2590</td>
												<td>20</td>
												<td>
													<div className="pipeline-progress d-flex align-items-center w-100">
														<div className="progress w-100 bg-light"
															style={{ height: '5px', borderRadius: '10px' }}>
															<div className="progress-bar bg-primary" role="progressbar"
																style={{ width: '50%', borderRadius: '10px' }}
																aria-valuenow="40" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="ms-2 text-body">50%</span>
													</div>
												</td>
												<td>
													<a href="#" className="badge bg-success">Connected</a>
												</td>
												<td className="d-flex align-items-center gap-2">
													<a href="/language-web"
														className="badge bg-light text-dark me-2">Web</a>
													<a href="#"
														className="badge bg-light text-dark me-2">App</a>
													<a href="#"
														className="badge bg-light text-dark me-2">Admin</a>
													<div className="dropdown table-action">
														<a href="language-settings.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#edit_lang">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#delete_lang">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="#"
														className="d-flex align-items-center gap-2"><img
															src="assets/img/flags/fr.svg" alt="Img"
															height="16" />English</a>
												</td>
												<td>fr</td>
												<td>
													<div className="form-check form-switch p-0">
														<label
															className="form-check-label d-flex align-items-center gap-2 w-100">
															<input className="form-check-input switchCheckDefault ms-auto"
																type="checkbox" role="switch" checked />
														</label>
													</div>
												</td>
												<td>1892</td>
												<td>387</td>
												<td>
													<div className="pipeline-progress d-flex align-items-center w-100">
														<div className="progress w-100 bg-light"
															style={{ height: '5px', borderRadius: '10px' }}>
															<div className="progress-bar bg-purple" role="progressbar"
																style={{ width: '40%', borderRadius: '10px' }}
																aria-valuenow="40" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
														<span className="ms-2 text-body">40%</span>
													</div>
												</td>
												<td>
													<a href="#" className="badge bg-success">Connected</a>
												</td>
												<td className="d-flex align-items-center gap-2">
													<a href="/language-web"
														className="badge bg-light text-dark me-2">Web</a>
													<a href="#"
														className="badge bg-light text-dark me-2">App</a>
													<a href="#"
														className="badge bg-light text-dark me-2">Admin</a>
													<div className="dropdown table-action">
														<a href="language-settings.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#edit_lang">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="language-settings.html#" data-bs-toggle="modal"
																data-bs-target="#delete_lang">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
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
								{/* /Contact List */}

							</div>
						</div>
						{/* /Custom Fields */}

					</div>
				</div>
        </div>
    );
};

export default LanguageSettings;
