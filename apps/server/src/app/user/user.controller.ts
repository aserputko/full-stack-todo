import { Controller, Get, Param, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllUsersUseCase } from './usecases/get-all-users.usecase';
import { GetUserUseCase } from './usecases/get-user.usecase';

@Controller('users')
export class UserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getAll(@Query() paginationQuery: any): Promise<number[]> {
    const query = new GetAllUsersUseCase();
    return await this.queryBus.execute(query);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<string> {
    const query = new GetUserUseCase(id);
    return await this.queryBus.execute(query);
  }
}
