import { Module } from '@nestjs/common';
import { ExpenseDateGraphModule } from './expense-date-graph/expense-date-graph.module';
import { ExpenseDayGraphModule } from './expense-day-graph/expense-day-graph.module';

@Module({
  imports: [ExpenseDateGraphModule, ExpenseDayGraphModule]
})
export class ExpenseModule {}
