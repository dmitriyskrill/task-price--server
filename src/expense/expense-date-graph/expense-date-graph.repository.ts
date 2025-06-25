import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
//import { UpdateExpenseDateGraphDto } from '@/expenseDateGraph/dto/expenseDateGraph.dto'
import { ExpenseDateGraph } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class ExpenseDateGraphRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.expenseDateGraph.findMany({
			where: filter,
		})
	}

	async getById(id: string) {
		return this.prisma.expenseDateGraph.findUnique({
			where: { id }
		})
	}


	async create(dto: ExpenseDateGraph): Promise<ExpenseDateGraph> {
		try {
			return await this.prisma.expenseDateGraph.create({
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
		return this.prisma.expenseDateGraph.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<ExpenseDateGraph>) {
		return this.prisma.expenseDateGraph.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.expenseDateGraph.delete({
			where: { id }
		})
	}
}
