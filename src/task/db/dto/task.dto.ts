 import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class TaskDto {
	@IsString()
  @ApiProperty()
	name: string

  @IsString()
  @ApiProperty()
  shortName: string

	@IsBoolean()
	@IsOptional()
  @ApiProperty()
	isCompleted: boolean

	@IsString()
	@IsOptional()
  @ApiProperty()
	createdAt?: string

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