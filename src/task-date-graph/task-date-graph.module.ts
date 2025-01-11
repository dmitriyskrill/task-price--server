import { Module } from '@nestjs/common';
import { TaskDateGraphController } from './task-date-graph.controller';
import { TaskDateGraphService } from './task-date-graph.service';
import { PrismaService } from '@/prisma.service';

@Module({
  controllers: [TaskDateGraphController],
  providers: [TaskDateGraphService, PrismaService]
})
export class TaskDateGraphModule {}
