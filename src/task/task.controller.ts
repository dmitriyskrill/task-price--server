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
import { TaskDto } from './dto/task.dto'
import { TaskService } from './task.service'

@Controller('/task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

  @Get('all')
  async getAllTasks() {
    return this.taskService.getAllTasks()
  }

	@Get()
	// @Auth()
	async getAll(@CurrentUser('id') userId: string) {
		return this.taskService.getAll(userId)
	}

	@HttpCode(200)
	@Post()
//	@Auth()
	async create(@Body() dto: TaskDto) {	
		return this.taskService.create(dto)
	}

	@HttpCode(200)
	@Patch(':id')
	@Auth()
	async update(
		@Body() dto: TaskDto,
		@CurrentUser('id') userId: string,
		@Param('id') id: string
	) {
		return this.taskService.update(dto, id, userId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.taskService.delete(id)
	}
}
