const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to find <img>, <input>, <br>, <hr> that do not end with />
    // Using [\s\S] to match across multiple lines
    content = content.replace(/<(img|input|br|hr)([\s\S]*?)>/g, (match, tag, rest) => {
        // If it already ends with '/>' or is a closing tag, ignore
        if (rest.trim().endsWith('/')) {
            return match;
        }
        return `<${tag}${rest} />`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed unclosed tags in ${file}`);
});
console.log('Finished fixing all JSX files.');
