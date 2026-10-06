import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from security-settings.html */}
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
										<a href="/security-settings"
											className="d-block p-2 fw-medium active">Security</a>
										<a href="/notifications-settings"
											className="d-block p-2 fw-medium">Notifications</a>
										<a href="/connected-apps" className="d-block p-2 fw-medium">Connected Apps</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card mb-0">
							<div className="card-body pb-0">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">Security Settings</h5>
								</div>

								{/* start row */}
								<div className="row">

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Password</h6>
													</div>
													<p className="fs-13 mb-0">Last Changed 03 Jan 2025, 09:00 AM</p>
												</div>
												<div>
													<a href="#" className="btn btn-xs btn-light"
														data-bs-toggle="modal" data-bs-target="#change_password">
														Change Password
													</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Two Factor</h6>
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</div>
													<p className="fs-13 mb-0">Receive codes via SMS or email every time you
														login</p>
												</div>
												<div>
													<span className="badge badge-soft-success">Enabled</span>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Google Authenticator</h6>
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</div>
													<p className="fs-13 mb-0">Google Authenticator adds an extra layer of
														security</p>
												</div>
												<div>
													<span className="badge badge-soft-success">Connected</span>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Phone Number Verification<i
																className="ti ti-discount-check-filled text-success ms-1"></i>
														</h6>
													</div>
													<p className="fs-13 mb-0">Verified Mobile Number : <span
															className="text-dark">+99264710583</span></p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light me-2"
														data-bs-toggle="modal"
														data-bs-target="#change_phone_number">Change</a>
													<a href="#"
														className="link-primary fs-12 fw-medium">Remove</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Email Verification<i
																className="ti ti-discount-check-filled text-success ms-1"></i>
														</h6>
													</div>
													<p className="fs-13 mb-0">Verified Email : <span
															className="text-dark">info@example.com</span></p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light me-2"
														data-bs-toggle="modal" data-bs-target="#change_email">Change</a>
													<a href="#"
														className="link-primary fs-12 fw-medium">Remove</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Device Management</h6>
													</div>
													<p className="fs-13 mb-0">Last Changed 15 Jan 2025, 12:00 AM</p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light"
														data-bs-toggle="modal"
														data-bs-target="#device_management">Manage</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Account Activity</h6>
													</div>
													<p className="fs-13 mb-0">Last Changed 20 Jan 2025, 11:30 AM</p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light"
														data-bs-toggle="modal"
														data-bs-target="#account_activity">View</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Deactive Account</h6>
													</div>
													<p className="fs-13 mb-0">Last Changed 04 Mar 2023, 08:40 AM</p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light"
														data-bs-toggle="modal"
														data-bs-target="#deactive_account">Deactive</a>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-lg-4 col-md-6 d-flex">
										<div className="card border shadow-none flex-fill mb-3">
											<div className="card-body d-flex justify-content-between flex-column">
												<div className="mb-3">
													<div className="d-flex align-items-center justify-content-between mb-1">
														<h6 className="fs-14 fw-semibold mb-0">Delete Account</h6>
													</div>
													<p className="fs-13 mb-0">Last Changed 13 Mar 2023, 02:40 PM</p>
												</div>
												<div className="d-flex align-items-center">
													<a href="#" className="btn btn-xs btn-light"
														data-bs-toggle="modal" data-bs-target="#delete_account">Delete
														Account</a>
												</div>
											</div>
										</div> {/* end col */}

									</div>
									{/* end row */}

								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default SecuritySettings;
