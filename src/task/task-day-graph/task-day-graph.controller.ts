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
import { UpdateTaskDayGraphDto } from './dto/task-day-graph.dto'
import { TaskDayGraphService } from './task-day-graph.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-day-graph')
export class TaskDayGraphController {
 constructor(private readonly taskDayGraphService: TaskDayGraphService) {
 }
 @Get()
 @Auth()
 async get(@Query() filter: Record<string, any>) {
  return this.taskDayGraphService.get(filter)
 }

 @Get(':id')
 @Auth()
 async getById(@Param('id') id: string) {
  return this.taskDayGraphService.getById(id);
 }


 @HttpCode(200)
 @Post()
 @Auth()
 async create(@Body() dto: any, @CurrentUser('id') userId: string) {
  const baseEntity: Partial<any> = {
   createdById: userId,
   updatedById: userId
  }
  const newDto = mapDtoToEntity(dto, baseEntity)
  return this.taskDayGraphService.create(newDto)
 }

 @HttpCode(200)
 @Patch()
 @Auth()
 async patchMany(
   @Query() filter: Record<string, any>,
   @Body() update: UpdateTaskDayGraphDto,
   @CurrentUser('id') userId: string,
 ) {
  const baseEntity: Partial<any> = {
   updatedById: userId,
  };
  const newUpdate = mapDtoToEntity(update, baseEntity);

  return this.taskDayGraphService.patchMany(filter, newUpdate)
 }

 @HttpCode(200)
 @Auth()
 @Patch(':id')
 async patch(
   @Param('id') id: string,
   @Body() update:any,
   @CurrentUser('id') userId: string,
 ) {
  const baseEntity: Partial<ITypicalFields> = {
   updatedById: userId,
  };
  return this.taskDayGraphService.patch(id, mapDtoToEntity(update, baseEntity));
 }

 @HttpCode(200)
 @Delete(':id')
 @Auth()
 async delete(@Param('id') id: string) {
  return this.taskDayGraphService.delete(id)
 }
}
