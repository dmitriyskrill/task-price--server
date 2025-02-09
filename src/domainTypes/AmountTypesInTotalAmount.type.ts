export const AmountTypesInTotalAmountTypes = {
	Hour: 'days',
	Day: 'dates',
	Month: 'amount'
} as const

export type TAmountTypesInTotalAmount =
	(typeof AmountTypesInTotalAmountTypes)[keyof typeof AmountTypesInTotalAmountTypes]