import { TypicalFieldsI } from './TypicalFieldsI'

export interface ExpenseDateGraphI extends TypicalFieldsI {

	date: Date
	amount: number
	lkExpense: string
	lkElementStatus?: string
	responsible?: string

	// Вспомогательное поле которые в себе хранит название сущности. Применяется для управления стилями при проказе на фронте и при распределении в данных
	endpoint?: string
}
