import type { TableColumnGroupI } from './TableColumnGroupI'
import type { UserI } from './UserI'
import type { ExpenseTypeI } from './ExpenseTypeI'
import type { AmountTypesInTotalAmountT } from './AmountTypesInTotalAmountT'

export interface ExpenseI {
	id: string
	name?: string
	sort: number
	creator: UserI
	createdDate: Date
	lastModifier?: UserI
	lastModifiedDate?: Date
	isActive?: boolean

	expenseType: ExpenseTypeI
	amountTypesInTotalAmount?: AmountTypesInTotalAmountT[]
	amount?: number
	dayGraphAdditionalFactor?: number
	withAnDayGraphAdditionalFactor?: boolean
	dateGraphAdditionalFactor?: number
	withAnDateGraphAdditionalFactor?: boolean
	unit?: UnitI
	price?: number
	billsNumber?: number
	deliveryDaysNumber?: number
	note?: string
	planLkExpense?: ExpenseI
	lkTask?: TaskI
	isPlan: boolean
	isFixedFact: boolean
	elementStatus?: string
	responsible?: string

	rowHeight?: number
	rowHeightUnit?: string

}

/*
	В реальности использования приложения можно на задачу или расход назначать ответственного, которые будет отвечать за все действия
*/
