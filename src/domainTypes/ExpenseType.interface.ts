import type { TAmountTypesInTotalAmount } from './AmountTypesInTotalAmount.type'
import type { IUnit } from './Unit.interface'
import type { IElementStatus } from './ElementStatus.interface'

export interface IExpenseType {

	name: string
	shortName: string

  /* Ед. измерения по умолчанию */
	defaultUnit?: IUnit
  /* Допустимые ед. измерения */
	admissibleUnits?: IUnit[]

	defaultElementStatus?: IElementStatus // Todo проработать логику определение и изменения статуса элементов в условиях бесконечной вложенности

  /* Источники для общего количества (План) */
	defaultAmountTypesInTotalAmountPlan?: TAmountTypesInTotalAmount[]
	/* Источники для общего количества (Факт) */
	defaultAmountTypesInTotalAmountFact?: TAmountTypesInTotalAmount[]

	sort?: number


	/* Множитель для графиков по умолчанию

	В графиках мы можем указывать количество людей которые будут работать,
	а для того, чтобы итого получить часы, мы в указываем множитель 8. Т.е. смена  = 8 часов.
  Пример со временем это частная реализация, в целом это просто множитель для вводимых значений

	 */
	defaultAdditionalFactor?: number

	/* Множитель для графиков ДАТ по умолчанию */
	defaultDateAdditionalFactor?: number

	// Визуальное отображение_____

	/* Цвет фона 
		который отображается в столбце "ф-р", фильтр
	 */
	bgColor?: string

	/*
		Показывать сводную информацию по графикам
		(показываются ли ячейки с "Кол.смен", "Дл.", и "Кол.ед"
		в Столбце "Детали смен", в строках с расходами, где применен тип)
	*/
	isShowGraphInfo?: boolean

	// _____Визуальное отображение

	// Возможно устарело
	showAccrualCostByTypeInProfitInfo?: boolean // Показывать начисления на прямые затраты в информации о прибыли по ЛЗК TODO уточнить на что влияет
	codeId?: string // TODO уточнить для чего используется, возможно убрать из системы
}
