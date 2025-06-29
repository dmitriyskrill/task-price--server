import { Module } from '@nestjs/common';
import { ExpenseDateGraphController } from './expense-date-graph.controller';
import { ExpenseDateGraphService } from './expense-date-graph.service';
import { PrismaService } from '../../prisma.service';
import { ExpenseDateGraphRepository } from '@/expense/expense-date-graph/db/expense-date-graph.repository'

@Module({
  controllers: [ExpenseDateGraphController],
  providers: [ExpenseDateGraphService, ExpenseDateGraphRepository, PrismaService]
})
export class ExpenseDateGraphModule {} 