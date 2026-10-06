import React from 'react';

const PreferenceSettings = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from preference-settings.html */}
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
										<a href="/preference-settings"
											className="d-block p-2 fw-medium active">Preference</a>
										<a href="/appearance-settings" className="d-block p-2 fw-medium">Appearance</a>
										<a href="/language-settings" className="d-block p-2 fw-medium">Language</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card mb-0">
							<div className="card-body">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">Preference</h5>
								</div>
								<form action="preference-settings.html">
									<div className="border-bottom mb-3">
										<div className="row">
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-01.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Contact</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-02.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Deals</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-03.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Leads</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-04.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Pipelines</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-02.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Campaign</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-06.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Projects</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-07.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Tasks</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-08.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Acivities</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-09.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Company</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-10.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Analytics</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-11.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Clients</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xxl-4 col-sm-6">
												<div className="card border mb-3">
													<div
														className="card-body d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<img src="assets/img/icons/preference-12.svg" alt="Img" />
															<h6 className="fs-14 fw-semibold ms-2 mb-0">Customers</h6>
														</div>
														<div className="form-check form-switch">
															<input className="form-check-input ms-0" type="checkbox"
																role="switch" checked />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
										<a href="preference-settings.html#" className="btn btn-sm btn-light">Cancel</a>
										<button type="submit" className="btn btn-sm btn-primary">Save Changes</button>
									</div>
								</form>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default PreferenceSettings;
