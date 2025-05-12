import { IsString } from 'class-validator'

export class UpdateTaskWorkflowStatusPermissionDto {

}

export class CreateTaskWorkflowStatusPermissionDto {
	@IsString()
	name: string;

	@IsString()
	shortName: string;
}

export class TaskTaskWorkflowStatusPermissionDto {

}