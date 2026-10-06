import React from 'react';

const Packages = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from packages.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Packages<span className="badge badge-soft-primary ms-2">198</span></h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Packages</li>
							</ol>
						</nav>
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

				{/* card start */}
				<div className="card border-0 rounded-0">
					<div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
						<div className="input-icon input-icon-start position-relative">
							<span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
							<input type="text" className="form-control" placeholder="Search" />
						</div>
						<a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
							data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New
							Plan</a>
					</div>
					<div className="card-body">

						{/* table header */}
						<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
							<div className="d-flex align-items-center gap-2 flex-wrap">
								<div className="dropdown">
									<a href="#" className="btn btn-outline-light shadow px-2"
										data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
											className="ti ti-filter me-2"></i>Filter<i
											className="ti ti-chevron-down ms-2"></i></a>
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
														<a href="packages.html#" className="collapsed" data-bs-toggle="collapse"
															data-bs-target="#collapseThree" aria-expanded="false"
															aria-controls="collapseThree">Select Plan</a>
													</div>
													<div className="filter-set-contents accordion-collapse collapse"
														id="collapseThree" data-bs-parent="#accordionExample">
														<div
															className="filter-content-list bg-light rounded border p-2 shadow mt-2">
															<ul>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Basic
																	</label>
																</li>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Advanced
																	</label>
																</li>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Premium
																	</label>
																</li>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Enterprise
																	</label>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="filter-set-content">
													<div className="filter-set-content-head">
														<a href="packages.html#" className="collapsed" data-bs-toggle="collapse"
															data-bs-target="#country" aria-expanded="false"
															aria-controls="country">Plan Type</a>
													</div>
													<div className="filter-set-contents accordion-collapse collapse"
														id="country" data-bs-parent="#accordionExample">
														<div
															className="filter-content-list bg-light rounded border p-2 shadow mt-2">
															<ul className="mb-0">
																<li className="mb-1">
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Monthly
																	</label>
																</li>
																<li className="mb-1">
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Yearly
																	</label>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="filter-set-content">
													<div className="filter-set-content-head">
														<a href="packages.html#" className="collapsed" data-bs-toggle="collapse"
															data-bs-target="#Status" aria-expanded="false"
															aria-controls="Status">Status</a>
													</div>
													<div className="filter-set-contents accordion-collapse collapse"
														id="Status" data-bs-parent="#accordionExample">
														<div
															className="filter-content-list bg-light rounded border p-2 shadow mt-2">
															<ul>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Active
																	</label>
																</li>
																<li>
																	<label
																		className="dropdown-item px-2 d-flex align-items-center">
																		<input className="form-check-input m-0 me-1"
																			type="checkbox" />
																		Inactive
																	</label>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex align-items-center gap-2">
												<a href="#"
													className="btn btn-outline-light w-100">Reset</a>
												<a href="/packages" className="btn btn-primary w-100">Filter</a>
											</div>
										</div>
									</div>
								</div>
								<div id="reportrange" className="reportrange-picker d-flex align-items-center shadow">
									<i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
										className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
								</div>
							</div>
							<div className="d-flex align-items-center gap-2 flex-wrap">
								<div className="dropdown">
									<a href="#" className="dropdown-toggle btn btn-outline-light shadow"
										data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
									<div className="dropdown-menu">
										<ul>
											<li>
												<a href="#" className="dropdown-item">Recently Viewed</a>
											</li>
											<li>
												<a href="#" className="dropdown-item">Recently Added</a>
											</li>
											<li>
												<a href="#" className="dropdown-item">Ascending</a>
											</li>
											<li>
												<a href="#" className="dropdown-item">Descending</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="dropdown">
									<a href="#" className="btn bg-soft-indigo border-0"
										data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
											className="ti ti-columns-3 me-2"></i>Manage Columns</a>
									<div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
										<ul>
											<li className="gap-1 d-flex align-items-center mb-2">
												<i className="ti ti-columns me-1"></i>
												<div className="form-check form-switch w-100 ps-0">

													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<span>Subscriber</span>
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</li>
											<li className="gap-1 d-flex align-items-center mb-2">
												<i className="ti ti-columns me-1"></i>
												<div className="form-check form-switch w-100 ps-0">

													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<span>Plan</span>
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</li>
											<li className="gap-1 d-flex align-items-center mb-2">
												<i className="ti ti-columns me-1"></i>
												<div className="form-check form-switch w-100 ps-0">

													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<span>Payment</span>
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</li>
											<li className="gap-1 d-flex align-items-center mb-2">
												<i className="ti ti-columns me-1"></i>
												<div className="form-check form-switch w-100 ps-0">

													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<span>Tags</span>
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</li>
											<li className="gap-1 d-flex align-items-center mb-0">
												<i className="ti ti-columns me-1"></i>
												<div className="form-check form-switch w-100 ps-0">

													<label
														className="form-check-label d-flex align-items-center gap-2 w-100">
														<span>Status</span>
														<input className="form-check-input switchCheckDefault ms-auto"
															type="checkbox" role="switch" checked />
													</label>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* table header */}

						{/* Report List */}
						<div className="table-responsive custom-table">
							<table className="table table-nowrap">
								<thead className="table-light">
									<tr>
										<th className="no-sort">
											<div className="form-check form-check-md">
												<input className="form-check-input" type="checkbox" id="select-all-2" />
											</div>
										</th>
										<th className="no-sort"></th>
										<th>Plan Name</th>
										<th>Plan Type</th>
										<th>Total Subscribers</th>
										<th>Price</th>
										<th>Created Date</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select filled"><i
													className="ti ti-star-filled fs-16"></i></div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Basic</a></h6>
										</td>
										<td>Monthly</td>
										<td>56</td>
										<td>$50</td>
										<td>14 Jan 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Advanced</a></h6>
										</td>
										<td>Monthly</td>
										<td>99</td>
										<td>$200</td>
										<td>21 Jan 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Premium</a></h6>
										</td>
										<td>Monthly</td>
										<td>58</td>
										<td>$300</td>
										<td>10 Feb 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Enterprise</a></h6>
										</td>
										<td>Monthly</td>
										<td>67</td>
										<td>$400</td>
										<td>18 Feb 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Basic</a></h6>
										</td>
										<td>Yearly</td>
										<td>78</td>
										<td>$600</td>
										<td>15 Mar 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Advanced</a></h6>
										</td>
										<td>Yearly</td>
										<td>99</td>
										<td>$2400</td>
										<td>26 Mar 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Premium</a></h6>
										</td>
										<td>Yearly</td>
										<td>48</td>
										<td>$3600</td>
										<td>05 Apr 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div className="form-check form-check-md"><input className="form-check-input"
													type="checkbox" /></div>
										</td>
										<td>
											<div className="set-star rating-select"><i className="ti ti-star-filled fs-16"></i>
											</div>
										</td>
										<td>
											<h6 className="fs-14 fw-normal"><a href="packages.html#">Enterprise</a></h6>
										</td>
										<td>Yearly</td>
										<td>17</td>
										<td>$4800</td>
										<td>16 Apr 2024</td>
										<td>
											<span className="badge bg-success">Active</span>
										</td>
										<td>
											<div className="dropdown table-action">
												<a href="packages.html#"
													className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
													data-bs-toggle="dropdown" aria-expanded="false">
													<i className="ti ti-dots-vertical"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="offcanvas"
														data-bs-target="#offcanvas_edit">
														<i className="ti ti-edit text-blue me-1"></i>Edit
													</a>
													<a className="dropdown-item" href="packages.html#" data-bs-toggle="modal"
														data-bs-target="#delete_packages">
														<i className="ti ti-trash text-blue me-1"></i>Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="row align-items-center">
							<div className="col-md-6">
								<div className="datatable-length"></div>
							</div>
							<div className="col-md-6">
								<div className="datatable-paginate"></div>
							</div>
						</div>
						{/* /Contact List */}

					</div>
				</div>
				{/* card end */}
        </div>
    );
};

export default Packages;
