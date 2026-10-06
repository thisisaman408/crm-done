import re
with open('../backend_monorepo/apps/api/src/auth/users.controller.ts', 'r') as f:
    content = f.read()

new_endpoint = """
  @Get()
  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: { select: { code: true, name: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  @Get('subordinates')
"""

content = content.replace("  @Get('subordinates')", new_endpoint)

with open('../backend_monorepo/apps/api/src/auth/users.controller.ts', 'w') as f:
    f.write(content)
