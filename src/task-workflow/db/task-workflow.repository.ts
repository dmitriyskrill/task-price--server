import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { TaskWorkflowDto } from '../dto/task-workflow.dto'
import { TaskWorkflow } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ITaskWorkflow } from '@/domainTypes/TaskWorkflow.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TaskWorkflowRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.taskWorkflow.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.taskWorkflow.findUnique({
			where: { id }
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: Partial<ITaskWorkflow>) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkTaskWorkflow/mappedToTaskPrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const taskWorkflowList = response.data
			return await this.prisma.taskWorkflow.createMany({
				data: taskWorkflowList.map((taskWorkflow: Partial<ITaskWorkflow>) => ({
					...taskWorkflow,
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

	async create(dto: TaskWorkflow): Promise<TaskWorkflow> {
		try {
			return await this.prisma.taskWorkflow.create({
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

	async updateMany(filter: Record<string, any>, data: TaskWorkflowDto) {
		return this.prisma.taskWorkflow.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<TaskWorkflow>) {
		return this.prisma.taskWorkflow.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.taskWorkflow.delete({
			where: { id }
		})
	}
}
