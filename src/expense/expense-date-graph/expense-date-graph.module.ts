import { Module } from '@nestjs/common';
import { ExpenseDateGraphService } from '@/expense/expense-date-graph/expense-date-graph.service'
import { ExpenseDateGraphController } from './expense-date-graph.controller';
import { PrismaService } from '../../prisma.service';
import { ExpenseDateGraphRepository } from './expense-date-graph.repository';
@Module({
	controllers: [ExpenseDateGraphController],
	providers: [ExpenseDateGraphService, ExpenseDateGraphRepository, PrismaService]
})

export class ExpenseDateGraphModule {}
