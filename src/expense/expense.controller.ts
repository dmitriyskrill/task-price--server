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
import { ExpenseDto } from '@/expense/db/dto/expense.dto'
import { ExpenseService } from './expense.service'
import { IUnit } from '@/domainTypes/Unit.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'

@Controller('/expense')
export class ExpenseController {
	constructor(private readonly expenseService: ExpenseService) {}

  @Get('all')
  async getAllExpenses() {
    return this.expenseService.getAllExpenses()
  }

	@Get()
	@Auth()
	async getAll(@CurrentUser('id') userId: string) {
		return this.expenseService.getAll()
	}

	@HttpCode(200)
	@Post()
  @Auth()
	async create(@Body() dto: ExpenseDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<any> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.expenseService.create(newDto)
	}

	@HttpCode(200)
	@Patch(':id')
	@Auth()
	async update(
		@Body() dto: ExpenseDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string
	) {
		return this.expenseService.update(dto, id)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.expenseService.delete(id)
	}
}
