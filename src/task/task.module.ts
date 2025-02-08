import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'
import { TaskRepository } from '@/task/db/repository/task.repository'

@Module({
	controllers: [TaskController],
	providers: [TaskService, TaskRepository, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
