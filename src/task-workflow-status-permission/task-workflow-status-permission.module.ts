import { Module } from '@nestjs/common';
import { TaskWorkflowStatusPermissionService } from './task-workflow-status-permission.service';
import { TaskWorkflowStatusPermissionController } from './task-workflow-status-permission.controller';
import { HttpModule } from '@nestjs/axios'
import { TaskWorkflowStatusPermissionRepository } from './db/task-workflow-status-permission.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [TaskWorkflowStatusPermissionController],
  providers: [TaskWorkflowStatusPermissionService, TaskWorkflowStatusPermissionRepository, PrismaService],
})
export class TaskWorkflowStatusPermissionModule {}
