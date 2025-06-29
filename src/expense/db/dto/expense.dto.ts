 import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class ExpenseDto {
	@IsString()
  @ApiProperty()
	name: string


	@IsString()
	@ApiProperty()
	ownerId: string

	@IsString()
	@ApiProperty()
	expenseTypeId: string

	@IsString()
	@ApiProperty()
	taskId: string

	@IsString()
	@ApiProperty()
	unitId: string

	@IsOptional()
	@IsString()
	@ApiProperty()
	expenseId?: string

}

export class UpdateExpenseDto {
	@IsOptional()
	@IsString()
	@ApiProperty()
	name?: string

	@IsOptional()
	@IsString()
	@ApiProperty()
	shortName?: string

	@IsOptional()
	@IsBoolean()
	@ApiProperty()
	isCompleted?: boolean
}