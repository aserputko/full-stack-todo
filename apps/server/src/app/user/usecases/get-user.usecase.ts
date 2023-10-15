import { Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

export class GetUserUseCase {
  constructor(public readonly id: string) {}
}

@QueryHandler(GetUserUseCase)
export class GetUserHandler implements IQueryHandler<GetUserUseCase> {
  async execute(query: GetUserUseCase) {
    Logger.log(`GetUser: ${JSON.stringify(query)}`);

    return query.id;
  }
}
