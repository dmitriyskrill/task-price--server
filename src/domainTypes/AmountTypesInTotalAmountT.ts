export const AmountTypesInTotalAmountTypes = {
	Hour: 'days',
	Day: 'dates',
	Month: 'amount'
} as const

export type AmountTypesInTotalAmountT =
	(typeof AmountTypesInTotalAmountTypes)[keyof typeof AmountTypesInTotalAmountTypes]