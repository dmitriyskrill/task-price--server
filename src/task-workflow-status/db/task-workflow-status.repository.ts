import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskWorkflowStatusDto } from '../dto/task-workflow-status.dto'
import { TaskWorkflowStatus } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ITaskWorkflowStatus } from '@/domainTypes/TaskWorkflowStatus.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TaskWorkflowStatusRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskWorkflowStatus.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.taskWorkflowStatus.findUnique({
			where: { id }
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: Partial<ITaskWorkflowStatus>) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkTaskWorkflowStatus/mappedToTaskPrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const taskWorkflowStatusList = response.data
			return await this.prisma.taskWorkflowStatus.createMany({
				data: taskWorkflowStatusList.map((taskWorkflowStatus: Partial<ITaskWorkflowStatus>) => ({
					...taskWorkflowStatus,
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

	async create(dto: TaskWorkflowStatus): Promise<TaskWorkflowStatus> {
		try {
			return await this.prisma.taskWorkflowStatus.create({
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

	async updateMany(filter: Record<string, any>, data: TaskWorkflowStatusDto) {
		return this.prisma.taskWorkflowStatus.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskWorkflowStatus>) {
		return this.prisma.taskWorkflowStatus.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskWorkflowStatus.delete({
			where: { id }
		})
	}
}
