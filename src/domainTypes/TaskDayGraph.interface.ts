import { ITypicalFields } from './TypicalFields.interface'
import { IUser } from './User.interface'

export interface LkTaskDateGraph extends ITypicalFields{
	endpoint?: string

	day: number 
	amount: number 
	lkTask: string
	isFact?: boolean 
	owner: IUser 
	
}
