import { Module } from '@nestjs/common';
import { ExpenseDayGraphController } from './expense-day-graph.controller';
import { ExpenseDayGraphService } from './expense-day-graph.service';
import { PrismaService } from '../../prisma.service';
import { ExpenseDayGraphRepository } from '@/expense/expense-day-graph/db/expense-day-graph.repository'

@Module({
  controllers: [ExpenseDayGraphController],
  providers: [ExpenseDayGraphService, ExpenseDayGraphRepository, PrismaService]
})
export class ExpenseDayGraphModule {} 