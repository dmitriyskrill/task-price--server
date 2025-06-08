import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'
import { IUser } from '@/domainTypes/User.interface'
import { ITaskWorkflowStatus } from '@/domainTypes/TaskWorkflowStatus.interface'
import { TypicalFieldsWithoutNameI } from '@/domainTypes/TypicalFieldsWithoutName.interface'

enum EntityType {
	TASK,
	EXPENSE,
	TASK_DAY_GRAPH,
	TASK_DATE_GRAPH,
	EXPENSE_DAY_GRAPH,
	EXPENSE_DATE_GRAPH,
	SUBTASK
}

enum OperationType {
	CREATE,
	CREATE_Many,
	READ,
	PATCH,
	PATCH_Many,
	UPDATE,
	UPDATE_Many,
	DELETE,
	DELETE_Many
}

export interface ITaskWorkflowStatusPermission extends TypicalFieldsWithoutNameI {
	entity: EntityType
	operation: OperationType
	isPlan: boolean

	workflowStatusId: string
	workflowStatus: ITaskWorkflowStatus

	ownerId: string
	owner: IUser
}
