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
import { CreateTaskStatusDto, UpdateTaskStatusDto } from './dto/task-status.dto'
import { TaskStatusService } from './task-status.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITaskStatus } from '@/domainTypes/TaskStatus.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-status')
export class TaskStatusController {
  constructor(private readonly taskStatusService: TaskStatusService) {
  }
  @Get()
  @Auth()
  async get(@Query() filter: Record<string, any>) {
    return this.taskStatusService.get(filter)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id: string) {
    return this.taskStatusService.getById(id);
  }

  @HttpCode(200)
  @Post('fromOldDb')
  @Auth()
  async createManyFromOldDb(@CurrentUser('id') userId: string) {

    return this.taskStatusService.createManyFromOldDb({
      createdById: userId,
      updatedById: userId
    })
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: CreateTaskStatusDto, @CurrentUser('id') userId: string) {
    const baseEntity: Partial<ITaskStatus> = {
      createdById: userId,
      updatedById: userId
    }
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskStatusService.create(newDto)
  }

  @HttpCode(200)
  @Patch()
  @Auth()
  async patchMany(
    @Query() filter: Record<string, any>,
    @Body() update: UpdateTaskStatusDto,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITaskStatus> = {
      updatedById: userId,
    };
    const newUpdate = mapDtoToEntity(update, baseEntity);

    return this.taskStatusService.patchMany(filter, newUpdate)
  }

  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() update: UpdateTaskStatusDto,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITypicalFields> = {
      updatedById: userId,
    };
    return this.taskStatusService.patch(id, mapDtoToEntity(update, baseEntity));
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.taskStatusService.delete(id)
  }
}
