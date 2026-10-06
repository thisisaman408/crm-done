import re

with open('src/pages/generated/ProjectDetails.jsx', 'r') as f:
    content = f.read()

# Update the frontend check
old_check = "{['ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER'].includes(userRole) && ("
new_check = "{['ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER', 'SALES_MANAGER'].includes(userRole) && ("

content = content.replace(old_check, new_check)

with open('src/pages/generated/ProjectDetails.jsx', 'w') as f:
    f.write(content)
print("Patched frontend")
