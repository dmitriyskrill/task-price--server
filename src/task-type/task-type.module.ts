import { Module } from '@nestjs/common';
import { TaskTypeService } from './task-type.service';
import { TaskTypeController } from './task-type.controller';
import { HttpModule } from '@nestjs/axios'
import { TaskTypeRepository } from './db/task-type.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [TaskTypeController],
  providers: [TaskTypeService, TaskTypeRepository, PrismaService],
})
export class TaskTypeModule {}
