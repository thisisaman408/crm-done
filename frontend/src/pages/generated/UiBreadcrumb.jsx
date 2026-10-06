import React from 'react';

const UiBreadcrumb = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-breadcrumb.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">Breadcrumb</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Base UI</a></li>
							<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Default Breadcrumb</h5>
							</div>
							<div className="card-body  py-2">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 py-2">
										<li className="breadcrumb-item active" aria-current="page">Home</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 py-2">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">Library</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 py-2">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Library</a></li>
										<li className="breadcrumb-item active" aria-current="page">Data</li>
									</ol>
								</nav>
							</div> {/* end card-body */}
						</div> {/* end card*/}
					</div> {/* end col */}

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Breadcrumb with Icons</h5>
							</div>
							<div className="card-body  py-2">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb py-2 mb-0">
										<li className="breadcrumb-item active" aria-current="page"><i
												className="ti ti-smart-home fs-16 me-1"></i>Home</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb py-2 mb-0">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#"><i
													className="ti ti-smart-home fs-16 me-1"></i>Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">Library</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb py-2 mb-0">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#"><i
													className="ti ti-smart-home fs-16 me-1"></i>Home</a></li>
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Library</a></li>
										<li className="breadcrumb-item active" aria-current="page">Data</li>
									</ol>
								</nav>
							</div> {/* end card-body */}
						</div> {/* end card*/}
					</div> {/* end col */}

				</div>
				{/* end row */}

				{/* start row */}
				<div className="row">

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Arrow Style</h5>
							</div>
							<div className="card-body py-2">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
										<li className="breadcrumb-item active" aria-current="page">Home</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">Library</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-arrow mb-0 py-2">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Library</a></li>
										<li className="breadcrumb-item active" aria-current="page">Data</li>
									</ol>
								</nav>
							</div> {/* end card-body */}
						</div> {/* end card*/}
					</div> {/* end col */}

					<div className="col-xl-6">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Pipe Style</h5>
							</div>
							<div className="card-body py-2">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
										<li className="breadcrumb-item active" aria-current="page">Home</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">Library</li>
									</ol>
								</nav>
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb breadcrumb-pipe py-2 mb-0">
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Home</a></li>
										<li className="breadcrumb-item"><a href="ui-breadcrumb.html#">Library</a></li>
										<li className="breadcrumb-item active" aria-current="page">Data</li>
									</ol>
								</nav>
							</div> {/* end card-body */}
						</div> {/* end card*/}
					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default UiBreadcrumb;
