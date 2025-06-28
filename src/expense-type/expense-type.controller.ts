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
import { CreateExpenseTypeDto, UpdateExpenseTypeDto } from './dto/expense-type.dto'
import { ExpenseTypeService } from './expense-type.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { IExpenseType } from '@/domainTypes/ExpenseType.interface'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('expense-type')
export class ExpenseTypeController {
  constructor(private readonly expenseTypeService: ExpenseTypeService) {
  }
  @Get()
  @Auth()
  async get(@Query() filter: Record<string, any>) {
    return this.expenseTypeService.get(filter)
  }

  @Get(':id')
  @Auth()
  async getById(@Param('id') id: string) {
    return this.expenseTypeService.getById(id);
  }

  @HttpCode(200)
  @Post('fromOldDb')
  @Auth()
  async createManyFromOldDb(@CurrentUser('id') userId: string) {

    return this.expenseTypeService.createManyFromOldDb({
      createdById: userId,
      updatedById: userId
    })
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: any, @CurrentUser('id') userId: string) {
    const baseEntity: any = {
      createdById: userId,
      updatedById: userId
    }
    const newDto = mapDtoToEntity(dto, baseEntity)
    return this.expenseTypeService.create(newDto)
  }

  @HttpCode(200)
  @Patch()
  @Auth()
  async patchMany(
    @Query() filter: Record<string, any>,
    @Body() update: UpdateExpenseTypeDto,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: any = {
      updatedById: userId,
    };
    const newUpdate = mapDtoToEntity(update, baseEntity);

    return this.expenseTypeService.patchMany(filter, newUpdate)
  }

  @HttpCode(200)
  @Auth()
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() update:any,
    @CurrentUser('id') userId: string,
  ) {
    const baseEntity: Partial<ITypicalFields> = {
      updatedById: userId,
    };
    return this.expenseTypeService.patch(id, mapDtoToEntity(update, baseEntity));
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.expenseTypeService.delete(id)
  }
}
