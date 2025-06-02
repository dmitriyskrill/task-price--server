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
import { CreateTaskWorkflowStatusDto, UpdateTaskWorkflowStatusDto } from './dto/task-workflow-status.dto'
import { TaskWorkflowStatusService } from './task-workflow-status.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITaskWorkflowStatus } from '@/domainTypes/TaskWorkflowStatus.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-workflow-status')
export class TaskWorkflowStatusController {
  constructor(private readonly taskWorkflowStatusService: TaskWorkflowStatusService) {
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
  async create(@Body() dto: any, @CurrentUser('id') userId: string) {
    const baseEntity: Partial<ITaskWorkflowStatus> = {
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
    @Body() update: any,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITaskWorkflowStatus> = {
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
    @Body() update: any,
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
