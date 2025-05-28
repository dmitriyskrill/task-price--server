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
import { CreateTaskWorkflowStatusPermissionDto, UpdateTaskWorkflowStatusPermissionDto } from './dto/task-workflow-status-permission.dto'
import { TaskWorkflowStatusPermissionService } from './task-workflow-status-permission.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITaskWorkflowStatusPermission } from '@/domainTypes/TaskWorkflowStatusPermission.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-workflow-status-permission')
export class TaskWorkflowStatusPermissionController {
  constructor(private readonly taskWorkflowStatusService: TaskWorkflowStatusPermissionService) {
  }
  @Get()
  @Auth()
  async get(@Query() filter: Record<string, any>) {
    return this.taskWorkflowStatusService.get(filter)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id: string) {
    return this.taskWorkflowStatusService.getById(id);
  }

  @HttpCode(200)
  @Post('fromOldDb')
  @Auth()
  async createManyFromOldDb(@CurrentUser('id') userId: string) {

    return this.taskWorkflowStatusService.createManyFromOldDb({
      createdById: userId,
      updatedById: userId
    })
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: CreateTaskWorkflowStatusPermissionDto, @CurrentUser('id') userId: string) {
    const baseEntity: Partial<ITaskWorkflowStatusPermission> = {
      createdById: userId,
      updatedById: userId
    }
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskWorkflowStatusService.create(newDto)
  }

  @HttpCode(200)
  @Patch()
  @Auth()
  async patchMany(
    @Query() filter: Record<string, any>,
    @Body() update: UpdateTaskWorkflowStatusPermissionDto,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITaskWorkflowStatusPermission> = {
      updatedById: userId,
    };
    const newUpdate = mapDtoToEntity(update, baseEntity);

    return this.taskWorkflowStatusService.patchMany(filter, newUpdate)
  }

  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() update: UpdateTaskWorkflowStatusPermissionDto,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITypicalFields> = {
      updatedById: userId,
    };
    return this.taskWorkflowStatusService.patch(id, mapDtoToEntity(update, baseEntity));
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.taskWorkflowStatusService.delete(id)
  }
}
