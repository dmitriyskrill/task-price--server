import { Injectable } from '@nestjs/common'
import { TaskTypeRepository } from './db/task-type.repository'
import { ITaskType } from '@/domainTypes/TaskType.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskType } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TaskTypeService {
  constructor(private readonly taskTypeRepository: TaskTypeRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.taskTypeRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: Partial<ITaskType>) {
    return this.taskTypeRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.taskTypeRepository.getById(id)
  }

  async create(dto: ITaskType) {
    const baseEntity = <Partial<TaskType>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskTypeRepository.create(newDto)
  }

  async patch(id: string, data: Partial<TaskType>) {
    return this.taskTypeRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: Partial<TaskType>) {
    const baseEntity = <Partial<TaskType>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.taskTypeRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.taskTypeRepository.delete(id)
  }
}
