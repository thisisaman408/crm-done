import React from 'react';

const BankAccounts = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from bank-accounts.html */}
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
								<a href="/payment-gateways" className="nav-link p-2 active">
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
				{/* /Settings Menu */}

				{/* start row */}
				<div className="row row-gap-3">
					<div className="col-xl-3 col-lg-12">

						{/* Settings Sidebar */}
						<div className="card mb-0">
							<div className="card-body">
								<div className="settings-sidebar">
									<h4 className="fs-17 mb-3">Financial Settings</h4>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/payment-gateways" className="d-block p-2 fw-medium">Payment
											Gateways</a>
										<a href="/bank-accounts" className="d-block p-2 fw-medium active">Bank
											Accounts</a>
										<a href="/tax-rates" className="d-block p-2 fw-medium">Tax Rates</a>
										<a href="/currencies" className="d-block p-2 fw-medium">Currencies</a>
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
									<h4 className="fs-17 mb-0">Bank Accounts</h4>
									<a href="#" className="btn btn-primary btn-sm" data-bs-toggle="modal"
										data-bs-target="#add_bank"><i
											className="ti ti-square-rounded-plus-filled me-1"></i>Add New Account</a>
								</div>

								<div className="row row-gap-3">
									{/* Bank Account */}
									<div className="col-xxl-4 col-sm-6">
										<div className="position-relative">
											<input type="radio" name="bank" id="bank1" className="bank-radio" checked />
											<div className="bank-box">
												<div className="check-icon"></div>
												<div className="mb-4">
													<h5 className="fw-bold mb-1 fs-16">HDFC</h5>
													<p className="mb-0 fs-14">**** **** 4872</p>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<div>
														<h6 className="fw-semibold mb-1 fs-14">Holder Name</h6>
														<p className="fs-13">Darlee Robertson</p>
													</div>

													<div className="dropdown table-action position-relative z-1">
														<a href="bank-accounts.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#edit_bank">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#delete_bank">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* /Bank Account */}

									{/* Bank Account */}
									<div className="col-xxl-4 col-sm-6">
										<div className="position-relative">
											<input type="radio" name="bank" id="bank2" className="bank-radio" />
											<div className="bank-box">
												<div className="check-icon"></div>
												<div className="mb-4">
													<h5 className="fw-bold mb-1 fs-16">SBI</h5>
													<p className="mb-0 fs-14">**** **** 2495</p>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<div>
														<h6 className="fw-semibold mb-1 fs-14">Holder Name</h6>
														<p className="fs-13">Sharon Roy</p>
													</div>

													<div className="dropdown table-action position-relative z-1">
														<a href="bank-accounts.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#edit_bank">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#delete_bank">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* /Bank Account */}

									{/* Bank Account */}
									<div className="col-xxl-4 col-sm-6">
										<div className="position-relative">
											<input type="radio" name="bank" id="bank3" className="bank-radio" />
											<div className="bank-box">
												<div className="check-icon"></div>
												<div className="mb-4">
													<h5 className="fw-bold mb-1 fs-16">KVB</h5>
													<p className="mb-0 fs-14">**** **** 3948</p>
												</div>
												<div className="d-flex align-items-center justify-content-between">
													<div>
														<h6 className="fw-semibold mb-1 fs-14">Holder Name</h6>
														<p className="fs-13">Vaughan Lewis</p>
													</div>

													<div className="dropdown table-action position-relative z-1">
														<a href="bank-accounts.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#edit_bank">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="bank-accounts.html#" data-bs-toggle="modal"
																data-bs-target="#delete_bank">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* /Bank Account */}
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

export default BankAccounts;
