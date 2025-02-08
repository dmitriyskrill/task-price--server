import { Injectable } from '@nestjs/common'
import { TaskDto, UpdateTaskDto } from '@/task/db/dto/task.dto'
import { TaskRepository } from '@/task/db/repository/task.repository'
import { Task } from '@prisma/client'

@Injectable()
export class TaskService {
	constructor(private readonly taskRepository: TaskRepository) {}

	async getAllTasks(): Promise<Task[]> {
		return this.taskRepository.getAllTasks()
	}

	async getAll(userId: string): Promise<Task[]> {
		return this.taskRepository.getAll(userId)
	}

	async create(dto: TaskDto, userId: string): Promise<Task> {
		return this.taskRepository.create(dto, userId)
	}

	update(dto: UpdateTaskDto, taskId: string, userId: string): Promise<Task> {
		return this.taskRepository.update(dto, taskId, userId)
	}

	async delete(taskId: string): Promise<Task> {
		return this.taskRepository.delete(taskId)
	}
}
