import React from 'react';

const NotificationsSettings = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from notifications-settings.html */}
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

					<div className="col-xl-3 col-lg-12 ">

						<div className="card mb-3 mb-xl-0">
							<div className="card-body">
								<div className="settings-sidebar">
									<h5 className="mb-3 fs-17">General Settings</h5>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/profile-settings" className="d-block p-2 fw-medium">Profile</a>
										<a href="/security-settings" className="d-block p-2 fw-medium">Security</a>
										<a href="/notifications-settings"
											className="d-block p-2 fw-medium active">Notifications</a>
										<a href="/connected-apps" className="d-block p-2 fw-medium">Connected Apps</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card mb-0">
							<div className="card-body">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">Notification Settings</h5>
								</div>
								<div>
									<div className="mb-3">
										<h6 className="mb-1">General Notifications</h6>
										<p className="mb-0">Select notifications</p>
									</div>
									<div className="border-bottom mb-3 pb-3">
										<div
											className="form-check d-flex align-items-center justify-content-between ps-0 mb-3">
											<label className="form-check-label text-dark fw-medium" htmlFor="notification1">
												Mobile Push Notifications
											</label>
											<input className="form-check-input" type="checkbox" value="" id="notification1"
												checked="" />
										</div>
										<div
											className="form-check d-flex align-items-center justify-content-between ps-0 mb-3">
											<label className="form-check-label text-dark fw-medium" htmlFor="notification2">
												Desktop Notifications
											</label>
											<input className="form-check-input" type="checkbox" value="" id="notification2"
												checked="" />
										</div>
										<div
											className="form-check d-flex align-items-center justify-content-between ps-0 mb-3">
											<label className="form-check-label text-dark fw-medium" htmlFor="notification3">
												Email Notifications
											</label>
											<input className="form-check-input" type="checkbox" id="notification3"
												checked="" />
										</div>
										<div
											className="form-check d-flex align-items-center justify-content-between ps-0 mb-0">
											<label className="form-check-label text-dark fw-medium" htmlFor="notification4">
												SMS Notifications
											</label>
											<input className="form-check-input" type="checkbox" id="notification4"
												checked="" />
										</div>
									</div>

									<div className="mb-3">
										<h6 className="mb-1">Custom Notifications</h6>
										<p className="mb-0">Select when you will be notified when the following changes
											occur
										</p>
									</div>
									<div className="table-responsive">
										<table className="table table-borderless notification-table border-0">
											<thead>
												<tr>
													<th></th>
													<th>Push</th>
													<th>SMS</th>
													<th>Email</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="fw-medium text-dark py-2">Payment</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
												<tr>
													<td className="fw-medium text-dark py-2">
														Transaction
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
												<tr>
													<td className="fw-medium text-dark py-2">
														Email Verification
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
												<tr>
													<td className="fw-medium text-dark py-2">
														OTP
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
												<tr>
													<td className="fw-medium text-dark py-2">
														Activity
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
												<tr>
													<td className="fw-medium text-dark py-2">
														Account
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
													<td className="py-2">
														<div className="form-check form-switch">
															<input className="form-check-input" type="checkbox"
																role="switch" checked />
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div> {/* end table responsive */}

								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default NotificationsSettings;
