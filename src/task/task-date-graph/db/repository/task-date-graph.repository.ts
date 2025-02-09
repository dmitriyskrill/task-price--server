import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import {
	TaskDateGraphDto,
	UpdateTaskDateGraphDto
} from '@/task/task-date-graph/dto/task-date-graph.dto'
import { Prisma } from '@prisma/client'
import { ITaskDateGraphRepository } from '@/task/task-date-graph/db/repository/task-date-graph.repository.interface'

@Injectable()
export class TaskDateGraphRepository implements ITaskDateGraphRepository {
	constructor(private prisma: PrismaService) {}

	async create(taskDateGraphData: TaskDateGraphDto, taskId: string) {
		return this.prisma.taskDateGraph.create({
			data: {
				...taskDateGraphData,
				task: {
					connect: {
						id: taskId
					}
				}
			}
		})
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
