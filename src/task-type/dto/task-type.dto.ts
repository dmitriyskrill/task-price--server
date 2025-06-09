import { IsString } from 'class-validator'

export class UpdateTaskTypeDto {

}

export class CreateTaskTypeDto {
	@IsString()
	name: string

	@IsString()
	shortName: string

	@IsString()
	ownerId: string
}

export class TaskTypeDto {}
