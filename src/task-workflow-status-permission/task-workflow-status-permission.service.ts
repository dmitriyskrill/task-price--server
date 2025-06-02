import { Injectable } from '@nestjs/common'
import { TaskWorkflowStatusPermissionRepository } from './db/task-workflow-status-permission.repository'
import { ITaskWorkflowStatusPermission } from '@/domainTypes/TaskWorkflowStatusPermission.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { TaskWorkflowStatusPermission } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class TaskWorkflowStatusPermissionService {
  constructor(private readonly taskWorkflowStatusRepository: TaskWorkflowStatusPermissionRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.taskWorkflowStatusRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: Partial<ITaskWorkflowStatusPermission>) {
    return this.taskWorkflowStatusRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.taskWorkflowStatusRepository.getById(id)
  }

  async create(dto: any) {
    const baseEntity = <Partial<TaskWorkflowStatusPermission>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.taskWorkflowStatusRepository.create(newDto)
  }

  async patch(id: string, data: Partial<UserModel>) {
    return this.taskWorkflowStatusRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: any) {
    const baseEntity = <Partial<TaskWorkflowStatusPermission>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.taskWorkflowStatusRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.taskWorkflowStatusRepository.delete(id)
  }
}
