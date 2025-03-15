import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma.service';
import { CreateTableColumnDto, UpdateTableColumnDto } from '../dto/table-column.dto';
import { TableColumn } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class TableColumnRepository {
	constructor(private readonly prisma: PrismaService) {}

	async get(filter: Record<string, any> = {}) {
		return this.prisma.tableColumn.findMany({
			where: filter,
		});
	}


	async getById(id: string) {
		return this.prisma.tableColumn.findUnique({
			where: { id },
		});
	}

	async create(dto: TableColumn): Promise<TableColumn> {
		try {
			return await this.prisma.tableColumn.create({
				data: dto,
			});
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new ConflictException(`Unique constraint failed on the fields: ${error.meta.target}`);
				}
			}
			throw error;
		}
	}
	async updateMany(filter: Record<string, any>, data: UpdateTableColumnDto) {
		return this.prisma.tableColumn.updateMany({
			where: filter,
			data: {
				...data,
			},
		});
	}

	async delete(id: string) {
		return this.prisma.tableColumn.delete({
			where: { id },
		});
	}
}
