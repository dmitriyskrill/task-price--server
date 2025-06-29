import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskDayGraph } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class TaskDayGraphRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskDayGraph.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.taskDayGraph.findUnique({
			where: { id }
		})
	}

	async create(dto: TaskDayGraph): Promise<TaskDayGraph> {
		try {
			return await this.prisma.taskDayGraph.create({
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
		return this.prisma.taskDayGraph.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskDayGraph>) {
		return this.prisma.taskDayGraph.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskDayGraph.delete({
			where: { id }
		})
	}
}
