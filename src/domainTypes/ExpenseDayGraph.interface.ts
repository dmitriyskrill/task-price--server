import { IExpense } from './Expense.interface'
import { IUser } from './User.interface'

export interface IExpenseDayGraph {
	endpoint?: string
	day: number
	amount: number
	expense: IExpense
	responsible?: IUser
	isFact: boolean
}
