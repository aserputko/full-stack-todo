import { Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetAllUsersUseCase {}

@QueryHandler(GetAllUsersUseCase)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersUseCase> {
  async execute(query: GetAllUsersUseCase) {
    Logger.log(`GetAllUsers: ${JSON.stringify(query)}`);

    return [1, 2, 3, 4];
  }
}
