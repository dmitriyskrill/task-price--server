import { ITypicalFields } from './TypicalFields.interface'
import { IUser } from './User.interface'

export interface taskDateGraph extends ITypicalFields{
	endpoint?: string

	day: number 
	amount: number 
	task: string
	isFact?: boolean 
	owner: IUser 
	
}
