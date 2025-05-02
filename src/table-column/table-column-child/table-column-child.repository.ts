import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { UpdateTableColumnChildDto } from './dto/table-column-child.dto'
import { TableColumnChild } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class TableColumnChildRepository {
	constructor(private readonly prisma: PrismaService) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.tableColumnChild.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.tableColumnChild.findUnique({
			where: { id }
		})
	}

	async create(dto: TableColumnChild): Promise<TableColumnChild> {
		try {
			return await this.prisma.tableColumnChild.create({
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

	async updateMany(
		filter: Record<string, any>,
		data: UpdateTableColumnChildDto
	) {
		return this.prisma.tableColumnChild.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TableColumnChild>) {
		return this.prisma.tableColumnChild.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.tableColumnChild.delete({
			where: { id }
		})
	}
}
