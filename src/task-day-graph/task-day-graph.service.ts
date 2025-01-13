import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Prisma } from '@prisma/client';
import { TaskDayGraphDto, UpdateTaskDayGraphDto } from './dto/task-day-graph.dto';

@Injectable()
export class TaskDayGraphService {
  constructor(private prisma: PrismaService) {}

  async create(taskDayGraphData: TaskDayGraphDto) {
    return await this.prisma.taskDayGraph.create({
      data: {
        ...taskDayGraphData
      } 
    });
  }

  async update(taskDayGraphData: UpdateTaskDayGraphDto, id: string) {
   try {
   return await this.prisma.taskDayGraph.update({
      where: {
        id
      },
      data: {
        ...taskDayGraphData
      }
    })
  } catch(error: any) {
    if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
    ) {
        throw new NotFoundException(`Record with this id not found.`);
    }
    throw error;
  }
  }

  async delete(id: string) {
    try {
    return await this.prisma.taskDayGraph.delete({
      where: {
        id
      }
    });
    } catch(error: any) {
      if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2025'
      ) {
          throw new NotFoundException(`Record with this id not found.`);
      }
      throw error; 
    }
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
