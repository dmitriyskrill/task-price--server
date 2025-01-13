import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	Min,
	MinLength
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TimerSettingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(10)
	intervalsCount?: number
}

export class UserDto extends TimerSettingsDto {
	@IsEmail()
	@IsOptional()
  @ApiProperty()
	email?: string

	@IsString()
	@IsOptional()
  @ApiProperty()
	name?: string

	@IsOptional()
	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
  @ApiProperty()
	password?: string
}
