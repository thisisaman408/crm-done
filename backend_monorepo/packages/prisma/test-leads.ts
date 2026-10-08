import { PrismaClient } from './generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getFullYear(), now.getMonth(), 1); // This is what the code uses for 'monthly'
  console.log("Date filter:", thirtyDaysAgo);

  const totalLeads = await prisma.lead.count();
  console.log("Total leads in DB:", totalLeads);

  const totalActiveLeadsLast30Days = await prisma.lead.count({
    where: {
      status: { not: 'LOST' },
      updatedAt: { gte: thirtyDaysAgo }
    }
  });
  console.log("Total non-lost leads updated in current month (Director view):", totalActiveLeadsLast30Days);
  
  // To get the pre-sales manager we used "admin@demo.com" or the other user? 
  // We'll just check how many are assigned to active users.
  const activeUsers = await prisma.user.findMany({ where: { status: 'ACTIVE' }, select: { id: true } });
  const activeUserIds = activeUsers.map(u => u.id);

  const totalAssignedToActive = await prisma.lead.count({
    where: {
      assignedUserId: { in: activeUserIds },
      status: { not: 'LOST' },
      updatedAt: { gte: thirtyDaysAgo }
    }
  });
  console.log("Total non-lost leads assigned to ACTIVE users updated in current month:", totalAssignedToActive);
  
  const preSalesManager = await prisma.user.findFirst({ where: { email: 'pre.sales@demo.com' } });
  if (preSalesManager) {
    const subs = await prisma.user.findMany({ where: { managerId: preSalesManager.id, status: 'ACTIVE' }, select: { id: true } });
    const userIds = [preSalesManager.id, ...subs.map(s => s.id)];
    const totalPreSales = await prisma.lead.count({
      where: {
        assignedUserId: { in: userIds },
        status: { not: 'LOST' },
        updatedAt: { gte: thirtyDaysAgo }
      }
    });
    console.log("Total non-lost leads for Pre-Sales Manager (pre.sales@demo.com):", totalPreSales);
  }

}

main().catch(console.error).finally(() => prisma.$disconnect());
