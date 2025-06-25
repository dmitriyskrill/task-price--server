import { IUser } from './User.interface'
import { ITypicalFields } from './TypicalFields.interface'

export interface IExpenseDayGraph extends ITypicalFields {
	day: Date
	amount: number
	expenseId: string
	responsible?: IUser
	isFact: boolean
	taskStatusId: string
	endpoint?: string
}
