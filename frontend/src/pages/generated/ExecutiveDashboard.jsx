import React, { useState, useEffect } from 'react';
import api from '../../lib/api';

const ExecutiveDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const res = await api.get('/api/dashboard/executive');
                setData(res.data);
            } catch (err) {
                console.error("Failed to fetch executive dashboard data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboard();
    }, []);

    useEffect(() => {
        if (!loading && window.initCharts) {
            setTimeout(() => {
                window.initCharts();
            }, 100);
        }
    }, [loading]);

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="content">
            {/* Dynamically Generated from executive-dashboard.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-0">Executive Dashboard</h4>
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

					<div className="col-xxl-8 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="row g-4">
									<div className="col-md-6 d-flex">
										<div className="card mb-0 flex-fill">
											<div className="card-body">
												<div className="d-flex align-items-center gap-2 mb-3">
													<div
														className="avatar bg-success-subtle text-success border border-success fs-24">
														<i className="ti ti-trending-up-3"></i>
													</div>
													<p className="mb-0 fs-13 fw-medium text-dark">Sales Revenue</p>
												</div>
												<div
													className="border rounded p-3 d-flex align-items-sm-center gap-2 justify-content-between flex-sm-row flex-column">
													<div>
														<h2 className="mb-2 text-success">${(data?.financial?.revenue || 0).toLocaleString()}</h2>
														<p className="fs-13 fw-medium mb-0"><span
																className="text-success">+12%</span> vs Last Year</p>
													</div>
													<i className="ti ti-arrow-big-up-filled text-success"></i>
													<div
														className="border-bottom px-1 pb-2 border-bottom-dashed border-top-0 border-start-0 border-end-0">
														<div id="sales-revenue"></div>
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col*/}

									<div className="col-md-6 d-flex">
										<div className="card mb-0 flex-fill">
											<div className="card-body">
												<div className="d-flex align-items-center gap-2 mb-3">
													<div
														className="avatar bg-purple-subtle text-purple border border-purple fs-24">
														<i className="ti ti-user-dollar"></i>
													</div>
													<p className="mb-0 fs-13 fw-medium text-dark">New Customers</p>
												</div>
												<div
													className="border rounded p-3 d-flex align-items-sm-center gap-2 justify-content-between flex-sm-row flex-column">
													<div>
														<h2 className="mb-2 text-purple">{data?.financial?.newCustomers || 0}</h2>
														<p className="fs-13 fw-medium mb-0"><span
																className="text-purple">+8.2%</span> vs Last Year</p>
													</div>
													<i className="ti ti-arrow-big-up-filled text-purple"></i>
													<div
														className="border-bottom px-1 pb-2 border-bottom-dashed border-top-0 border-start-0 border-end-0">
														<div id="customer-revenue"></div>
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col*/}

									<div className="col-md-6 d-flex">
										<div className="card mb-0 flex-fill">
											<div className="card-body">
												<div className="d-flex align-items-center gap-2 mb-3">
													<div
														className="avatar bg-secondary-subtle text-secondary border border-secondary fs-24">
														<i className="ti ti-target-arrow"></i>
													</div>
													<p className="mb-0 fs-13 fw-medium text-dark">Target Achievement</p>
												</div>
												<div
													className="border rounded p-3 d-flex align-items-sm-center gap-2 justify-content-between flex-sm-row flex-column">
													<div>
														<h2 className="mb-2 text-secondary">{data?.financial?.targetAchievement || 0}%</h2>
														<p className="fs-13 fw-medium mb-0"><span
																className="text-secondary">-1.2%</span> vs Last Year</p>
													</div>
													<i className="ti ti-arrow-big-down-filled text-secondary"></i>
													<div
														className="border-bottom px-1 pb-2 border-bottom-dashed border-top-0 border-start-0 border-end-0">
														<div id="target-revenue"></div>
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col*/}

									<div className="col-md-6 d-flex">
										<div className="card mb-0 flex-fill">
											<div className="card-body">
												<div className="d-flex align-items-center gap-2 mb-3">
													<div
														className="avatar bg-info-subtle text-info border border-info fs-18">
														<img src="assets/img/icons/profit.svg" alt="icon"
															className="img-fluid p-2" />
													</div>
													<p className="mb-0 fs-13 fw-medium text-dark">Profit</p>
												</div>
												<div
													className="border rounded p-3 d-flex align-items-sm-center gap-2 justify-content-between flex-sm-row flex-column">
													<div>
														<h2 className="mb-2 text-info">{data?.financial?.profitMargin || 0}%</h2>
														<p className="fs-13 fw-medium mb-0"><span
																className="text-info">+1.2%</span> vs Last Year</p>
													</div>
													<i className="ti ti-arrow-big-up-filled text-info"></i>
													<div
														className="border-bottom px-1 pb-2 border-bottom-dashed border-top-0 border-start-0 border-end-0">
														<div id="profit-revenue"></div>
													</div>
												</div>
											</div>
										</div>
									</div> {/* end col*/}

								</div>
							</div>
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xxl-4 d-flex flex-column">

						<div className="row flex-fill">
							<div className="col-md-12 d-flex">

								<div className="card flex-fill">
									<div className="card-body">
										<h2 className="card-subtitle mb-3">Activity Count</h2>
										<div
											className="d-flex align-items-center justify-content-between gap-3 border-bottom pb-2">
											<div className="d-flex align-items-center gap-2">
												<div className="circular-progress" data-progress="70" data-color="#27AE60">
													<span className="avatar avatar-rounded avatar-xss text-success"><i
															className="ti ti-phone-call fs-18"></i></span>
												</div>
												<p className="fs-13 fw-medium text-dark mb-0">Calls</p>
											</div>
											<div className="text-end">
												<p className="fs-16 fw-semibold text-dark mb-1">{data?.activities?.calls || 0}</p>
												<p className="fs-12 text-success mb-0">+12%</p>
											</div>
										</div>
										<div
											className="d-flex align-items-center justify-content-between gap-3 border-bottom py-2">
											<div className="d-flex align-items-center gap-2">
												<div className="circular-progress" data-progress="85" data-color="#800080">
													<span className="avatar avatar-rounded avatar-xss text-purple"><i
															className="ti ti-mail fs-18"></i></span>
												</div>
												<p className="fs-13 fw-medium text-dark mb-0">Emails</p>
											</div>
											<div className="text-end">
												<p className="fs-16 fw-semibold text-dark mb-1">{data?.activities?.emails || 0}</p>
												<p className="fs-12 text-purple mb-0">+22%</p>
											</div>
										</div>
										<div className="d-flex align-items-center justify-content-between gap-3 py-2 pb-0">
											<div className="d-flex align-items-center gap-2">
												<div className="circular-progress" data-progress="50" data-color="#2F80ED">
													<span className="avatar avatar-rounded avatar-xss text-info"><i
															className="ti ti-users fs-18"></i></span>
												</div>
												<p className="fs-13 fw-medium text-dark mb-0">Meetings</p>
											</div>
											<div className="text-end">
												<p className="fs-16 fw-semibold text-dark mb-1">{data?.activities?.meetings || 0}</p>
												<p className="fs-12 text-info mb-0">+15%</p>
											</div>
										</div>
									</div>
								</div> {/* end card */}

							</div>
							<div className="col-md-12 d-flex">

								<div className="card flex-fill">
									<div className="card-body">
										<h2 className="card-subtitle mb-3">Conversion Split</h2>
										<div className="row align-items-center justify-content-between g-4">
											<div className="col-sm-6">
												<div id="conversion-chart"></div>
											</div>
											<div className="col-sm-6">
												<div className="bg-light p-2 rounded mb-2">
													<p className="mb-0 text-dark fs-12 fw-medium"><i
															className="ti ti-circle-filled text-success-gradient me-2"></i>Converted
													</p>
												</div>
												<div className="bg-light p-2 rounded">
													<p className="mb-0 text-dark fs-12 fw-medium"><i
															className="ti ti-circle-filled text-purple-gradient me-2"></i>On
														Progress</p>
												</div>
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

					<div className="col-xl-6 d-flex ">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
									<h2 className="card-subtitle mb-0">Top Revenue per Salesperson</h2>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											Last 6 Months
										</a>
										<div className="dropdown-menu dropdown-menu-end">
											<a href="#" className="dropdown-item">
												Last Month
											</a>
											<a href="#" className="dropdown-item">
												Last 6 Months
											</a>
											<a href="#" className="dropdown-item">
												Last 3 Months
											</a>
										</div>
									</div>
								</div>
								<div id="salesperson-chart"></div>
							</div>
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-6 d-flex ">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
									<h2 className="card-subtitle mb-0">Top Deals Closed per User</h2>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											2025
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
								<div id="top-deals"></div>
							</div>
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-4 d-flex ">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="mb-3">
									<h2 className="card-subtitle mb-4">Pipeline</h2>
								</div>
								<div className="d-flex align-items-center gap-2 mb-4">
									<p className="fs-12 mb-0 mw-74">Prospecting</p>
									<div className="d-flex align-items-center w-100 gap-2">
										<div className="progress w-100 progress-animate bg-white progress-xxl"
											role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
											<div className="progress-bar bg-purple-gradient-100 rounded-pill"
												style={{ width: '100%' }}></div>
										</div>
										<p className="fs-12 fw-medium text-dark mb-0 flex-shrink-0">{data?.pipeline?.prospecting || 0} Deals</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-2 mb-4">
									<p className="fs-12 mb-0 mw-74">Qualification</p>
									<div className="d-flex align-items-center w-100 gap-2">
										<div className="progress w-100 progress-animate bg-white progress-xxl"
											role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
											<div className="progress-bar bg-purple-gradient-100 rounded-pill"
												style={{ width: '80%' }}></div>
										</div>
										<p className="fs-12 fw-medium text-dark mb-0 flex-shrink-0">{data?.pipeline?.qualification || 0} Deals</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-2 mb-4">
									<p className="fs-12 mb-0 mw-74">Proposal</p>
									<div className="d-flex align-items-center w-100 gap-2">
										<div className="progress w-100 progress-animate bg-white progress-xxl"
											role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
											<div className="progress-bar bg-purple-gradient-100 rounded-pill"
												style={{ width: '60%' }}></div>
										</div>
										<p className="fs-12 fw-medium text-dark mb-0 flex-shrink-0">{data?.pipeline?.proposal || 0} Deals</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-2 mb-4">
									<p className="fs-12 mb-0 mw-74">Negotiation</p>
									<div className="d-flex align-items-center w-100 gap-2">
										<div className="progress w-100 progress-animate bg-white progress-xxl"
											role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
											<div className="progress-bar bg-purple-gradient-100 rounded-pill"
												style={{ width: '40%' }}></div>
										</div>
										<p className="fs-12 fw-medium text-dark mb-0 flex-shrink-0">{data?.pipeline?.negotiation || 0} Deals</p>
									</div>
								</div>
								<div className="d-flex align-items-center gap-2 mb-4">
									<p className="fs-12 mb-0 mw-74">Closing</p>
									<div className="d-flex align-items-center w-100 gap-2">
										<div className="progress w-100 progress-animate bg-white progress-xxl"
											role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
											<div className="progress-bar bg-purple-gradient-100 rounded-pill"
												style={{ width: '30%' }}></div>
										</div>
										<p className="fs-12 fw-medium text-dark mb-0 flex-shrink-0">{data?.pipeline?.closing || 0} Deals</p>
									</div>
								</div>
								<p className="fs-12 d-flex align-items-center gap-2 mb-0"><span
										className="fs-12 fw-semibold text-purple">30%</span>The performance is 30% better
									compare to last week</p>
							</div>
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-8 d-flex ">
						<div className="card flex-fill">
							<div className="card-body pb-0">
								<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
									<h2 className="card-subtitle mb-0">Forecast Overview</h2>
									<div className="dropdown">
										<a className="dropdown-toggle btn btn-outline-light shadow"
											data-bs-toggle="dropdown" href="#">
											2025
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
								<div id="forecast-chart"></div>
							</div>
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-md-12 d-flex">
						<div className="card flex-fill">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
									<h2 className="card-subtitle mb-0">Executive Performance Overview</h2>
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
								<div className="table-responsive custom-table">
									<table className="table dataTable table-nowrap" id="executive-project">
										<thead className="table-light">
											<tr>
												<th>Executive Name</th>
												<th>Deal Closed</th>
												<th>Revenue Generated</th>
												<th>Conversion %</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											{data?.executives?.map((exec) => (
												<tr key={exec.id}>
													<td>
														<div className="d-flex align-items-center gap-2">
															<img src={exec.image || "assets/img/profiles/avatar-01.jpg"} alt={exec.name} className="avatar avatar-sm rounded-circle" />
															<h6 className="mb-0">{exec.name}</h6>
														</div>
													</td>
													<td>{exec.dealsClosed}</td>
													<td>${(exec.revenue || 0).toLocaleString()}</td>
													<td>{exec.conversion}</td>
													<td><span className={`badge badge-soft-${exec.status === 'Active' ? 'success' : 'warning'}`}>{exec.status}</span></td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default ExecutiveDashboard;
