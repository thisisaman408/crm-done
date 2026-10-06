import React from 'react';

const ChartC3 = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from chart-c3.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">C3 Charts</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="chart-c3.html#">Charts</a></li>
                            <li className="breadcrumb-item active" aria-current="page">C3 Charts</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-bar-stacked"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Multiple Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-bar"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Horizontal Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-bar-rotated"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-sracked"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-spline-rotated"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-area-spline-sracked"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Pie Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-pie"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Donut Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="chart-donut"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default ChartC3;
