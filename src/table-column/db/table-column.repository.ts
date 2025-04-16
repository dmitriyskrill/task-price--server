import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { UpdateTableColumnDto } from '../dto/table-column.dto'
import { TableColumn } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ITableColumn } from '@/domainTypes/TableColumn.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class TableColumnRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.tableColumn.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.tableColumn.findUnique({
			where: { id }
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: Partial<ITableColumn>) {
		try {
			const url = 'http://localhost:3030/api/lkTableColumn/mappedToTaskPrice' // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const tableColumnList = response.data
			console.log('createManyFromOldDb', tableColumnList)
			return await this.prisma.tableColumn.createMany({
				data: tableColumnList.map((tableColumn: Partial<ITableColumn>) => ({
					...tableColumn,
					createdById,
					updatedById
				}))
			})
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ConflictException(
						`Unique constraint failed on the fields: ${error.meta.target}`
					)
				}
			}
			throw error
		}
	}

	async create(dto: TableColumn): Promise<TableColumn> {
		try {
			return await this.prisma.tableColumn.create({
				data: dto
			})
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ConflictException(
						`Unique constraint failed on the fields: ${error.meta.target}`
					)
				}
			}
			throw error
		}
	}

	async updateMany(filter: Record<string, any>, data: UpdateTableColumnDto) {
		return this.prisma.tableColumn.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TableColumn>) {
		return this.prisma.tableColumn.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.tableColumn.delete({
			where: { id }
		})
	}
}
