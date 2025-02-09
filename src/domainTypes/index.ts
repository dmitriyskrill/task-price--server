

type IdT = string



interface TaskI {}

interface UnitI {
	name: string
	shortName: string
	fullName: string
	codeId?: string
	isHourUnit?: boolean
}




interface IExpenseDayGraph {
	name?: string
	endpoint?: string
	creator: string
	createdDate: Date
	lastModifier?: string
	lastModifiedDate?: Date
	day: number
	amount: number
	lkExpense: string
	lkElementStatus?: string
	responsible?: string
}



interface ExpenseTypeAccrualI {
	name: string
	endpoint?: string
	sort: number
	creator: string
	createdDate: Date
	lastModifier?: string
	lastModifiedDate?: Date
	isTrash?: boolean
	lkExpenseType?: string
	amount?: number
	lkTask: string
	isPlan?: boolean
}

interface ExpenseInfoI {
	name: string
	showInProfitInfo?: boolean
	lkExpenseTypes?: string[]
	afterPosition?: string
}
