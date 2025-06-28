import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { ExpenseTypeDto } from '../dto/expense-type.dto'
import { ExpenseType } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { IExpenseType } from '@/domainTypes/ExpenseType.interface'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ExpenseTypeRepository {
	constructor(
		private readonly prisma: PrismaService,
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.expenseType.findMany({
			where: filter
		})
	}

	async getById(id: string) {
		return this.prisma.expenseType.findUnique({
			where: { id }
		})
	}

	async createManyFromOldDb({
		createdById,
		updatedById
	}: any) {
		try {
			const url = `${this.configService.get('OLD_SERVER_URL')}/api/lkExpenseType/mappedToExpensePrice` // URL другого сервера
			const response = await firstValueFrom(this.httpService.get(url)) // Выполнение запроса
			const expenseTypeList = response.data
			return await this.prisma.expenseType.createMany({
				data: expenseTypeList.map((expenseType: Partial<IExpenseType>) => ({
					...expenseType,
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

	async create(dto: ExpenseType): Promise<ExpenseType> {
		try {
			return await this.prisma.expenseType.create({
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

	async updateMany(filter: Record<string, any>, data: ExpenseTypeDto) {
		return this.prisma.expenseType.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<ExpenseType>) {
		return this.prisma.expenseType.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.expenseType.delete({
			where: { id }
		})
	}
}
