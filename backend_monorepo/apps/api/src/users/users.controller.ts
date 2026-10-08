import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service.js';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('roles')
  async getRoles() {
    return this.usersService.getRoles();
  }

  @Patch(':id/manager')
  async assignManager(
    @Param('id') userId: string,
    @Body('managerId') managerId: string | null
  ) {
    return this.usersService.assignManager(userId, managerId);
  }
}
