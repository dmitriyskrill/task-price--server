import { Module } from '@nestjs/common';
import { TableColumnController } from './table-column.controller';
import { TableColumnService } from './table-column.service';
import { TableColumnRepository } from '@/table-column/db/table-column.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TableColumnController],
  providers: [TableColumnService, TableColumnRepository, PrismaService]
})
export class TableColumnModule {}
