import { prismaClient as prisma } from './src/index.js';
async function main() {
  const projects = await prisma.project.findMany();
  console.log(JSON.stringify(projects, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());
