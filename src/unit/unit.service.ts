import { Injectable } from '@nestjs/common'
import {
	CreateUnitDto,
	UpdateUnitDto
} from './dto/unit.dto'
import { UnitRepository } from '@/unit/unit.repository'
import { IUnit } from '@/domainTypes/Unit.interface'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { Unit } from '@prisma/client'
import { UserModel } from '@/user/db/User.model'

@Injectable()
export class UnitService {
	constructor(private readonly unitRepository: UnitRepository) {}

	async get(filter: Record<string, any> = {}) {
		return this.unitRepository.get(filter)
	}


	async getById(id: string) {
		return this.unitRepository.getById(id)
	}

	async create(dto: IUnit) {
		const baseEntity = <Partial<Unit>>{}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.unitRepository.create(newDto)
	}

	async patch(id: string, data: Partial<UserModel>) {
		return this.unitRepository.patch(id, data)
	}

	async patchMany(filter: Record<string, any>, update: Partial<Unit>) {
		const baseEntity = <Partial<Unit>>{}
		const newDto = mapDtoToEntity(update, baseEntity)
		return this.unitRepository.updateMany(filter, newDto)
	}

	async delete(id: string) {
		return this.unitRepository.delete(id)
	}
}
