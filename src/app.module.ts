import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { AuthModule } from '@/auth/auth.module';
import { getGoogleRecaptchaConfig } from './config/google-recaptcha.config';
import { UserModule } from '@/user/user.module';
import { TaskModule } from '@/task/task.module';
import { TaskDayGraphModule } from '@/task/task-day-graph/task-day-graph.module';
import { TaskDateGraphModule } from '@/task/task-date-graph/task-date-graph.module';
import { ExpenseModule } from '@/expense/expense.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GoogleRecaptchaModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getGoogleRecaptchaConfig,
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    TaskModule,
    TaskDayGraphModule,
    TaskDateGraphModule,
    ExpenseModule,
  ],
})
export class AppModule {}
