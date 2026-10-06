import re

with open('../backend_monorepo/apps/api/src/inventory/projects/projects.controller.ts', 'r') as f:
    content = f.read()

# Make sure RolesGuard and Roles decorator are imported
if "import { RolesGuard" not in content:
    content = content.replace("import { AuthGuard } from '@thallesp/nestjs-better-auth';", "import { AuthGuard } from '@thallesp/nestjs-better-auth';\\nimport { RolesGuard } from '../../auth/guards/roles.guard.js';\\nimport { Roles } from '../../auth/roles.decorator.js';")

# Add UseGuards(AuthGuard, RolesGuard) to the Controller or specifically to the endpoints.
# The controller already has @UseGuards(AuthGuard). Let's change it to @UseGuards(AuthGuard, RolesGuard)
content = content.replace("@UseGuards(AuthGuard)", "@UseGuards(AuthGuard, RolesGuard)")

# Now add @Roles('ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER') to updateProject and assignProject
patch_str = """  @Patch(':projectId')
  @Roles('ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER')
  async updateProject("""
content = content.replace("  @Patch(':projectId')\\n  async updateProject(", patch_str)

assign_str = """  @Post(':projectId/assign')
  @Roles('ADMIN', 'SOURCING_MANAGER', 'CLOSING_MANAGER')
  async assignProject("""
content = content.replace("  @Post(':projectId/assign')\\n  async assignProject(", assign_str)

with open('../backend_monorepo/apps/api/src/inventory/projects/projects.controller.ts', 'w') as f:
    f.write(content)

print("Patched RBAC for projects.controller.ts")
