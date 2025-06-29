import { Expense } from '@prisma/client'
import { ExpenseDto, UpdateExpenseDto } from '@/expense/db/dto/expense.dto'

interface IExpenseRepository {
	getAllExpenses(): Promise<Expense[]>
	getAll(userId: string): Promise<Expense[]>
	create(dto: ExpenseDto, userId: string): Promise<Expense>
	update(dto: UpdateExpenseDto, expenseId: string, userId: string): Promise<Expense>
	delete(expenseId: string): Promise<Expense>
}

export { IExpenseRepository }