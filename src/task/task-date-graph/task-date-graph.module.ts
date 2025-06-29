import { Module } from '@nestjs/common';
import { TaskDateGraphController } from './task-date-graph.controller';
import { TaskDateGraphService } from './task-date-graph.service';
import { PrismaService } from '../../prisma.service';
import { TaskDateGraphRepository } from '@/task/task-date-graph/db/task-date-graph.repository'

@Module({
  controllers: [TaskDateGraphController],
  providers: [TaskDateGraphService, TaskDateGraphRepository, PrismaService]
})
export class TaskDateGraphModule {} 