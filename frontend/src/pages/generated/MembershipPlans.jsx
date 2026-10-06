import React from 'react';

const MembershipPlans = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from membership-plans.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Membership Plans<span className="badge badge-soft-primary ms-2">152</span></h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Membership plans</li>
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
											PDF
										</a>
									</li>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-xls me-1"></i>Export as
											Excel
										</a>
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
							data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add
							Membership</a>
					</div>
					<div className="card-body pb-0">

						<div className="d-block">
							<div className="d-flex align-items-center justify-content-center mb-4">
								<p className="text-dark mb-0">Yearly</p>
								<div className="form-check form-switch ms-2 me-1">
									<input className="form-check-input" type="checkbox" role="switch" checked />
								</div>
								<p className="text-dark mb-0">Monthly</p>
							</div>
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="text-center border-bottom pb-3 mb-3">
												<span>Basic</span>
												<h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
													$50 <span className="fs-14 fw-medium ms-1">/ month</span></h5>
											</div>
											<div className="d-block">
												<div>
													<p className="d-flex align-items-center fs-16 text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>10
														Contacts
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>10
														Leads
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>20
														Companies
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>50
														Compaigns
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>100
														Projects
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Deals</del>
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Tasks</del>
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Pipelines</del>
													</p>
												</div>
												<div className="text-center mt-3">
													<a href="membership-plans.html#" className="btn btn-primary w-100">Choose</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="text-center border-bottom pb-3 mb-3">
												<span>Business</span>
												<h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
													$200 <span className="fs-14 fw-medium ms-1">/ month</span></h5>
											</div>
											<div className="d-block">
												<div>
													<p className="d-flex align-items-center fs-16 text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>20
														Contacts
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>20
														Leads
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>50
														Companies
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Compaigns
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Projects
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Deals</del>
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Tasks</del>
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark">
														<span className="me-1"><i
																className="ti ti-xbox-x-filled text-body"></i></span><del>Pipelines</del>
													</p>
												</div>
												<div className="text-center mt-3">
													<a href="membership-plans.html#" className="btn btn-primary w-100">Choose</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="text-center border-bottom pb-3 mb-3">
												<span>Enterprise</span>
												<h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
													$400 <span className="fs-14 fw-medium ms-1">/ month</span></h5>
											</div>
											<div className="d-block">
												<div>
													<p className="d-flex align-items-center fs-16 text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Contacts
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Leads
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Companies
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Compaigns
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Unlimited
														Projects
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Deals
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Tasks
													</p>
													<p className="d-flex align-items-center fs-16 fw-medium text-dark">
														<span className="me-1"><i
																className="ti ti-circle-check-filled text-success"></i></span>Pipelines
													</p>
												</div>
												<div className="text-center mt-3">
													<a href="membership-plans.html#" className="btn btn-primary w-100">Choose</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				{/* card end */}
        </div>
    );
};

export default MembershipPlans;
