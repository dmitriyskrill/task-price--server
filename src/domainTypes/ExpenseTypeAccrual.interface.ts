import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'
import { IExpenseType } from '@/domainTypes/ExpenseType.interface'

/* Начисления на типы расходов

	Для задачи собираем общую стоимость по типам расходов,
 	и для конкретной задачи мы можем применить начисления на общую стоимость
 	по каждому из типов.

*/
export interface IExpenseTypeAccrual extends ITypicalFields{
	endpoint?: string
	expenseType?: IExpenseType
	amount?: number
	lkTask: string
	isPlan?: boolean
}


