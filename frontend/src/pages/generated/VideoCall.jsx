import React from 'react';

const VideoCall = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from video-call.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Video Call</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="#">Applications</a></li>
								<li className="breadcrumb-item active" aria-current="page">Video Call</li>
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
						<div className="single-video d-flex">
							<div className="join-video flex-fill position-relative">
								<img src="assets/img/social/video.jpg" className="img-fluid" alt="Logo" />
								<div className="chat-active-users">
									<div className="video-avatar position-absolute p-2 top-0 end-0">
										<img src="assets/img/users/user-01.jpg"
											className="img-fluid rounded border border-primary" alt="Logo" />
										<div className="position-absolute start-0 bottom-0 w-100 text-center py-2">
											<span
												className="bg-white text-dark d-inline-block fw-medium rounded p-1 my-2">Joe
												Lewis</span>
										</div>
									</div>
								</div>

								<div className="position-absolute start-0 top-0 p-2 z-1 d-flex align-items-center">
									<div className="me-2">
										<span
											className="bg-light-subtle rounded badge text-dark p-2 d-inline-flex align-items-center"><i
												className="ti ti-circle-filled me-1"></i>40:12</span>
									</div>
									<a href="#" className="btn p-0 avatar-sm btn-light btnFullscreen	">
										<i className="ti ti-maximize"></i>
									</a>
								</div>
								<div
									className="d-flex justify-content-center align-items-center flex-wrap w-100 position-absolute bottom-0 z-2 p-2">
									<div
										className="bg-light bg-opacity-50 px-3 py-2 rounded-pill d-flex justify-content-center align-items-center">
										<a href="#"
											className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"><i
												className="ti ti-microphone"></i></a>
										<a href="#"
											className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"><i
												className="ti ti-video"></i></a>
										<a href="#"
											className="btn btn-icon btn-lg text-white bg-danger d-flex justify-content-center align-items-center rounded"><i
												className="ti ti-phone"></i></a>
										<a href="#"
											className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded mx-2"><i
												className="ti ti-volume"></i></a>
										<a href="#"
											className="bg-light text-dark btn-icon btn-sm d-flex align-items-center justify-content-center rounded"><i
												className="ti ti-user-off"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>{/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default VideoCall;
