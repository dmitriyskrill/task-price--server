import { IsString } from 'class-validator'

export class UpdateTaskStatusDto {

}

export class CreateTaskStatusDto {
	@IsString()
	name: string

	@IsString()
	shortName: string

	@IsString()
	ownerId: string
}

export class TaskStatusDto {}
