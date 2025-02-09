import type { ITableColumnGroup } from './TableColumnGroup.interface'
import type { IUnit } from './Unit.interface'
import type { IExpenseType } from './ExpenseType.interface'
import type { TAmountTypesInTotalAmount } from './AmountTypesInTotalAmount.type'
import { ITypicalFields } from './TypicalFields.interface'
import { ITask } from './Task.interface'
import { IElementStatus } from './ElementStatus.interface'
import { IUser } from './User.interface'
import { IExpenseDayGraph } from './ExpenseDayGraph.interface'
import { IExpenseDateGraph } from './ExpenseDateGraph.interface'

export interface IExpense extends ITypicalFields{
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
	owner?: IUser

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
