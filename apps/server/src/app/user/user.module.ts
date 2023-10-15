import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetAllUsersHandler } from './usecases/get-all-users.usecase';
import { GetUserHandler } from './usecases/get-user.usecase';
import { UserController } from './user.controller';

const UseCases = [GetAllUsersHandler, GetUserHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [...UseCases],
})
export class UserModule {}
