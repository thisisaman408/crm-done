import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../lib/database/prisma.service.js';

@Injectable()
export class ExecutiveDashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getExecutiveDashboard(userId: string) {
    // Basic aggregation queries for the Executive Dashboard
    
    // 1. Sales Revenue (Sum of all confirmed bookings' agreed price)
    const bookings = await this.prisma.booking.aggregate({
      _sum: { agreedPrice: true },
      where: { status: { not: 'CANCELLED' } }
    });
    const totalRevenue = bookings._sum.agreedPrice ? Number(bookings._sum.agreedPrice) : 0;

    // 2. New Customers (Count of customers created in last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newCustomers = await this.prisma.customer.count({
      where: { createdAt: { gte: thirtyDaysAgo } }
    });
    
    const totalCustomers = await this.prisma.customer.count();

    // 3. Activity Count (Emails, Calls, Meetings)
    const calls = await this.prisma.callRecord.count();
    const emails = await this.prisma.emailConversation.count();
    const meetings = await this.prisma.siteVisit.count();

    // 4. Pipeline Stages (Prospecting, Qualification, Negotiation, Closing)
    const pipeline = {
      prospecting: await this.prisma.lead.count({ where: { status: 'NEW' } }),
      qualification: await this.prisma.lead.count({ where: { status: 'CONTACTED' } }),
      proposal: await this.prisma.lead.count({ where: { status: 'INTERESTED' } }),
      negotiation: await this.prisma.lead.count({ where: { status: 'NEGOTIATION' } }),
      closing: await this.prisma.lead.count({ where: { status: 'BOOKING' } })
    };

    // 5. Executives Overview (Users with their bookings)
    const executives = await this.prisma.user.findMany({
      where: { role: { code: 'SALES_EXECUTIVE' } },
      select: {
        id: true,
        name: true,
        image: true,
        salesExecBookings: {
          select: { agreedPrice: true }
        }
      },
      take: 5
    });

    const formattedExecutives = executives.map(exec => {
      const dealsClosed = exec.salesExecBookings.length;
      const revenue = exec.salesExecBookings.reduce((sum, b) => sum + Number(b.agreedPrice || 0), 0);
      return {
        id: exec.id,
        name: exec.name || 'Unknown',
        image: exec.image,
        dealsClosed,
        revenue,
        conversion: 'N/A', // Compute based on leads if needed
        status: dealsClosed > 0 ? 'Active' : 'Idle'
      };
    });

    return {
      financial: {
        revenue: totalRevenue,
        newCustomers,
        totalCustomers,
        targetAchievement: 68, // Hardcoded target for now
        profitMargin: 40 // Hardcoded profit for now
      },
      activities: {
        calls,
        emails,
        meetings
      },
      pipeline,
      executives: formattedExecutives
    };
  }
}
