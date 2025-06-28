import { ITypicalFields } from './TypicalFields.interface'
import { IUser } from './User.interface'

export interface taskDateGraph extends ITypicalFields{
	endpoint?: string

	day: number 
	amount: number 
	taskId: string
	isFact: boolean
	owner: IUser 
	
}



