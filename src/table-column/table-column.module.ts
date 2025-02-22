import { Module } from '@nestjs/common';
import { TableColumnController } from './table-column.controller';
import { TableColumnService } from './table-column.service';

@Module({
  controllers: [TableColumnController],
  providers: [TableColumnService]
})
export class TableColumnModule {}
