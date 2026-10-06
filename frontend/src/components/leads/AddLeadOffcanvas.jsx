import React from 'react';

const AddLeadOffcanvas = ({ handleCreateLead }) => {
    return (
        <div className="offcanvas offcanvas-end offcanvas-large" tabIndex="-1" id="offcanvas_add">
            <div className="offcanvas-header border-bottom">
                <h5 className="mb-0">Add New Lead</h5>
                <button type="button"
                    className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
                    data-bs-dismiss="offcanvas" aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body">
                <form onSubmit={handleCreateLead}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">First Name<span className="text-danger">*</span></label>
                                <input type="text" name="firstName" className="form-control" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Phone<span className="text-danger">*</span></label>
                                <input type="text" name="phone" className="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-light me-2">Cancel</button>
                        <button type="submit" className="btn btn-primary">Create Lead</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLeadOffcanvas;
