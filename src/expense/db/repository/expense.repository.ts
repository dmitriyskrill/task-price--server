import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { ExpenseDto, UpdateExpenseDto } from '@/expense/db/dto/expense.dto'
import { IExpenseRepository } from './expense.repository.interface'
import { Expense } from '@prisma/client'

@Injectable()
export class ExpenseRepository implements IExpenseRepository {
	constructor(private prisma: PrismaService) {}

	async getAllExpenses(): Promise<Expense[]> {
		try {
			return await this.prisma.expense.findMany({
				include: {
					// expenseDayGraphs: true,
					// expenseDateGraphs: true
				}
			})
		} catch (e) {
			throw e
		}
	}

	async getAll(
		// userId: string
	): Promise<Expense[]> {
		try {
			return await this.prisma.expense.findMany({
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
	): Promise<Expense> {
		try {
			return await this.prisma.expense.create({
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
		dto: UpdateExpenseDto,
		expenseId: string,
		// userId: string
	): Promise<Expense> {
		try {
			return await this.prisma.expense.update({
				where: {
					// ownerId: userId,
					id: expenseId
				},
				data: dto
			})
		} catch (e) {
			throw e
		}
	}

	async delete(expenseId: string): Promise<Expense> {
		try {
			return await this.prisma.expense.delete({
				where: {
					id: expenseId
				}
			})
		} catch (e) {
			throw e
		}
	}
}
