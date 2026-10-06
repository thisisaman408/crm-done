import React from 'react';

const Storage = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from storage.html */}
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

				{/* Settings Menu */}
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
								<a href="/sitemap" className="nav-link p-2 active">
									<i className="ti ti-flag-cog me-2"></i>Other Settings
								</a>
							</li>
						</ul>
					</div> {/* end card body */}
				</div> {/* end card */}
				{/* /Settings Menu */}

				{/* start row */}
				<div className="row row-gap-3">
					<div className="col-xl-3 col-lg-12">

						{/* Settings Sidebar */}
						<div className="card mb-0">
							<div className="card-body">
								<div className="settings-sidebar">
									<h4 className="fs-17 mb-3">Other Settings</h4>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/sitemap" className="d-block p-2 fw-medium">Sitemap</a>
										<a href="/clear-cache" className="d-block p-2 fw-medium">Clear Cache </a>
										<a href="/storage" className="d-block p-2 fw-medium active">Storage</a>
										<a href="/cronjob" className="d-block p-2 fw-medium">Cronjob</a>
										<a href="/ban-ip-address" className="d-block p-2 fw-medium">Ban IP Address</a>
										<a href="/system-backup" className="d-block p-2 fw-medium">System Backup</a>
										<a href="/database-backup" className="d-block p-2 fw-medium">Database Backup</a>
										<a href="/system-update" className="d-block p-2 fw-medium">System Update</a>
									</div>
								</div>
							</div>
						</div>
						{/* /Settings Sidebar */}

					</div>

					<div className="col-xl-9 col-lg-12">

						{/* Settings Info */}
						<div className="card mb-0">
							<div className="card-body">
								<div
									className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
									<h4 className="fs-17 mb-0">Storage</h4>
								</div>

								{/* start row */}
								<div className="row row-gap-3">
									{/* Storage */}
									<div className="col-xxl-6 col-sm-6">
										<div
											className="border rounded p-3 d-flex align-items-center justify-content-between shadow">
											<div className="d-flex align-items-center">
												<span className="avatar avatar-lg bg-light-100 border flex-shrink-0 me-2">
													<img src="assets/img/icons/storage-icon-01.svg"
														className="w-auto h-auto" alt="Img" />
												</span>
												<h6 className="fw-medium fs-14 mb-0">Local Storage</h6>
											</div>
											<div className="d-flex align-items-center">
												<div className="form-check form-switch p-0">
													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</div>
										</div>
									</div>
									{/* /Storage */}

									{/* Storage */}
									<div className="col-xxl-6 col-sm-6">
										<div
											className="border rounded p-3 d-flex align-items-center justify-content-between shadow">
											<div className="d-flex align-items-center">
												<span className="avatar avatar-lg bg-light-100 border flex-shrink-0 me-2">
													<img src="assets/img/icons/storage-icon-02.svg"
														className="w-auto h-auto" alt="Img" />
												</span>
												<h6 className="fw-medium fs-14 mb-0">AWS</h6>
											</div>
											<div className="d-flex align-items-center">
												<a href="#" className="me-2 d-flex align-items-center"
													data-bs-toggle="modal" data-bs-target="#add_aws"><i
														className="ti ti-settings fs-24"></i>
												</a>
												<div className="form-check form-switch p-0">
													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</div>
										</div>
									</div>
									{/* /Storage */}
								</div>
								{/* end row */}

							</div>
						</div>
						{/* /Settings Info */}

					</div>
				</div>
				{/* end row */}
        </div>
    );
};

export default Storage;
