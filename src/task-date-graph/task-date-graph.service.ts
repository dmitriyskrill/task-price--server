import { PrismaService } from '@/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TaskDateGraphDto, UpdateTaskDateGraphDto } from './dto/task-date-graph.dto';
@Injectable()
export class TaskDateGraphService {
  constructor(private prisma: PrismaService) {}
 
  async create(taskDateGraphData: TaskDateGraphDto) {
    return await this.prisma.taskDateGraph.create({
      data: {
        ...taskDateGraphData
      } 
    });
  }

  async update(taskDateGraphData: UpdateTaskDateGraphDto, id: string) {
   try {
   return await this.prisma.taskDateGraph.update({
      where: {
        id
      },
      data: {
        ...taskDateGraphData
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
    return await this.prisma.taskDateGraph.delete({
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
    return await this.prisma.taskDateGraph.findMany();
  }

  async findById(id: string) {
    return await this.prisma.taskDateGraph.findUnique({
      where: {
        id
      }
    });
  }  
   
}
