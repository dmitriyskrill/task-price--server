import { PrismaService } from '@/prisma.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TaskModule } from '@/task/task.module';
import { UserRepository } from '@/user/db/repository/user.repository'

@Module({
  imports: [TaskModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
  exports: [UserService],
})
export class UserModule {}
