import re
with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

start_pattern = r'<div className="card mb-3">'
end_pattern = r'</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>\s*</div\s*>'
# Instead of guessing the closing tags, I can just use a stack parser or simple substring!
# Wait, I know `div className="card mb-3"` starts at line 290.
