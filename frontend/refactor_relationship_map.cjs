const fs = require('fs');

let content = fs.readFileSync('src/pages/RelationshipMap.jsx', 'utf8');

content = content.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';\nimport api from '../lib/api';");

const logic = `
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/api/brokers').then(res => {
            const list = res.data?.data || [];
            if(list.length > 0) {
                setAccount(list[0]);
            }
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="p-5 text-center">Loading Relationship Map...</div>;
    if (!account) return <div className="p-5 text-center">No accounts found.</div>;
`;

content = content.replace("const RelationshipMap = () => {", "const RelationshipMap = () => {" + logic);

// Replace Breadcrumb and Header
content = content.replace(/>Halcyon Partners<\/li>/, '>{account.companyName || account.name}</li>');
content = content.replace(/Halcyon Partners - Relationship Graph/, '{account.companyName || account.name} - Relationship Graph');
content = content.replace(/<h6 className="fs-13 mb-1">Halcyon Partners<\/h6>/, '<h6 className="fs-13 mb-1">{account.companyName || account.name}</h6>');

fs.writeFileSync('src/pages/RelationshipMap.jsx', content);
console.log('RelationshipMap.jsx refactored successfully.');
