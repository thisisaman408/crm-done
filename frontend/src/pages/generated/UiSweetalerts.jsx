import React from 'react';

const UiSweetalerts = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from ui-sweetalerts.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Sweet Alert 2</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="ui-sweetalerts.html#">Advanced UI</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sweet Alert 2</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">A Basic Message</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">Here's a basic example of SweetAlert.</p>
                                <button type="button" className="btn btn-primary" id="sweetalert-basic">Click me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">Title</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A Title with a Text Under.</p>
                                <button type="button" className="btn btn-primary" id="sweetalert-title">Click Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card card-h-100">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">HTML</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">Here's an example of SweetAlert with HTML content.</p>
                                <button type="button" className="btn btn-primary" id="custom-html-alert">Toggle HTML
                                    SweetAlert</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card card-h-100">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">All States</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">Here are examples for each of SweetAlert's states.</p>

                                <div className="d-flex flex-wrap gap-2">
                                    <button type="button" id="sweetalert-info" className="btn btn-info">Toggle Info</button>
                                    <button type="button" id="sweetalert-warning" className="btn btn-warning">Toggle
                                        Warning</button>
                                    <button type="button" id="sweetalert-error" className="btn btn-danger">Toggle
                                        Error</button>
                                    <button type="button" id="sweetalert-success" className="btn btn-success">Toggle
                                        Success</button>
                                    <button type="button" id="sweetalert-question" className="btn btn-primary">Toggle
                                        Question</button>
                                </div>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">Long Content</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A modal window with a long content inside.</p>

                                <button type="button" id="sweetalert-longcontent" className="btn btn-secondary">Click
                                    Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">With Confirm Button</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A warning message, with a function attached to the
                                    "Confirm"-button...</p>

                                <button type="button" id="sweetalert-confirm-button" className="btn btn-secondary">Click
                                    Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">With Cancel Button</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">By passing a parameter, you can execute something else for
                                    "Cancel".</p>

                                <button type="button" id="sweetalert-params" className="btn btn-secondary">Click Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">With Image Header (Logo)</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A message with custom Image Header.</p>

                                <button type="button" id="sweetalert-image" className="btn btn-secondary">Click Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">Auto Close</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A message with auto close timer.</p>

                                <button type="button" id="sweetalert-close" className="btn btn-secondary">Click Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">Position</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A custom positioned dialog.</p>

                                <div className="d-flex flex-wrap gap-2">
                                    <button className="btn btn-primary" id="position-top-start">Top Start</button>
                                    <button className="btn btn-primary" id="position-top-end">Top End</button>
                                    <button className="btn btn-primary" id="position-bottom-start">Bottom Starts</button>
                                    <button className="btn btn-primary" id="position-bottom-end">Bottom End</button>
                                </div>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">With Custom Padding, Background</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">A message with custom width, padding and background.</p>
                                <button type="button" id="custom-padding-width-alert" className="btn btn-secondary">Click
                                    Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header border-bottom d-flex align-items-center">
                                <h4 className="header-title">Ajax Request</h4>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">Ajax request example.</p>
                                <button type="button" id="ajax-alert" className="btn btn-secondary">Click Me</button>
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default UiSweetalerts;
