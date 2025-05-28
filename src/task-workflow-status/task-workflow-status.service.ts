import { Injectable } from '@nestjs/common'
import { TaskWorkflowStatusRepository } from './db/task-workflow-status.repository'
import { ITaskWorkflowStatus } from '@/domainTypes/TaskWorkflowStatus.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskWorkflowStatus } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TaskWorkflowStatusService {
  constructor(private readonly taskWorkflowStatusRepository: TaskWorkflowStatusRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.taskWorkflowStatusRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: Partial<ITaskWorkflowStatus>) {
    return this.taskWorkflowStatusRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.taskWorkflowStatusRepository.getById(id)
  }

  async create(dto: ITaskWorkflowStatus) {
    const baseEntity = <Partial<TaskWorkflowStatus>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskWorkflowStatusRepository.create(newDto)
  }

  async patch(id: string, data: Partial<UserModel>) {
    return this.taskWorkflowStatusRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: Partial<TaskWorkflowStatus>) {
    const baseEntity = <Partial<TaskWorkflowStatus>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.taskWorkflowStatusRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.taskWorkflowStatusRepository.delete(id)
  }
}
