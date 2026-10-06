import React from 'react';

const DealsDashboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from deals-dashboard.html */}
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

                {/* Reports & Analytics */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2 flex-wrap">
                    <div>
                        <h6 className="mb-0">Reports &amp; Analytics</h6>
                        <p className="text-muted fs-12 mb-0">Live figures from the Reports module</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <a href="/scheduled-reports" className="btn btn-sm btn-outline-light shadow">
                            <i className="ti ti-clock-hour-4 me-1"></i>Scheduled Reports</a>
                        <a href="/report-builder" className="btn btn-sm btn-primary">
                            <i className="ti ti-tool me-1"></i>Create Report</a>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                                        <span className="ai-insight-icon bg-soft-primary text-primary">
                                            <i className="ti ti-chart-arrows-vertical"></i></span>
                                        <a href="/sales-forecasting" className="btn btn-sm btn-outline-light shadow">Forecast</a>
                                    </div>
                                    <div className="fs-12 text-muted">Sales Forecast</div>
                                    <div className="fs-20 fw-bold text-dark">$845K</div>
                                    <div className="fs-12 text-muted">91.8% of a $920K quota</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                                        <span className="ai-insight-icon bg-soft-info text-info">
                                            <i className="ti ti-rocket"></i></span>
                                        <a href="/sales-velocity" className="btn btn-sm btn-outline-light shadow">Velocity</a>
                                    </div>
                                    <div className="fs-12 text-muted">Sales Velocity</div>
                                    <div className="fs-20 fw-bold text-dark">$29,800</div>
                                    <div className="fs-12 text-muted">Revenue per day &middot; +16.1%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                                        <span className="ai-insight-icon bg-soft-success text-success">
                                            <i className="ti ti-trophy"></i></span>
                                        <a href="/win-loss-analysis" className="btn btn-sm btn-outline-light shadow">Win/Loss</a>
                                    </div>
                                    <div className="fs-12 text-muted">Win Rate</div>
                                    <div className="fs-20 fw-bold text-dark">60.1%</div>
                                    <div className="fs-12 text-muted">98 won of 163 closed deals</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="card flex-fill mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                                        <span className="ai-insight-icon bg-soft-warning text-warning">
                                            <i className="ti ti-chart-funnel"></i></span>
                                        <a href="/pipeline-stage-report" className="btn btn-sm btn-outline-light shadow">Pipeline</a>
                                    </div>
                                    <div className="fs-12 text-muted">Open Pipeline</div>
                                    <div className="fs-20 fw-bold text-dark">$1.84M</div>
                                    <div className="fs-12 text-muted">53 deals &middot; 2.0x coverage</div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body d-flex align-items-center gap-3">
                                <span className="ai-insight-icon bg-soft-primary text-primary flex-shrink-0">
                                    <i className="ti ti-coin"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <div className="fs-12 text-muted">Revenue this quarter</div>
                                    <div className="fs-18 fw-bold text-dark">$612K</div>
                                </div>
                                <a href="/revenue-report" className="btn btn-sm btn-outline-light shadow">Report</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body d-flex align-items-center gap-3">
                                <span className="ai-insight-icon bg-soft-warning text-warning flex-shrink-0">
                                    <i className="ti ti-target-arrow"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <div className="fs-12 text-muted">Leads this quarter</div>
                                    <div className="fs-18 fw-bold text-dark">128</div>
                                </div>
                                <a href="/lead-reports" className="btn btn-sm btn-outline-light shadow">Report</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex">
                        <div className="card flex-fill mb-0">
                            <div className="card-body d-flex align-items-center gap-3">
                                <span className="ai-insight-icon bg-soft-info text-info flex-shrink-0">
                                    <i className="ti ti-bolt"></i></span>
                                <div className="flex-grow-1 min-w-0">
                                    <div className="fs-12 text-muted">Activities logged</div>
                                    <div className="fs-18 fw-bold text-dark">1,204</div>
                                </div>
                                <a href="/user-activity-report"
                                    className="btn btn-sm btn-outline-light shadow">Report</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Reports & Analytics */}

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

export default DealsDashboard;
