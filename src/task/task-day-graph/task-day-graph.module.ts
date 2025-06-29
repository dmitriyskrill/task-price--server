import { Module } from '@nestjs/common';
import { TaskDayGraphController } from './task-day-graph.controller';
import { TaskDayGraphService } from './task-day-graph.service';
import { PrismaService } from '../../prisma.service';
import { TaskDayGraphRepository } from '@/task/task-day-graph/db/task-day-graph.repository'

@Module({
  controllers: [TaskDayGraphController],
  providers: [TaskDayGraphService, TaskDayGraphRepository, PrismaService]
})
export class TaskDayGraphModule {}
