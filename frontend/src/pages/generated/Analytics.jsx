import React from 'react';

const Analytics = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from analytics.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-0">Analytics</h4>
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

				{/* start row */}
				<div className="row">

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Recently Created Contacts</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table dataTable table-nowrap mb-0" id="analytic-contact">
										<thead className="table-light">
											<tr>
												<th>Contact</th>
												<th>Phone</th>
												<th>Created At</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Won Deals Stage</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Marketing Pipeline
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Marketing Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Sales Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Email
												</a>
												<a href="#" className="dropdown-item">
													Chats
												</a>
												<a href="#" className="dropdown-item">
													Operational
												</a>
											</div>
										</div>
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="won-chart"></div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Recently Created Deals</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-nowrap custom-table mb-0" id="analytic-deal">
										<thead className="table-light">
											<tr>
												<th>Deal Name</th>
												<th>Stage</th>
												<th>Deal Value</th>
												<th>Probability</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Lost Leads Stage</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Marketing Pipeline
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Marketing Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Sales Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Email
												</a>
												<a href="#" className="dropdown-item">
													Chats
												</a>
												<a href="#" className="dropdown-item">
													Operational
												</a>
											</div>
										</div>
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="last-chart-2"></div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card ">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Leads By Stage</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Sales Pipeline
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Marketing Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Sales Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Email
												</a>
												<a href="#" className="dropdown-item">
													Chats
												</a>
												<a href="#" className="dropdown-item">
													Operational
												</a>
											</div>
										</div>
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="leads-chart"></div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Recently Added Companies</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-nowrap mb-0" id="analytic-company">
										<thead className="table-light">
											<tr>
												<th>Company Name</th>
												<th>Phone</th>
												<th>Created at</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Deals By Stage</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Sales Pipeline
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Marketing Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Sales Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Email
												</a>
												<a href="#" className="dropdown-item">
													Chats
												</a>
												<a href="#" className="dropdown-item">
													Operational
												</a>
											</div>
										</div>
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="deals-chart"></div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Activities</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="card">
									<div className="card-body p-3">

										{/* start row */}
										<div className="row align-items-center row-gap-2">

											<div className="col-sm-4">
												<div className="activity-name">
													<h6 className="fs-14 fw-medium mb-1">We scheduled a meeting</h6>
													<p className="fs-13 mb-1">25 sep 2025, 12:12 PM</p>
													<span className="badge bg-info">Meeting</span>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="d-flex align-items-center">
													<span className="avatar flex-shrink-0">
														<img src="assets/img/profiles/avatar-12.jpg"
															className="rounded-circle" alt="Img" />
													</span>
													<div className="ms-2">
														<h6 className="fs-14 fw-medium mb-1">Elizabeth Morgan</h6>
														<p className="fs-13 mb-0">Product Manager</p>
													</div>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="text-sm-end">
													<div className="dropdown">
														<a className="dropdown-toggle btn btn-sm btn-outline-light shadow"
															data-bs-toggle="dropdown" href="#">
															Inprogress
														</a>
														<div className="dropdown-menu dropdown-menu-end">
															<a href="#" className="dropdown-item">
																Completed
															</a>
															<a href="#" className="dropdown-item">
																Inprogress
															</a>
															<a href="#" className="dropdown-item">
																Cancelled
															</a>
														</div>
													</div>
												</div>
											</div> {/* end col */}

										</div>
										{/* end row */}

									</div> {/* end card body */}
								</div> {/* end card */}

								<div className="card">
									<div className="card-body p-3">

										{/* start row */}
										<div className="row align-items-center row-gap-2">

											<div className="col-sm-4">
												<div className="activity-name">
													<h6 className="fs-14 fw-medium mb-1">We scheduled a meeting</h6>
													<p className="fs-13 mb-1">28 sep 2025, 12:12 PM</p>
													<span className="badge bg-secondary">Email</span>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="d-flex align-items-center">
													<span className="avatar flex-shrink-0">
														<img src="assets/img/profiles/avatar-13.jpg"
															className="rounded-circle" alt="Img" />
													</span>
													<div className="ms-2">
														<h6 className="fs-14 fw-medium mb-1">Katherine Brooks</h6>
														<p className="fs-13 mb-0">Installer</p>
													</div>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="text-sm-end">
													<div className="dropdown">
														<a className="dropdown-toggle btn btn-sm btn-outline-light shadow"
															data-bs-toggle="dropdown" href="#">
															Inprogress
														</a>
														<div className="dropdown-menu dropdown-menu-end">
															<a href="#" className="dropdown-item">
																Completed
															</a>
															<a href="#" className="dropdown-item">
																Inprogress
															</a>
															<a href="#" className="dropdown-item">
																Cancelled
															</a>
														</div>
													</div>
												</div>
											</div> {/* end col */}

										</div>
										{/* end row */}

									</div> {/* end card body */}
								</div> {/* end card */}

								<div className="card">
									<div className="card-body p-3">

										{/* start row */}
										<div className="row align-items-center row-gap-2">

											<div className="col-sm-4">
												<div className="activity-name">
													<h6 className="fs-14 fw-medium mb-1">We scheduled a meeting</h6>
													<p className="fs-13 mb-1">25 jun 2025, 12:12 PM</p>
													<span className="badge bg-cyan">Task</span>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="d-flex align-items-center">
													<span className="avatar flex-shrink-0">
														<img src="assets/img/profiles/avatar-18.jpg"
															className="rounded-circle" alt="Img" />
													</span>
													<div className="ms-2">
														<h6 className="fs-14 fw-medium mb-1">Samantha Reed</h6>
														<p className="fs-13 mb-0">Human Resources</p>
													</div>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="text-sm-end">
													<div className="dropdown">
														<a className="dropdown-toggle btn btn-sm btn-outline-light shadow"
															data-bs-toggle="dropdown" href="#">
															Inprogress
														</a>
														<div className="dropdown-menu dropdown-menu-end">
															<a href="#" className="dropdown-item">
																Completed
															</a>
															<a href="#" className="dropdown-item">
																Inprogress
															</a>
															<a href="#" className="dropdown-item">
																Cancelled
															</a>
														</div>
													</div>
												</div>
											</div> {/* end col */}

										</div>
										{/* end row */}

									</div> {/* end card body */}
								</div> {/* end card */}

								<div className="card mb-0">
									<div className="card-body p-3">

										{/* start row */}
										<div className="row align-items-center row-gap-2">

											<div className="col-sm-4">
												<div className="activity-name">
													<h6 className="fs-14 fw-medium mb-1">We scheduled a meeting</h6>
													<p className="fs-13 mb-1">20 sep 2025, 12:00 PM</p>
													<span className="badge bg-teal">Calls</span>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="d-flex align-items-center">
													<span className="avatar flex-shrink-0">
														<img src="assets/img/profiles/avatar-20.jpg"
															className="rounded-circle" alt="Img" />
													</span>
													<div className="ms-2">
														<h6 className="fs-14 fw-medium mb-1">William Anderson</h6>
														<p className="fs-13 mb-0">Data Analytics</p>
													</div>
												</div>
											</div> {/* end col */}

											<div className="col-sm-4">
												<div className="text-sm-end">
													<div className="dropdown">
														<a className="dropdown-toggle btn btn-sm btn-outline-light shadow"
															data-bs-toggle="dropdown" href="#">
															Inprogress
														</a>
														<div className="dropdown-menu dropdown-menu-end">
															<a href="#" className="dropdown-item">
																Completed
															</a>
															<a href="#" className="dropdown-item">
																Inprogress
															</a>
															<a href="#" className="dropdown-item">
																Cancelled
															</a>
														</div>
													</div>
												</div>
											</div> {/* end col */}

										</div>
										{/* end row */}

									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Lost Leads Stage</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Marketing Pipeline
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Marketing Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Sales Pipeline
												</a>
												<a href="#" className="dropdown-item">
													Email
												</a>
												<a href="#" className="dropdown-item">
													Chats
												</a>
												<a href="#" className="dropdown-item">
													Operational
												</a>
											</div>
										</div>
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="last-chart"></div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card ">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Recently Created Leads</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-nowrap mb-0" id="analytic-lead">
										<thead className="table-light">
											<tr>
												<th>Lead Name</th>
												<th>Company Name</th>
												<th>Phone</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
									<h6 className="mb-0">Recently Created Campaign</h6>
									<div className="d-flex align-items-center flex-wrap gap-2">
										<div className="dropdown">
											<a className="dropdown-toggle btn btn-outline-white shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 3 Months
												</a>
												<a href="#" className="dropdown-item">
													Last 6 Months
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="overflow-x-auto">
									<div className="card w-min-content mb-3">
										<div className="card-body p-3">
											<div className="border-bottom mb-2 pb-2">
												<div className="d-flex align-items-center gap-3">
													<div className="w-25">
														<h6 className="fs-14 fw-medium mb-1">Distribution</h6>
														<p className="fs-13 mb-0">Public Relations</p>
													</div>
													<div className="w-auto">
														<div className="d-flex align-items-center gap-2">
															<div>
																<h6 className="fs-14 fw-semibold mb-1">40.5%</h6>
																<p className="fs-13 mb-0">Opened</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">20.5%</h6>
																<p className="fs-13 mb-0">Closed</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">30.5%</h6>
																<p className="fs-13 mb-0">Unsubscribe</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">70.5%</h6>
																<p className="fs-13 mb-0">Delivered</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">35.0%</h6>
																<p className="fs-13 mb-0">Conversation</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center justify-content-between">
												<div className="d-flex align-items-center gap-2">
													<span className="badge badge-pill bg-danger">Bounced</span>
													<p className="fs-13 mb-0">Due Date : 25 Sep 2025</p>
												</div>
												<div className="avatar-list-stacked avatar-group-sm">
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-14.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-15.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-16.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-17.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#"
														className="avatar avatar-rounded bg-light text-dark fs-10 fw-medium">+8</a>
												</div>
											</div>
										</div> {/* end card body */}
									</div> {/* end card */}

									<div className="card w-min-content mb-3">
										<div className="card-body p-3">
											<div className="border-bottom mb-2 pb-2">
												<div className="d-flex align-items-center gap-3">
													<div className="w-25">
														<h6 className="fs-14 fw-medium mb-1">Pricing</h6>
														<p className="fs-13 mb-0">Social Marketing</p>
													</div>
													<div className="w-auto">
														<div className="d-flex align-items-center gap-2">
															<div>
																<h6 className="fs-14 fw-semibold mb-1">70.5%</h6>
																<p className="fs-13 mb-0">Opened</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">90.5%</h6>
																<p className="fs-13 mb-0">Closed</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">20.5%</h6>
																<p className="fs-13 mb-0">Unsubscribe</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">90.5%</h6>
																<p className="fs-13 mb-0">Delivered</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">98.0%</h6>
																<p className="fs-13 mb-0">Conversation</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center justify-content-between">
												<div className="d-flex align-items-center gap-2">
													<span className="badge badge-pill bg-teal">Running</span>
													<p className="fs-13 mb-0">Due Date : 28 Sep 2025</p>
												</div>
												<div className="avatar-list-stacked avatar-group-sm">
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-11.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-12.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-13.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-14.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#"
														className="avatar avatar-rounded bg-light text-dark fs-10 fw-medium">+2</a>
												</div>
											</div>
										</div> {/* end card body */}
									</div> {/* end card */}

									<div className="card w-min-content mb-3">
										<div className="card-body p-3">
											<div className="border-bottom mb-2 pb-2">
												<div className="d-flex align-items-center gap-3">
													<div className="w-25">
														<h6 className="fs-14 fw-medium mb-1">Merchandising</h6>
														<p className="fs-13 mb-0">Content Marketing</p>
													</div>
													<div className="w-auto">
														<div className="d-flex align-items-center gap-2">
															<div>
																<h6 className="fs-14 fw-semibold mb-1">30.5%</h6>
																<p className="fs-13 mb-0">Opened</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">10.5%</h6>
																<p className="fs-13 mb-0">Closed</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">70.5%</h6>
																<p className="fs-13 mb-0">Unsubscribe</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">90.5%</h6>
																<p className="fs-13 mb-0">Delivered</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">45.0%</h6>
																<p className="fs-13 mb-0">Conversation</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center justify-content-between">
												<div className="d-flex align-items-center gap-2">
													<span className="badge badge-pill bg-cyan">Paused</span>
													<p className="fs-13 mb-0">Due Date : 14 Sep 2025</p>
												</div>
												<div className="avatar-list-stacked avatar-group-sm">
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-02.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-04.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-06.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-08.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#"
														className="avatar avatar-rounded bg-light text-dark fs-10 fw-medium">+4</a>
												</div>
											</div>
										</div> {/* end card body */}
									</div> {/* end card */}

									<div className="card w-min-content mb-0">
										<div className="card-body p-3">
											<div className="border-bottom mb-2 pb-2">
												<div className="d-flex align-items-center gap-3">
													<div className="w-25">
														<h6 className="fs-14 fw-medium mb-1">Repeat Customer</h6>
														<p className="fs-13 mb-0">Rebranding</p>
													</div>
													<div className="w-auto">
														<div className="d-flex align-items-center gap-2">
															<div>
																<h6 className="fs-14 fw-semibold mb-1">80.5%</h6>
																<p className="fs-13 mb-0">Opened</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">20.5%</h6>
																<p className="fs-13 mb-0">Closed</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">70.5%</h6>
																<p className="fs-13 mb-0">Unsubscribe</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">60.5%</h6>
																<p className="fs-13 mb-0">Delivered</p>
															</div>
															<div>
																<h6 className="fs-14 fw-semibold mb-1">75.0%</h6>
																<p className="fs-13 mb-0">Conversation</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center justify-content-between">
												<div className="d-flex align-items-center gap-2">
													<span className="badge badge-pill bg-danger">Bounced</span>
													<p className="fs-13 mb-0">Due Date : 25 Sep 2023</p>
												</div>
												<div className="avatar-list-stacked avatar-group-sm">
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-01.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-03.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-05.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#" className="avatar avatar-rounded"><img
															src="assets/img/profiles/avatar-07.jpg"
															className="border border-white" alt="img" /></a>
													<a href="analytics.html#"
														className="avatar avatar-rounded bg-light text-dark fs-10 fw-medium">+5</a>
												</div>
											</div>
										</div> {/* end card body */}
									</div> {/* end card */}

								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div>
				</div>
				{/* end row */}
        </div>
    );
};

export default Analytics;
