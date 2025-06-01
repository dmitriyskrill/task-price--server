import { Module } from '@nestjs/common';
import { TableColumnController } from './table-column.controller';
import { TableColumnService } from './table-column.service';
import { TableColumnRepository } from '@/table-column/db/table-column.repository'
import { PrismaService } from '@/prisma.service'
import { HttpModule } from '@nestjs/axios';
import { TableColumnChildModule } from './table-column-child/table-column-child.module';
import { TableColumnGroupModule } from './table-column-group/table-column-group.module';

@Module({
  imports: [HttpModule, TableColumnChildModule, TableColumnGroupModule],
  controllers: [TableColumnController],
  providers: [TableColumnService, TableColumnRepository, PrismaService]
})
export class TableColumnModule {}
