import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskDto, UpdateTaskDto } from '@/task/db/dto/task.dto'
import { ITaskRepository } from './task.repository.interface'
import { Task } from '@prisma/client'

@Injectable()
export class TaskRepository implements ITaskRepository {
	constructor(private prisma: PrismaService) {}

	async getAllTasks(): Promise<Task[]> {
		try {
			return await this.prisma.task.findMany({
				include: {
					taskDayGraphs: true,
					taskDateGraphs: true
				}
			})
		} catch (e) {
			throw e
		}
	}

	async getAll(
		// userId: string
	): Promise<Task[]> {
		try {
			return await this.prisma.task.findMany({
				// where: {
				// ownerId: userId
				// }
			})
		} catch (e) {
			throw e
		}
	}

	async create(
		dto: any,
		// userId: string
	): Promise<Task> {
		try {
			return await this.prisma.task.create({
				data: {
					...dto,
					// owner: {
					// 	connect: {
					// 		id: userId
					// 	}
					// }
				}
			})
		} catch (e) {
			throw e
		}
	}

	async update(
		dto: UpdateTaskDto,
		taskId: string,
		// userId: string
	): Promise<Task> {
		try {
			return await this.prisma.task.update({
				where: {
					// ownerId: userId,
					id: taskId
				},
				data: dto
			})
		} catch (e) {
			throw e
		}
	}

	async delete(taskId: string): Promise<Task> {
		try {
			return await this.prisma.task.delete({
				where: {
					id: taskId
				}
			})
		} catch (e) {
			throw e
		}
	}
}
