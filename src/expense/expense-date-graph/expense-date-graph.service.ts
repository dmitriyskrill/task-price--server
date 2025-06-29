import { Injectable } from '@nestjs/common'
import { ExpenseDateGraphRepository } from './db/expense-date-graph.repository'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ExpenseDateGraph } from '@prisma/client'

@Injectable()
export class ExpenseDateGraphService {
	constructor(private readonly expenseDateGraphRepository: ExpenseDateGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.expenseDateGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.expenseDateGraphRepository.getById(id)
	}

	async create(dto: any) {
		const baseEntity = <Partial<ExpenseDateGraph>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.expenseDateGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<ExpenseDateGraph>) {
		return this.expenseDateGraphRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<ExpenseDateGraph>) {
		const baseEntity = <Partial<ExpenseDateGraph>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.expenseDateGraphRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.expenseDateGraphRepository.delete(id)
	}
} 