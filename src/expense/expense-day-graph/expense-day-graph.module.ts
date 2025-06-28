import { Module } from '@nestjs/common';
import { ExpenseDayGraphController } from './expense-day-graph.controller';
import { ExpenseDayGraphService } from './expense-day-graph.service';
import { ExpenseDayGraphRepository } from './expense-day-graph.repository'
import { PrismaService } from '../../prisma.service';
@Module({
  controllers: [ExpenseDayGraphController],
  providers: [ExpenseDayGraphService, ExpenseDayGraphRepository, PrismaService]
})
export class ExpenseDayGraphModule {}
