const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(htmlContent) {
    let jsx = htmlContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/<img([^>]*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match;
            return `<img${p1} />`;
        })
        .replace(/<input([^>]*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match;
            return `<input${p1} />`;
        })
        .replace(/<hr(.*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match;
            return `<hr${p1} />`;
        })
        .replace(/<br(.*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match;
            return `<br${p1} />`;
        })
        .replace(/style="([^"]*)"/g, (match, styleString) => {
            const styles = styleString.split(';').filter(s => s.trim());
            const styleObj = {};
            styles.forEach(s => {
                const [key, value] = s.split(':').map(str => str.trim());
                if (key && value) {
                    const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
                    styleObj[camelKey] = value;
                }
            });
            return `style={{ ${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')} }}`;
        });
    return jsx;
}

const filesToConvert = [
    { html: 'contacts.html', jsx: 'Contacts.jsx', name: 'Contacts' },
    { html: 'companies.html', jsx: 'Companies.jsx', name: 'Companies' },
    { html: 'account-360.html', jsx: 'Account360.jsx', name: 'Account360' },
    { html: 'relationship-map.html', jsx: 'RelationshipMap.jsx', name: 'RelationshipMap' },
    { html: 'deals.html', jsx: 'Deals.jsx', name: 'Deals' },
    { html: 'pipeline.html', jsx: 'Pipeline.jsx', name: 'Pipeline' },
    { html: 'proposals.html', jsx: 'Proposals.jsx', name: 'Proposals' },
    { html: 'contracts.html', jsx: 'Contracts.jsx', name: 'Contracts' },
    { html: 'estimations.html', jsx: 'Estimations.jsx', name: 'Estimations' },
    { html: 'invoices.html', jsx: 'Invoices.jsx', name: 'Invoices' },
    { html: 'payments.html', jsx: 'Payments.jsx', name: 'Payments' },
    { html: 'analytics.html', jsx: 'Analytics.jsx', name: 'Analytics' },
    { html: 'activities.html', jsx: 'Activities.jsx', name: 'Activities' },
    { html: 'chat.html', jsx: 'Chat.jsx', name: 'Chat' }
];

filesToConvert.forEach(({ html, jsx, name }) => {
    try {
        const filePath = path.join('../../html_template', html);
        const content = fs.readFileSync(filePath, 'utf8');
        
        let start = content.indexOf('<div class="content');
        if (start === -1) {
            console.log(`Could not find content div in ${html}`);
            return;
        }

        let end = -1;
        let divCount = 0;
        for (let i = start; i < content.length; i++) {
            if (content.slice(i, i+4) === '<div') divCount++;
            if (content.slice(i, i+5) === '</div') divCount--;
            if (divCount === 0) {
                end = i + 6;
                break;
            }
        }

        if (end !== -1) {
            const mainContent = content.substring(start, end);
            const jsxContent = convertHtmlToJsx(mainContent);
            const componentCode = `import React from 'react';\n\nconst ${name} = () => {\n    return (\n${jsxContent}\n    );\n};\n\nexport default ${name};\n`;
            
            fs.writeFileSync(path.join('src/pages', jsx), componentCode);
            console.log(`Successfully converted ${html} -> ${jsx}`);
        }
    } catch (e) {
        console.error(`Error converting ${html}:`, e.message);
    }
});
