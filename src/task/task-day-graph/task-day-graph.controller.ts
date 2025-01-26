import { TaskDayGraphService } from './task-day-graph.service';
import { Get, Body, Post, Patch, Param, Delete, Controller, HttpCode } from '@nestjs/common';
import { TaskDayGraphDto, UpdateTaskDayGraphDto } from './dto/task-day-graph.dto';
import { IdParamDto } from './dto/id.params.dto';

@Controller('task-day-graph')
export class TaskDayGraphController {
 constructor(private readonly taskDayGraphService: TaskDayGraphService) {}

 @Post()
 @HttpCode(200) 
 async create(@Body() dto: TaskDayGraphDto) {
   return await this.taskDayGraphService.create(dto);
 }

 @Patch()
 @HttpCode(204)
 async update(@Body() dto: UpdateTaskDayGraphDto, @Param() param: IdParamDto) {
   return await this.taskDayGraphService.update(dto, param.id);
 }

 @Delete()
 @HttpCode(204)
 async delete(@Param() param: any) {
   return await this.taskDayGraphService.delete(param.id);
 }

 @Get()
 @HttpCode(200)
 async findAll() {
   return await this.taskDayGraphService.findAll();
 }

 @Get(':id')
 @HttpCode(200)
 async findById(@Param() param: IdParamDto) {
   return await this.taskDayGraphService.findById(param.id);
 }


}
