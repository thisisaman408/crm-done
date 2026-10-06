import React from 'react';

const GdprCookies = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from gdpr-cookies.html */}
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
								<a href="/invoice-settings" className="nav-link p-2">
									<i className="ti ti-apps me-2"></i>App Settings
								</a>
							</li>
							<li className="nav-item me-3">
								<a href="/email-settings" className="nav-link p-2 active">
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
									<h5 className="mb-3 fs-17">System Settings</h5>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/email-settings" className="d-block p-2 fw-medium">Email Settings</a>
										<a href="/sms-gateways" className="d-block p-2 fw-medium">SMS Gateways</a>
										<a href="/gdpr-cookies" className="d-block p-2 fw-medium active">GDPR
											Cookies</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card mb-0">
							<div className="card-body">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">GDPR Cookies</h5>
								</div>
								<form action="gdpr-cookies.html">
									<div className="border-bottom mb-3">
										<div className="row align-items-center">
											<div className="col-md-6">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Cookies Content Text</h6>
													<p className="fs-13">You can configure the text here</p>
												</div>
											</div>
											<div className="col-md-6">
												<div className="mb-3">
													<div className="snow-editor"></div>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col-md-8">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Cookies Position</h6>
													<p className="fs-13">You can configure the type</p>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mb-3">
													<select className="select">
														<option selected>Right</option>
														<option>Left</option>
													</select>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col-md-8">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Agree Button Text</h6>
													<p className="fs-13">You can configure the text here</p>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mb-3">
													<input type="text" className="form-control" value="Agree" />
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col-md-8">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Decline Button Text</h6>
													<p className="fs-13">You can configure the text here</p>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mb-3">
													<input type="text" className="form-control" value="Decline" />
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col-md-8">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Show Decline Button</h6>
													<p className="fs-13">To display decline button</p>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mb-3">
													<div className="form-check form-switch ms-0 ps-0">
														<input className="form-check-input ms-0 mt-0" type="checkbox"
															role="switch" checked />
													</div>
												</div>
											</div>
										</div>
										<div className="row align-items-center">
											<div className="col-md-8">
												<div className="mb-3">
													<h6 className="fs-14 fw-semibold mb-1">Link for Cookies Page</h6>
													<p className="fs-13">You can configure the link here</p>
												</div>
											</div>
											<div className="col-md-4">
												<div className="mb-3">
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
										<a href="gdpr-cookies.html#" className="btn btn-sm btn-light me-2">Cancel</a>
										<button type="submit" className="btn btn-sm btn-primary">Save Changes</button>
									</div>
								</form>
							</div>
						</div>
						{/* /GDPR Cookies */}

					</div>
				</div>
        </div>
    );
};

export default GdprCookies;
