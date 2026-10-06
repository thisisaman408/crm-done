import React from 'react';

const AIPanel = () => {
    return (
        <div className="ai-embed mb-3" data-ai-embed>
            <div className="ai-embed-head">
                <div className="d-flex align-items-center gap-2">
                    <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                    <div>
                        <h6 className="mb-0 fs-14">AI lead intelligence</h6>
                        <span className="fs-12 text-muted">Scored across open leads</span>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <a href="#" className="btn btn-sm btn-outline-light shadow">Open lead scoring</a>
                    <button type="button" className="btn btn-icon btn-sm btn-outline-light shadow"
                        data-ai-embed-toggle aria-label="Hide AI panel" aria-expanded="true">
                        <i className="ti ti-chevron-up"></i>
                    </button>
                </div>
            </div>
            <div className="ai-embed-body" data-ai-embed-body>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-start gap-2">
                            <span className="ai-insight-icon bg-soft-warning text-warning flex-shrink-0">
                                <i className="ti ti-target-arrow"></i>
                            </span>
                            <div className="flex-grow-1 min-w-0">
                                <span className="fs-12 text-muted d-block">Highest AI lead score</span>
                                <span className="fs-15 fw-semibold text-dark d-block">Active Leads Tracking</span>
                                <span className="fs-12 text-muted">Dynamically updated via backend</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-start gap-2">
                            <span className="ai-insight-icon bg-soft-primary text-primary flex-shrink-0">
                                <i className="ti ti-percentage"></i>
                            </span>
                            <div className="flex-grow-1 min-w-0">
                                <span className="fs-12 text-muted d-block">Avg. conversion probability</span>
                                <span className="fs-15 fw-semibold text-dark d-block">55%</span>
                                <span className="ai-meter mt-1">
                                    <span className="ai-meter-track">
                                        <span className="ai-meter-fill" data-embed-meter="55" style={{ width: '55%' }}></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex align-items-start gap-2">
                            <span className="ai-insight-icon bg-soft-success text-success flex-shrink-0">
                                <i className="ti ti-sparkles"></i>
                            </span>
                            <div className="flex-grow-1 min-w-0">
                                <span className="fs-12 text-muted d-block">AI recommendation</span>
                                <span className="fs-15 fw-semibold text-dark d-block">Contact hot leads today</span>
                                <span className="fs-12 text-muted">Based on real-time activity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPanel;
