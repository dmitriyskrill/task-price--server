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
	}: Partial<ITaskWorkflowStatusPermission>) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkTaskWorkflowStatusPermission/mappedToTaskPrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const taskWorkflowStatusList = response.data
			return await this.prisma.taskWorkflowStatus.createMany({
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

	async create(dto: TaskWorkflowStatusPermission): Promise<TaskWorkflowStatusPermission> {
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

	async updateMany(filter: Record<string, any>, data: TaskWorkflowStatusPermissionDto) {
		return this.prisma.taskWorkflowStatus.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskWorkflowStatusPermission>) {
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
