import { IsString } from 'class-validator'

export class UpdateTaskWorkflowStatusDto {

}

export class CreateTaskWorkflowStatusDto {
	@IsString()
	name: string;

	@IsString()
	shortName: string;
}

export class TaskWorkflowStatusDto {

}