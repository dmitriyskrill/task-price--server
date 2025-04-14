import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Patch, Query
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateTableColumnDto, UpdateTableColumnDto } from '@/table-column/dto/table-column.dto'
import { TableColumnService } from '@/table-column/table-column.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITableColumn } from '@/domainTypes/TableColumn.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('table-column')
export class TableColumnController {
	constructor(private readonly tableColumnService: TableColumnService) {
	}
	@Get()
	@Auth()
	async get(@Query() filter: Record<string, any>) {
		return this.tableColumnService.get(filter)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.tableColumnService.getById(id);
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CreateTableColumnDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<ITableColumn> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnService.create(newDto)
	}

	@HttpCode(200)
	@Patch()
	@Auth()
	async patchMany(
		@Query() filter: Record<string, any>,
		@Body() update: UpdateTableColumnDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITableColumn> = {
			updatedById: userId,
		};
		const newUpdate = mapDtoToEntity(update, baseEntity);

		return this.tableColumnService.patchMany(filter, newUpdate)
	}

	@HttpCode(200)
	@Auth()
	@Patch(':id')
	async patch(
		@Param('id') id: string,
		@Body() update: UpdateTableColumnDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITypicalFields> = {
			updatedById: userId,
		};
		return this.tableColumnService.patch(id, mapDtoToEntity(update, baseEntity));
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.tableColumnService.delete(id)
	}
}
