import { Controller, Post, Get, HttpCode, Body, Param, Patch, Delete } from '@nestjs/common';
import { TaskDateGraphService } from './task-date-graph.service';
import { TaskDateGraphDto, UpdateTaskDateGraphDto } from './dto/task-date-graph.dto';
import { IdParamDto } from './dto/id.params.dto';

@Controller('task-date-graph')
export class TaskDateGraphController {
 constructor(private readonly taskDateGraphService: TaskDateGraphService) {}

 @Post()
 @HttpCode(200)

 async create(@Body() dto: any) {
   return await this.taskDateGraphService.create(dto);
 }

 @Patch()
 @HttpCode(204)
 async update(@Body() dto: UpdateTaskDateGraphDto, @Param() param: IdParamDto) {
   return await this.taskDateGraphService.update(dto, param.id);
 }

 @Delete()
 @HttpCode(204)
 async delete(@Param() param: any) {
   return await this.taskDateGraphService.delete(param.id);
 }

 @Get()
 @HttpCode(200)
 async findAll() {
   return await this.taskDateGraphService.getAll();
 }

 @Get(':id')
 @HttpCode(200)
 async findById(@Param() param: IdParamDto) {
   return await this.taskDateGraphService.getById(param.id);
 }
}

