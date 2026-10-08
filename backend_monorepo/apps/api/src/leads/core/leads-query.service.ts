import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../lib/database/prisma.service.js';
import { Prisma, LeadStatus } from '@resyl/prisma';
import { GetLeadsFilterDto } from './dto/lead.dto.js';
import Groq from 'groq-sdk';

const SE_VISIBLE_STATUSES: LeadStatus[] = [
  'SITE_VISIT_SCHEDULED',
  'SITE_VISIT_COMPLETED',
  'NEGOTIATION',
  'BOOKING',
];

@Injectable()
export class LeadsQueryService {
  constructor(private prisma: PrismaService) {}

  async getGlobalActivities(userId: string, roleCode: string) {
    const [calls, visits, followUps] = await Promise.all([
      this.prisma.callRecord.findMany({
        take: 20,
        orderBy: { createdAt: 'desc' },
        include: { lead: { select: { firstName: true, lastName: true, assignedUserId: true } } },
      }),
      this.prisma.siteVisit.findMany({
        take: 20,
        orderBy: { createdAt: 'desc' },
        include: { lead: { select: { firstName: true, lastName: true } }, salesExec: { select: { name: true } } },
      }),
      this.prisma.followUp.findMany({
        take: 20,
        orderBy: { createdAt: 'desc' },
        include: { lead: { select: { firstName: true, lastName: true } }, user: { select: { name: true, username: true, displayUsername: true } } },
      })
    ]);

    const activities = [
      ...calls.map(c => ({
        id: c.id,
        type: 'Call',
        title: `Call with ${c.lead?.firstName || 'Unknown'}`,
        status: (c.duration || 0) > 0 ? 'Completed' : 'Missed',
        date: c.createdAt,
        owner: 'System',
        ownerId: c.lead?.assignedUserId,
        leadId: c.leadId,
        notes: (c as any).recordingUrl ? 'Recording available' : 'Call log'
      })),
      ...visits.map(v => ({
        id: v.id,
        type: 'Meeting',
        title: `Site Visit with ${v.lead?.firstName || 'Unknown'}`,
        status: v.status,
        date: v.scheduledDate,
        owner: v.salesExec?.name || 'Unassigned',
        ownerId: v.salesExecId,
        leadId: v.leadId,
        notes: v.meetingNotes || ''
      })),
      ...followUps.map(f => ({
        id: f.id,
        type: 'Task',
        title: `Follow up with ${f.lead?.firstName || 'Unknown'}`,
        status: f.status,
        date: f.scheduledDate,
        owner: (f as any).user?.name || (f as any).user?.displayUsername || (f as any).user?.username || 'Unassigned',
        ownerId: f.userId,
        leadId: f.leadId,
        notes: f.remarks || ''
      }))
    ];

    return activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getAiRecommendations(userId: string, roleCode: string) {
    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return [
        {
          title: "Setup Required",
          description: "Please configure GROQ_API_KEY in .env to enable AI recommendations.",
          action: "Configure API Key",
          type: "warning"
        }
      ];
    }

    try {
      // Get some recent activities and open leads as context
      const recentActivities = await this.getGlobalActivities(userId, roleCode);
      const openTasks = recentActivities.filter(a => a.status !== 'COMPLETED' && a.status !== 'Completed');
      const topTasks = openTasks.slice(0, 5); // Limit context size

      const contextData = topTasks.map(t => `${t.type} regarding ${t.title} (Status: ${t.status}, Date: ${new Date(t.date).toLocaleDateString()})`).join('\n');

      const prompt = `You are an AI sales assistant for a real estate CRM. 
Based on the following open activities, generate 3 highly actionable next steps for the user.
Open Activities Context:
${contextData || "No open activities right now."}

Return ONLY a raw JSON array of 3 objects (no markdown, no backticks). Each object must have:
- title: string (short actionable title, e.g., "Call John Doe")
- description: string (why to do it, e.g., "Follow up on yesterday's site visit")
- action: string (action text, e.g., "Send email")
- type: string (one of: 'primary', 'success', 'warning')

Output JSON ONLY.`;

      const groq = new Groq({ apiKey: groqApiKey });
      const completion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'openai/gpt-oss-20b',
        temperature: 0.2,
      });

      const responseText = completion.choices[0]?.message?.content || '[]';
      
      // Clean potential markdown blocks
      const cleanedJson = responseText.replace(/```json/gi, '').replace(/```/gi, '').trim();
      
      const recommendations = JSON.parse(cleanedJson);
      return Array.isArray(recommendations) ? recommendations : [];
    } catch (error) {
      console.error('Groq AI Recommendation Error:', error);
      return [
        {
          title: "AI Service Unavailable",
          description: "Could not generate recommendations at this time.",
          action: "Try again later",
          type: "warning"
        }
      ];
    }
  }

  async findAll(filters?: GetLeadsFilterDto) {
    const where: Prisma.LeadWhereInput = {};

    if (filters?.assignedToId) {
      const assignedUser = await this.prisma.user.findUnique({
        where: { id: filters.assignedToId },
        include: { role: true },
      });
      if (assignedUser?.role?.code === 'POST_SALES') {
        where.customer = {
          bookings: {
            some: {
              assignedPostSalesId: filters.assignedToId,
              source: 'DIRECT',
            },
          },
        };
      } else {
        where.assignedUserId = filters.assignedToId;
      }
    } else if (filters?.roleId && filters?.userId) {
      const role = await this.prisma.role.findUnique({
        where: { id: filters.roleId },
      });

      if (role?.code === 'PRE_SALES') {
        where.assignedUserId = filters.userId;
      } else if (role?.code === 'PRE_SALES_MANAGER') {
        if (filters.managerUnassigned) {
          where.OR = [
            { assignedUserId: filters.userId },
            { assignedUserId: null },
          ];
        } else {
          const subordinates = await this.prisma.user.findMany({
            where: { managerId: filters.userId },
            select: { id: true },
          });
          const subordinateIds = subordinates.map((s) => s.id);
          where.assignedUserId = { in: subordinateIds };
        }
      } else if (role?.code === 'SALES_MANAGER') {
        const subordinates = await this.prisma.user.findMany({
          where: { managerId: filters.userId },
          select: { id: true },
        });
        const subordinateIds = subordinates.map((s) => s.id);
        where.status = { in: SE_VISIBLE_STATUSES };
        where.OR = [
          { siteVisits: { some: { salesExecId: { in: subordinateIds } } } },
          { assignedUserId: { in: subordinateIds } },
        ];
        where.NOT = [
          { status: 'BOOKING', subStatus: 'DONE' },
          { customer: { bookings: { some: { status: 'CONFIRMED' } } } },
        ];
      } else if (role?.code === 'SALES_EXECUTIVE') {
        const assignments = await this.prisma.projectAssignment.findMany({
          where: { userId: filters.userId, isActive: true },
          select: { projectId: true },
        });
        const projectIds = assignments.map((a) => a.projectId);

        where.status = { in: SE_VISIBLE_STATUSES };
        where.OR = [
          { siteVisits: { some: { projectId: { in: projectIds } } } },
          { assignedUserId: filters.userId },
        ];
        where.NOT = [
          { status: 'BOOKING', subStatus: 'DONE' },
          { customer: { bookings: { some: { status: 'CONFIRMED' } } } },
        ];
      } else if (role?.code === 'CLOSING_MANAGER') {
        where.OR = [
          { createdById: filters.userId },
          { assignedUserId: filters.userId },
        ];
      } else if (role?.code === 'SOURCING_MANAGER') {
        where.OR = [
          { createdById: filters.userId },
          { broker: { sourcingManagerId: filters.userId } },
        ];
      } else if (role?.code === 'CHANNEL_PARTNER') {
        const subordinates = await this.prisma.user.findMany({
          where: { managerId: filters.userId },
          select: { id: true },
        });
        const subordinateIds = subordinates.map((s) => s.id);
        where.OR = [
          { createdById: { in: subordinateIds } },
          { assignedUserId: { in: subordinateIds } },
          { broker: { sourcingManagerId: { in: subordinateIds } } },
        ];
      } else if (role?.code === 'POST_SALES') {
        where.customer = {
          bookings: {
            some: { assignedPostSalesId: filters.userId, source: 'DIRECT' },
          },
        };
      } else if (role?.code === 'POST_SALES_MANAGER') {
        where.customer = { bookings: { some: { source: 'DIRECT' } } };
      }
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.followUpDate) {
      const date = new Date(filters.followUpDate + 'T00:00:00');
      if (!isNaN(date.getTime())) {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        where.nextFollowUpDate = { gte: date, lt: nextDay };
      }
    }

    if (filters?.siteVisitDate) {
      const svDate = new Date(filters.siteVisitDate + 'T00:00:00');
      if (!isNaN(svDate.getTime())) {
        const svNextDay = new Date(svDate);
        svNextDay.setDate(svDate.getDate() + 1);
        where.siteVisits = {
          some: {
            scheduledDate: { gte: svDate, lt: svNextDay },
          },
        };
      }
    }

    if (filters?.scoreRange) {
      if (filters.scoreRange === '0-60') {
        where.score = { gte: 0, lte: 60 };
      } else if (filters.scoreRange === '60-80') {
        where.score = { gt: 60, lte: 80 };
      } else if (filters.scoreRange === '80-100') {
        where.score = { gt: 80, lte: 100 };
      }
    }

    if (filters?.isCpProject !== undefined) {
      where.interestedProject = { isCpProject: filters.isCpProject };
    }

    const leads = await this.prisma.lead.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        phone: true,
        status: true,
        subStatus: true,
        score: true,
        lastContactDate: true,
        nextFollowUpDate: true,
        createdAt: true,
        assignedUser: {
          select: { id: true, name: true, username: true },
        },
        interestedProject: {
          select: { id: true, name: true, slug: true },
        },
        siteVisits: {
          orderBy: { scheduledDate: 'desc' },
          take: 1,
          select: {
            scheduledDate: true,
            status: true,
            completedAt: true,
            projectId: true,
            salesExec: { select: { name: true, username: true } },
          },
        },
        followUps: {
          orderBy: { scheduledDate: 'desc' },
          take: 1,
          select: { scheduledDate: true, status: true },
        },
        customer: {
          select: {
            bookings: {
              select: {
                unit: {
                  select: {
                    constructionStatus: true,
                    possessionTimeline: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return leads.map((lead) => {
      const latestSV = lead.siteVisits.length > 0 ? lead.siteVisits[0] : null;
      const latestFollowUp =
        lead.followUps.length > 0 ? lead.followUps[0] : null;
      return {
        id: lead.id,
        firstName: lead.firstName,
        lastName: lead.lastName,
        phone: lead.phone,
        status: lead.status,
        subStatus: lead.subStatus,
        score: lead.score,
        lastContactDate: lead.lastContactDate,
        nextFollowUpDate:
          lead.nextFollowUpDate || latestFollowUp?.scheduledDate || null,
        createdAt: lead.createdAt,
        assignedUser: lead.assignedUser,
        interestedProject: (lead as any).interestedProject || null,
        latestSiteVisit: latestSV,
        siteVisitScheduledDate: latestSV?.scheduledDate ?? null,
        siteVisitCompletedDate: latestSV?.completedAt ?? null,
        latestFollowUp: latestFollowUp,
        processionStatus:
          lead.customer?.bookings?.[0]?.unit?.constructionStatus || null,
        processionTimeline:
          lead.customer?.bookings?.[0]?.unit?.possessionTimeline || null,
      };
    });
  }

  async findOne(id: string, userId?: string, roleId?: string) {
    const where: Prisma.LeadWhereUniqueInput = { id };

    if (roleId && userId) {
      const role = await this.prisma.role.findUnique({ where: { id: roleId } });
      if (role?.code === 'PRE_SALES') {
        where.assignedUserId = userId;
      } else if (role?.code === 'PRE_SALES_MANAGER') {
        const subordinates = await this.prisma.user.findMany({
          where: { managerId: userId },
          select: { id: true },
        });
        const subordinateIds = subordinates.map((s) => s.id);
        where.assignedUserId = { in: subordinateIds };
      } else if (role?.code === 'SALES_EXECUTIVE') {
        where.OR = [
          { assignedUserId: userId },
          { siteVisits: { some: { salesExecId: userId } } },
          { customer: { bookings: { some: { salesExecId: userId } } } },
        ];
      } else if (role?.code === 'SALES_MANAGER') {
        const subordinates = await this.prisma.user.findMany({
          where: { managerId: userId },
          select: { id: true },
        });
        const subordinateIds = subordinates.map((s) => s.id);
        where.OR = [
          { siteVisits: { some: { salesExecId: { in: subordinateIds } } } },
          {
            customer: {
              bookings: { some: { salesExecId: { in: subordinateIds } } },
            },
          },
        ];
      } else if (role?.code === 'CLOSING_MANAGER') {
        where.OR = [{ createdById: userId }, { assignedUserId: userId }];
      } else if (role?.code === 'SOURCING_MANAGER') {
        where.OR = [
          { createdById: userId },
          { broker: { sourcingManagerId: userId } },
        ];
      } else if (role?.code === 'CHANNEL_PARTNER') {
        const subordinates = await this.prisma.user.findMany({
          where: { managerId: userId },
          select: { id: true },
        });
        const subordinateIds = subordinates.map((s) => s.id);
        where.OR = [
          { createdById: { in: subordinateIds } },
          { assignedUserId: { in: subordinateIds } },
          { broker: { sourcingManagerId: { in: subordinateIds } } },
        ];
      } else if (role?.code === 'POST_SALES') {
        where.customer = {
          bookings: { some: { assignedPostSalesId: userId, source: 'DIRECT' } },
        };
      } else if (role?.code === 'POST_SALES_MANAGER') {
        where.customer = { bookings: { some: { source: 'DIRECT' } } };
      }
    }

    const lead = await this.prisma.lead.findFirst({
      where: where as any,
      include: {
        source: true,
        interestedProject: true,
        interestedTower: true,
        interestedUnit: true,
        broker: true,
        assignedUser: true,
        customer: {
          include: {
            bookings: {
              include: { unit: true },
            },
          },
        },
        siteVisits: {
          orderBy: { scheduledDate: 'desc' },
          include: { project: true },
        },
        followUps: {
          orderBy: { scheduledDate: 'desc' },
        },
        notes: {
          orderBy: { createdAt: 'desc' },
          include: {
            user: { select: { username: true, displayUsername: true } },
          },
        },
        callRecords: {
          orderBy: { startedAt: 'desc' },
        },
      },
    });

    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }

    if (lead.callRecords) {
      lead.callRecords = lead.callRecords.map((cr) => {
        if (cr.recordingUrl && cr.recordingUrl.includes('vercel-storage.com')) {
          cr.recordingUrl = `/api/leads/call-records/${cr.id}/audio`;
        }
        return cr;
      });
    }

    const result: any = lead;
    result.processionStatus =
      lead.customer?.bookings?.[0]?.unit?.constructionStatus || null;
    result.processionTimeline =
      lead.customer?.bookings?.[0]?.unit?.possessionTimeline || null;

    return result;
  }
}
