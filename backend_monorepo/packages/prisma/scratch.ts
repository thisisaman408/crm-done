import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.updateMany({
    where: { name: 'Sales Executive 1' },
    data: { name: 'John Doe' }
  });
  await prisma.user.updateMany({
    where: { name: 'Sales Executive 2' },
    data: { name: 'Jane Smith' }
  });
  console.log("Updated users successfully");
}
main().catch(console.error).finally(() => prisma.$disconnect());
