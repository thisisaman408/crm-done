import React from 'react';

const UiImages = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-images.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">Images</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="ui-images.html#">Base UI</a></li>
							<li className="breadcrumb-item active" aria-current="page">Images</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-12">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Images Shapes</h5>
							</div>
							<div className="card-body">

								<div className="row">
									<div className="col-xl-12">
										<p className="text-muted">Add classes to an <code>&lt;img&gt;</code> element to
											easily style images in any project.</p>

										<div className="row">
											<div className="col-sm-3">
												<img src="assets/img/media/img-01.jpg" alt="image"
													className="img-fluid rounded" width="200" />
												<p className="mb-0">
													<code>.rounded</code>
												</p>
											</div>

											<div className="col-sm-3">
												<img src="assets/img/profiles/avatar-03.jpg" alt="image"
													className="img-fluid rounded-circle" width="133" />
												<p className="mb-0">
													<code>.rounded-circle</code>
												</p>
											</div>

											<div className="col-sm-3">
												<img src="assets/img/media/img-02.jpg" alt="image"
													className="img-fluid img-thumbnail" width="200" />
												<p className="mb-0">
													<code>.img-thumbnail</code>
												</p>
											</div>

											<div className="col-sm-3">
												<img src="assets/img/profiles/avatar-02.jpg" alt="image"
													className="img-thumbnail rounded-pill" width="133" />
												<p className="mb-0">
													<code>.rounded-pill</code>
												</p>
											</div>

										</div>

									</div>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}

				<div className="row">

					<div className="col-xl-4">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Image Left Align</h5>
							</div>
							<div className="card-body">
								<img className="rounded float-start" src="assets/img/media/img-03.jpg" alt="..."
									width="200" />
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-4">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Image Center Align</h5>
							</div>
							<div className="card-body">
								<img className="rounded mx-auto d-block" src="assets/img/media/img-04.jpg" alt="..."
									width="200" />
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-4">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Image Right Align</h5>
							</div>
							<div className="card-body">
								<img className="rounded float-end" src="assets/img/media/img-05.jpg" alt="..." width="200" />
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Figures</h5>
							</div>
							<div className="card-body d-flex justify-content-between gap-2">
								<figure className="figure mb-0">
									<img className="bd-placeholder-img figure-img img-fluid rounded card-img"
										src="assets/img/media/img-2.jpg" alt="..." />
									<figcaption className="figure-caption">A caption for the above image.</figcaption>
								</figure>
								<figure className="figure mb-0 float-end">
									<img className="bd-placeholder-img figure-img img-fluid rounded card-img"
										src="assets/img/media/img-3.jpg" alt="..." />
									<figcaption className="figure-caption text-end">A caption for the above image.
									</figcaption>
								</figure>
							</div> {/* end card body */}
						</div> {/* end card */}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default UiImages;
