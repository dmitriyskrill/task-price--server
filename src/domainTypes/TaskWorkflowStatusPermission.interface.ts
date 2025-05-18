import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'
import { IUser } from '@/domainTypes/User.interface'
import { ITaskWorkflowStatus } from '@/domainTypes/TaskWorkflowStatus.interface'

export interface ITaskWorkflowStatusPermission extends ITypicalFields {

	entity: string
	operation: string
	isPlan: boolean


	workflowStatusId: string
	workflowStatus: ITaskWorkflowStatus

	ownerId: string
	owner: IUser
}
