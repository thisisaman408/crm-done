import React from 'react';

const UiLightbox = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-lightbox.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">Lightbox</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="ui-lightbox.html#">Advanced UI</a></li>
							<li className="breadcrumb-item active" aria-current="page">Lightbox</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}

				{/* start row */}
				<div className="row">

					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Single Image Lightbox</h5>
							</div>
							<div className="card-body pb-1">

								{/* start row */}
								<div className="row">

									<div className="col-md-4 mb-3">
										<a href="assets/img/media/img-01.jpg" className="image-popup">
											<img src="assets/img/media/img-01.jpg" className="img-fluid" alt="image" />
										</a>
									</div> {/* end col */}

									<div className="col-md-4 mb-3">
										<a href="assets/img/media/img-02.jpg" className="image-popup">
											<img src="assets/img/media/img-02.jpg" className="img-fluid" alt="image" />
										</a>
									</div> {/* end col */}

								</div>
								{/* end row */}

							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Image with Description</h5>
							</div>
							<div className="card-body pb-1">

								{/* start row */}
								<div className="row">

									<div className="col-md-4 mb-3">
										<a href="assets/img/media/img-03.jpg" className="image-popup-desc"
											data-title="Title 01"
											data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
											<img src="assets/img/media/img-03.jpg" className="img-fluid"
												alt="work-thumbnail" />
										</a>
									</div> {/* end col */}

									<div className="col-md-4 mb-3">
										<a href="assets/img/media/img-04.jpg" className="image-popup-desc"
											data-title="Title 02"
											data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
											<img src="assets/img/media/img-04.jpg" className="img-fluid"
												alt="work-thumbnail" />
										</a>
									</div> {/* end col */}

									<div className="col-md-4 mb-3">
										<a href="assets/img/media/img-05.jpg" className="image-popup-desc"
											data-title="Title 03"
											data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit">
											<img src="assets/img/media/img-05.jpg" className="img-fluid"
												alt="work-thumbnail" />
										</a>
									</div> {/* end col */}

								</div>
								{/* end row */}

							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default UiLightbox;
