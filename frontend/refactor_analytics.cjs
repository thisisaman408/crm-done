const fs = require('fs');

let content = fs.readFileSync('src/pages/Analytics.jsx', 'utf8');

// 1. Update imports and add state
content = content.replace(
    "import React, { useEffect } from 'react';", 
    "import React, { useEffect, useState } from 'react';\nimport api from '../lib/api';"
);

const logic = `
    const [recentContacts, setRecentContacts] = useState([]);
    const [recentActivities, setRecentActivities] = useState([]);

    useEffect(() => {
        if (window.initCharts) {
            setTimeout(() => {
                window.initCharts();
            }, 100);
        }

        // Fetch Real Analytics Data
        const fetchData = async () => {
            try {
                const [leadsRes, activitiesRes] = await Promise.all([
                    api.get('/api/leads'),
                    api.get('/api/activities')
                ]);
                
                const leads = leadsRes.data?.data || leadsRes.data || [];
                const acts = activitiesRes.data?.data || activitiesRes.data || [];
                
                // Sort by newest and take top 5
                setRecentContacts(leads.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
                setRecentActivities(acts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
            } catch (err) {
                console.error("Failed to fetch analytics data", err);
            }
        };
        fetchData();
    }, []);
`;

content = content.replace(
    /const Analytics = \(\) => {\s*useEffect\(\(\) => {\s*if \(window\.initCharts\) {\s*setTimeout\(\(\) => {\s*window\.initCharts\(\);\s*}, 100\);\s*}\s*}, \[\]\);/,
    "const Analytics = () => {" + logic
);


// 2. Replace "Recently Created Contacts" Table Body
const contactsRegex = /<table className="table dataTable table-nowrap mb-0" id="analytic-contact">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/;
const contactsReplacement = `<table className="table dataTable table-nowrap mb-0" id="analytic-contact">
<thead className="table-light">
    <tr>
        <th>Contact</th>
        <th>Phone</th>
        <th>Created At</th>
    </tr>
</thead>
<tbody>
    {recentContacts.map((contact, idx) => (
        <tr key={contact.id || idx}>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-2">
                        {(contact.name?.[0] || 'U').toUpperCase()}
                    </div>
                    <h6 className="mb-0">{contact.name}</h6>
                </div>
            </td>
            <td>{contact.phone || 'N/A'}</td>
            <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
        </tr>
    ))}
    {recentContacts.length === 0 && <tr><td colSpan="3" className="text-center">No recent contacts found.</td></tr>}
</tbody>`;

content = content.replace(contactsRegex, contactsReplacement);


// 3. Replace "Recent Activities" Table Body
// First, find where Recent Activities table is. Wait, is there a Recent Activities table in Analytics.jsx?
// Let's assume there is one or we just do it for contacts if it fails.
const activitiesRegex = /<table className="table dataTable table-nowrap mb-0" id="analytic-activity">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/;
const activitiesReplacement = `<table className="table dataTable table-nowrap mb-0" id="analytic-activity">
<thead className="table-light">
    <tr>
        <th>Activity</th>
        <th>Type</th>
        <th>Date</th>
    </tr>
</thead>
<tbody>
    {recentActivities.map((act, idx) => (
        <tr key={act.id || idx}>
            <td>{act.title || act.description}</td>
            <td><span className={"badge badge-soft-" + (act.type === 'CALL' ? 'info' : 'primary')}>{act.type}</span></td>
            <td>{new Date(act.createdAt).toLocaleDateString()}</td>
        </tr>
    ))}
    {recentActivities.length === 0 && <tr><td colSpan="3" className="text-center">No recent activities found.</td></tr>}
</tbody>`;

if (content.match(activitiesRegex)) {
    content = content.replace(activitiesRegex, activitiesReplacement);
}

fs.writeFileSync('src/pages/Analytics.jsx', content);
console.log('Analytics.jsx tables refactored successfully.');
