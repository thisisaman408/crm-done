import React from 'react';

const AudioCall = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from audio-call.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Audio Call</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="#">Applications</a></li>
								<li className="breadcrumb-item active" aria-current="page">Audio Call</li>
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
					</div>
				</div>
				{/* End Page Header */}

				{/* start row */}
				<div className="row">

					<div className="col-xxl-12">
						<div className="card card-max-height mb-0 shadow-none">
							<div className="card-header">
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center">
										<span className="avatar avatar-lg avatar-rounded me-2">
											<img src="assets/img/users/user-01.jpg" className="img-fluid rounded-circle"
												alt="img" />
										</span>
										<div>
											<h6 className="mb-1"><a href="audio-call.html#">Anthony Lewis</a></h6>
											<span className="fs-13 d-block">Online</span>
										</div>
									</div>
									<a href="audio-call.html#" className="avatar avatar-md rounded-circle bg-light text-dark">
										<i className="ti ti-user-plus fs-20"></i>
									</a>
								</div>
							</div> {/* end card-header */}
							<div
								className="card-body position-relative text-center d-flex flex-column justify-content-center">
								<div className="animation-ripple avatar avatar-xxxl d-flex mx-auto mb-3 rounded-circle">
									<img src="assets/img/users/user-01.jpg" className="img-fluid rounded-circle" alt="img" />
								</div>
								<h5>Anthony Lewis</h5>
								<p>00:24</p>
								<a href="audio-call.html#" className="avatar avatar-xl position-absolute end-0 bottom-0 m-3"><img
										src="assets/img/users/user-05.jpg" alt="Img" /></a>
							</div> {/* end card-body */}
							<div className="card-footer">
								<div className="d-flex align-items-center justify-content-center">
									<a href="audio-call.html#"
										className="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"><i
											className="ti ti-video fs-20"></i></a>
									<a href="audio-call.html#"
										className="btn btn-danger btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"><i
											className="ti ti-phone fs-20"></i></a>
									<a href="audio-call.html#"
										className="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center"><i
											className="ti ti-microphone fs-20"></i></a>
								</div>
							</div> {/* end card-footer */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default AudioCall;
