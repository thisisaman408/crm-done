const fs = require('fs');

const sidebarContent = `import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    
    // State to handle which submenus are open
    const [openMenus, setOpenMenus] = useState({
        dashboard: true,
        crm: true,
        applications: false
    });

    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-logo">
                <a href="/" className="logo logo-normal">
                    <img src="/assets/img/logo.svg" alt="Logo" />
                </a>
                <a href="/" className="logo-small">
                    <img src="/assets/img/logo-small.svg" alt="Logo" />
                </a>
                <a href="/" className="dark-logo">
                    <img src="/assets/img/logo-white.svg" alt="Logo" />
                </a>
            </div>

            <div className="sidebar-inner" data-simplebar>
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title"><span>Main Menu</span></li>
                        
                        <li className="submenu">
                            <a href="#" className={openMenus.dashboard ? 'active subdrop' : ''} onClick={(e) => { e.preventDefault(); toggleMenu('dashboard'); }}>
                                <i className="ti ti-dashboard"></i><span>Dashboard</span><span className="menu-arrow"></span>
                            </a>
                            <ul style={{ display: openMenus.dashboard ? 'block' : 'none' }}>
                                <li><Link to="/" className={isActive('/') ? 'active' : ''}>Sales Dashboard</Link></li>
                                <li><Link to="/analytics" className={isActive('/analytics') ? 'active' : ''}>Analytics</Link></li>
                                <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Project Inventory</Link></li>
                            </ul>
                        </li>

                        <li className="menu-title"><span>CRM</span></li>
                        
                        <li className="submenu">
                            <a href="#" className={openMenus.crm ? 'active subdrop' : ''} onClick={(e) => { e.preventDefault(); toggleMenu('crm'); }}>
                                <i className="ti ti-users"></i><span>CRM Hub</span><span className="menu-arrow"></span>
                            </a>
                            <ul style={{ display: openMenus.crm ? 'block' : 'none' }}>
                                <li><Link to="/leads" className={isActive('/leads') ? 'active' : ''}>Leads</Link></li>
                                <li><Link to="/deals" className={isActive('/deals') ? 'active' : ''}>Deals & Approvals</Link></li>
                                <li><Link to="/pipeline" className={isActive('/pipeline') ? 'active' : ''}>Pipeline</Link></li>
                                <li><Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>Contacts</Link></li>
                                <li><Link to="/companies" className={isActive('/companies') ? 'active' : ''}>Companies</Link></li>
                                <li><Link to="/account-360" className={isActive('/account-360') ? 'active' : ''}>Account 360</Link></li>
                                <li><Link to="/relationship-map" className={isActive('/relationship-map') ? 'active' : ''}>Relationship Map</Link></li>
                                <li><Link to="/proposals" className={isActive('/proposals') ? 'active' : ''}>Proposals</Link></li>
                                <li><Link to="/contracts" className={isActive('/contracts') ? 'active' : ''}>Contracts</Link></li>
                                <li><Link to="/estimations" className={isActive('/estimations') ? 'active' : ''}>Estimations</Link></li>
                                <li><Link to="/invoices" className={isActive('/invoices') ? 'active' : ''}>Invoices</Link></li>
                                <li><Link to="/payments" className={isActive('/payments') ? 'active' : ''}>Payments</Link></li>
                            </ul>
                        </li>

                        <li className="menu-title"><span>Applications</span></li>
                        
                        <li className="submenu">
                            <a href="#" className={openMenus.applications ? 'active subdrop' : ''} onClick={(e) => { e.preventDefault(); toggleMenu('applications'); }}>
                                <i className="ti ti-brand-airtable"></i><span>Applications</span><span className="menu-arrow"></span>
                            </a>
                            <ul style={{ display: openMenus.applications ? 'block' : 'none' }}>
                                <li><Link to="/chat" className={isActive('/chat') ? 'active' : ''}>Chat</Link></li>
                                <li><Link to="/activities" className={isActive('/activities') ? 'active' : ''}>Activities & Calls</Link></li>
                                <li><Link to="/tasks" className={isActive('/tasks') ? 'active' : ''}>Tasks</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
`;
fs.writeFileSync('src/components/layout/Sidebar.jsx', sidebarContent);
console.log('Sidebar generated');
