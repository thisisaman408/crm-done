import React, { useEffect, useState } from 'react';
import api from '../lib/api';

const getDashboardConfig = (roleCode) => {
    switch (roleCode) {
        case 'SALES_EXECUTIVE': return { endpoint: '/api/dashboard/sales-executive/analytics', title: 'Sales Executive Dashboard' };
        case 'PRE_SALES_MANAGER': return { endpoint: '/api/dashboard/pre-sales-manager/analytics', title: 'Pre-Sales Manager Dashboard' };
        case 'POST_SALES_MANAGER': return { endpoint: '/api/dashboard/post-sales-manager/analytics', title: 'Post-Sales Manager Dashboard' };
        case 'DIRECTOR': return { endpoint: '/api/dashboard/business-manager/analytics', title: 'Director Dashboard' };
        case 'PRE_SALES': return { endpoint: '/api/dashboard/pre-sales/analytics', title: 'Pre-Sales Dashboard' };
        default: return { endpoint: '/api/dashboard/sales-manager/analytics', title: 'Sales Manager Dashboard' }; // default for Admin and Manager
    }
};

const Dashboard = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeRange, setTimeRange] = useState('monthly');
    const [config, setConfig] = useState({ endpoint: '/api/dashboard/sales-manager/analytics', title: 'Sales Manager Dashboard' });

    useEffect(() => {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            try {
                const user = JSON.parse(userJson);
                setConfig(getDashboardConfig(user.roleCode));
            } catch (e) {}
        }
    }, []);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                setLoading(true);
                const res = await api.get(`${config.endpoint}?timeRange=${timeRange}`);
                setAnalytics(res.data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch analytics", err);
                setError("Failed to load dashboard data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, [timeRange, config.endpoint]);

    if (loading) {
        return (
            <div className="content d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="content">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }

    const detailedMetrics = analytics.detailedMetrics || analytics;
    const salesFunnel = detailedMetrics.salesFunnel || { assignedCustomers: 0, opportunities: 0, closedWon: 0, conversionRate: 0 };
    const revenueAnalytics = detailedMetrics.revenueAnalytics || { currentRevenue: 0, revenueGrowth: 0, avgDealSize: 0 };

    return (
        <div className="content">
            {/* Page Header */}
            <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <div>
                    <h4 className="mb-1">{config.title}</h4>
                </div>
                <div className="gap-2 d-flex align-items-center flex-wrap">
                    <select 
                        className="form-select shadow-sm" 
                        value={timeRange} 
                        onChange={(e) => setTimeRange(e.target.value)}
                        style={{ width: 'auto' }}
                    >
                        <option value="weekly">Last 7 Days</option>
                        <option value="monthly">Last 30 Days</option>
                        <option value="yearly">Last 1 Year</option>
                        <option value="all-time">All Time</option>
                    </select>
                </div>
            </div>

            {/* Start Welcome Wrap */}
            <div className="welcome-wrap mb-4">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 bg-dark rounded p-4">
                    <div>
                        <h2 className="mb-1 dark-text-white fs-24">Team Performance Analytics</h2>
                        <p className="text-light fs-14 mb-0">Overview of your assigned team's metrics and conversions.</p>
                    </div>
                </div>
            </div>

            {/* Metrics Row */}
            <div className="row row-gap-3 mb-4">
                {/* Total Leads */}
                <div className="col-xl-3 col-sm-6 d-flex">
                    <div className="card flex-fill mb-0 position-relative overflow-hidden">
                        <div className="card-body position-relative z-1">
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <p className="fs-14 mb-1">Total Leads Assigned</p>
                                    <h2 className="mb-1 fs-20">{salesFunnel.assignedCustomers}</h2>
                                    <p className="text-muted mb-0 fs-13">Active prospects</p>
                                </div>
                                <span className="avatar avatar-md rounded-circle bg-soft-primary border border-primary d-flex align-items-center justify-content-center">
                                    <i className="ti ti-users fs-16 text-primary"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Site Visits */}
                <div className="col-xl-3 col-sm-6 d-flex">
                    <div className="card flex-fill mb-0 position-relative overflow-hidden">
                        <div className="card-body position-relative z-1">
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <p className="fs-14 mb-1">Site Visits</p>
                                    <h2 className="mb-1 fs-20">{salesFunnel.siteVisitsCompleted} <span className="fs-14 text-muted fw-normal">/ {salesFunnel.siteVisitsScheduled}</span></h2>
                                    <p className="text-muted mb-0 fs-13">Completed / Scheduled</p>
                                </div>
                                <span className="avatar avatar-md rounded-circle bg-soft-warning border border-warning d-flex align-items-center justify-content-center">
                                    <i className="ti ti-map-pin fs-16 text-warning"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirmed Bookings */}
                <div className="col-xl-3 col-sm-6 d-flex">
                    <div className="card flex-fill mb-0 position-relative overflow-hidden">
                        <div className="card-body position-relative z-1">
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <p className="fs-14 mb-1">Confirmed Bookings</p>
                                    <h2 className="mb-1 fs-20">{salesFunnel.confirmedBookings}</h2>
                                    <p className="text-success mb-0 fs-13"><i className="ti ti-arrow-bar-up me-1"></i>{salesFunnel.conversionRate}% Conv. Rate</p>
                                </div>
                                <span className="avatar avatar-md rounded-circle bg-soft-success border border-success d-flex align-items-center justify-content-center">
                                    <i className="ti ti-check fs-16 text-success"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="col-xl-3 col-sm-6 d-flex">
                    <div className="card flex-fill mb-0 position-relative overflow-hidden">
                        <div className="card-body position-relative z-1">
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <p className="fs-14 mb-1">Total Revenue</p>
                                    <h2 className="mb-1 fs-20">₹{revenueAnalytics.monthly.toLocaleString()}</h2>
                                    <p className="text-muted mb-0 fs-13">Booked in this period</p>
                                </div>
                                <span className="avatar avatar-md rounded-circle bg-soft-danger border border-danger d-flex align-items-center justify-content-center">
                                    <i className="ti ti-coin fs-16 text-danger"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Funnel Progress */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Sales Pipeline Overview</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-medium">Leads ({salesFunnel.assignedCustomers})</span>
                                <span className="fw-medium">Negotiations ({salesFunnel.negotiations})</span>
                                <span className="fw-medium">Booked ({salesFunnel.confirmedBookings})</span>
                            </div>
                            <div className="progress" style={{ height: '24px' }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }}>Leads</div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }}>Negotiations</div>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '20%' }}>Booked</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
