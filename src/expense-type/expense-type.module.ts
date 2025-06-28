import { Module } from '@nestjs/common';
import { ExpenseTypeService } from './expense-type.service';
import { ExpenseTypeController } from './expense-type.controller';
import { HttpModule } from '@nestjs/axios'
import { ExpenseTypeRepository } from './db/expense-type.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  imports: [HttpModule],
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypeService, ExpenseTypeRepository, PrismaService],
})
export class ExpenseTypeModule {}
