import React from 'react';

const TaxRates = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from tax-rates.html */}
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
				<div className="row">
					<div className="col-xl-3 col-lg-12">

						{/* Settings Sidebar */}
						<div className="card">
							<div className="card-body">
								<div className="settings-sidebar">
									<h4 className="fs-17 mb-3">Financial Settings</h4>
									<div className="list-group list-group-flush settings-sidebar">
										<a href="/payment-gateways" className="d-block p-2 fw-medium">Payment
											Gateways</a>
										<a href="/bank-accounts" className="d-block p-2 fw-medium">Bank Accounts</a>
										<a href="/tax-rates" className="d-block p-2 fw-medium active">Tax Rates</a>
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
									<h4 className="fs-17 mb-0">Tax Rate</h4>
									<a href="#" className="btn btn-primary btn-sm" data-bs-toggle="modal"
										data-bs-target="#add_tax"><i
											className="ti ti-square-rounded-plus-filled me-1"></i>Add New Tax Rate</a>
								</div>

								{/* Start Table */}
								<div className="table-responsive custom-table mb-4">
									<table className="table table-nowrap">
										<thead className="table-light">
											<tr>
												<th>Name</th>
												<th>Tax Rate</th>
												<th>Created On</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>VAT</td>
												<td>10%</td>
												<td>22 Feb 2025</td>
												<td><span className="badge bg-success">Active</span></td>
												<td>
													<div className="dropdown table-action">
														<a href="tax-rates.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#edit_tax">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#delete_tax">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>CGST</td>
												<td>08%</td>
												<td>17 Jan 2025</td>
												<td><span className="badge bg-success">Active</span></td>
												<td>
													<div className="dropdown table-action">
														<a href="tax-rates.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#edit_tax">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#delete_tax">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
											<tr>
												<td>SGST</td>
												<td>10%</td>
												<td>07 Jan 2025</td>
												<td><span className="badge bg-success">Active</span></td>
												<td>
													<div className="dropdown table-action">
														<a href="tax-rates.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#edit_tax">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#delete_tax">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* End Table */}

								<div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
									<h4 className="fs-17 mb-0">Tax Group</h4>
									<a href="#" className="btn btn-primary btn-sm" data-bs-toggle="modal"
										data-bs-target="#add_tax_group"><i
											className="ti ti-square-rounded-plus-filled me-1"></i>Add New Group</a>
								</div>
								{/* Start Table */}
								<div className="table-responsive custom-table">
									<table className="table table-nowrap">
										<thead className="table-light">
											<tr>
												<th>Name</th>
												<th>Tax Rate</th>
												<th>Created On</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>GST</td>
												<td>18%</td>
												<td>18 Jan 2025</td>
												<td><span className="badge bg-success">Active</span></td>
												<td>
													<div className="dropdown table-action">
														<a href="tax-rates.html#"
															className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
															data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</a>
														<div className="dropdown-menu dropdown-menu-right">
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#edit_tax_group">
																<i className="ti ti-edit text-blue me-1"></i>Edit
															</a>
															<a className="dropdown-item" href="tax-rates.html#" data-bs-toggle="modal"
																data-bs-target="#delete_tax_group">
																<i className="ti ti-trash text-blue me-1"></i>Delete
															</a>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/* End Table */}

							</div>
						</div>
						{/* /Settings Info */}

					</div>
				</div>
				{/* end row */}
        </div>
    );
};

export default TaxRates;
