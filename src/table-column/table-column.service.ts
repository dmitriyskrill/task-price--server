import { Injectable } from '@nestjs/common';
import { CreateTableColumnDto, UpdateTableColumnDto } from './dto/table-column.dto';
import { TableColumnRepository } from '@/table-column/db/table-column.repository';
import { ITableColumn } from '@/domainTypes/TableColumn.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TableColumn } from '@prisma/client'

@Injectable()
export class TableColumnService {
	constructor(private readonly tableColumnRepository: TableColumnRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.tableColumnRepository.get(filter);
	}

	async getById(id: string) {
		return this.tableColumnRepository.getById(id);
	}

	async create(dto: ITableColumn) {
		const baseEntity = <Partial<TableColumn>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnRepository.create(newDto);
	}

	async updateMany(filter: Record<string, any>, update: Partial<TableColumn>) {
		const  baseEntity = <Partial<TableColumn>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.tableColumnRepository.updateMany(filter, newDto);
	}

	async delete(id: string) {
		return this.tableColumnRepository.delete(id);
	}
}
