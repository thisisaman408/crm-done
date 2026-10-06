import React, { useEffect, useState } from 'react';
import api from '../lib/api';
import AddActivityOffcanvas from '../components/activities/AddActivityOffcanvas';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [aiRecommendations, setAiRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState('ALL');
    const [userRole, setUserRole] = useState(null);
    const [leads, setLeads] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            try {
                setUserRole(JSON.parse(userJson).roleCode);
            } catch (e) {}
        }
    }, []);

    const canEdit = ['ADMIN', 'DIRECTOR', 'MANAGER', 'PRE_SALES_MANAGER', 'POST_SALES_MANAGER'].includes(userRole);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [activitiesRes, aiRes, leadsRes, usersRes] = await Promise.all([
                    api.get('/api/leads/activities/all'),
                    api.get('/api/leads/activities/ai-recommendations'),
                    api.get('/api/leads'),
                    api.get('/api/users')
                ]);
                setActivities(activitiesRes.data || []);
                setAiRecommendations(aiRes.data || []);
                setLeads(leadsRes.data?.data || leadsRes.data || []);
                setUsers(usersRes.data || []);
            } catch (error) {
                console.error("Failed to fetch activities data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

        if (window.initCharts) {
            setTimeout(() => {
                window.initCharts();
            }, 100);
        }
    }, []);

    return (
        <>
            {/* Page Content */}
            {/* Page Header */}
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                    <div>
                        <h4 className="mb-1">Activities<span className="badge badge-soft-primary ms-2">123</span></h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Activities</li>
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

                {/* AI Panel */}
                <div className="ai-embed mb-3" data-ai-embed>
                    <div className="ai-embed-head">
                        <div className="d-flex align-items-center gap-2">
                            <span className="ai-chip"><i className="ti ti-sparkles"></i>AI</span>
                            <div>
                                <h6 className="mb-0 fs-14">AI activity guidance</h6>
                                <span className="fs-12 text-muted">Prioritised from open activities</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button type="button" className="btn btn-icon btn-sm btn-outline-light shadow"
                                data-ai-embed-toggle aria-label="Hide AI panel" aria-expanded="true">
                                <i className="ti ti-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                    <div className="ai-embed-body pt-3" data-ai-embed-body>
                        <div className="row g-3">
                            {aiRecommendations.length > 0 ? aiRecommendations.map((rec, idx) => (
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="d-flex align-items-start gap-2">
                                        <span className={`ai-insight-icon bg-soft-${rec.type || 'primary'} text-${rec.type || 'primary'} flex-shrink-0`}>
                                            <i className="ti ti-sparkles"></i>
                                        </span>
                                        <div className="flex-grow-1 min-w-0">
                                            <span className="fs-12 text-muted d-block">{rec.action}</span>
                                            <span className="fs-15 fw-semibold text-dark d-block text-truncate">{rec.title}</span>
                                            <span className="fs-12 text-muted d-block">{rec.description}</span>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-12 text-center text-muted py-3">
                                    {loading ? 'Analyzing open activities...' : 'No AI recommendations at this time.'}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* End AI Panel */}

                {/* card start */}
                <div className="card border-0 rounded-0">
                    <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div className="input-icon input-icon-start position-relative">
                            <span className="input-icon-addon text-dark"><i className="ti ti-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        {canEdit && (
                            <a href="#" className="btn btn-primary" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas_add"><i className="ti ti-square-rounded-plus-filled me-1"></i>Add New
                                Activity</a>
                        )}
                    </div>
                    <div className="card-body">

                        {/* table header */}
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <h6 className="mb-0">All Activities</h6>
                                {filterType !== 'ALL' && (
                                    <button onClick={() => setFilterType('ALL')} className="btn btn-sm btn-light border shadow-sm">Clear Filter</button>
                                )}
                                <button onClick={(e) => { e.preventDefault(); setFilterType('Call'); }} className={`btn btn-icon btn-outline-light shadow ${filterType === 'Call' ? 'active bg-primary text-white' : ''}`}
                                    title="Calls"><i className="ti ti-phone"></i></button>
                                <button onClick={(e) => { e.preventDefault(); setFilterType('Mail'); }} className={`btn btn-icon btn-outline-light shadow ${filterType === 'Mail' ? 'active bg-primary text-white' : ''}`}
                                    title="Mail"><i className="ti ti-mail"></i></button>
                                <button onClick={(e) => { e.preventDefault(); setFilterType('Task'); }} className={`btn btn-icon btn-outline-light shadow ${filterType === 'Task' ? 'active bg-primary text-white' : ''}`}
                                    title="Task"><i className="ti ti-subtask"></i></button>
                                <button onClick={(e) => { e.preventDefault(); setFilterType('Meeting'); }} className={`btn btn-icon btn-outline-light shadow ${filterType === 'Meeting' ? 'active bg-primary text-white' : ''}`}
                                    title="Meeting"><i className="ti ti-user-share"></i></button>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle btn btn-outline-light shadow"
                                        data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2 me-2"></i>Sort By</a>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="dropdown-item">Newest</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">Oldest</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <div className="dropdown">
                                    <a href="#" className="btn btn-outline-light shadow px-2"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-filter me-2"></i>Filter<i
                                            className="ti ti-chevron-down ms-2"></i></a>
                                    <div className="filter-dropdown-menu dropdown-menu dropdown-menu-xl p-0">
                                        <div
                                            className="filter-header d-flex align-items-center justify-content-between border-bottom">
                                            <h4 className="mb-0 fs-16"><i className="ti ti-filter me-1"></i>Filter</h4>
                                            <button type="button" className="btn-close close-filter-btn"
                                                data-bs-dismiss="dropdown-menu" aria-label="Close"></button>
                                        </div>
                                        <div className="filter-set-view p-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="activities.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">Project Name</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="collapseThree" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="mb-1">
                                                                <div
                                                                    className="input-icon-start input-icon position-relative">
                                                                    <span className="input-icon-addon fs-12">
                                                                        <i className="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-md"
                                                                        placeholder="Search" />
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        We scheduled a meeting for next week
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Had conversation with Fred regarding task
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Analysing latest time estimation for new project
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Store and manage contact data
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Store and manage contact data
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Will have a meeting before project start
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Call John and discuss about project
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="activities.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#Status" aria-expanded="false"
                                                            aria-controls="Status">Activity Type</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="Status" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <ul>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Meeting
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Calls
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Task
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Email
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="activities.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date" aria-expanded="false"
                                                            aria-controls="date">Due Date</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="date" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="input-group w-auto input-group-flat">
                                                                <input type="text" className="form-control"
                                                                    data-provider="flatpickr" data-date-format="d M, Y" />
                                                                <span className="input-group-text">
                                                                    <i className="ti ti-calendar"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="activities.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#owner" aria-expanded="false"
                                                            aria-controls="owner">Owner</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="owner" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="mb-1">
                                                                <div
                                                                    className="input-icon-start input-icon position-relative">
                                                                    <span className="input-icon-addon fs-12">
                                                                        <i className="ti ti-search"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        className="form-control form-control-md"
                                                                        placeholder="Search" />
                                                                </div>
                                                            </div>
                                                            <ul className="mb-0">
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Hendry Milner
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Guilory Berggren
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Jami Carlile
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Theresa Nelson
                                                                    </label>
                                                                </li>
                                                                <li className="mb-1">
                                                                    <label
                                                                        className="dropdown-item px-2 d-flex align-items-center">
                                                                        <input className="form-check-input m-0 me-1"
                                                                            type="checkbox" />
                                                                        Smith Cooper
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="link-primary text-decoration-underline p-2 pt-0 d-flex">Load
                                                                        More</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="filter-set-content">
                                                    <div className="filter-set-content-head">
                                                        <a href="activities.html#" className="collapsed" data-bs-toggle="collapse"
                                                            data-bs-target="#date2" aria-expanded="false"
                                                            aria-controls="date2">Created Date</a>
                                                    </div>
                                                    <div className="filter-set-contents accordion-collapse collapse"
                                                        id="date2" data-bs-parent="#accordionExample">
                                                        <div
                                                            className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                                                            <div className="input-group w-auto input-group-flat">
                                                                <input type="text" className="form-control"
                                                                    data-provider="flatpickr" data-date-format="d M, Y" />
                                                                <span className="input-group-text">
                                                                    <i className="ti ti-calendar"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <a href="#"
                                                    className="btn btn-outline-light w-100">Reset</a>
                                                <a href="#" className="btn btn-primary w-100">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="btn bg-soft-indigo border-0"
                                        data-bs-toggle="dropdown" data-bs-auto-close="outside"><i
                                            className="ti ti-columns-3 me-2"></i>Manage Columns</a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-md p-3">
                                        <ul>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Title</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Activity Type</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Due Date</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Owner</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-2">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Created at</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" />
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="gap-1 d-flex align-items-center mb-0">
                                                <i className="ti ti-columns me-1"></i>
                                                <div className="form-check form-switch w-100 ps-0">

                                                    <label
                                                        className="form-check-label d-flex align-items-center gap-2 w-100">
                                                        <span>Action</span>
                                                        <input className="form-check-input switchCheckDefault ms-auto"
                                                            type="checkbox" role="switch" checked />
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* table header */}

                        {/* Activity List */}
                        <div className="table-responsive custom-table table-nowrap">
                            <table className="table table-nowrap" id="activity-list">
                                <thead className="table-light">
                                    <tr>
                                        <th className="no-sort">
                                            <div className="form-check form-check-md">
                                                <input className="form-check-input" type="checkbox" id="select-all" />
                                            </div>
                                        </th>
                                        <th>Title</th>
                                        <th>Activity Type</th>
                                        <th>Due Date</th>
                                        <th>Owner</th>
                                        <th>Created At</th>
                                        <th className="no-sort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="7" className="text-center p-4">
                                                <div className="spinner-border text-primary" role="status"></div>
                                            </td>
                                        </tr>
                                    ) : activities.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="text-center p-4 text-muted">No activities found</td>
                                        </tr>
                                    ) : activities.filter(a => filterType === 'ALL' || a.type === filterType).map((activity, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="form-check form-check-md">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6 className="fw-medium mb-0">{activity.title}</h6>
                                                    {activity.notes && <span className="fs-12 text-muted text-truncate d-inline-block" style={{ maxWidth: '200px' }}>{activity.notes}</span>}
                                                </td>
                                                <td>
                                                    <span className={`badge badge-soft-${activity.type === 'Meeting' ? 'primary' : activity.type === 'Call' ? 'success' : 'info'}`}>
                                                        {activity.type}
                                                    </span>
                                                </td>
                                                <td>{new Date(activity.date).toLocaleDateString()}</td>
                                                <td>
                                                    <span className="d-flex align-items-center gap-2">
                                                        <div className="avatar avatar-sm rounded-circle bg-soft-secondary text-secondary">
                                                            {typeof activity.owner === 'string' ? activity.owner.charAt(0).toUpperCase() : 'U'}
                                                        </div>
                                                        {typeof activity.owner === 'string' ? activity.owner : 'Unknown'}
                                                    </span>
                                                </td>
                                                <td>{new Date(activity.createdAt || activity.date).toLocaleDateString()}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        {canEdit && (
                                                            <>
                                                                <a href="#" className="btn btn-icon btn-sm btn-outline-light"><i className="ti ti-edit"></i></a>
                                                                <a href="#" className="btn btn-icon btn-sm btn-outline-light"><i className="ti ti-trash text-danger"></i></a>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="datatable-length"></div>
                            </div>
                            <div className="col-md-6">
                                <div className="datatable-paginate"></div>
                            </div>
                        </div>
                        {/* /Activity List */}

                    </div>
                </div>
                {/* card end */}
                
                {/* Add Activity Offcanvas */}
                {canEdit && (
                    <AddActivityOffcanvas 
                        leads={leads} 
                        users={users} 
                        onSuccess={() => {
                            // Re-fetch activities on success
                            api.get('/api/leads/activities/all').then(res => setActivities(res.data || []));
                        }} 
                    />
                )}
        </>
    );
};

export default Activities;
