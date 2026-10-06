import React from 'react';

const UiClipboard = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-clipboard.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">Clipboard</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="ui-clipboard.html#">Advanced UI</a></li>
							<li className="breadcrumb-item active" aria-current="page">Clipboard</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}

				{/* start row */}
				<div className="row">

					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Copy from input</h5>
							</div>
							<div className="card-body pb-3">
								<div className="clipboard">
									<form className="form-horizontal">
										<input type="text" className="form-control mb-3" id="input-copy"
											value="http://www.admin-dashboard.com" />
										<div className="d-flex align-items-center gap-1">
											<a className="btn clip-btn btn-primary" href="#"
												data-clipboard-action="copy" data-clipboard-target="#input-copy"><i
													className="far fa-copy me-1"></i> Copy from Input</a>
											<a className="btn clip-btn btn-dark" href="#"
												data-clipboard-action="cut" data-clipboard-target="#input-copy"><i
													className="fas fa-cut me-1"></i> Cut from Input</a>
										</div>
									</form>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Copy from Text Area</h5>
							</div>
							<div className="card-body pb-3">
								<div className="clipboard">
									<form className="form-horizontal">
										<textarea className="form-control mb-3" rows="3"
											id="textarea-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea>
										<div className="d-flex align-items-center gap-1">
											<a className="btn clip-btn btn-primary" href="#"
												data-clipboard-action="copy" data-clipboard-target="#textarea-copy"><i
													className="far fa-copy me-1"></i> Copy from Input</a>
											<a className="btn clip-btn btn-dark" href="#"
												data-clipboard-action="cut" data-clipboard-target="#textarea-copy"><i
													className="fas fa-cut me-1"></i> Cut from Input</a>
										</div>
									</form>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Copy Text from Paragraph</h5>
							</div>
							<div className="card-body pb-3">
								<div className="clipboard copy-txt">
									<p className="otp-pass">Here is your OTP <span id="paragraph-copy1">22991</span>.</p>
									<p className="mb-3">Please do not share it to anyone</p>
									<a className="btn clip-btn btn-primary" href="#"
										data-clipboard-action="copy" data-clipboard-target="#paragraph-copy1"><i
											className="far fa-copy me-1"></i> Copy from Input</a>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Copy Hidden Text (Advanced)</h5>
							</div>
							<div className="card-body pb-3">
								<div className="clipboard copy-txt">
									<p className="mb-3">Link -&gt; <span
											id="advanced-paragraph">http://www.example.com/example</span></p>
									<a className="mb-1 btn clip-btn btn-primary" href="#"
										data-clipboard-action="copy" data-clipboard-target="#advanced-paragraph"><i
											className="far fa-copy me-1"></i> Copy Link</a>
									<a className="mb-1 btn clip-btn btn-warning" href="#"
										data-clipboard-action="copy" data-clipboard-text="2291"><i
											className="far fa-copy me-1"></i> Copy Hidden Code</a>
								</div>
							</div> {/* end card body */}
						</div> {/* end card */}

					</div> {/* end col */}

				</div>
				{/* end row */}
        </div>
    );
};

export default UiClipboard;
