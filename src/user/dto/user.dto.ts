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


export class UserDto {
	@IsEmail()
	@IsOptional()
  @ApiProperty()
	email?: string

	@IsString()
	@IsOptional()
  @ApiProperty()
	name?: string

	@IsString()
  @ApiProperty()
	password?: string
}

export class CreateUserDto {
	@IsEmail()
	@IsOptional()
	@ApiProperty()
	email?: string

	@IsString()
	@IsOptional()
	@ApiProperty()
	name?: string

	@IsString()
	@IsOptional()
	@ApiProperty()
	surname?: string

	@IsString()
	@IsOptional()
	@ApiProperty()
	patronymic?: string

	@IsString()
	@IsOptional()
	@ApiProperty()
	password?: string
}