import { IsString } from 'class-validator'

export class UpdateTaskWorkflowStatusPermissionDto {

}

export class CreateTaskWorkflowStatusPermissionDto {
	@IsString()
	name: string;

}

export class TaskWorkflowStatusPermissionDto {

}