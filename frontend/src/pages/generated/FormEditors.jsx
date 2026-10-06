import React from 'react';

const FormEditors = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from form-editors.html */}
            {/* Page Header */}
				<div className="mb-4">
					<h4 className="mb-1">Editors</h4>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb mb-0 p-0">
							<li className="breadcrumb-item"><a href="/index">Home</a></li>
							<li className="breadcrumb-item"><a href="form-editors.html#">Forms</a></li>
							<li className="breadcrumb-item active" aria-current="page">Editors</li>
						</ol>
					</nav>
				</div>
				{/* End Page Header */}


				<div className="card">
					<div className="card-header">
						<h5 className="card-title">Quill Editor</h5>
					</div>

					<div className="card-body">
						<p className="text-muted">Snow is a clean, flat toolbar theme.</p>

						<div id="snow-editor" style={{ height: '300px' }}>
							<h3><span className="ql-size-large">Hello World!</span></h3>
							<p><br /></p>
							<h3>This is an simple editable area.</h3>
							<p><br /></p>
							<ul>
								<li>
									Select a text to reveal the toolbar.
								</li>
								<li>
									Edit rich document on-the-fly, so elastic!
								</li>
							</ul>
							<p><br /></p>
							<p>
								End of simple area
							</p>
						</div>{/* end snow editor*/}
					</div> {/* end card body */}
				</div> {/* end card */}

				<div className="card">
					<div className="card-header">
						<h5 className="card-title">Quill Bubble Editor</h5>
					</div>
					<div className="card-body">
						<p className="text-muted">Bubble is a simple tooltip based theme.</p>

						<div id="bubble-editor" style={{ height: '300px' }}>
							<h3><span className="ql-size-large">Hello World!</span></h3>
							<p><br /></p>
							<h3>This is an simple editable area.</h3>
							<p><br /></p>
							<ul>
								<li>
									Select a text to reveal the toolbar.
								</li>
								<li>
									Edit rich document on-the-fly, so elastic!
								</li>
							</ul>
							<p><br /></p>
							<p>
								End of simple area
							</p>
						</div> {/* end snow editor*/}
					</div> {/* end card body */}
				</div> {/* end card */}
        </div>
    );
};

export default FormEditors;
