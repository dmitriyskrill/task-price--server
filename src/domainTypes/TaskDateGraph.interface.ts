import { ITypicalFields } from './TypicalFields.interface'
import { ITask } from './Task.interface'
import { IUser } from './User.interface'

export interface ITaskDateGraph extends ITypicalFields {
	endpoint?: string // Default: 'taskDateGraph'
	date: Date
	amount: number
	task: ITask
	isFact: boolean
	owner: IUser
}
