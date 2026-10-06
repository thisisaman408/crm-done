const fs = require('fs');
const file = '/Users/thisisaman408/Downloads/crms/app/frontend/src/pages/Chat.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the 9 divs with 8 divs at the end of the file.
content = content.replace(/<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*\);\n};/g, '</div>\n                                        </div>\n\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n    );\n};');

fs.writeFileSync(file, content);
console.log("Fixed divs");
