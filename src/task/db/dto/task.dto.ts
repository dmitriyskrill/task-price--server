 import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
  @ApiProperty()
	name: string

  @IsString()
  @ApiProperty()
  shortName: string

	@IsString()
	@ApiProperty()
	ownerId: string

	@IsString()
	@ApiProperty()
	description: string
}

export class UpdateTaskDto {
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