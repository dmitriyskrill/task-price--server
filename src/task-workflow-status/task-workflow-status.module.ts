import { Module } from '@nestjs/common';
import { TaskWorkflowStatusService } from './task-workflow-status.service';
import { TaskWorkflowStatusController } from './task-workflow-status.controller';
import { HttpModule } from '@nestjs/axios'
import { TaskWorkflowStatusRepository } from './db/task-workflow-status.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [TaskWorkflowStatusController],
  providers: [TaskWorkflowStatusService, TaskWorkflowStatusRepository, PrismaService],
})
export class TaskWorkflowStatusModule {}
