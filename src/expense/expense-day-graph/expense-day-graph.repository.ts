import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
//import { UpdateExpenseDayGraphDto } from '@/expenseDayGraph/dto/expenseDayGraph.dto'
import { ExpenseDayGraph } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class ExpenseDayGraphRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.expenseDayGraph.findMany({
			where: filter,
		})
	}

	async getById(id: string) {
		return this.prisma.expenseDayGraph.findUnique({
			where: { id }
		})
	}


	async create(dto: ExpenseDayGraph): Promise<ExpenseDayGraph> {
		try {
			return await this.prisma.expenseDayGraph.create({
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
		return this.prisma.expenseDayGraph.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<ExpenseDayGraph>) {
		return this.prisma.expenseDayGraph.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.expenseDayGraph.delete({
			where: { id }
		})
	}
}
