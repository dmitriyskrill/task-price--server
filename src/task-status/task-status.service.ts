import { Injectable } from '@nestjs/common'
import { TaskStatusRepository } from './db/task-status.repository'
import { ITaskStatus } from '@/domainTypes/TaskStatus.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskStatus } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TaskStatusService {
  constructor(private readonly taskStatusRepository: TaskStatusRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.taskStatusRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: Partial<ITaskStatus>) {
    return this.taskStatusRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.taskStatusRepository.getById(id)
  }

  async create(dto: ITaskStatus) {
    const baseEntity = <Partial<TaskStatus>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskStatusRepository.create(newDto)
  }

  async patch(id: string, data: Partial<UserModel>) {
    return this.taskStatusRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: Partial<TaskStatus>) {
    const baseEntity = <Partial<TaskStatus>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.taskStatusRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.taskStatusRepository.delete(id)
  }
}
