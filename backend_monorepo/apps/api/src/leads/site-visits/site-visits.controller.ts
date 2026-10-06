import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
} from '@nestjs/common';
import { SiteVisitsService } from './site-visits.service.js';
import {
  CreateSiteVisitDto,
  UpdateSiteVisitDto,
  ArriveSiteVisitDto,
} from './dto/site-visit.dto.js';

@Controller('api/leads')
export class SiteVisitsController {
  constructor(private readonly siteVisitsService: SiteVisitsService) {}

  @Get(':id/site-visits')
  getSiteVisits(@Param('id') id: string) {
    return this.siteVisitsService.getSiteVisits(id);
  }

  @Post(':id/site-visits')
  async createSiteVisit(
    @Req() req: any,
    @Param('id') id: string,
    @Body() siteVisitData: CreateSiteVisitDto,
  ) {
    if (!siteVisitData.userId) {
      siteVisitData.userId = req.user?.id;
    }
    if (!siteVisitData.projectId || siteVisitData.projectId === 'project-placeholder') {
      const db = (this.siteVisitsService as any).prisma || (this.siteVisitsService as any).db || (this.siteVisitsService as any).prismaService;
      if (db) {
         const firstProject = await db.project.findFirst();
         if (firstProject) {
           siteVisitData.projectId = firstProject.id;
         }
      }
    }
    return this.siteVisitsService.createSiteVisit(id, siteVisitData);
  }

  @Patch('site-visits/:siteVisitId')
  updateSiteVisit(
    @Param('siteVisitId') siteVisitId: string,
    @Body() updateData: UpdateSiteVisitDto,
  ) {
    return this.siteVisitsService.updateSiteVisit(siteVisitId, updateData);
  }

  @Delete('site-visits/:siteVisitId')
  deleteSiteVisit(@Param('siteVisitId') siteVisitId: string) {
    return this.siteVisitsService.deleteSiteVisit(siteVisitId);
  }

  @Patch(':id/site-visits/:siteVisitId/arrive')
  arriveAtSiteVisit(
    @Param('siteVisitId') siteVisitId: string,
    @Body() locationData: ArriveSiteVisitDto,
  ) {
    return this.siteVisitsService.arriveAtSiteVisit(siteVisitId, locationData);
  }
}
