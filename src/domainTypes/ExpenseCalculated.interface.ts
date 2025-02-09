import type { IExpense } from './Expense.interface'

export interface IExpenseCalculated extends IExpense {
	price: number
}
