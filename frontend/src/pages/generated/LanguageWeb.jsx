import React from 'react';

const LanguageWeb = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from language-web.html */}
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
						<div className="card mb-0">
							<div className="card-body">
								<div className="row border-bottom mb-3 pb-3 align-items-center row-gap-3">
									<div className="col-md-3">
										<h4 className="fs-17 mb-0">Language</h4>
									</div>
									<div className="col-md-9">
										<div className="d-flex align-items-center justify-content-md-end flex-wrap gap-2">
											<a href="/language-settings"
												className="btn btn-primary d-flex align-items-center"><i
													className="ti ti-circle-arrow-left me-1"></i>Back to Translations</a>
											<div className="dropdown">
												<a href="#"
													className="dropdown-toggle btn btn-outline-light px-2 shadow"
													data-bs-toggle="dropdown"><img src="assets/img/flags/us.svg"
														alt="Img" className="me-2" height="16" />English</a>
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
											<div className="w-lg-25 w-md-25 w-100">
												<p className="fs-14 text-dark mb-1">Progress</p>
												<div className="d-flex align-items-center">
													<div className="progress w-100 bg-light"
														style={{ height: '5px', borderRadius: '10px' }}>
														<div className="progress-bar bg-warning" role="progressbar"
															style={{ width: '80%', borderRadius: '10px' }} aria-valuenow="80"
															aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<span className="ms-2">80%</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Contact List */}
								<div className="table-responsive custom-table">
									<table className="table" id="language-web">
										<thead className="table-light">
											<tr>
												<th className="no-sort">Medium</th>
												<th className="no-sort">File</th>
												<th className="no-sort">Total</th>
												<th className="no-sort">Done</th>
												<th className="no-sort">Progress</th>
												<th className="no-sort">Action</th>
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
								{/* /Contact List */}

							</div>
						</div>
						{/* /Custom Fields */}

					</div>
				</div>
        </div>
    );
};

export default LanguageWeb;
