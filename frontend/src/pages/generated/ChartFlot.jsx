import React from 'react';

const ChartFlot = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from chart-flot.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Chart Flot</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="chart-flot.html#">Charts</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Chart Flot</li>
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
                                <div id="morrisBar1" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Stacked Bar Chart </div>
                            </div>
                            <div className="card-body">
                                <div id="morrisBar3" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisLine1" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Area Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisArea1" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisBar6" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisBar7" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Donut Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisDonut1" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div id="morrisline" className="chart-set"></div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default ChartFlot;
