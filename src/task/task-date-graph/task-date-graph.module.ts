import { Module } from '@nestjs/common';
import { TaskDateGraphController } from './task-date-graph.controller';
import { TaskDateGraphService } from './task-date-graph.service';
import { PrismaService } from '@/prisma.service';
import { TaskDateGraphRepository } from '@/task/task-date-graph/db/repository/task-date-graph.repository'

@Module({
  controllers: [TaskDateGraphController],
  providers: [TaskDateGraphService, PrismaService, TaskDateGraphRepository]
})
export class TaskDateGraphModule {}
