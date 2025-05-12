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
	@IsUUID()
	@IsOptional()
	id?: string

	@IsString()
	key: string

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

	@IsBoolean()
	@IsOptional()
	isTrash?: boolean = false
}

export class CreateUnitDto extends OmitType(UnitDto, ['id']) {}

export class UpdateUnitDto extends PartialType(UnitDto) {}
