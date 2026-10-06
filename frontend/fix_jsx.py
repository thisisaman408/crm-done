import re

with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

# Fix unclosed img tags
content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', content)

# Fix unclosed input tags
content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', content)

# Fix unclosed br tags
content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', content)

# Fix unclosed hr tags
content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', content)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)
