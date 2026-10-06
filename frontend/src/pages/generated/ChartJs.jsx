import React from 'react';

const ChartJs = () => {
    return (
        <div className="content">
            {/* Dynamically Generated from chart-js.html */}
            {/* Page Header */}
                <div className="mb-4">
                    <h4 className="mb-1">Chart JS</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="/index">Home</a></li>
                            <li className="breadcrumb-item"><a href="chart-js.html#">Charts</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Chart JS</li>
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
                                <div>
                                    <canvas id="chartBar1" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Transparency </div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <canvas id="chartBar2" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Gradient Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <canvas id="chartBar3" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}


                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Horizontal Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartBar4" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Horizontal Bar Chart Style2</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartBar5" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Vertical Stacked Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartStacked1" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Horizontal Stacked Bar Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartStacked2" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Line Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartLine1" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Donut Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartPie" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Pie Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartDonut" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    {/* Chart */}
                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Area Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartArea1" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                    <div className="col-md-6">
                        <div className="card card-h-100">
                            <div className="card-header">
                                <div className="card-title">Scatter Chart</div>
                            </div>
                            <div className="card-body">
                                <div className="chartjs-wrapper-demo">
                                    <canvas id="chartRadar" className="h-300"></canvas>
                                </div>
                            </div>{/* end card body */}
                        </div>{/* end card */}
                    </div> {/* end col */}

                </div>
                {/* end row */}
        </div>
    );
};

export default ChartJs;
