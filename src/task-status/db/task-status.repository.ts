import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskStatusDto } from '../dto/task-status.dto'
import { TaskStatus } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ITaskStatus } from '@/domainTypes/TaskStatus.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TaskStatusRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskStatus.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.taskStatus.findUnique({
			where: { id }
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: Partial<ITaskStatus>) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkTaskStatus/mappedToTaskPrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const taskStatusList = response.data
			return await this.prisma.taskStatus.createMany({
				data: taskStatusList.map((taskStatus: Partial<ITaskStatus>) => ({
					...taskStatus,
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

	async create(dto: TaskStatus): Promise<TaskStatus> {
		try {
			return await this.prisma.taskStatus.create({
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

	async updateMany(filter: Record<string, any>, data: TaskStatusDto) {
		return this.prisma.taskStatus.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskStatus>) {
		return this.prisma.taskStatus.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskStatus.delete({
			where: { id }
		})
	}
}
