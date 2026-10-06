import React from 'react';

const BlogTags = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from blog-tags.html */}
            {/* Page Header */}
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">Blog Tags</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item"><a href="/index">Home</a></li>
								<li className="breadcrumb-item"><a href="#">Blogs</a></li>
								<li className="breadcrumb-item active" aria-current="page">Blog Tags</li>
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
											PDF</a>
									</li>
									<li>
										<a href="#" className="dropdown-item"><i
												className="ti ti-file-type-xls me-1"></i>Export as
											Excel </a>
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

				<div className="card border-0 rounded-0">
					<div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
						<div className="input-icon input-icon-start position-relative">
							<span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
							<input type="text" className="form-control" placeholder="Search" />
						</div>
						<a href="#" className="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#add_tags"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add Blog
							Tag</a>
					</div>
					<div className="card-body">

						{/* table header */}
						<div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
							<div className="d-flex align-items-center gap-2 flex-wrap">
								<div className="reportrange-picker reportrange d-flex align-items-center shadow">
									<i className="ti ti-calendar-due text-dark fs-14 me-1"></i><span
										className="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
								</div>
							</div>
							<div className="d-flex align-items-center gap-2 flex-wrap">
								<div className="dropdown">
									<a href="#" className="dropdown-toggle btn btn-outline-light shadow"
										data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
									<div className="dropdown-menu">
										<ul>
											<li>
												<a href="#" className="dropdown-item">Newest</a>
											</li>
											<li>
												<a href="#" className="dropdown-item">Oldest</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* table header */}

						{/* Contact Stage List */}
						<div className="table-responsive custom-table">
							<table className="table table-nowrap" id="tags_list">
								<thead className="table-light">
									<tr>
										<th className="no-sort">
											<div className="form-check form-check-md">
												<input className="form-check-input" type="checkbox" id="select-all" />
											</div>
										</th>
										<th>Tag Name</th>
										<th>Created Date</th>
										<th>Status</th>
										<th className="no-sort">Action</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
						<div className="row align-items-center">
							<div className="col-md-6">
								<div className="datatable-length"></div>
							</div>
							<div className="col-md-6">
								<div className="datatable-paginate"></div>
							</div>
						</div>

					</div>
				</div>
        </div>
    );
};

export default BlogTags;
