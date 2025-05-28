import { ITypicalFields } from './typicalFields.interface'

export interface  IUnit extends ITypicalFields {
	shortName: string
	fullName: string
	codeId: string
	isHourUnit: boolean
	key: string
}