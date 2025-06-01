import { Module } from '@nestjs/common';
import { TableColumnGroupController } from './table-column-group.controller';
import { TableColumnGroupService } from './table-column-group.service';
import { TableColumnGroupRepository } from '@/table-column/table-column-group/table-column-group.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TableColumnGroupController],
  providers: [TableColumnGroupService, TableColumnGroupRepository, PrismaService]
})
export class TableColumnGroupModule {}
