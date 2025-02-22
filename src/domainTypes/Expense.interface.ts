import type { IUnit } from './Unit.interface'
import type { IExpenseType } from './ExpenseType.interface'
import type { TAmountTypesInTotalAmount } from './AmountTypesInTotalAmount.type'
import type { ITypicalFields } from './TypicalFields.interface'
import type { ITask } from './Task.interface'
import type { IElementStatus } from './ElementStatus.interface'
import type { IUser } from './User.interface'
import type { IExpenseDayGraph } from './ExpenseDayGraph.interface'
import type { IExpenseDateGraph } from './ExpenseDateGraph.interface'

export interface IExpense extends ITypicalFields {
	isActive?: boolean

	price?: number
	amount?: number

	expenseType: IExpenseType
	amountTypesInTotalAmount?: TAmountTypesInTotalAmount[]

	dayGraphAdditionalFactor?: number
	withAnDayGraphAdditionalFactor?: boolean
	dateGraphAdditionalFactor?: number
	withAnDateGraphAdditionalFactor?: boolean
	unit?: IUnit

	billsNumber?: number
	deliveryDaysNumber?: number
	note?: string
	planExpense?: IExpense
	task?: ITask
	isPlan: boolean
	isFixedFact: boolean
	elementStatus?: IElementStatus
	owner: IUser

	rowHeight?: number
	rowHeightUnit?: string

	// Вычисляемые поля...
	expenseDateGraphList: IExpenseDateGraph[] // Тут получается циклическая зависимость
	dateGraphSum: number

	expenseDayGraphList: IExpenseDayGraph[] // Тут получается циклическая зависимость
	dayGraphSum: number

	totalAmount: number

	cost: number
	costWithVat: number

	// ... Вычисляемые поля
}

/*
	В реальности использования приложения можно на задачу или расход назначать ответственного, которые будет отвечать за все действия
*/
