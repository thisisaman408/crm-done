import React from 'react';

const Calendar = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from calendar.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Calendar</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="#">Applications</a></li>
								<li className="breadcrumb-item active" aria-current="page">Calendar</li>
							</ol>
						</nav>
					</div>
					<div className="gap-2 d-flex align-items-center flex-wrap">
						<a href="#" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
							data-bs-original-title="Refresh"><i className="ti ti-refresh"></i></a>
						<a href="#" className="btn btn-icon btn-outline-light shadow"
							data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Collapse"
							data-bs-original-title="Collapse" id="collapse-header"><i
								className="ti ti-transition-top"></i></a>
						<a href="calendar.html#" data-bs-toggle="modal" data-bs-target="#add_event" className="btn btn-primary">
							<i className="ti ti-circle-plus me-1"></i>New Event
						</a>
					</div>
				</div>
				{/* End Page Header */}

				<div className="row">
					{/* Calendar Sidebar */}
					<div className="col-xxl-3 col-xl-4">
						<div className="card">
							<div className="card-body p-3">

								{/* Event */}
								<div className="border-bottom pb-4 mb-4">
									<div className="d-flex align-items-center justify-content-between mb-2">
										<h5>Event </h5>
										<a href="calendar.html#" className="link-primary" data-bs-toggle="modal"
											data-bs-target="#add_event"><i
												className="ti ti-square-rounded-plus-filled fs-16"></i></a>
									</div>
									<p className="fs-12 mb-2">Drag and drop your event or click in the calendar</p>
									<div id='external-events'>
										<div className="fc-event bg-soft-success rounded text-dark dark-text-white d-flex align-items-center mb-1"
											data-event='{ "title": "Team Events" }'
											data-event-classname="bg-transparent-success">
											<i className="ti ti-square-rounded text-success me-2"></i>Team Events
										</div>
										<div className="fc-event bg-soft-warning rounded text-dark dark-text-white d-flex align-items-center mb-1"
											data-event='{ "title": "Team Events" }'
											data-event-classname="bg-transparent-warning">
											<i className="ti ti-square-rounded text-warning me-2"></i>Work
										</div>
										<div className="fc-event bg-soft-danger rounded text-dark dark-text-white d-flex align-items-center mb-1"
											data-event='{ "title": "External" }'
											data-event-classname="bg-transparent-danger">
											<i className="ti ti-square-rounded text-danger me-2"></i>External
										</div>
										<div className="fc-event bg-soft-secondary rounded text-dark dark-text-white d-flex align-items-center mb-1"
											data-event='{ "title": "Projects" }'
											data-event-classname="bg-transparent-skyblue">
											<i className="ti ti-square-rounded text-secondary me-2"></i>Projects
										</div>
										<div className="fc-event bg-soft-primary rounded text-dark dark-text-white d-flex align-items-center mb-1"
											data-event='{ "title": "Applications" }'
											data-event-classname="bg-transparent-purple">
											<i className="ti ti-square-rounded text-primary me-2"></i>Applications
										</div>
										<div className="fc-event bg-soft-info rounded text-dark dark-text-white d-flex align-items-center mb-0"
											data-event='{ "title": "Desgin" }'
											data-event-classname="bg-transparent-info">
											<i className="ti ti-square-rounded text-info me-2"></i>Desgin
										</div>
									</div>
								</div>
								{/* /Event */}

								{/* Upcoming Event */}
								<div className="border-bottom pb-2 mb-4">
									<h5 className="mb-2">Upcoming Event<span
											className="badge badge-success rounded-pill ms-2">15</span></h5>
									<div className="border-start border-secondary border-3 mb-3">
										<div className="ps-3">
											<h6 className="fw-medium mb-1">Meeting with Team Dev</h6>
											<p className="fs-12"><i className="ti ti-calendar-check text-info me-2"></i>15 Mar
												2025</p>
										</div>
									</div>
									<div className="border-start border-danger border-3 mb-3">
										<div className="ps-3">
											<h6 className="fw-medium mb-1">Design System With Client</h6>
											<p className="fs-12"><i className="ti ti-calendar-check text-info me-2"></i>24 Mar
												2025</p>
										</div>
									</div>
									<div className="border-start border-success border-3 mb-3">
										<div className="ps-3">
											<h6 className="fw-medium mb-1">UI/UX Team Call</h6>
											<p className="fs-12"><i className="ti ti-calendar-check text-info me-2"></i>28 Mar
												2025</p>
										</div>
									</div>
								</div>
								{/* /Upcoming Event */}

								{/* Upgrade Details */}
								<div className="bg-dark rounded text-center position-relative p-4">
									<span className="avatar avatar-lg rounded-circle bg-white mb-2">
										<i className="ti ti-alert-triangle text-dark"></i>
									</span>
									<h6 className="dark-text-white mb-3">Enjoy Unlimited Access on a small price monthly.</h6>
									<a href="calendar.html#" className="btn bg-white">Upgrade Now <i className="ti ti-arrow-right"></i></a>
								</div>
								{/* /Upgrade Details */}

							</div>
						</div>

					</div>
					{/* /Calendar Sidebar */}
					<div className="col-xxl-9 col-xl-8">

						<div className="card mb-0">
							<div className="card-body">
								<div id="calendar"></div>
							</div>
						</div>

					</div>
				</div>
        </div>
    );
};

export default Calendar;
