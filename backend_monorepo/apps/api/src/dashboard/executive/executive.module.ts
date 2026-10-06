import { Module } from '@nestjs/common';
import { ExecutiveDashboardController } from './executive-dashboard.controller.js';
import { ExecutiveDashboardService } from './executive-dashboard.service.js';
import { PrismaModule } from '../../lib/database/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [ExecutiveDashboardController],
  providers: [ExecutiveDashboardService],
})
export class ExecutiveDashboardModule {}
