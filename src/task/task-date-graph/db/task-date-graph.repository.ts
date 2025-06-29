import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskDateGraph } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class TaskDateGraphRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskDateGraph.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.taskDateGraph.findUnique({
			where: { id }
		})
	}

	async create(dto: TaskDateGraph): Promise<TaskDateGraph> {
		try {
			return await this.prisma.taskDateGraph.create({
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
		return this.prisma.taskDateGraph.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskDateGraph>) {
		return this.prisma.taskDateGraph.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskDateGraph.delete({
			where: { id }
		})
	}
} 