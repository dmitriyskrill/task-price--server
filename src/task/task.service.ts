import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}
  
  async getAllTasks() {
    return this.prisma.task.findMany(
      {
        include: {
          taskDayGraphs: true,
          taskDateGraphs: true
        }
      }
    )
  }

	async getAll(userId: string) {
		return this.prisma.task.findMany({
			where: {
				userId
			}
		})
	}

	async create(dto: TaskDto) {
    const user = await this.prisma.user.findFirst();
    
		return this.prisma.task.create({
			data: {
				...dto,
				user: {
					connect: {
						id: user.id
					} 
				}
			}
		})
	}

	async update(dto: Partial<TaskDto>, taskId: string, userId: string) {
		return this.prisma.task.update({
			where: {
				userId,
				id: taskId
			},
			data: dto
		})
	}

	async delete(taskId: string) {
		return this.prisma.task.delete({
			where: {
				id: taskId
			}
		})
	}
}
