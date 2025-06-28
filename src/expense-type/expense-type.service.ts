import { Injectable } from '@nestjs/common'
import { ExpenseTypeRepository } from './db/expense-type.repository'
import { IExpenseType } from '@/domainTypes/ExpenseType.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ExpenseType } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class ExpenseTypeService {
  constructor(private readonly expenseTypeRepository: ExpenseTypeRepository) {}

  async get(filter: Record<string, any> = {}) {
    return this.expenseTypeRepository.get(filter)
  }

  async createManyFromOldDb({ createdById, updatedById }: any) {
    return this.expenseTypeRepository.createManyFromOldDb({ createdById, updatedById })
  }

  async getById(id: string) {
    return this.expenseTypeRepository.getById(id)
  }

  async create(dto: any) {
    const baseEntity = <Partial<ExpenseType>>{}
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.expenseTypeRepository.create(newDto)
  }

  async patch(id: string, data: Partial<UserModel>) {
    return this.expenseTypeRepository.patch(id, data)
  }

  async patchMany(filter: Record<string, any>, update: Partial<ExpenseType>) {
    const baseEntity = <Partial<ExpenseType>>{}
    const newDto = mapDtoToEntity(update, baseEntity)
    return this.expenseTypeRepository.updateMany(filter, newDto)
  }

  async delete(id: string) {
    return this.expenseTypeRepository.delete(id)
  }
}
