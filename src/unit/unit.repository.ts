import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { UpdateUnitDto } from '@/unit/dto/unit.dto'
import { Unit } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UnitRepository {
	constructor(
		private readonly prisma: PrismaService,
	) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.unit.findMany({
			where: filter,
		})
	}

	async getById(id: string) {
		return this.prisma.unit.findUnique({
			where: { id }
		})
	}


	async create(dto: Unit): Promise<Unit> {
		try {
			return await this.prisma.unit.create({
				data: dto
			})
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ConflictException(
						`Unique constraint failed on the fields: ${error.meta.target}`
					)
				}
			}
			throw error
		}
	}

	async updateMany(filter: Record<string, any>, data: UpdateUnitDto) {
		return this.prisma.unit.updateMany({
			where: filter,
			data: {
				...data
			}
		})
	}

	async patch(id: string, data: Partial<Unit>) {
		return this.prisma.unit.update({
			where: {
				id
			},
			data
		})
	}

	async delete(id: string) {
		return this.prisma.unit.delete({
			where: { id }
		})
	}
}
