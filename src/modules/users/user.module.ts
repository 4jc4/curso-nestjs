import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { PrismaService } from '../../infra/database/prisma.service';
import { IUserRepository } from './repositories/user.repository';
import { UserPrismaRepository } from './repositories/prisma/user.prisma.repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
