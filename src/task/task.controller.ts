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
import { TaskDto } from '@/task/db/dto/task.dto'
import { TaskService } from './task.service'
import { IUnit } from '@/domainTypes/Unit.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'

@Controller('/task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

  @Get('all')
  async getAllTasks() {
    return this.taskService.getAllTasks()
  }

	@Get()
	@Auth()
	async getAll(@CurrentUser('id') userId: string) {
		return this.taskService.getAll()
	}

	@HttpCode(200)
	@Post()
  @Auth()
	async create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<any> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.taskService.create(newDto)
	}

	@HttpCode(200)
	@Patch(':id')
	@Auth()
	async update(
		@Body() dto: TaskDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string
	) {
		return this.taskService.update(dto, id)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.taskService.delete(id)
	}
}
