import { ITypicalFields } from './TypicalFields.interface'
import { IExpense } from './Expense.interface'
import { IUser } from './User.interface'

export interface IExpenseDateGraph extends ITypicalFields {
	date: Date
	amount: number
	expenseId: string
	responsible?: IUser
	isFact: boolean
	taskStatusId: string
	// Вспомогательное поле которые в себе хранит название сущности. Применяется для управления стилями при проказе на фронте и при распределении в данных
	endpoint?: string
}
