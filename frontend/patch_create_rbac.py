import re

with open('../backend_monorepo/apps/api/src/inventory/projects/projects.controller.ts', 'r') as f:
    content = f.read()

create_str = """  @Post()
  @Roles('ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER')
  async createProject("""
content = content.replace("  @Post()\\n  async createProject(", create_str)

with open('../backend_monorepo/apps/api/src/inventory/projects/projects.controller.ts', 'w') as f:
    f.write(content)

print("Patched createProject RBAC")
