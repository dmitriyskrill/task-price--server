import { Injectable } from '@nestjs/common';
// import { TaskDayGraphDto, UpdateTaskDayGraphDto } from './dto/task-day-graph.dto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class TaskDayGraphService {
  constructor(private prisma: PrismaService) {}

  async create(taskDayGraphData: any) {
    return await this.prisma.taskDayGraph.create({
      data: {
        ...taskDayGraphData
      } 
    });
  }

  async update(taskDayGraphData: any, id: string) {
    return this.prisma.taskDayGraph.update({
      where: {
        id
      },
      data: {
        ...taskDayGraphData
      }
    });
  }

  async delete(id: string) {
    return await this.prisma.taskDayGraph.delete({
      where: {
        id
      }
    });
  }

  async findAll() {
    return await this.prisma.taskDayGraph.findMany();
  }

  async findById(id: string) {
    return await this.prisma.taskDayGraph.findUnique({
      where: {
        id
      }
    });
  } 

}
