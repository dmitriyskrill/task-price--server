export const AmountTypesInTotalAmountTypes = {
	Hour: 'days',
	Day: 'dates',
	Month: 'amount'
} as const

export type TAmountTypeInTotalAmount =
	(typeof AmountTypesInTotalAmountTypes)[keyof typeof AmountTypesInTotalAmountTypes]