const fs = require('fs');

let content = fs.readFileSync('src/pages/Account360.jsx', 'utf8');

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

    if (loading) return <div className="p-5 text-center">Loading Account 360...</div>;
    if (!account) return <div className="p-5 text-center">No accounts found.</div>;
`;

content = content.replace("const Account360 = () => {", "const Account360 = () => {" + logic);

// Replace Breadcrumb and Header
content = content.replace(/>Halcyon Partners<\/li>/, '>{account.companyName || account.name}</li>');
content = content.replace(/<h4 className="mb-0">Halcyon Partners<\/h4>/, '<h4 className="mb-0">{account.companyName || account.name}</h4>');
content = content.replace(/alt="Halcyon Partners"/g, 'alt={account.companyName || account.name}');
content = content.replace(/>Financial Services <\/span>/, '>{account.serviceAreas?.[0] || "Services"} </span>');
content = content.replace(/>Financial Services &middot; Customer since 12 Mar 2024/, '>{account.serviceAreas?.join(", ") || "Services"} &middot; Customer');

// Replace contact details
content = content.replace(/>Tomas Lindqvist<\/span>/, '>{account.name}</span>');
content = content.replace(/>Ellis Vandermeer<\/a>/, '>{account.name}</a>');

fs.writeFileSync('src/pages/Account360.jsx', content);
console.log('Account360.jsx refactored successfully.');
