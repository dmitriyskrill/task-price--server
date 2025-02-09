import { IExpenseType } from './ExpenseType.interface'
import { ITypicalFields } from './TypicalFields.interface'


/* Группировка начислений для типов расходов
		Нужно для управления показом начислений на типы расходов в информации о прибыли по задаче
 */
export interface IExpenseTypeAccrualGroup extends ITypicalFields{
	showInProfitInfo: boolean
	expenseTypes: IExpenseType[]

	/* после какого типа затрат показывать в компоненте расчета прибыльности задачи */
	afterPosition: IExpenseType
}