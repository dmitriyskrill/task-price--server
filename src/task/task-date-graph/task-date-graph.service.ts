import { Injectable, NotFoundException } from '@nestjs/common'
import {
	TaskDateGraphDto,
	UpdateTaskDateGraphDto
} from './dto/task-date-graph.dto'
import { TaskDateGraphRepository } from '@/task/task-date-graph/db/repository/task-date-graph.repository'

@Injectable()
export class TaskDateGraphService {
	constructor(private taskDateGraphRepository: TaskDateGraphRepository) {}

	async create(taskDateGraphData: TaskDateGraphDto, taskId: string) {
		await this.taskDateGraphRepository.create(taskDateGraphData, taskId)
	}

	async update(taskDateGraphData: UpdateTaskDateGraphDto, id: string) {
		await this.taskDateGraphRepository.update(taskDateGraphData, id)
	}

	async delete(id: string) {
		await this.taskDateGraphRepository.delete(id)
	}

	async getAll() {
		await this.taskDateGraphRepository.getAll()
	}

	async getById(id: string) {
		await this.taskDateGraphRepository.getById(id)
	}
}
