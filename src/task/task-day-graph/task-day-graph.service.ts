import { Injectable } from '@nestjs/common'
import { TaskDayGraphRepository } from './db/task-day-graph.repository'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskDayGraph } from '@prisma/client'

@Injectable()
export class TaskDayGraphService {
	constructor(private readonly taskDayGraphRepository: TaskDayGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.taskDayGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.taskDayGraphRepository.getById(id)
	}

	async create(dto: any) {
		const baseEntity = <Partial<TaskDayGraph>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.taskDayGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<TaskDayGraph>) {
		return this.taskDayGraphRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<TaskDayGraph>) {
		const baseEntity = <Partial<TaskDayGraph>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.taskDayGraphRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.taskDayGraphRepository.delete(id)
	}
}
