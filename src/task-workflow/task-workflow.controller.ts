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
import { CreateTaskWorkflowDto, UpdateTaskWorkflowDto } from './dto/task-workflow.dto'
import { TaskWorkflowService } from './task-workflow.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITaskWorkflow } from '@/domainTypes/TaskWorkflow.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-workflow')
export class TaskWorkflowController {
  constructor(private readonly taskWorkflowService: TaskWorkflowService) {
  }
  @Get()
  @Auth()
  async get(@Query() filter: Record<string, any>) {
    return this.taskWorkflowService.get(filter)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id: string) {
    return this.taskWorkflowService.getById(id);
  }

  @HttpCode(200)
  @Post('fromOldDb')
  @Auth()
  async createManyFromOldDb(@CurrentUser('id') userId: string) {

    return this.taskWorkflowService.createManyFromOldDb({
      createdById: userId,
      updatedById: userId
    })
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: CreateTaskWorkflowDto, @CurrentUser('id') userId: string) {
    const baseEntity: Partial<ITaskWorkflow> = {
      createdById: userId,
      updatedById: userId
    }
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskWorkflowService.create(newDto)
  }

  @HttpCode(200)
  @Patch()
  @Auth()
  async patchMany(
    @Query() filter: Record<string, any>,
    @Body() update: any,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITaskWorkflow> = {
      updatedById: userId,
    };
    const newUpdate = mapDtoToEntity(update, baseEntity);

    return this.taskWorkflowService.patchMany(filter, newUpdate)
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
    return this.taskWorkflowService.patch(id, mapDtoToEntity(update, baseEntity));
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.taskWorkflowService.delete(id)
  }
}
