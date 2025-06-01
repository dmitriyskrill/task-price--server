import { generateSort } from '@/utils/generateSort'

export class TableColumnGroupGroupService {}
import { Injectable } from '@nestjs/common'
import { TableColumnGroupRepository } from '@/table-column/table-column-group/table-column-group.repository'
import { ITableColumnGroup } from '@/domainTypes/TableColumnGroup.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TableColumnGroup } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TableColumnGroupService {
	constructor(private readonly tableColumnGroupRepository: TableColumnGroupRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.tableColumnGroupRepository.get(filter)
	}

	async getById(id: string) {
		return this.tableColumnGroupRepository.getById(id)
	}

	async create(dto: ITableColumnGroup) {
		const baseEntity = <Partial<TableColumnGroup>>{
			sort: generateSort()
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnGroupRepository.create(newDto)
	}

	async patch(id: string, data: Partial<UserModel>) {
		return this.tableColumnGroupRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<TableColumnGroup>) {
		const baseEntity = <Partial<TableColumnGroup>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.tableColumnGroupRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.tableColumnGroupRepository.delete(id)
	}
}
