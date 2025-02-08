import { Module } from '@nestjs/common';
import { TaskDayGraphController } from './task-day-graph.controller';
import { TaskDayGraphService } from './task-day-graph.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [TaskDayGraphController],
  providers: [TaskDayGraphService, PrismaService]
})
export class TaskDayGraphModule {}
