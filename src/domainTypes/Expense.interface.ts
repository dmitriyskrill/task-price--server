import type { ITableColumnGroup } from './TableColumnGroup.interface'
import type { IUser } from './User.interface'
import type { IExpenseType } from './ExpenseType.interface'
import type { TAmountTypesInTotalAmount } from './AmountTypesInTotalAmount.type'

export interface IExpense {
	id: string
	name?: string
	sort: number
	creator: IUser
	createdDate: Date
	lastModifier?: IUser
	lastModifiedDate?: Date
	isActive?: boolean

	expenseType: IExpenseType
	amountTypesInTotalAmount?: TAmountTypesInTotalAmount[]
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
	planLkExpense?: IExpense
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
