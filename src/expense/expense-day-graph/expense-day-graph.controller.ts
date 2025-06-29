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
import { UpdateExpenseDayGraphDto } from './dto/expense-day-graph.dto'
import { ExpenseDayGraphService } from './expense-day-graph.service'
import { mapDtoToEntity } from '@/utils/mapper.util'
import { ITypicalFields } from '@/domainTypes/TypicalFields.interface'

@Controller('expense-day-graph')
export class ExpenseDayGraphController {
 constructor(private readonly expenseDayGraphService: ExpenseDayGraphService) {
 }
 @Get()
 @Auth()
 async get(@Query() filter: Record<string, any>) {
  return this.expenseDayGraphService.get(filter)
 }

 @Get(':id')
 @Auth()
 async getById(@Param('id') id: string) {
  return this.expenseDayGraphService.getById(id);
 }


 @HttpCode(200)
 @Post()
 @Auth()
 async create(@Body() dto: any, @CurrentUser('id') userId: string) {
  const baseEntity: Partial<any> = {
   createdById: userId,
   updatedById: userId
  }
  const newDto = mapDtoToEntity(dto, baseEntity)
  return this.expenseDayGraphService.create(newDto)
 }

 @HttpCode(200)
 @Patch()
 @Auth()
 async patchMany(
   @Query() filter: Record<string, any>,
   @Body() update: UpdateExpenseDayGraphDto,
   @CurrentUser('id') userId: string,
 ) {
  const baseEntity: Partial<any> = {
   updatedById: userId,
  };
  const newUpdate = mapDtoToEntity(update, baseEntity);

  return this.expenseDayGraphService.patchMany(filter, newUpdate)
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
  return this.expenseDayGraphService.patch(id, mapDtoToEntity(update, baseEntity));
 }

 @HttpCode(200)
 @Delete(':id')
 @Auth()
 async delete(@Param('id') id: string) {
  return this.expenseDayGraphService.delete(id)
 }
} 