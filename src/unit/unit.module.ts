import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { UnitRepository } from '@/unit/unit.repository'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [UnitController],
  providers: [UnitService, UnitRepository, PrismaService]
})
export class UnitModule {}
