import React from 'react';

const RevenueSummaryDashboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from revenue-summary-dashboard.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-0">Revenue Summary</h4>
					</div>
					<div className="gap-2 d-flex align-items-center flex-wrap">
						<div className="dropdown">
							<a href="#" className="dropdown-toggle btn btn-outline-light px-2 shadow"
								data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
							<div className="dropdown-menu  dropdown-menu-end">
								<ul>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-pdf me-1"></i>Export as
											PDF</a>
									</li>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-xls me-1"></i>Export as
											Excel </a>
									</li>
								</ul>
							</div>
						</div>
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

				{/* start row */}
				<div className="row">

					<div className="col-xxl-7 d-flex">

						<div className="row">
							<div className="col-md-12 d-flex">

								<div className="card flex-fill">
									<div className="card-body">
										<div
											className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
											<h5 className="mb-0 fs-18 fw-bold d-inline-flex items-center">Overview
												Statistics</h5>
											<a href="revenue-summary-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
													className="ti ti-arrow-right"></i></a>
										</div>
										<div className="border rounded">
											<div className="row g-4">

												<div className="col-md-4 d-flex pe-md-0">
													<div className="p-3 card-hover text-center mb-0 flex-fill border-end">
														<div
															className="avatar avatar-md bg-primary-gradient-100 fs-16 mb-2">
															<i className="ti ti-currency-dollar fs-22"></i>
														</div>
														<p className="mb-1">Total Revenue</p>
														<h5 className="mb-3">$2.45M</h5>
														<div
															className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
															<span
																className="d-inline-flex align-items-center badge rounded-pill badge-soft-success border-0">+2.5%</span>
															<p className="text-dark mb-0">vs Last Period</p>
														</div>
													</div>
												</div> {/* end col*/}

												<div className="col-md-4 d-flex px-md-0">
													<div className="p-3 card-hover text-center mb-0 flex-fill border-end">
														<div className="avatar avatar-md bg-secondary fs-16 mb-2">
															<i className="ti ti-antenna-bars-5 fs-22"></i>
														</div>
														<p className="mb-1">Revenue Growth</p>
														<h5 className="mb-3">18.2%</h5>
														<div
															className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
															<span
																className="d-inline-flex align-items-center badge rounded-pill badge-soft-success border-0">+3.4%</span>
															<p className="text-dark mb-0">QoQ Improved</p>
														</div>
													</div>
												</div> {/* end col*/}

												<div className="col-md-4 d-flex ps-md-0">
													<div className="p-3 card-hover text-center mb-0 flex-fill">
														<div className="avatar avatar-md bg-info fs-16 mb-2">
															<i className="ti ti-box fs-22"></i>
														</div>
														<p className="mb-1">Annual Recurring</p>
														<h5 className="mb-3">$28.4M</h5>
														<div
															className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
															<span
																className="d-inline-flex align-items-center badge rounded-pill badge-soft-success border-0">+2.5%</span>
															<p className="text-dark mb-0">ARR Growth</p>
														</div>
													</div>
												</div> {/* end col*/}

											</div>

										</div>
									</div>
								</div> {/* end card */}

							</div> {/* end col */}



							<div className="col-md-12">

								<div className="row">
									<div className="col-md-5 d-flex">
										<div className="card flex-fill">
											<div className="card-body">
												<div
													className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
													<h5 className="mb-0">Deal Value</h5>
													<a href="revenue-summary-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
															className="ti ti-arrow-right"></i></a>
												</div>
												<div className="d-flex align-items-center justify-content-between mb-3">
													<div>
														<div className="mb-2">
															<p className="d-flex align-items-center mb-1"><i
																	className="ti ti-square-filled fs-8 text-purple-gradient me-1"></i>Avg
																Deal Value</p>
															<h5 className="main-title mb-0">$43.2K</h5>
														</div>
														<div className="mb-0">
															<p className="d-flex align-items-center mb-1"><i
																	className="ti ti-square-filled fs-8 text-danger-gradient me-1"></i>Previous
															</p>
															<h5 className="main-title mb-0">$39.8K</h5>
														</div>
													</div>
													<div id="deal-value-chart"></div>
												</div>
												<div className="d-flex align-items-center gap-2 flex-wrap">
													<span
														className="d-inline-flex align-items-center badge rounded-pill badge-soft-success border-0">+2.5%</span>
													<p className="text-dark mb-0">From Last Week</p>
												</div>
											</div>
										</div>
									</div> {/* end col */}

									<div className="col-md-7 d-flex">
										<div className="card flex-fill">
											<div className="card-body">
												<div
													className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-lg bg-cyan me-2">
															<i className="ti ti-file-text fs-24"></i>
														</div>
														<div>
															<p className="mb-1">Forecasted Revenue</p>
															<h4 className="mb-0">$8.45M</h4>
														</div>
													</div>
													<span
														className="d-inline-flex align-items-center badge badge-soft-success border border-success">+5.1%
														Growth</span>
												</div>
												<div id="forecasted-revenue"></div>
												<div
													className="d-flex align-items-center justify-content-between border p-2 rounded mt-3">
													<p
														className="fs-13 fw-medium text-success d-inline-flex align-items-center mb-0">
														<i className="ti ti-trending-up me-1"></i>+15.2%
													</p>
													<p className="d-inline-flex align-items-center mb-0">Forecast Increase<i
															className="ti ti-info-circle ms-2"></i></p>
												</div>
											</div>
										</div>
									</div> {/* end col */}

								</div>
							</div> {/* end col */}

						</div>
					</div> {/* end col */}

					<div className="col-xxl-5 d-flex flex-column">

						<div className="row flex-fill">
							<div className="col-md-12 d-flex">

								<div className="card flex-fill">
									<div className="card-body">
										<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
											<h5 className="mb-0">Revenue Breakdown</h5>
											<a href="revenue-summary-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
													className="ti ti-refresh"></i></a>
										</div>
										<div id="revenue-breakdown-chart"></div>
										<div className="border rounded">
											<div className="row">
												<div className="col-sm-6 pe-sm-0">
													<div className="p-3 border-end border-bottom bg-light">
														<p className="d-flex align-items-center mb-1"><i
																className="ti ti-circle-filled fs-8 text-purple-gradient me-1"></i>Enterprise
															Suite</p>
														<div
															className="d-flex align-items-center justify-content-between flex-wrap gap-2">
															<h5 className="main-title mb-0">40.9%</h5>
															<p
																className="fs-13 fw-medium text-success d-inline-flex align-items-center mb-0">
																<i className="ti ti-trending-up me-1"></i>+18.4%
															</p>
														</div>
													</div>
												</div> {/* end col */}


												<div className="col-sm-6 ps-sm-0">
													<div className="p-3 border-bottom bg-light">
														<p className="d-flex align-items-center mb-1"><i
																className="ti ti-circle-filled fs-8 text-danger-gradient me-1"></i>Professional
															Plan</p>
														<div
															className="d-flex align-items-center justify-content-between flex-wrap gap-2">
															<h5 className="main-title mb-0">30.4%</h5>
															<p
																className="fs-13 fw-medium text-success d-inline-flex align-items-center mb-0">
																<i className="ti ti-trending-up me-1"></i>+12.7%
															</p>
														</div>
													</div>
												</div> {/* end col */}


												<div className="col-sm-6 pe-sm-0">
													<div className="p-3 border-end bg-light">
														<p className="d-flex align-items-center mb-1"><i
																className="ti ti-circle-filled fs-8 text-warning-gradient me-1"></i>Starter
															Package</p>
														<div
															className="d-flex align-items-center justify-content-between flex-wrap gap-2">
															<h5 className="main-title mb-0">16.4%</h5>
															<p
																className="fs-13 fw-medium text-success d-inline-flex align-items-center mb-0">
																<i className="ti ti-trending-up me-1"></i>+8.9%
															</p>
														</div>
													</div>
												</div> {/* end col */}


												<div className="col-sm-6 ps-sm-0">
													<div className="p-3 bg-light">
														<p className="d-flex align-items-center mb-1"><i
																className="ti ti-circle-filled fs-8 text-info-gradient me-1"></i>Add-ons
															& Services</p>
														<div
															className="d-flex align-items-center justify-content-between flex-wrap gap-2">
															<h5 className="main-title mb-0">12.2%</h5>
															<p
																className="fs-13 fw-medium text-success d-inline-flex align-items-center mb-0">
																<i className="ti ti-trending-up me-1"></i>+22.1%
															</p>
														</div>
													</div>
												</div> {/* end col */}
											</div>
										</div>
									</div>
								</div> {/* end card */}

							</div>
						</div>
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header border-0 d-flex align-items-center justify-content-between">
								<div className="mb-0 fs-18 fw-bold text-dark d-flex align-items-center gap-2">Revenue
									Performance Trend <a href="revenue-summary-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
											className="ti ti-refresh"></i></a></div>
								<div className="dropdown">
									<a className="dropdown-toggle btn btn-outline-light shadow" data-bs-toggle="dropdown"
										href="#">
										2026
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a href="#" className="dropdown-item">
											2025
										</a>
										<a href="#" className="dropdown-item">
											2024
										</a>
										<a href="#" className="dropdown-item">
											2023
										</a>
									</div>
								</div>
							</div>
							<div className="card-body pt-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
									<span>Comparing actual revenue vs. forecast and prior year</span>
									<div className="d-flex align-items-center gap-2 flex-wrap">
										<span
											className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
												className="ti ti-circle-filled fs-8 text-info"></i> Actual Revenue</span>
										<span
											className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
												className="ti ti-circle-filled fs-8 text-success"></i> Forecasted</span>
										<span
											className="fw-medium border rounded text-gray-5 d-flex align-items-center px-2 gap-1"><i
												className="ti ti-circle-filled fs-8 text-danger"></i> Prior Year</span>
									</div>
								</div>
								<div id="revenue-performance-chart"></div>
								<div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mt-2">
									<p className="mb-0 d-flex"><span
											className="me-2 rounded-3 bg-danger p-1 pb-0 pe-0"></span>Avg. Monthly
										Revenue<span className="fs-16 fw-semibold text-dark ms-2">$608K</span></p>
									<p className="mb-0 d-flex"><span
											className="me-2 rounded-3 bg-info p-1 pb-0 pe-0"></span>Forecast Accuracy<span
											className="fs-16 fw-semibold text-dark ms-2">96.3%</span></p>
									<p className="mb-0 d-flex"><span
											className="me-2 rounded-3 bg-success p-1 pb-0 pe-0"></span>YoY Growth<span
											className="fs-16 fw-semibold text-dark ms-2">+24.8%</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* end row */}

				<div className="row">
					<div className="col-xl-6 d-flex">
						<div className="card flex-fill">
							<div className="card-header border-0 d-flex align-items-center justify-content-between">
								<div className="mb-0 fs-18 fw-bold text-dark">Revenue VS Expense</div>
								<div className="dropdown">
									<a className="dropdown-toggle btn btn-outline-light shadow" data-bs-toggle="dropdown"
										href="#">
										2026
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a href="#" className="dropdown-item">
											2025
										</a>
										<a href="#" className="dropdown-item">
											2024
										</a>
										<a href="#" className="dropdown-item">
											2023
										</a>
									</div>
								</div>
							</div>
							<div className="card-body pt-0">
								<div id="revenue_expense"></div>
								<span>Detailed revenue analysis by product segment</span>
							</div>
						</div>
					</div>
					<div className="col-xl-6 d-flex">
						<div className="card flex-fill">
							<div className="card-header border-0 d-flex align-items-center justify-content-between">
								<div className="mb-0 fs-18 fw-bold text-dark">Comparison</div>
								<div className="dropdown">
									<a className="dropdown-toggle btn btn-outline-light shadow" data-bs-toggle="dropdown"
										href="#">
										2026
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a href="#" className="dropdown-item">
											2025
										</a>
										<a href="#" className="dropdown-item">
											2024
										</a>
										<a href="#" className="dropdown-item">
											2023
										</a>
									</div>
								</div>
							</div>
							<div className="card-body pt-0">

								{/* Row 1 */}
								<div
									className="p-4 d-flex justify-content-between align-items-center deals-closed bg-purple-subtle">

									<div className="row w-100 g-1">
										<div className="col-6">
											<p className="mb-1 fs-14 text-dark">Deals Closed</p>
											<h2 className="fw-bold mb-0 fs-20">156</h2>
										</div>

										<div className="col-4">
											<p className="mb-1 fs-14 text-dark">Previous</p>
											<div className="fw-bold mb-0 fs-20 text-dark">152</div>
										</div>

										<div
											className="col-2 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
											<span className="badge rounded-pill bg-white text-dark py-2 fs-12">
												+3.3%
											</span>
										</div>
									</div>
								</div>

								{/* Row 2 */}
								<div
									className="p-4 d-flex justify-content-between align-items-center win-rate bg-info-subtle">

									<div className="row w-100 g-1">
										<div className="col-6">
											<p className="mb-1 fs-14 text-dark">Win Rate</p>
											<h2 className="fw-bold mb-0 fs-20">28.4%</h2>
										</div>

										<div className="col-4">
											<p className="mb-1 fs-14 text-dark">Previous</p>
											<div className="fw-bold mb-0 fs-20 text-dark">26.9%</div>
										</div>

										<div
											className="col-2 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
											<span className="badge rounded-pill bg-white text-dark py-2 fs-12">
												+5.6%
											</span>
										</div>
									</div>
								</div>

								{/* Row 3 */}
								<div
									className="p-4 d-flex justify-content-between align-items-center sales-cycle bg-warning-subtle">

									<div className="row w-100 g-1">
										<div className="col-6">
											<p className="mb-1 fs-14 text-dark">Sales Cycle (days)</p>
											<h2 className="fw-bold mb-0 fs-20">47</h2>
										</div>

										<div className="col-4">
											<p className="mb-1 fs-14 text-dark">Previous</p>
											<div className="fw-bold mb-0 fs-20 text-dark">42</div>
										</div>

										<div
											className="col-2 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
											<span className="badge rounded-pill bg-white text-dark py-2 fs-12">
												+10.6%
											</span>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>
        </div>
    );
};

export default RevenueSummaryDashboard;
