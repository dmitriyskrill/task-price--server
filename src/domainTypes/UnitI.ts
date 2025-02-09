import { TypicalFieldsI } from './typicalFieldsI'

export interface UnitI extends TypicalFieldsI {
	shortName: string
	fullName: string
	codeId: string
	isHourUnit: false
}