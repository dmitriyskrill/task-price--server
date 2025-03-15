import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class TableColumnDto {
	@IsUUID()
	@IsOptional()
	id?: string;

	@IsString()
	key: string;

	@IsString()
	name: string;

	@IsInt()
	@IsOptional()
	width?: number = 30;

	@IsBoolean()
	@IsOptional()
	isShow?: boolean = false;

	@IsBoolean()
	@IsOptional()
	isFixed?: boolean = false;

	@IsString()
	@IsOptional()
	cellType?: string;

	@IsBoolean()
	@IsOptional()
	isTrash?: boolean = false;
}

export class CreateTableColumnDto extends OmitType(TableColumnDto, ['id']) {}
export class UpdateTableColumnDto extends PartialType(TableColumnDto) {}

