import React from 'react';

const FormFileupload = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from form-fileupload.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">File Uploads</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="form-fileupload.html#">Forms</a></li>
							<li className="breadcrumb-item active" aria-current="page">File Uploads</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}

				<div className="card">
					<div className="card-header">
						<h5 className="card-title">Dropzone File Upload</h5>
					</div>
					<div className="card-body">
						<p className="text-muted">
							DropzoneJS is an open source library that provides drag’n’drop file uploads with image
							previews.
						</p>
						<form action="https://crms.dreamstechnologies.com/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone"
							data-previews-container="#file-previews"
							data-upload-preview-template="#uploadPreviewTemplate">
							<div className="fallback">
								<input name="file" type="file" multiple />
							</div>
							<div className="dz-message needsclick">
								<i className="ti ti-cloud-upload h1 text-muted"></i>
								<h3>Drop files here or click to upload.</h3>
								<span className="text-muted fs-13">(This is just a demo dropzone. Selected files are
									<strong>not</strong> actually uploaded.)</span>
							</div>
						</form>

						{/* Preview */}
						<div className="dropzone-previews" id="file-previews"></div>

					</div> {/* end card-body */}
				</div> {/* end card */}

				{/* file preview template */}
				<div className="d-none" id="uploadPreviewTemplate">
					<div className="card mt-2 mb-0 shadow-none border">
						<div className="p-2">
							<div className="row align-items-center">
								<div className="col-auto">
									<img data-dz-thumbnail src="form-fileupload.html#" className="avatar-sm rounded bg-light" alt="Img" />
								</div>
								<div className="col ps-0">
									<a href="#" className="text-muted fw-bold" data-dz-name></a>
									<p className="mb-0" data-dz-size></p>
								</div>
								<div className="col-auto">
									{/* Button */}
									<a href="#" className="btn btn-link btn-lg text-muted" data-dz-remove>
										<i className="ti ti-x"></i>
									</a>
								</div>
							</div>
						</div>
					</div> {/* end card */}
				</div>
        </div>
    );
};

export default FormFileupload;
