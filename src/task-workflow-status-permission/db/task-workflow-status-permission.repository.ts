import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskWorkflowStatusPermissionDto } from '../dto/task-workflow-status-permission.dto'
import { TaskWorkflowStatusPermission } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ITaskWorkflowStatusPermission } from '@/domainTypes/TaskWorkflowStatusPermission.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TaskWorkflowStatusPermissionRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskWorkflowStatusPermission.findMany({
			where: filter,
			include: {
				taskWorkflowStatus: {
					include: {
						taskStatus: true,
						taskWorkflow: true,
					},
				},
			},
		})
	}

	async getById(id: string) {
		return this.prisma.taskWorkflowStatusPermission.findUnique({
			where: { id },
			include: {
				taskWorkflowStatus: {
					include: {
						taskStatus: true,
						taskWorkflow: true,
					},
				},
			},
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: Partial<ITaskWorkflowStatusPermission>) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkTaskWorkflowStatusPermission/mappedToTaskPrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const taskWorkflowStatusList = response.data
			return await this.prisma.taskWorkflowStatusPermission.createMany({
				data: taskWorkflowStatusList.map((taskWorkflowStatus: Partial<ITaskWorkflowStatusPermission>) => ({
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

	// TODO Убрать any
	async create(dto: any): Promise<TaskWorkflowStatusPermission> {
		try {
			return await this.prisma.taskWorkflowStatusPermission.create({
				data: dto,
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

	async updateMany(filter: Record<string, any>, data: TaskWorkflowStatusPermissionDto) {
		return this.prisma.taskWorkflowStatusPermission.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskWorkflowStatusPermission>) {
		return this.prisma.taskWorkflowStatusPermission.update({
			where: {
				id
			},
			include: {
				taskWorkflowStatus: {
					include: {
						taskStatus: true,
						taskWorkflow: true,
					},
				},
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskWorkflowStatusPermission.delete({
			where: { id }
		})
	}
}
