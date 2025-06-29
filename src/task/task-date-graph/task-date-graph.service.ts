import { Injectable } from '@nestjs/common'
import { TaskDateGraphRepository } from './db/task-date-graph.repository'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskDateGraph } from '@prisma/client'

@Injectable()
export class TaskDateGraphService {
	constructor(private readonly taskDateGraphRepository: TaskDateGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.taskDateGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.taskDateGraphRepository.getById(id)
	}

	async create(dto: any) {
		const baseEntity = <Partial<TaskDateGraph>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.taskDateGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<TaskDateGraph>) {
		return this.taskDateGraphRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<TaskDateGraph>) {
		const baseEntity = <Partial<TaskDateGraph>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.taskDateGraphRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.taskDateGraphRepository.delete(id)
	}
} 