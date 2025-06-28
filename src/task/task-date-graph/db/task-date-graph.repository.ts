import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import {
	TaskDateGraphDto,
	UpdateTaskDateGraphDto
} from '@/task/task-date-graph/dto/task-date-graph.dto'
import { Prisma } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class TaskDateGraphRepository {
	constructor(private prisma: PrismaService) {}

	async create(taskDateGraphData: any) {
		try {
			return this.prisma.taskDateGraph.create({
				data: taskDateGraphData
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

	async update(taskDateGraphData: UpdateTaskDateGraphDto, id: string) {
		try {
			return await this.prisma.taskDateGraph.update({
				where: {
					id
				},
				data: {
					...taskDateGraphData
				}
			})
		} catch (error: any) {
			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === 'P2025'
			) {
				throw new NotFoundException(`Record with this id not found.`)
			}
			throw error
		}
	}

	async delete(id: string) {
		try {
			return await this.prisma.taskDateGraph.delete({
				where: {
					id
				}
			})
		} catch (error: any) {
			if (
				error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === 'P2025'
			) {
				throw new NotFoundException(`Record with this id not found.`)
			}
			throw error
		}
	}

	async getAll() {
		return this.prisma.taskDateGraph.findMany()
	}

	async getById(id: string) {
		return this.prisma.taskDateGraph.findUnique({
			where: {
				id
			}
		})
	}
}
