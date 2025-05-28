import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Patch, Query
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateUnitDto, UpdateUnitDto } from '@/unit/dto/unit.dto'
import { UnitService } from '@/unit/unit.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { IUnit } from '@/domainTypes/Unit.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('unit')
export class UnitController {
	constructor(private readonly unitService: UnitService) {
	}
	@Get()
	@Auth()
	async get(@Query() filter: Record<string, any>) {
		return this.unitService.get(filter)
	}

	@Get(':id')
	@Auth()
	async getById(@Param('id') id: string) {
		return this.unitService.getById(id);
	}

	// @HttpCode(200)
	// @Post('fromOldDb')
	// @Auth()
	// async createManyFromOldDb(@CurrentUser('id') userId: string) {
	//
	// 	return this.unitService.createManyFromOldDb({
	// 		createdById: userId,
	// 		updatedById: userId
	// 	})
	// }

	@HttpCode(200)
	@Post()
	@Auth()
	async create(@Body() dto: CreateUnitDto, @CurrentUser('id') userId: string) {
		const baseEntity: Partial<IUnit> = {
			createdById: userId,
			updatedById: userId
		}
		const newDto = mapDtoToEntity(dto, baseEntity)
		return this.unitService.create(newDto)
	}

	@HttpCode(200)
	@Patch()
	@Auth()
	async patchMany(
		@Query() filter: Record<string, any>,
		@Body() update: UpdateUnitDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<IUnit> = {
			updatedById: userId,
		};
		const newUpdate = mapDtoToEntity(update, baseEntity);

		return this.unitService.patchMany(filter, newUpdate)
	}

	@HttpCode(200)
	@Auth()
	@Patch(':id')
	async patch(
		@Param('id') id: string,
		@Body() update: UpdateUnitDto,
		@CurrentUser('id') userId: string,
	) {
		const baseEntity: Partial<ITypicalFields> = {
			updatedById: userId,
		};
		return this.unitService.patch(id, mapDtoToEntity(update, baseEntity));
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id') id: string) {
		return this.unitService.delete(id)
	}
}
