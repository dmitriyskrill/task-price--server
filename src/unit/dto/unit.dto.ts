import {
	IsBoolean,
	IsInt,
	IsOptional,
	IsString,
	IsUUID,
	Max,
	Min
} from 'class-validator'
import { PartialType, OmitType } from '@nestjs/mapped-types'

export class UnitDto {
	@IsOptional()
	id?: string

	@IsString()
	name: string

	@IsBoolean()
	@IsOptional()
	isHourUnit: boolean = false

	@IsString()
	shortName?: string

	@IsString()
	fullName?: string

	@IsString()
	codeId?: string

	@IsString()
	key?: string

	@IsBoolean()
	@IsOptional()
	isTrash?: boolean = false
}

export class CreateUnitDto extends OmitType(UnitDto, ['id']) {}

export class UpdateUnitDto extends PartialType(UnitDto) {}
