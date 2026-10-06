const fs = require('fs');
const file = 'src/pages/Pipeline.jsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the card containing the empty table
const tableStart = content.indexOf('                {/* card start */}');
const tableEnd = content.indexOf('                {/* card end */}') + '                {/* card end */}'.length;

if (tableStart !== -1 && tableEnd !== -1) {
    content = content.substring(0, tableStart) + content.substring(tableEnd + 1);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Pipeline.jsx table');
