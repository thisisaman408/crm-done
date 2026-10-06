import React from 'react';

const ProductDetails = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from product-details.html */}
            <div className="row">
					<div className="col-md-12">

						<div className="mb-3">
							<a href="/products"><i className="ti ti-arrow-narrow-left me-1"></i>Back to Products</a>
						</div>

					</div>

					{/* Contact Sidebar */}
					<div className="col-xl-4">
						<div className="card">
							<div className="card-body p-3">
								<h6 className="mb-3 fw-semibold fs-14">Product Information</h6>
								<div className="d-flex align-items-center gap-1 border-bottom pb-3 mb-3">
									<span
										className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2"><i
											className="ti ti-box fs-24"></i></span>
									<div>
										<h6 className="mb-1 d-flex align-items-center gap-2">Barcode Scanner <span
												className="badge bg-success">Active</span></h6>
										<span>Hardware</span>
									</div>
								</div>
								<h6 className="mb-3 fw-semibold fs-14">Other Information</h6>
								<ul className="mb-3">
									<li className="row mb-2"><span className="col-6">Product ID</span><span
											className="col-6 text-dark">PRD114</span></li>
									<li className="row mb-2"><span className="col-6">SKU</span><span
											className="col-6 text-dark">BARHARD</span></li>
									<li className="row mb-2"><span className="col-6">Cost Price ($)</span><span
											className="col-6 text-dark">8965</span></li>
									<li className="row mb-2"><span className="col-6">Selling Price ($)</span><span
											className="col-6 text-dark">7500</span></li>
									<li className="row mb-2"><span className="col-6">Tax (%)</span><span
											className="col-6 text-dark">18</span></li>
									<li className="row"><span className="col-6">Created On</span><span
											className="col-6 text-dark">15 Feb 2025, 02:02 PM</span></li>
								</ul>
								<a href="product-details.html#" className="btn btn-primary w-100" data-bs-target="#add_notes"
									data-bs-toggle="modal">Add Notes</a>
							</div>
						</div>
					</div>
					{/* /Contact Sidebar */}

					{/* Contact Details */}
					<div className="col-xl-8">
						<div className="card mb-3">
							<div className="card-body pb-0 pt-2">
								<ul className="nav nav-tabs nav-bordered" role="tablist">
									<li className="nav-item" role="presentation">
										<a href="product-details.html#tab_1" data-bs-toggle="tab" className="nav-link active border-3"
											aria-controls="tab_1" aria-selected="true" role="tab">
											<span className="d-md-inline-block"><i
													className="ti ti-alarm-minus me-1"></i>Activities</span>
										</a>
									</li>
									<li className="nav-item" role="presentation">
										<a href="product-details.html#tab_2" data-bs-toggle="tab" aria-controls="tab_2"
											className="nav-link border-3" aria-selected="false" role="tab" tabindex="-1">
											<span className="d-md-inline-block"><i className="ti ti-notes me-1"></i>Notes</span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/* Tab Content */}
						<div className="tab-content pt-0">

							{/* Activities */}
							<div className="tab-pane active show" id="tab_1" role="tabpanel" aria-labelledby="tab_1">
								<div className="card">
									<div className="card-body">
										<div className="border-bottom mb-3 pb-3">
											<h5 className="fw-bold mb-0">Activities</h5>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2"><i
															className="ti ti-refresh-dot fs-24"></i></span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $10500 <i
																className="ti ti-arrow-right fs-16 mx-1"></i> $10200</div>
														<span>05 Jun 2026, 1:45 PM, By Admin</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $9400
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															$9200
														</div>
														<span className="text-muted">30 May 2026, 2:00 PM, By User</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $11000
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															$10800
														</div>
														<span className="text-muted">25 Apr 2026, 10:15 AM, By Admin</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $8700
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															$8500
														</div>
														<span className="text-muted">20 Mar 2026, 11:00 AM, By User</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $10250
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															$9800
														</div>
														<span className="text-muted">15 Feb 2026, 3:30 PM, By Admin</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-3">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Price : $8956
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															$7500
														</div>
														<span className="text-muted">17 Jan 2026, 6:32 AM, By Admin</span>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-0">
											<div className="card-body">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2">
														<i className="ti ti-refresh-dot fs-24"></i>
													</span>
													<div>
														<div className="text-dark fw-medium mb-1 d-flex align-items-center">
															Updated Category : Server
															<i className="ti ti-arrow-right fs-16 mx-1"></i>
															Hardware
														</div>
														<span className="text-muted">12 Jan 2026, 4:45 PM, By Admin</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* /Activities */}

							{/* Notes */}
							<div className="tab-pane fade" id="tab_2" role="tabpanel" aria-labelledby="tab_2">
								<div className="card">
									<div className="card-body">
										<div className="border-bottom mb-3 pb-3">
											<h5 className="fw-bold mb-0">Notes</h5>
										</div>
										<div className="card border mb-3">
											<div className="card-body d-flex align-items-center justify-content-between">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2"><i
															className="ti ti-file-settings fs-24"></i></span>
													<div>
														<div className="text-dark mb-1 d-flex align-items-center">Includes
															USB cable & 1-year warranty</div>
														<span>15 Feb 2026, 3:30 PM, By Admin</span>
													</div>
												</div>
												<div className="dropdown">
													<a href="product-details.html#"
														className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
														data-bs-toggle="dropdown" aria-expanded="false"><i
															className="ti ti-dots-vertical"></i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"
															data-bs-toggle="modal" data-bs-target="#edit_notes"><i
																className="ti ti-edit me-1"></i>Edit</a>
														<a className="dropdown-item" href="#"
															data-bs-toggle="modal" data-bs-target="#delete_note"><i
																className="ti ti-trash me-1"></i>Delete</a>
													</div>
												</div>
											</div>
										</div>
										<div className="card border mb-0">
											<div className="card-body d-flex align-items-center justify-content-between">
												<div className="d-flex flex-wrap row-gap-2">
													<span
														className="avatar avatar-lg bg-light p-0 flex-shrink-0 rounded-circle text-dark me-2"><i
															className="ti ti-file-settings fs-24"></i></span>
													<div>
														<div className="text-dark mb-1 d-flex align-items-center">Includes
															firewall & malware protection</div>
														<span>15 Feb 2026, 3:30 PM, By Admin</span>
													</div>
												</div>
												<div className="dropdown">
													<a href="product-details.html#"
														className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
														data-bs-toggle="dropdown" aria-expanded="false"><i
															className="ti ti-dots-vertical"></i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"
															data-bs-toggle="modal" data-bs-target="#edit_notes"><i
																className="ti ti-edit me-1"></i>Edit</a>
														<a className="dropdown-item" href="#"
															data-bs-toggle="modal" data-bs-target="#delete_note"><i
																className="ti ti-trash me-1"></i>Delete</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* /Notes */}

						</div>
						{/* /Tab Content */}

					</div>
					{/* /Contact Details */}

				</div>
				{/* Start Footer */}
        </div>
    );
};

export default ProductDetails;
