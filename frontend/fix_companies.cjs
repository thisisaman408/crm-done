const fs = require('fs');

const filePaths = [
    'src/pages/Companies.jsx',
    'src/pages/generated/Companies.jsx'
];

const replacementGrid = `
                {companies.map(company => (
                    <div className="col-xxl-3 col-xl-4 col-md-6" key={company.id}>
                        <div className="card border shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-md flex-shrink-0 me-2 bg-success rounded-circle text-white d-flex align-items-center justify-content-center fs-16">
                                            {(company.companyName?.[0] || company.name?.[0] || 'B').toUpperCase()}
                                        </div>
                                        <div>
                                            <h6 className="fs-14 fw-medium mb-1">{company.companyName || company.name}</h6>
                                            <p className="text-muted mb-0 fs-12">{company.brokerCode}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block mt-3">
                                    <div className="d-flex flex-column gap-2">
                                        <p className="text-default d-inline-flex align-items-center mb-0">
                                            <i className="ti ti-user text-dark me-2"></i>{company.name}
                                        </p>
                                        <p className="text-default d-inline-flex align-items-center mb-0">
                                            <i className="ti ti-phone text-dark me-2"></i>{company.phone}
                                        </p>
                                        {company.email && (
                                            <p className="text-default d-inline-flex align-items-center mb-0 text-truncate">
                                                <i className="ti ti-mail text-dark me-2"></i>{company.email}
                                            </p>
                                        )}
                                        {company.reraNumber && (
                                            <p className="text-default d-inline-flex align-items-center mb-0">
                                                <i className="ti ti-certificate text-dark me-2"></i>RERA: {company.reraNumber}
                                            </p>
                                        )}
                                    </div>
                                    <div className="d-flex align-items-center mt-3 pt-3 border-top">
                                        <span className={\`badge badge-tag \${company.isActive ? 'badge-soft-success' : 'badge-soft-danger'} me-2\`}>
                                            {company.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                        {company.sourcingManager && (
                                            <span className="badge badge-tag badge-soft-info" title="Sourcing Manager">
                                                <i className="ti ti-user-shield me-1"></i>
                                                {company.sourcingManager.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
`;

const fetchLogic = `
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrokers = async () => {
            try {
                setLoading(true);
                const res = await api.get('/api/brokers');
                const data = res.data?.data || res.data || [];
                setCompanies(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch brokers", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrokers();
    }, []);
`;

for (const filePath of filePaths) {
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf8');

    // Add useState
    content = content.replace("import React, { useEffect } from 'react';", "import React, { useState, useEffect } from 'react';");
    content = content.replace("const Companies = () => {", "const Companies = () => {" + fetchLogic);
    
    // Replace the huge grid of col-xxl-3 col-xl-4 col-md-6 blocks
    // Find the first block and the end of the row.
    const startIdx = content.indexOf('<div className="col-xxl-3 col-xl-4 col-md-6">');
    // Find the end of the row that contains these blocks by looking for "load-btn" or "pagination"
    const endIdx = content.indexOf('<div className="load-btn text-center">', startIdx);
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + replacementGrid + "\n                " + content.substring(endIdx);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Fixed", filePath);
}

