import { IsString } from 'class-validator'

export class UpdateTaskWorkflowStatusDto {

}

export class CreateTaskWorkflowStatusDto {
	@IsString()
	ownerId: string

	@IsString()
	taskWorkflowId: string

	@IsString()
	taskStatusId: string
}

export class TaskWorkflowStatusDto {

}
