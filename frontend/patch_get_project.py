import re

with open('../backend_monorepo/apps/api/src/inventory/projects/inventory-projects.service.ts', 'r') as f:
    content = f.read()

old_include = """      include: {
        builder: true,
        towers: true,
        _count: { select: { towers: true, leads: true } },
      },"""

new_include = """      include: {
        builder: true,
        towers: true,
        projectAssignments: {
          include: {
            user: { select: { id: true, name: true, role: { select: { code: true } } } }
          }
        },
        _count: { select: { towers: true, leads: true } },
      },"""

content = content.replace(old_include, new_include)

with open('../backend_monorepo/apps/api/src/inventory/projects/inventory-projects.service.ts', 'w') as f:
    f.write(content)

print("Patched getProjectById")
