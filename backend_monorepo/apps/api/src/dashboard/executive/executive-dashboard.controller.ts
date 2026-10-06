import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ExecutiveDashboardService } from './executive-dashboard.service.js';

@Controller('api/dashboard/executive')
export class ExecutiveDashboardController {
  constructor(private readonly executiveService: ExecutiveDashboardService) {}

  @Get()
  getDashboard(@Req() req: any) {
    // In a real app, you might extract req.user?.id for logging or RLS
    const userId = req.user?.id || 'admin';
    return this.executiveService.getExecutiveDashboard(userId);
  }
}
