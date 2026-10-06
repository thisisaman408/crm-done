import React from 'react';

const SalesDashboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from sales-dashboard.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-0">Sales Dashboard</h4>
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

					<div className="col-xxl-8 col-xl-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
									<div>
										<h5 className="sub-title mb-1">Total Revenue</h5>
										<p className="mb-0">26 Jan 2026 - 26 Jan 2027</p>
									</div>
									<div className="avatar-group avatar-group-sm">
										<a href="sales-dashboard.html#"
											className="avatar avatar-rounded border bg-white p-1 d-inline-flex align-items-center justify-content-center">
											<img className="w-auto h-auto img-fluid" src="assets/img/company/company-09.svg"
												alt="img" />
										</a>
										<a href="sales-dashboard.html#"
											className="avatar avatar-rounded border bg-white p-1 d-inline-flex align-items-center justify-content-center">
											<img className="w-auto h-auto img-fluid" src="assets/img/company/company-10.svg"
												alt="img" />
										</a>
										<a href="sales-dashboard.html#"
											className="avatar avatar-rounded border bg-white p-1 d-inline-flex align-items-center justify-content-center">
											<img className="w-auto h-auto img-fluid" src="assets/img/company/company-01.svg"
												alt="img" />
										</a>
										<a href="sales-dashboard.html#"
											className="avatar avatar-rounded border bg-white p-1 d-inline-flex align-items-center justify-content-center">
											<img className="w-auto h-auto img-fluid" src="assets/img/company/company-02.svg"
												alt="img" />
										</a>
										<a href="sales-dashboard.html#"
											className="avatar avatar-rounded border bg-white p-1 d-inline-flex align-items-center justify-content-center">
											<img className="w-auto h-auto img-fluid" src="assets/img/company/company-11.svg"
												alt="img" />
										</a>
									</div>
								</div>
								<ul className="nav nav-tabs nav-border nav-solid-primary gap-2 justify-content-end mb-4"
									role="tablist">
									<li className="nav-item"><a className="nav-link active" href="sales-dashboard.html#weekly"
											data-bs-toggle="tab">Weekly</a></li>
									<li className="nav-item"><a className="nav-link" href="sales-dashboard.html#monthly"
											data-bs-toggle="tab">Monthly</a></li>
									<li className="nav-item"><a className="nav-link" href="sales-dashboard.html#yearly"
											data-bs-toggle="tab">Yearly</a></li>
								</ul>
								<div className="row g-4">
									<div className="col-md-6">
										<div className="bg-secondary rounded-4 rounded-end-5 d-flex">
											<div
												className="ps-3 d-flex align-items-center justify-content-center position-relative pe-2 z-1">
												<p className="fs-16 fw-medium text-white mb-0 z-2">MTD</p>
												<span className="arrow-icon d-block position-absolute"></span>
											</div>
											<div className="bg-light rounded-4 w-100 p-3">
												<p className="text-dark mb-2">Total MTD Revenue</p>
												<h3 className="mb-4">$18,50,800.00</h3>
												<div
													className="d-flex align-items-center justify-content-between gap-1 flex-wrap">
													<div className="d-flex align-items-center gap-1 flex-wrap">
														<span
															className="badge badge-pill rounded-pill border badge-soft-success border-0">+2.5%</span>
														<p className="mb-0">Month Till Date</p>
													</div>
													<div id="mtd-revenue"></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="bg-danger rounded-4 rounded-end-5 d-flex">
											<div
												className="ps-3 d-flex align-items-center justify-content-center position-relative pe-2 z-1">
												<p className="fs-16 fw-medium text-white mb-0">YTD</p>
												<span className="arrow-icon arrow-primary d-block position-absolute"></span>
											</div>
											<div className="bg-light rounded-4 w-100 p-3">
												<p className="text-dark mb-2">Total YTD Revenue</p>
												<h3 className="mb-4">$85,25,800.00</h3>
												<div
													className="d-flex align-items-center justify-content-between gap-1 flex-wrap">
													<div className="d-flex align-items-center gap-1 flex-wrap">
														<span
															className="badge badge-pill rounded-pill border badge-soft-danger border-0">-5.0%</span>
														<p className="mb-0">Year Till Date</p>
													</div>
													<div id="ytd-revenue"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xxl-4 col-xl-12 col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
									<div>
										<h3 className="sub-title mb-1">Conversion Rate</h3>
										<p className="mb-0">26 Jan 2026 - 26 Jan 2027</p>
									</div>
								</div>
								<div>
									<canvas id="storage-request" className="mx-auto w-full"></canvas>

								</div>
								<div className="d-flex align-items-center gap-1 flex-wrap">
									<h3 className="sub-title mb-0">55.6%</h3>
									<span
										className="badge badge-pill rounded-pill border badge-soft-success border-0">+2.5%</span>
									<p className="mb-0">Last Week</p>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-6 col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
									<div>
										<h2 className="sub-title mb-1">Deals Won Vs Lost</h2>
										<p className="mb-0">+15% vs last month</p>
									</div>
									<a href="sales-dashboard.html#" className="btn btn-sm btn-icon btn-outline-light"><i
											className="ti ti-refresh"></i></a>
								</div>
								<div className="d-flex alig-items-center flex-wrap flex-xl-nowrap flex-xl-row gap-2">
									<div className="w-100">
										<div className="border rounded p-3 d-flex align-items-center mb-3">
											<div
												className="avatar avatar-lg bg-secondary-subtle border border-secondary text-dark rounded me-3 flex-shrink-0">
												<i className="ti ti-tag fs-20"></i>
											</div>
											<div>
												<p className="text-dark fw-medium mb-1">Deals Won</p>
												<div className="d-flex align-items-center gap-1 flex-wrap">
													<h3 className="custom-title mb-0 me-1">68</h3>
													<p className="fs-12 mb-0"><span className="text-success">+2.5%</span> Last
														Week</p>
												</div>
											</div>
										</div>
										<div className="border rounded p-3 d-flex align-items-center">
											<div
												className="avatar avatar-lg bg-primary-subtle border border-primary text-dark rounded me-3 flex-shrink-0">
												<i className="ti ti-tag-off fs-20"></i>
											</div>
											<div>
												<p className="text-dark fw-medium mb-1">Deals Lost</p>
												<div className="d-flex align-items-center gap-1 flex-wrap">
													<h3 className="custom-title text-danger mb-0 me-1">16</h3>
													<p className="fs-12 mb-0"><span className="text-danger">-5.8%</span> Last
														Week</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div id="deals-won"></div>
									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-6 col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="mb-3">
									<h2 className="sub-title mb-0">Sales Pipeline Overview</h2>
								</div>
								<div className="d-flex align-items-center gap-1 flex-wrap mb-3">
									<h3 className="custom-title mb-0">$2,56,054.50</h3>
									<p className="fs-12 mb-0"><span className="text-success">+2.5%</span> Last Week</p>
								</div>
								<div className="progress progress-bg progress-2xl mb-2" role="progressbar"
									aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
									<div className="progress-bar bg-purple-subtle text-dark fw-medium text-start ps-4"
										style={{ width: '60%' }}>Probability - $50,000</div>
								</div>
								<div className="progress progress-bg progress-2xl mb-2" role="progressbar"
									aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
									<div className="progress-bar bg-success-subtle text-dark fw-medium text-start ps-4"
										style={{ width: '75%' }}>Proposal Sent - $56,054</div>
								</div>
								<div className="progress progress-bg progress-2xl mb-2" role="progressbar"
									aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
									<div className="progress-bar bg-warning-subtle text-dark fw-medium text-start ps-4"
										style={{ width: '40%' }}>Opportunity - $1,00,000</div>
								</div>
								<div className="progress progress-bg progress-2xl mb-0" role="progressbar"
									aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
									<div className="progress-bar bg-danger-subtle text-dark fw-medium text-start ps-4"
										style={{ width: '60%' }}>Total Deals - $1,00,000</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-6 col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
									<h2 className="sub-title mb-0">Recently Created Deals</h2>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											Weekly
										</a>
										<div className="dropdown-menu dropdown-menu-end">
											<a href="#" className="dropdown-item">
												Yearly
											</a>
											<a href="#" className="dropdown-item">
												Weekly
											</a>
											<a href="#" className="dropdown-item">
												Monthly
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="table-responsive custom-table">
								<table className="table border-start-0 dataTable table-nowrap" id="recent-deals">
									<thead className="table-light">
										<tr>
											<th>Deals</th>
											<th>Value</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-6 col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="mb-3">
									<h2 className="sub-title mb-0">Avg Deal Size</h2>
								</div>
								<div className="d-flex align-items-center gap-1 flex-wrap mb-3">
									<h3 className="custom-title mb-0">$1,56,054.50</h3>
									<p className="fs-12 mb-0"><span className="text-success">+2.5%</span> Last Week</p>
								</div>
								<div id="deal-size"></div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
									<h2 className="sub-title mb-0">Sales Growth</h2>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											Last Year
										</a>
										<div className="dropdown-menu dropdown-menu-end">
											<a href="#" className="dropdown-item">
												Last 30 Days
											</a>
											<a href="#" className="dropdown-item">
												Last 6 months
											</a>
											<a href="#" className="dropdown-item">
												Last Year
											</a>
										</div>
									</div>
								</div>
								<div id="deal-chart"></div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default SalesDashboard;
