import { Injectable } from '@nestjs/common'
import { TaskWorkflowRepository } from './db/task-workflow.repository'
import { ITaskWorkflow } from '@/domainTypes/TaskWorkflow.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskWorkflow } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TaskWorkflowService {
  constructor(private readonly taskWorkflowRepository: TaskWorkflowRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.taskWorkflowRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: Partial<ITaskWorkflow>) {
    return this.taskWorkflowRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.taskWorkflowRepository.getById(id)
  }

  async create(dto: ITaskWorkflow) {
    const baseEntity = <Partial<TaskWorkflow>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskWorkflowRepository.create(newDto)
  }

  async patch(id: string, data: Partial<UserModel>) {
    return this.taskWorkflowRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: Partial<TaskWorkflow>) {
    const baseEntity = <Partial<TaskWorkflow>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.taskWorkflowRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.taskWorkflowRepository.delete(id)
  }
}
