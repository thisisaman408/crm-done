import React from 'react';

const Blogs = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from blogs.html */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">All Blogs</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="/index">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Blogs</a></li>
                                <li className="breadcrumb-item active" aria-current="page">All Blogs</li>
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

                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="input-icon input-icon-start position-relative">
                                <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <a href="/add-blog" className="btn btn-primary"><i
                                    className="ti ti-square-rounded-plus-filled me-1"></i>Add Blog</a>
                        </div>
                    </div>
                </div>

                {/* start row */}
                <div className="row row-gap-3">
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-1.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Sales
                                        Optimization</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>40 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>27 May 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Improve Efficiency for Sales</a>
                                        </h6>
                                        <p className="mb-0 truncate-2-lines">Discover how to optimize tools to boost your
                                            sales team’s productivity and track important metrics.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-success">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-2.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Automation</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>123 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>15 May 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Automation Benefits for Growth</a>
                                        </h6>
                                        <p className="mb-0 truncate-2-lines">Learn how automation features can streamline
                                            workflows and accelerate your business’s growth effortlessly.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-danger">Inactive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-3.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Marketing</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>54 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>04 May 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Marketing Integration Guide</a>
                                        </h6>
                                        <p className="mb-0 truncate-2-lines">Explore seamless integration strategies between
                                            customer management and marketing tools to enhance outreach and engagement.
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-success">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-4.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Implementation</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>152 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>29 Apr 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Avoid Setup Mistakes</a></h6>
                                        <p className="mb-0 truncate-2-lines">Identify common pitfalls in implementation and
                                            learn proactive steps to avoid costly mistakes during setup.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-danger">Inactive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-5.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Product
                                        Features</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>58 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>17 Apr 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Top Features for 2025</a></h6>
                                        <p className="mb-0 truncate-2-lines">Uncover must-have features for 2025 that
                                            improve customer relationships and operational efficiency.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-success">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-6.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Data
                                        & Analytics</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>78 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>03 Apr 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Data Insights for Success</a></h6>
                                        <p className="mb-0 truncate-2-lines">Leverage data insights to enhance customer
                                            engagement, identify opportunities, and make data-driven decisions.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-danger">Inactive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-7.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Customization</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>56 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>26 Mar 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Customizing Effectively</a></h6>
                                        <p className="mb-0 truncate-2-lines">Tailor your system to fit your business
                                            processes, improving usability, adoption, and productivity across teams.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-success">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-8.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Customization</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>97 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>13 Mar 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">Future Trends & Innovations</a>
                                        </h6>
                                        <p className="mb-0 truncate-2-lines">Explore emerging trends and innovations that
                                            are shaping the future of customer relationship management.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-danger">Inactive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card blog-item mb-0">
                            <div className="card-body">
                                <div className="blog-img rounded position-relative mb-3">
                                    <a href="/blog-details"><img src="assets/img/blogs/blog-9.jpg" alt="img"
                                            className="img-fluid position-relative rounded" /></a>
                                    <a href="#"
                                        className="btn btn-xs btn-info position-absolute fs-12 py-0 top-0 start-0 mt-2 ms-2">Training
                                        & Adoption</a>
                                </div>
                                <div className="blog-content">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <span><i className="ti ti-message-minus me-1"></i>34 Comments</span>
                                        <span><i className="ti ti-calendar me-1"></i>06 Mar 2025</span>
                                    </div>
                                    <div className="mb-3">
                                        <h6 className="mb-2"><a href="/blog-details">User Training Tips</a></h6>
                                        <p className="mb-0 truncate-2-lines">Ensure your team’s success with essential
                                            training strategies and onboarding tips to boost adoption rates.</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/edit-blog" className="btn btn-xs px-3 fs-12 btn-outline-dark"><i
                                                className="ti ti-edit me-1"></i>Edit</a>
                                        <span className="badge badge-sm badge-soft-success">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* end col */}
                </div>
                {/* end row */}
        </div>
    );
};

export default Blogs;
