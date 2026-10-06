const fs = require('fs');

// Fix Activities.jsx
let actPath = 'src/pages/Activities.jsx';
if (fs.existsSync(actPath)) {
    let actContent = fs.readFileSync(actPath, 'utf8');
    actContent = actContent.replace('                                        <th className="no-sort">Action</th>\n                                </thead>', '                                        <th className="no-sort">Action</th>\n                                    </tr>\n                                </thead>');
    fs.writeFileSync(actPath, actContent);
}

// Fix Companies.jsx missing closing div
let compPath = 'src/pages/Companies.jsx';
if (fs.existsSync(compPath)) {
    let compContent = fs.readFileSync(compPath, 'utf8');
    if (!compContent.includes('</div>\n    </>);')) {
        compContent = compContent.replace('    </>);', '        </div>\n    </>);');
        fs.writeFileSync(compPath, compContent);
    }
}

// Fix Pipeline.jsx missing closing div
let pipePath = 'src/pages/Pipeline.jsx';
if (fs.existsSync(pipePath)) {
    let pipeContent = fs.readFileSync(pipePath, 'utf8');
    if (!pipeContent.includes('</div>\n    </>);')) {
        pipeContent = pipeContent.replace('    </>);', '        </div>\n    </>);');
        fs.writeFileSync(pipePath, pipeContent);
    }
}

