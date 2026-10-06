import React from 'react';

const EditBlog = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from edit-blog.html */}
            <h4 className="mb-4">Edit Blog</h4>

                <div className="row">
                    <div className="col-lg-10 mx-auto">

                        <div className="mb-3">
                            <a href="/blogs" className="d-inline-flex align-items-center fw-medium"><i
                                    className="ti ti-arrow-left me-1"></i>All Blogs</a>
                        </div>

                        {/* Ticket Details */}
                        <div className="card mb-0">
                            <div className="card-body">

                                <div>
                                    <div className="mb-3">
                                        <label className="form-label">Title<span className="text-danger ms-1">*</span></label>
                                        <input type="text" className="form-control" value="Improve Efficiency for Sales" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category<span
                                                className="text-danger ms-1">*</span></label>
                                        <select className="select">
                                            <option>Select</option>
                                            <option selected>Sales Optimization</option>
                                            <option>Automation</option>
                                            <option>Marketing</option>
                                            <option>Implementation</option>
                                            <option>Product Features</option>
                                            <option>Data & Analytics</option>
                                            <option>Customization</option>
                                            <option>Training & Adoption</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Tags<span className="text-danger ms-1">*</span></label>
                                        <input className="input-tags form-control border-0 h-100" data-choices
                                            data-choices-limit="infinite" data-choices-removeItem type="text"
                                            value="Productivity" />
                                        <span className="fs-13">Enter value separated by comma</span>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Content</label>
                                        <div className="editor pages-editor">
                                            <p>Discover how to optimize tools to boost your sales team’s productivity
                                                and track important metrics.</p>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Featured Image</label>
                                        <div
                                            className="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column">
                                            <span className="upload-img d-block mb-1"><i
                                                    className="ti ti-folder-open text-primary fs-16"></i></span>
                                            <p className="mb-0 fs-14 text-dark">Drop your files here or <a
                                                    href="#"
                                                    className="text-decoration-underline text-primary">browse</a></p>
                                            <input type="file" accept="video/image" />
                                            <p className="fs-13 mb-0">Maximum size : 50 MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <label className="form-label">Status</label>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <input type="radio" className="status-radio" id="add-active" name="status"
                                                checked />
                                            <label htmlFor="add-active">Active</label>
                                        </div>
                                        <div>
                                            <input type="radio" className="status-radio" id="add-inactive" name="status" />
                                            <label htmlFor="add-inactive">Inactive</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-end">
                                    <a href="#" className="btn btn-light me-3">Cancel</a>
                                    <a href="#" className="btn btn-primary">Save Changes</a>
                                </div>
                            </div>
                        </div>
                        {/* /Ticket Details */}
                    </div>
                </div>
        </div>
    );
};

export default EditBlog;
