import React from 'react';

const LayoutHoverview = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from layout-hoverview.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-0">Deals Dashboard</h4>
					</div>
					<div className="gap-2 d-flex align-items-center flex-wrap">
						<div className="daterangepick form-control w-auto d-flex align-items-center">
							<i className="ti ti-calendar text-dark me-2"></i>
							<span className="reportrange-picker-field text-dark">23 May 2025 - 30 May 2025</span>
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

					<div className="col-md-6 d-flex">
						<div className="card flex-fill">
							<div
								className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
								<h6 className="mb-0">Recently Created Deals</h6>
								<div className="dropdown">
									<a className="dropdown-toggle btn btn-outline-light shadow" data-bs-toggle="dropdown"
										href="#">
										Last 30 days
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a href="#" className="dropdown-item">
											Last 15 days
										</a>
										<a href="#" className="dropdown-item">
											Last 30 days
										</a>
									</div>
								</div>
							</div>
							<div className="card-body">
								<div className="table-responsive custom-table">
									<table className="table dataTable table-nowrap" id="deals-project">
										<thead className="table-light">
											<tr>
												<th>Deal Name</th>
												<th>Stage</th>
												<th>Deal Value</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-md-6 d-flex">
						<div className="card flex-fill">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<h6 className="mb-0">Deals By Stage</h6>
									<div className="d-flex align-items-center flex-wrap row-gap-3">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-light shadow"
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
											<a className="dropdown-toggle btn btn-outline-light shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 15 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 7 Days
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
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-md-6 d-flex">
						<div className="card flex-fill">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<h6 className="mb-0">Lost Deals Stage</h6>
									<div className="d-flex align-items-center flex-wrap row-gap-3">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-light shadow"
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
											<a className="dropdown-toggle btn btn-outline-light shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 6 months
												</a>
												<a href="#" className="dropdown-item">
													Last 12 months
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
					</div> {/* end col */}

					<div className="col-md-6 d-flex">
						<div className="card flex-fill">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<h6 className="mb-0">Won Deals Stage</h6>
									<div className="d-flex align-items-center flex-wrap row-gap-3">
										<div className="dropdown me-2">
											<a className="dropdown-toggle btn btn-outline-light shadow"
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
											<a className="dropdown-toggle btn btn-outline-light shadow"
												data-bs-toggle="dropdown" href="#">
												Last 30 Days
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="#" className="dropdown-item">
													Last 30 Days
												</a>
												<a href="#" className="dropdown-item">
													Last 6 months
												</a>
												<a href="#" className="dropdown-item">
													Last 12 months
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
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-md-12 d-flex">
						<div className="card w-100">
							<div
								className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
								<h6 className="mb-0">Deals by Year</h6>
								<div className="d-flex align-items-center flex-wrap row-gap-3">
									<div className="dropdown me-2">
										<a className="dropdown-toggle btn btn-outline-light shadow"
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
										</div>
									</div>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											Last 30 Days
										</a>
										<div className="dropdown-menu dropdown-menu-end">
											<a href="#" className="dropdown-item">
												Last 3 months
											</a>
											<a href="#" className="dropdown-item">
												Last 6 months
											</a>
											<a href="#" className="dropdown-item">
												Last 12 months
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body py-0">
								<div id="deals-year"></div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default LayoutHoverview;
