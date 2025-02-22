import { ITypicalFields } from './TypicalFields.interface'
import { IExpense } from './Expense.interface'
import type { IElementStatus } from './ElementStatus.interface'
import { IUser } from './User.interface'

export interface IExpenseDateGraph extends ITypicalFields {
	date: Date
	amount: number
	expense: IExpense
	elementStatus?: IElementStatus
	responsible?: IUser

	// Вспомогательное поле которые в себе хранит название сущности. Применяется для управления стилями при проказе на фронте и при распределении в данных
	endpoint?: string
}
