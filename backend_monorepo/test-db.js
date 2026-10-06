import { PrismaClient } from './packages/prisma/dist/index.js';
const prisma = new PrismaClient();
async function test() {
  const t1 = Date.now();
  console.log('Fetching projects...');
  const res = await prisma.project.findMany();
  console.log('Took', Date.now() - t1, 'ms');
  console.log('Projects:', res.length);
}
test().finally(() => prisma.$disconnect());
