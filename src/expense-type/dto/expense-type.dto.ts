import { IsString } from 'class-validator'

export class UpdateExpenseTypeDto {

}

export class CreateExpenseTypeDto {
	@IsString()
	name: string

	@IsString()
	shortName: string

	@IsString()
	ownerId: string
}

export class ExpenseTypeDto {}
