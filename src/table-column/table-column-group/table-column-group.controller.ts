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
// import { CreateTableColumnGroupDto, UpdateTableColumnGroupDto } from '@/table-column/dto/table-column.dto'
import { TableColumnGroupService } from '@/table-column/table-column-group/table-column-group.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITableColumnGroup } from '@/domainTypes/TableColumnGroup.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('table-column-group')
export class TableColumnGroupController {
	constructor(private readonly tableColumnGroupService: TableColumnGroupService) {
	}
	@Get()
	@Auth()
	async get(@Query() filter: Record<string, any>) {
		return this.tableColumnGroupService.get(filter)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.tableColumnGroupService.getById(id);
	}


	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: any, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<ITableColumnGroup> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.tableColumnGroupService.create(newDto)
	}

	@HttpCode(200)
	@Patch()
	@Auth()
	async patchMany(
		@Query() filter: Record<string, any>,
		@Body() update: any,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITableColumnGroup> = {
			updatedById: userId,
		};
		const newUpdate = mapDtoToEntity(update, baseEntity);

		return this.tableColumnGroupService.patchMany(filter, newUpdate)
	}

	@HttpCode(200)
	@Auth()
	@Patch(':id')
	async patch(
		@Param('id') id: string,
		@Body() update: any,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITypicalFields> = {
			updatedById: userId,
		};
		return this.tableColumnGroupService.patch(id, mapDtoToEntity(update, baseEntity));
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.tableColumnGroupService.delete(id)
	}
}
