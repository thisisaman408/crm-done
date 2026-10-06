const fs = require('fs');

function convertHtmlToJsx(htmlContent) {
    // Basic JSX conversion
    let jsx = htmlContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/<img(.*?)>/g, (match) => {
            if (match.endsWith('/>')) return match;
            return match.replace(/>$/, ' />');
        })
        .replace(/<input(.*?)>/g, (match) => {
            if (match.endsWith('/>')) return match;
            return match.replace(/>$/, ' />');
        })
        .replace(/<hr>/g, '<hr />')
        .replace(/<br>/g, '<br />')
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

const content = fs.readFileSync('../../html_template/index.html', 'utf8');
const start = content.indexOf('<div class="content pb-0">');

let end = -1;
if (start !== -1) {
    // Find matching closing div for content
    let divCount = 0;
    for (let i = start; i < content.length; i++) {
        if (content.slice(i, i+4) === '<div') divCount++;
        if (content.slice(i, i+5) === '</div') divCount--;
        if (divCount === 0) {
            end = i + 6;
            break;
        }
    }
}

if (start !== -1 && end !== -1) {
    const mainContent = content.substring(start, end);
    const jsxContent = convertHtmlToJsx(mainContent);
    
    const componentCode = `import React from 'react';\n\nconst Dashboard = () => {\n    return (\n${jsxContent}\n    );\n};\n\nexport default Dashboard;\n`;
    fs.writeFileSync('src/pages/Dashboard.jsx', componentCode);
    console.log('Successfully created Dashboard.jsx');
} else {
    console.log('Could not parse content div');
}
