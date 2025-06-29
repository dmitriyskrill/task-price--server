import { Injectable } from '@nestjs/common'
import { ExpenseDto, UpdateExpenseDto } from '@/expense/db/dto/expense.dto'
import { ExpenseRepository } from '@/expense/db/repository/expense.repository'
import { Expense } from '@prisma/client'

@Injectable()
export class ExpenseService {
	constructor(private readonly expenseRepository: ExpenseRepository) {}

	async getAllExpenses(): Promise<Expense[]> {
		return this.expenseRepository.getAllExpenses()
	}

	async getAll(): Promise<Expense[]> {
		return this.expenseRepository.getAll()
	}

	async create(dto: ExpenseDto): Promise<Expense> {
		return this.expenseRepository.create(dto)
	}

	update(dto: UpdateExpenseDto, expenseId: string): Promise<Expense> {
		return this.expenseRepository.update(dto, expenseId)
	}

	async delete(expenseId: string): Promise<Expense> {
		return this.expenseRepository.delete(expenseId)
	}
}
