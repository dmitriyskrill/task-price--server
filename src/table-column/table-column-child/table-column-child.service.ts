import { TableColumnChildRepository } from '@/table-column/table-column-child/table-column-child.repository'
import { ITableColumnChild } from '@/domainTypes/TableColumn.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TableColumnChild } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TableColumnChildService {
	constructor(private readonly tableColumnChildRepository: TableColumnChildRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.tableColumnChildRepository.get(filter)
	}

	// async createManyFromOldDb({ createdById, updatedById }: Partial<ITableColumnChild>) {
	// 	return this.tableColumnChildRepository.createManyFromOldDb({ createdById, updatedById })
	// }

	async getById(id: string) {
		return this.tableColumnChildRepository.getById(id)
	}

	async create(dto: ITableColumnChild) {
		const baseEntity = <Partial<TableColumnChild>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnChildRepository.create(newDto)
	}

	async patch(id: string, data: Partial<UserModel>) {
		return this.tableColumnChildRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<TableColumnChild>) {
		const baseEntity = <Partial<TableColumnChild>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.tableColumnChildRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.tableColumnChildRepository.delete(id)
	}
}
