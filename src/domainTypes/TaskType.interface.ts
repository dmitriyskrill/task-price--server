import { ITypicalFields } from './TypicalFields.interface'
import { IUnit } from './Unit.interface'
import { IExpenseType } from './ExpenseType.interface'

export interface ITaskType extends ITypicalFields {
	shortName: string // Обязательно
	/* Влияет на то, можно ли пользователь открыть ее в отдельном окне*/
	isOpenLikeMain?: boolean // Default: false

	/* Дочерние типы задач
	 определяет задачи с каким типом можно создать для текущей задачи
	*/
	childTaskTypes?: ITaskType[]

	/* Может содержать затраты */
	isCanContainExpense?: boolean
	/* Показывать сводную информацию по графикам */
	isShowGraphInfo?: boolean

	/* Верхнеуровневая задача
	 	Типы с isTopLevel=true будут показаны при создании верхнеуровневых задач
	*/
	isTopLevel?: boolean

	/* Статус по умолчанию */
		//TODO добавить для задачи рабочий процесс и статус
	/* Допустимые статусы */

	/* Статус, указанный по умолчанию в типе задачи, является приоритетным
	  TODO понять что значит
	*/
	isPriorityDefaultElementStatus?: boolean

	/* Множитель для графиков по умолчанию */
	defaultAdditionalFactor?: number

	/* Множитель для графиков ДАТ по умолчанию */
	defaultDateAdditionalFactor?: number

	/* Единица измерения по умолчанию*/
	defaultUnit?: IUnit | null // Default: null
	/* Допустимые единицы измерения */
	admissibleUnits?: IUnit[] // Default: []

	/* % прибыли по умолчанию */
	defaultProfitPercent?: number
	/* % общехозяйственные по умолчанию */
	defaultGeneralBusinessExpensesPercent?: number
	/* % непредвиденные по умолчанию */
	defaultUnforeseenExpensesPercent?: number
	/* % НДС по умолчанию */
	defaultVatPercent?: number // Default: 0

	/* Значение начислений по умолчанию */
	defaultExpenseTypeAccruals?: {
		expenseType: IExpenseType
		amount?: number
		isPlan?: boolean
		name: string
	}[]
	/* Источники для общего количества */
	defaultAmountTypesInTotalAmount?: string[]

	/* Кнопки в управлении */
	taskCellControlButtons?: {
		buttons?: string[]
		/* Показывать кнопку с общим меню*/
		withMenuBtn?: boolean
	}

	fontSize?: number // Default: 16
	fontWidth?: number // Default: 400

	/* Показывать кнопку скрытия/показа детей в дереве задач */
	taskTreeIsShowChildBtn?: boolean // Default: false
	/* Показывать кнопку добавления в дереве задач */
	taskTreeIsShowAddBtn?: boolean // Default: false
}
