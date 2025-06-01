import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class TableColumnDto {
	@IsString()
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

	@IsBoolean()
	@IsOptional()
	isEditable: boolean = false;

	@IsString()
	@IsOptional()
	cellType?: string;

	@IsOptional()
	tableColumnGroup?: any

	@IsBoolean()
	@IsOptional()
	isTrash?: boolean = false;
}

export class CreateTableColumnDto extends OmitType(TableColumnDto, ['id']) {}
export class UpdateTableColumnDto extends PartialType(TableColumnDto) {}

