import { Module } from '@nestjs/common';
import { TaskWorkflowService } from './task-workflow.service';
import { TaskWorkflowController } from './task-workflow.controller';
import { HttpModule } from '@nestjs/axios'
import { TaskWorkflowRepository } from './db/task-workflow.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [TaskWorkflowController],
  providers: [TaskWorkflowService, TaskWorkflowRepository, PrismaService],
})
export class TaskWorkflowModule {}
