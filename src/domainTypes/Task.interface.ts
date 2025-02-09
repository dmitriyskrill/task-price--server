import { ITypicalFields } from './TypicalFields.interface'
import { IUser } from './User.interface'
import { IUnit } from './Unit.interface'
import { TAmountTypesInTotalAmount } from './AmountTypesInTotalAmount.type'
import { IElementStatus } from './ElementStatus.interface'
import { ITaskType } from './TaskType.interface'

export interface ITask extends ITypicalFields {
	endpoint?: string
	shortName?: string
	owner: IUser
	tenderNumber?: string
	approvalDate?: Date
	transferDate?: Date
	amountTypesInTotalAmount?: TAmountTypesInTotalAmount[] // Default: ['days']
	elementStatus?: IElementStatus // ID статуса элемента
	taskType: ITaskType // ID типа задачи (обязательно)

	parentTask?: ITask // ID родительской задачи (или null)
	unit?: IUnit // ID единицы измерения
	isActive?: boolean // Default: true

	amount?: number
	amountFact?: number

	isPlan?: boolean // Default: true

	// Для расчета итоговых расходов и прибыли задачи ...

	vatPercent?: number // Default: 0
	profitPercent?: number // Default: 0
	commercialOffer?: number // Default: 0
	commercialOfferFactWithPlan?: number // Default: 0
	commercialOfferFactWithoutPlan?: number // Default: 0
	generalBusinessExpensesPercent?: number // Default: 0
	unforeseenExpensesPercent?: number // Default: 0

	// ... Для расчета экономики задачи

	// Для расчета общего количества ...

	dateGraphAdditionalFactor?: number // Default: 1
	withAnDateGraphAdditionalFactor?: boolean // Default: true

	dateGraphAdditionalFactorFact?: number // Default: 1
	withAnDateGraphAdditionalFactorFact?: boolean // Default: true

	dayGraphAdditionalFactor?: number // Default: 1
	withAnDayGraphAdditionalFactor?: boolean // Default: true

	dayGraphAdditionalFactorFact?: number // Default: 1
	withAnDayGraphAdditionalFactorFact?: boolean // Default: true

	// ... Для расчета общего количества

	// Вычисляемые поля ...



	// ... Вычисляемые поля



	rowHeight?: number // Default: 30
	rowHeightUnit?: string // Default: 'px'



}





/* Привязка к пользователям:

	Храним информацию о том, кто создал, кто сейчас владеет и кто ответственный

	Главный - владелец, ответственный отвечает перед владельцем,
	далее делаем список пользователей: могут редактировать = [], могут смотреть = [], могут удалять = []
	Ну а далее в разработке сделать историю изменений: кто, когда и что менял.

	Для всех элементов созданных внутри текущего автоматически присваивается владелец по владельцу родительского элемента.
	Если создали верхнеуровневую задачу, владельцем становится тот, кто создал

	Логически понятно, что Владелец подчиненного элемента


  // Todo сделать настройку на разрешение владельцу текущего элемента менять подчиненные элементы


*/
