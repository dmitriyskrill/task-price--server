import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
// import { UpdateTableColumnGroupDto } from '../dto/table-column.dto'
import { TableColumnGroup } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { includeRelationsWithOnlyId } from '@/utils/db.util'

@Injectable()
export class TableColumnGroupRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.tableColumnGroup.findMany({
			where: filter,
		})
	}

	async getById(id: string) {
		return this.prisma.tableColumnGroup.findUnique({
			where: { id }
		})
	}

	async create(dto: TableColumnGroup): Promise<TableColumnGroup> {
		try {
			return await this.prisma.tableColumnGroup.create({
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

	async updateMany(filter: Record<string, any>, data: any) {
		return this.prisma.tableColumnGroup.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TableColumnGroup>) {
		return this.prisma.tableColumnGroup.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.tableColumnGroup.delete({
			where: { id }
		})
	}
}
