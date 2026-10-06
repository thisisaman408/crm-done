import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../lib/database/prisma.service.js';
import { AuthGuard } from '@thallesp/nestjs-better-auth';

@Controller('api/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}


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

  async getSubordinates(@Req() req: any) {
    const userId = req.user?.id;
    return this.prisma.user.findMany({
      where: { managerId: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: { select: { code: true, name: true } },
      },
      orderBy: { name: 'asc' },
    });
  }
}
