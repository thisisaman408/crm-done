import React, { useEffect, useState } from 'react';
import api from '../lib/api';

const Analytics = () => {
    const [recentContacts, setRecentContacts] = useState([]);
    const [recentActivities, setRecentActivities] = useState([]);

    useEffect(() => {
        if (window.initCharts) {
            window.initCharts();
        }

        // Fetch Real Analytics Data
        const fetchData = async () => {
            try {
                const [leadsRes, activitiesRes] = await Promise.all([
                    api.get('/api/leads'),
                    api.get('/api/activities')
                ]);
                
                const leads = leadsRes.data?.data || leadsRes.data || [];
                const acts = activitiesRes.data?.data || activitiesRes.data || [];
                
                // Sort by newest and take top 5
                setRecentContacts(leads.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
                setRecentActivities(acts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
                
                // --- Group data for charts ---
                const inPipeline = leads.filter(l => ['NEW', 'CONTACTED'].includes(l.status)).length || 0;
                const followUp = leads.filter(l => ['INTERESTED', 'NEGOTIATION'].includes(l.status)).length || 0;
                const schedule = leads.filter(l => l.status === 'SITE_VISIT').length || 0;
                const won = leads.filter(l => l.status === 'BOOKING' || l.status === 'CLOSED').length || 0;
                const lost = leads.filter(l => ['LOST', 'NOT_INTERESTED'].includes(l.status)).length || 0;
                const conversation = acts.length || 0;

                // --- Destroy old charts if they exist ---
                setTimeout(() => {
                    window._charts = window._charts || {};
                    const initOrUpdateChart = (id, options) => {
                        const el = document.querySelector('#' + id);
                        if(!el) return;
                        if(window._charts[id]) {
                            window._charts[id].destroy();
                        }
                        // Clear the innerHTML to remove the mock chart SVG injected by initCharts
                        el.innerHTML = '';
                        if(window.ApexCharts) {
                            const chart = new window.ApexCharts(el, options);
                            chart.render();
                            window._charts[id] = chart;
                        }
                    };

                    // --- 1. Won Deals Stage (#won-chart) ---
                    initOrUpdateChart('won-chart', {
                        series: [{ data: [conversation, followUp, inPipeline] }],
                        chart: { type: 'bar', height: 180, toolbar: { show: false } },
                        plotOptions: { bar: { horizontal: true } },
                        dataLabels: { enabled: false },
                        colors: ['#27AE60'],
                        grid: { borderColor: '#E8E8E8', strokeDashArray: 4 },
                        xaxis: { categories: ['Conversation', 'Follow Up', 'Inpipeline'] }
                    });

                    // --- 2. Deals By Stage (#deals-chart) ---
                    initOrUpdateChart('deals-chart', {
                        series: [{ name: 'Deals', data: [inPipeline, followUp, schedule, conversation, won, lost] }],
                        chart: { type: 'bar', height: 350, toolbar: { show: false } },
                        plotOptions: { bar: { columnWidth: '50%' } },
                        dataLabels: { enabled: false },
                        colors: ['#13B28A'],
                        xaxis: { categories: ['Inpipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'] }
                    });

                    // --- 3. Last Chart 2 (#last-chart-2) ---
                    initOrUpdateChart('last-chart-2', {
                        series: [{ data: [conversation, followUp, inPipeline] }],
                        chart: { type: 'bar', height: 150, toolbar: { show: false } },
                        plotOptions: { bar: { horizontal: true } },
                        dataLabels: { enabled: false },
                        colors: ['#FC0027'],
                        xaxis: { categories: ['Conversation', 'Follow Up', 'Inpipeline'] }
                    });

                    // --- 4. Leads Chart (#leads-chart) ---
                    initOrUpdateChart('leads-chart', {
                        series: [{ name: 'sales', data: [{ x: 'Inpipeline', y: inPipeline }, { x: 'Follow Up', y: followUp }, { x: 'Schedule', y: schedule }, { x: 'Conversation', y: conversation }, { x: 'Won', y: won }, { x: 'Lost', y: lost }] }],
                        chart: { type: 'bar', height: 310, toolbar: { show: false } },
                        plotOptions: { bar: { columnWidth: '30%', borderRadiusApplication: 'around' } },
                        dataLabels: { enabled: false },
                        colors: ['#00918E'],
                        grid: { borderColor: '#E8E8E8', strokeDashArray: 4, padding: { right: -20 } },
                        yaxis: { labels: { offsetX: -13 } }
                    });

                    // --- 5. Last Chart (#last-chart) ---
                    initOrUpdateChart('last-chart', {
                        series: [{ data: [conversation, followUp, inPipeline] }],
                        chart: { type: 'bar', height: 150, toolbar: { show: false } },
                        plotOptions: { bar: { horizontal: true } },
                        dataLabels: { enabled: false },
                        colors: ['#FC0027'],
                        xaxis: { categories: ['Conversation', 'Follow Up', 'Inpipeline'] }
                    });
                }, 200);

            } catch (err) {
                console.error("Failed to fetch analytics data", err);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            {/* Page Content */}
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
									<table className="table table-nowrap mb-0" id="analytic-contact">
<thead className="table-light">
    <tr>
        <th>Contact</th>
        <th>Phone</th>
        <th>Created At</th>
    </tr>
</thead>
<tbody>
    {recentContacts.map((contact, idx) => (
        <tr key={contact.id || idx}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-2">
                        {(contact.name?.[0] || 'U').toUpperCase()}
                    </div>
                    <h6 className="mb-0">{contact.name}</h6>
                </div>
            </td>
            <td>{contact.phone || 'N/A'}</td>
            <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
        </tr>
    ))}
    {recentContacts.length === 0 && <tr><td colSpan="3" className="text-center">No recent contacts found.</td></tr>}
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
        </>
    );
};

export default Analytics;
