import { Module } from '@nestjs/common';
import { TableColumnChildController } from './table-column-child.controller';
import { TableColumnChildService } from './table-column-child.service';
import { TableColumnChildRepository } from '@/table-column/table-column-child/table-column-child.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TableColumnChildController],
  providers: [TableColumnChildService, TableColumnChildRepository, PrismaService]
})
export class TableColumnChildModule {}
