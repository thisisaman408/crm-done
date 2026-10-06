import React from 'react';

const ChartApex = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from chart-apex.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Apex Charts</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="chart-apex.html#">Charts</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Apex Charts</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                {/* start row */}
                <div className="row">

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Apex Simple</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-line" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Area Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-line-area" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Column Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-col" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Column Stacked Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-col-stacked" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}


                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Bar Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="s-bar" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Mixed Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="mixed-chart" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Donut Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="donut-chart" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <h5 className="card-title">Radial Chart</h5>
                            </div>
                            <div className="card-body">
                                <div id="radial-chart" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default ChartApex;
