const fs = require('fs');

function convertHtmlToJsx(htmlContent) {
    let jsx = htmlContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '')
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
                const [key, value] = s.split(':');
                if (key && value) {
                    const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    styleObj[camelKey] = value.trim();
                }
            });
            return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ')}}}`;
        })
        .replace(/href="javascript:void\(0\);"/g, 'href="#"');
    
    return jsx;
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const componentName = process.argv[4];

const content = fs.readFileSync(inputFile, 'utf8');
const start = content.indexOf('<div class="content');
let end = -1;
let divCount = 0;

if (start !== -1) {
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
    const componentCode = `import React from 'react';\n\nconst ${componentName} = () => {\n    return (\n${jsxContent}\n    );\n};\n\nexport default ${componentName};\n`;
    fs.writeFileSync(outputFile, componentCode);
    console.log('Successfully created', outputFile);
} else {
    console.log('Could not parse content div');
}
