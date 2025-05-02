import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common'
import { TableColumnChildService } from '@/table-column/table-column-child/table-column-child.service'
import { Auth } from '@/auth/decorators/auth.decorator'
import { CurrentUser } from '@/auth/decorators/user.decorator'
import { CreateTableColumnChildDto, UpdateTableColumnChildDto } from '@/table-column/table-column-child/dto/table-column-child.dto'
import { ITableColumnChild } from '@/domainTypes/TableColumn.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('table-column-child')
export class TableColumnChildController {
	constructor(private readonly tableColumnChildService: TableColumnChildService) {
	}
	@Get()
	@Auth()
	async get(@Query() filter: Record<string, any>) {
		return this.tableColumnChildService.get(filter)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.tableColumnChildService.getById(id);
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CreateTableColumnChildDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<ITableColumnChild> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnChildService.create(newDto)
	}

	@HttpCode(200)
	@Patch()
	@Auth()
	async patchMany(
		@Query() filter: Record<string, any>,
		@Body() update: UpdateTableColumnChildDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITableColumnChild> = {
			updatedById: userId,
		};
		const newUpdate = mapDtoToEntity(update, baseEntity);

		return this.tableColumnChildService.patchMany(filter, newUpdate)
	}

	@HttpCode(200)
	@Auth()
	@Patch(':id')
	async patch(
		@Param('id') id: string,
		@Body() update: UpdateTableColumnChildDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITypicalFields> = {
			updatedById: userId,
		};
		return this.tableColumnChildService.patch(id, mapDtoToEntity(update, baseEntity));
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.tableColumnChildService.delete(id)
	}
}
