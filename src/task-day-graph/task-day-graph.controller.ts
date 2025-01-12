import { TaskDayGraphService } from './task-day-graph.service';
import { Get, Body, Post, Patch, Param, Delete, Controller, HttpCode } from '@nestjs/common';
import { TaskDayGraphDto, UpdateTaskDayGraphDto } from './dto/task-day-graph.dto';
import { IdParamDto } from './dto/id.params.dto';

@Controller('task-day-graph')
export class TaskDayGraphController {
 constructor(private readonly taskDayGraphService: TaskDayGraphService) {}

 @HttpCode(200) 
 @Post('create')
 async create(@Body() dto: TaskDayGraphDto) {
   return await this.taskDayGraphService.create(dto);
 }

 @HttpCode(204)
 @Patch('update/:id')
 async update(@Body() dto: UpdateTaskDayGraphDto, @Param() param: any) {
   return await this.taskDayGraphService.update(dto, param.id);
 }

 @HttpCode(204)
 @Delete('delete/:id')
 async delete(@Param() param: any) {
   return await this.taskDayGraphService.delete(param.id);
 }

 @HttpCode(200)
 @Get('list')
 async findAll() {
   return await this.taskDayGraphService.findAll();
 }

 @HttpCode(200)
 @Get(':id')
 async findById(@Param() param: IdParamDto) {
   return await this.taskDayGraphService.findById(param.id);
 }

}
