import React from 'react';

const ConnectedApps = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from connected-apps.html */}
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
								<a href="/profile-settings" className="nav-link p-2 active">
									<i className="ti ti-settings-cog me-2"></i>General Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/company-settings" className="nav-link p-2">
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

						<div className="card mb-3 mb-xl-0">
							<div className="card-body">
								<div className="settings-sidebar">
									<h5 className="mb-3 fs-17">General Settings</h5>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/profile-settings" className="d-block p-2 fw-medium">Profile</a>
										<a href="/security-settings" className="d-block p-2 fw-medium">Security</a>
										<a href="/notifications-settings"
											className="d-block p-2 fw-medium">Notifications</a>
										<a href="/connected-apps" className="d-block p-2 fw-medium active">Connected
											Apps</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card mb-0">
							<div className="card-body pb-0">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">Connected Apps</h5>
								</div>

								{/* start row */}
								<div className="row">

									<div className="col-md-4 col-sm-6">
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span className="avatar rounded bg-light p-2">
														<img src="assets/img/icons/integration-01.svg" alt="Icon" />
													</span>
													<div className="connect-btn">
														<a href="#"
															className="badge badge-soft-success">Connected</a>
													</div>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<p className="fw-medium text-dark  mb-0">Google Calendar</p>
													<div className="form-check form-switch">
														<input className="form-check-input ms-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-md-4 col-sm-6">
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span className="avatar rounded bg-light p-2">
														<img src="assets/img/icons/integration-03.svg" alt="Icon" />
													</span>
													<div className="connect-btn">
														<a href="#"
															className="badge badge-soft-success">Connected</a>
													</div>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<p className="fw-medium text-dark  mb-0">Dropbox</p>
													<div className="form-check form-switch">
														<input className="form-check-input ms-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-md-4 col-sm-6">
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span className="avatar rounded bg-light p-2">
														<img src="assets/img/icons/integration-04.svg" alt="Icon" />
													</span>
													<div className="connect-btn">
														<a href="#"
															className="badge border badge-soft-success">Connected</a>
													</div>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<p className="fw-medium text-dark  mb-0">Slack</p>
													<div className="form-check form-switch">
														<input className="form-check-input ms-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-md-4 col-sm-6">
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span className="avatar rounded bg-light p-2">
														<img src="assets/img/icons/integration-05.svg" alt="Icon" />
													</span>
													<div className="connect-btn">
														<a href="#"
															className="badge badge-soft-success">Connected</a>
													</div>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<p className="fw-medium text-dark  mb-0">Gmail</p>
													<div className="form-check form-switch">
														<input className="form-check-input ms-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-md-4 col-sm-6">
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<span className="avatar rounded bg-light p-2">
														<img src="assets/img/icons/integration-06.svg" alt="Icon" />
													</span>
													<div className="connect-btn">
														<a href="#"
															className="badge badge-soft-success">Connect</a>
													</div>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<p className="fw-medium text-dark  mb-0">Github</p>
													<div className="form-check form-switch">
														<input className="form-check-input ms-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col */}

								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default ConnectedApps;
