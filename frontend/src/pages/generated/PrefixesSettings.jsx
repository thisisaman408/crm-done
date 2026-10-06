import React from 'react';

const PrefixesSettings = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from prefixes-settings.html */}
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
										<a href="/prefixes-settings"
											className="d-block p-2 fw-medium active">Prefixes</a>
										<a href="/preference-settings" className="d-block p-2 fw-medium">Preference</a>
										<a href="/appearance-settings" className="d-block p-2 fw-medium">Appearance</a>
										<a href="/language-settings" className="d-block p-2 fw-medium">Language</a>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

					<div className="col-xl-9 col-lg-12">

						<div className="card">
							<div className="card-body">
								<div className="border-bottom mb-3 pb-3">
									<h5 className="mb-0 fs-17">Prefixes</h5>
								</div>
								<form action="prefixes-settings.html">
									<div className="border-bottom mb-3">

										{/* start row */}
										<div className="row">
											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Products</label>
													<input type="text" className="form-control" value="SKU - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Supplier</label>
													<input type="text" className="form-control" value="SUP - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Purchase</label>
													<input type="text" className="form-control" value="PU - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Purchase Return</label>
													<input type="text" className="form-control" value="PR - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Sales</label>
													<input type="text" className="form-control" value="SA - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Sales Return</label>
													<input type="text" className="form-control" value="SR -  " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Customer</label>
													<input type="text" className="form-control" value="CT - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Expense</label>
													<input type="text" className="form-control" value="EX - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Stock Transfer</label>
													<input type="text" className="form-control" value="ST -  " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Stock Adjustment</label>
													<input type="text" className="form-control" value="SA -  " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Sales Order</label>
													<input type="text" className="form-control" value="SO - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Invoice</label>
													<input type="text" className="form-control" value="INV -  " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Estimation</label>
													<input type="text" className="form-control" value="EST - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Transaction</label>
													<input type="text" className="form-control" value="TRN - " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Employee</label>
													<input type="text" className="form-control" value="EMP -  " />
												</div>
											</div> {/* end col */}

											<div className="col-md-3 col-sm-6">
												<div className="mb-3">
													<label className="form-label">Purchase Return</label>
													<input type="text" className="form-control" value="PR -  " />
												</div>
											</div> {/* end col */}

										</div>
										{/* end row */}

									</div>
									<div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
										<a href="prefixes-settings.html#" className="btn btn-sm btn-light">Cancel</a>
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

export default PrefixesSettings;
