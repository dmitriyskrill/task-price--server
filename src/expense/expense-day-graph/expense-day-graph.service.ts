import { Injectable } from '@nestjs/common'
import { ExpenseDayGraphRepository } from './db/expense-day-graph.repository'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ExpenseDayGraph } from '@prisma/client'

@Injectable()
export class ExpenseDayGraphService {
	constructor(private readonly expenseDayGraphRepository: ExpenseDayGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.expenseDayGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.expenseDayGraphRepository.getById(id)
	}

	async create(dto: any) {
		const baseEntity = <Partial<ExpenseDayGraph>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.expenseDayGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<ExpenseDayGraph>) {
		return this.expenseDayGraphRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<ExpenseDayGraph>) {
		const baseEntity = <Partial<ExpenseDayGraph>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.expenseDayGraphRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.expenseDayGraphRepository.delete(id)
	}
} 