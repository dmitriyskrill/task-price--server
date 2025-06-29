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

	async getAll(): Promise<Task[]> {
		return this.taskRepository.getAll()
	}

	async create(dto: TaskDto): Promise<Task> {
		return this.taskRepository.create(dto)
	}

	update(dto: UpdateTaskDto, taskId: string): Promise<Task> {
		return this.taskRepository.update(dto, taskId)
	}

	async delete(taskId: string): Promise<Task> {
		return this.taskRepository.delete(taskId)
	}
}
