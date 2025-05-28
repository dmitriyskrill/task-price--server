import { Module } from '@nestjs/common';
import { TaskStatusService } from './task-status.service';
import { TaskStatusController } from './task-status.controller';
import { HttpModule } from '@nestjs/axios'
import { TaskStatusRepository } from './db/task-status.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [TaskStatusController],
  providers: [TaskStatusService, TaskStatusRepository, PrismaService],
})
export class TaskStatusModule {}
