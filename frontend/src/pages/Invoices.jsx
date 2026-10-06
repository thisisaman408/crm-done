import React from 'react';

const Invoices = () => {
    return (
<div className="content content-two">

				
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Invoices<span className="badge badge-soft-primary ms-2">125</span></h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Invoices</li>
							</ol>
						</nav>
					</div>
					<div className="gap-2 d-flex align-items-center flex-wrap">
						<div className="dropdown">
							<a href="javascript:void(0);" className="dropdown-toggle btn btn-outline-light px-2 shadow"
								data-bs-toggle="dropdown"><i className="ti ti-package-export me-2"></i>Export</a>
							<div className="dropdown-menu  dropdown-menu-end">
								<ul>
									<li>
										<a href="javascript:void(0);" className="dropdown-item"><i
												className="ti ti-file-type-pdf me-1"></i>Export as
											PDF</a>
									</li>
									<li>
										<a href="javascript:void(0);" className="dropdown-item"><i
												className="ti ti-file-type-xls me-1"></i>Export as
											Excel </a>
									</li>
								</ul>
							</div>
						</div>
						<a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
							data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
						<a href="javascript:void(0);" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
							data-bs-original-title="Collapse" id="collapse-header"><i
								className="ti ti-transition-top"></i></a>
					</div>
				</div>
				

				
				<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
					<div className="d-flex align-items-center gap-2 flex-wrap">
						<div className="dropdown">
							<a href="javascript:void(0);" className="btn btn-outline-light shadow px-2"
								data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
									className="ti ti-filter me-2"></i>Filter<i className="ti ti-chevron-down ms-2"></i></a>
							<div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg p-0">
								<div
									className="filter-header d-flex align-items-center justify-content-between border-bottom">
									<h4 className="mb-0 fs-16"><i className="ti ti-filter me-1"></i>Filter</h4>
									<button type="button" className="btn-close close-filter-btn"
										data-bs-dismiss="dropdown-menu" aria-label="Close"></button>
								</div>
								<div className="filter-set-view p-3">
									<div className="accordion" id="accordionExample">
										<div className="filter-set-content">
											<div className="filter-set-content-head">
												<a href="invoices.html#" className="collapsed" data-bs-toggle="collapse"
													data-bs-target="#collapseThree" aria-expanded="false"
													aria-controls="collapseThree">Client</a>
											</div>
											<div className="filter-set-contents accordion-collapse collapse"
												id="collapseThree" data-bs-parent="#accordionExample">
												<div
													className="filter-content-list bg-light rounded border p-2 shadow mt-2">
													<div className="mb-1">
														<div className="input-icon-start input-icon position-relative">
															<span className="input-icon-addon fs-12">
																<i className="ti ti-search"></i>
															</span>
															<input type="text" className="form-control form-control-md"
																placeholder="Search" />
														</div>
													</div>
													<ul>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																NovaWave LLC
															</label>
														</li>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																Redwood Inc
															</label>
														</li>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																Harborview
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="filter-set-content">
											<div className="filter-set-content-head">
												<a href="invoices.html#" className="collapsed" data-bs-toggle="collapse"
													data-bs-target="#owner" aria-expanded="false"
													aria-controls="owner">Project</a>
											</div>
											<div className="filter-set-contents accordion-collapse collapse" id="owner"
												data-bs-parent="#accordionExample">
												<div
													className="filter-content-list bg-light rounded border p-2 shadow mt-2">
													<div className="mb-1">
														<div className="input-icon-start input-icon position-relative">
															<span className="input-icon-addon fs-12">
																<i className="ti ti-search"></i>
															</span>
															<input type="text" className="form-control form-control-md"
																placeholder="Search" />
														</div>
													</div>
													<ul className="mb-0">
														<li className="mb-1">
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																Turelysell
															</label>
														</li>
														<li className="mb-1">
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																Dreamschat
															</label>
														</li>
														<li className="mb-1">
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																DreamGigs
															</label>
														</li>
														<li className="mb-0">
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																Servbook
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="filter-set-content">
											<div className="filter-set-content-head">
												<a href="invoices.html#" className="collapsed" data-bs-toggle="collapse"
													data-bs-target="#Status" aria-expanded="false"
													aria-controls="Status">Amount</a>
											</div>
											<div className="filter-set-contents accordion-collapse collapse" id="Status"
												data-bs-parent="#accordionExample">
												<div
													className="filter-content-list bg-light rounded border p-2 shadow mt-2">
													<ul>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																$2,15,000
															</label>
														</li>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																$1,45,000
															</label>
														</li>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																$2,12,000
															</label>
														</li>
														<li>
															<label className="dropdown-item px-2 d-flex align-items-center">
																<input className="form-check-input m-0 me-1"
																	type="checkbox" />
																$4,80,380
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center gap-2">
										<a href="javascript:void(0);" className="btn btn-outline-light w-100">Reset</a>
										<a href="invoices.html" className="btn btn-primary w-100">Filter</a>
									</div>
								</div>
							</div>
						</div>
						<div className="input-icon input-icon-start position-relative">
							<span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
							<input type="text" className="form-control" placeholder="Search" />
						</div>
					</div>
					<div className="d-flex align-items-center gap-2 flex-wrap">
						<div className="d-flex align-items-center shadow p-1 rounded border view-icons bg-white">
							<a href="invoice-list.html" className="btn btn-sm p-1 border-0 fs-14"><i
									className="ti ti-list-tree"></i></a>
							<a href="invoices.html" className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14 active"><i
									className="ti ti-grid-dots"></i></a>
						</div>
						<a href="javascript:void(0);" className="btn btn-primary" data-bs-toggle="offcanvas"
							data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New
							Invoice</a>
					</div>
				</div>
				

				
				<div className="row">
					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465781</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/truellysel.svg"
													className="w-auto h-auto rounded-0" alt="Truelysell" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Truelysell</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-secondary">Partially Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$2,15,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">22 Jun 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$2,15,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-01.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">BlueSky
												Industries</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465782</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/dreamchat.svg"
													className="w-auto h-auto rounded-0" alt="Truelysell" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Dreamschat</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-success">Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$1,45,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">20 May 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$1,45,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-02.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">NovaWave LLC</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465783</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/truellysell.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">DreamGigs</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-warning">Partially Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$2,15,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">30 Apr 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$1,00,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$1,15,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-03.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Silver Hawk</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465784</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/servbook.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Servbook</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-success">Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$4,80,380</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">21 Apr 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$4,80,380</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-04.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Summit Peak</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465785</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/dream-pos.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">DreamPOS</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-danger">Unpaid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$2,12,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">19 Mar 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$2,12,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-05.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">RiverStone
												Ltd</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465786</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/kofejob.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Kofejob</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-secondary">Partially Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$3,50,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">11 Mar 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$1,50,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$2,00,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-06.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Bright Bridge
												Grp</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465787</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/smarthr.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">SmartHR</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-info">Overdue</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$2,46,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">17 Feb 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$1,23,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$1,23,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-07.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">CoastalStar
												Co.</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465788</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/doccure.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Doccure</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-success">Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$3,12,500</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">07 Feb 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$3,12,500</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-09.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">HarborView</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465789</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/laundry.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Best@laundry</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-danger">Unpaid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$4,18,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">20 Jan 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$4,18,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-10.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Golden Gate
												Ltd</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465790</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/sports.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Dreamsports</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-success">Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$5,00,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">18 Jan 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$5,00,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$0</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-08.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Redwood Inc</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465791</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/gig.svg" className="w-auto h-auto rounded-0"
													alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">Dreamsgigs</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-secondary">Partially Paid</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$5,00,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">19 Jan 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$2,15,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$2,15,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-11.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">Acme Corp.</a>
										</h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xxl-3 col-xl-4 col-md-6">
						<div className="card border shadow">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
									<div className="users-profile">
										<span className="badge badge-soft-info">#1465787</span>
									</div>
									<div className="dropdown table-action">
										<a href="invoices.html#" className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
											data-bs-toggle="dropdown" aria-expanded="false">
											<i className="ti ti-dots-vertical"></i>
										</a>
										<div className="dropdown-menu dropdown-menu-right">
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit"><i
													className="ti ti-edit me-1"></i>Edit</a>
											<a className="dropdown-item d-inline-flex align-items-center" href="invoices.html#"
												data-bs-toggle="modal" data-bs-target="#delete_invoices"><i
													className="ti ti-trash me-1"></i>Delete</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="invoices-details.html"><i className="ti ti-clipboard-copy me-1"></i>
												View Invoices</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-checks me-1"></i> Mark as
												Paid</a>
											<a className="dropdown-item d-inline-flex align-items-center"
												href="javascript:void(0);"><i className="ti ti-file me-1"></i>Mark as
												Partially Paid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-sticker me-1"></i>Mark ad Unpaid</a>
											<a className="dropdown-item" href="javascript:void(0);"><i
													className="ti ti-printer me-1"></i> Print</a>
										</div>
									</div>
								</div>
								<div className="d-block">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="d-flex align-items-center">
											<a href="project-details.html"
												className="avatar avatar-rounded border flex-shrink-0 me-2">
												<img src="assets/img/priority/smarthr.svg"
													className="w-auto h-auto rounded-0" alt="img" />
											</a>
											<div>
												<h6 className="fs-14 fw-medium mb-0"><a
														href="project-details.html">SmartHR</a></h6>
											</div>
										</div>
										<div>
											<span className="badge bg-info">Overdue</span>
										</div>
									</div>
									<div className="mb-3">
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-report-money text-dark fs-16 me-1"></i>Total Value : <span
												className="text-dark ms-1">$2,46,000</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-event text-dark fs-16 me-1"></i>Due Date : <span
												className="text-dark ms-1">17 Feb 2025</span></p>
										<p className="text-default d-inline-flex align-items-center mb-1"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Paid Amount :
											<span className="text-dark ms-1">$1,23,000</span>
										</p>
										<p className="text-default d-inline-flex align-items-center mb-0"><i
												className="ti ti-calendar-stats text-dark fs-16 me-1"></i>Balance Amount :
											<span className="text-dark ms-1">$1,23,000</span>
										</p>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<a href="company-details.html" className="avatar avatar-rounded border me-2">
										<img src="assets/img/company/company-07.svg" className="w-auto h-auto rounded-0"
											alt="img" />
									</a>
									<div className="d-flex flex-column">
										<h6 className="fs-14 fw-medium mb-1"><a href="company-details.html">CoastalStar
												Co.</a></h6>
										<span className="d-block fs-13">Sent to</span>
									</div>
								</div>
							</div>
						</div>
					</div> 

				</div>
				

				<div className="load-btn text-center">
					<a href="javascript:void(0);" className="btn btn-primary"><i className="ti ti-loader me-1"></i> Load
						More</a>
				</div>

			</div>
    );
};

export default Invoices;
