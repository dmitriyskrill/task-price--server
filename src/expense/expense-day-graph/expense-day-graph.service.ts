import { Injectable } from '@nestjs/common'
// import {
// 	CreateExpenseDayGraphDto,
// 	UpdateExpenseDayGraphDto
// } from './dto/epenseDayGraph.dto'
import { ExpenseDayGraphRepository } from '@/expense/expense-day-graph/expense-day-graph.repository'
import { IExpenseDayGraph } from '@/domainTypes/ExpenseDayGraph.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ExpenseDayGraph } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'
import { generateSort } from '@/utils/generateSort'

@Injectable()
export class ExpenseDayGraphService {
	constructor(private readonly epenseDayGraphRepository: ExpenseDayGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.epenseDayGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.epenseDayGraphRepository.getById(id)
	}

	async create(dto: IExpenseDayGraph) {
		const baseEntity = <Partial<IExpenseDayGraph>>{
			sort: generateSort()
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.epenseDayGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<UserModel>) {
		return this.epenseDayGraphRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<ExpenseDayGraph>) {
		const baseEntity = <Partial<ExpenseDayGraph>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.epenseDayGraphRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.epenseDayGraphRepository.delete(id)
	}
}
