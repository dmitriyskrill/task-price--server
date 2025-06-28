import { Injectable } from '@nestjs/common'
// import {
// 	CreateExpenseDateGraphDto,
// 	UpdateExpenseDateGraphDto
// } from './dto/expenseDateGraph.dto'
import { ExpenseDateGraphRepository } from '@/expense/expense-date-graph/expense-date-graph.repository'
import { IExpenseDateGraph } from '@/domainTypes/ExpenseDateGraph.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ExpenseDateGraph } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'
import { generateSort } from '@/utils/generateSort'

@Injectable()
export class ExpenseDateGraphService {
	constructor(private readonly expenseDateGraphRepository: ExpenseDateGraphRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.expenseDateGraphRepository.get(filter)
	}


	async getById(id: string) {
		return this.expenseDateGraphRepository.getById(id)
	}

	async create(dto: IExpenseDateGraph) {
		const baseEntity = <Partial<IExpenseDateGraph>>{
			sort: generateSort(),
			endpoint: 'expense-date-graph'
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.expenseDateGraphRepository.create(newDto)
	}

	async patch(id: string, data: Partial<UserModel>) {
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
