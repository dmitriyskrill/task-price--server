import { Module } from '@nestjs/common';
import { ExpenseDateGraphService } from '@/expense/expense-date-graph/expense-date-graph.service'

@Module({
	controllers: [],
	providers: [ExpenseDateGraphService],
})
export class ExpenseDateGraphModule {}
