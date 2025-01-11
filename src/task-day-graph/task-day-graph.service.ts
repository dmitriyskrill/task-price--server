import { Injectable } from '@nestjs/common';
import { TaskDayGraphDto } from './task-day-graph.dto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class TaskDayGraphService {
  constructor(private prisma: PrismaService) {}
//
//  async create(taskDayGraphData: TaskDayGraphDto) {}
//  async update(taskDayGraphData, id: TaskDayGraphDto.id) {}
  //delete(taskDayGraphData) {}
  //findAll() {}
  // findById(id) {} 
}
