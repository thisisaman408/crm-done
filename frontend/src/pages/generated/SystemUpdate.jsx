import React from 'react';

const SystemUpdate = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from system-update.html */}
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
										<a href="/storage" className="d-block p-2 fw-medium">Storage</a>
										<a href="/cronjob" className="d-block p-2 fw-medium">Cronjob</a>
										<a href="/ban-ip-address" className="d-block p-2 fw-medium">Ban IP Address</a>
										<a href="/system-backup" className="d-block p-2 fw-medium">System Backup</a>
										<a href="/database-backup" className="d-block p-2 fw-medium">Database Backup</a>
										<a href="/system-update" className="d-block p-2 fw-medium active">System
											Update</a>
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
									<h4 className="fs-17 mb-0">System Update</h4>
								</div>
								{/* Item */}
								<div className="mb-4">
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="position-relative z-1">
											<span
												className="avatar avatar-lg badge-soft-success badge-sm border-0 text-success rounded-circle"><i
													className="ti ti-circle-check-filled fs-24"></i></span>
										</div>
										<div>
											<h6 className="fs-14 mb-1 fw-semibold"> You are up to date <span
													className="badge badge-tag badge-soft-info ms-2">Default</span> </h6>
											<p className="fs-13 mb-0">Last Checked : Today 10:30AM</p>
										</div>
									</div>
								</div>

								{/* Item */}
								<div className="mb-3">
									<div className="w-100">
										<label className="form-label">Purchase Key<span className="text-danger">*</span></label>
										<input type="text" className="form-control" />
									</div>
								</div>
								{/* Item */}
								<div className="bg-light border rounded p-2 d-flex align-items-center">
									<p className="mb-0"> <i className="ti ti-info-circle me-2 text-info"></i> Before updating,
										it's best to back up your files and database and review the changelog.</p>
								</div>
							</div>
						</div>
						{/* /Settings Info */}

					</div>
				</div>
				{/* end row */}
        </div>
    );
};

export default SystemUpdate;
