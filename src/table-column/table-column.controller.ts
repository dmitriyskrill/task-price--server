import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Patch,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TableColumnDto } from '@/task/db/dto/task.dto'
import { TableColumnService } from '@/table-column/table-column.service'
@Controller('table-column')
export class TableColumnController {
	constructor(private readonly tableColumnService: TableColumnService) {
	}
	@Get()
	@Auth()
	async getAll() {
		return this.tableColumnService.getAll()
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: TableColumnDto, @CurrentUser('id') userId: string) {
		return this.tableColumnService.create(dto, userId)
	}

	@HttpCode(200)
	@Patch(':id')
	@Auth()
	async update(
		@Body() dto: TableColumnDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string
	) {
		return this.tableColumnService.update(dto, id, userId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.tableColumnService.delete(id)
	}
}
