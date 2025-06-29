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
import { UpdateTaskDateGraphDto } from './dto/task-date-graph.dto'
import { TaskDateGraphService } from './task-date-graph.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('task-date-graph')
export class TaskDateGraphController {
 constructor(private readonly taskDateGraphService: TaskDateGraphService) {
 }
 @Get()
 @Auth()
 async get(@Query() filter: Record<string, any>) {
  return this.taskDateGraphService.get(filter)
 }

 @Get(':id')
 @Auth()
 async getById(@Param('id') id: string) {
  return this.taskDateGraphService.getById(id);
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
  return this.taskDateGraphService.create(newDto)
 }

 @HttpCode(200)
 @Patch()
 @Auth()
 async patchMany(
   @Query() filter: Record<string, any>,
   @Body() update: UpdateTaskDateGraphDto,
   @CurrentUser('id') userId: string,
 ) {
  const baseEntity: Partial<any> = {
   updatedById: userId,
  };
  const newUpdate = mapDtoToEntity(update, baseEntity);

  return this.taskDateGraphService.patchMany(filter, newUpdate)
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
  return this.taskDateGraphService.patch(id, mapDtoToEntity(update, baseEntity));
 }

 @HttpCode(200)
 @Delete(':id')
 @Auth()
 async delete(@Param('id') id: string) {
  return this.taskDateGraphService.delete(id)
 }
} 