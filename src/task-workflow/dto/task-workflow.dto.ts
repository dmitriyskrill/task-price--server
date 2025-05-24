import { IsString } from 'class-validator'

export class UpdateTaskWorkflowDto {

}

export class CreateTaskWorkflowDto {
	@IsString()
	name: string;

	@IsString()
	shortName: string;

	@IsString()
	ownerId: string;
}

export class TaskWorkflowDto {

}