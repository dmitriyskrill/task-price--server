import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TimerController } from './timer.controller';
import { TimerService } from './timer.service';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TimerController],
  providers: [TimerService, PrismaService],
  exports: [TimerService],
})
export class TimerModule {
}
