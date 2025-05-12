import { IExpense } from './Expense.interface'
import { IUser } from './User.interface'
import { IElementStatus } from './ElementStatus.interface'

export interface IExpenseDayGraph {
	endpoint?: string
	day: number
	amount: number
	expense: IExpense
	elementStatus?: IElementStatus
	responsible?: IUser
	isFact: boolean
}
