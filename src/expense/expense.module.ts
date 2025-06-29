import { Module } from '@nestjs/common'
import { PrismaService } from '@/prisma.service'
import { ExpenseController } from '@/expense/expense.controller'
import { ExpenseService } from '@/expense/expense.service'
import { ExpenseRepository } from '@/expense/db/repository/expense.repository'

@Module({
	controllers: [ExpenseController],
	providers: [ExpenseService, ExpenseRepository, PrismaService],
	exports: [ExpenseService]
})
export class ExpenseModule {}
