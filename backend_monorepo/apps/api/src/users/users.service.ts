import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../lib/database/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phoneNumber: true,
        roleId: true,
        managerId: true,
        status: true,
        createdAt: true,
        role: {
          select: {
            id: true,
            code: true,
            name: true,
          }
        },
        manager: {
          select: {
            id: true,
            name: true,
            email: true,
            role: {
              select: { code: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async getRoles() {
    return this.prisma.role.findMany();
  }

  async assignManager(userId: string, managerId: string | null) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    return this.prisma.user.update({
      where: { id: userId },
      data: { managerId },
      include: {
        role: true,
        manager: true
      }
    });
  }
}
