import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class TableColumnChildDto {
	@IsUUID()
	@IsOptional()
	id?: string;

	@IsString()
	key: string;

	@IsString()
	name: string;

	@IsString()
	tooltipInfo: string;

	@IsInt()
	@IsOptional()
	widthPercent?: number = 30;

	@IsBoolean()
	@IsOptional()
	isTrash?: boolean = false;

	@IsUUID()
	tableColumnId: string;
}

export class CreateTableColumnChildDto extends OmitType(TableColumnChildDto, ['id']) {}
export class UpdateTableColumnChildDto extends PartialType(TableColumnChildDto) {}

