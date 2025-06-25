import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha'
import { AuthModule } from '@/auth/auth.module'
import { getGoogleRecaptchaConfig } from './config/google-recaptcha.config'
import { UserModule } from '@/user/user.module'
import { TableColumnModule } from '@/table-column/table-column.module'
import { UnitModule } from './unit/unit.module'
import { TaskStatusModule } from '@/task-status/task-status.module'
import { TaskWorkflowModule } from '@/task-workflow/task-workflow.module'
import { TaskWorkflowStatusModule } from '@/task-workflow-status/task-workflow-status.module'
import { TaskWorkflowStatusPermissionModule } from '@/task-workflow-status-permission/task-workflow-status-permission.module'
import { TaskDateGraphModule } from './task/task-date-graph/task-date-graph.module'
import { TaskDayGraphModule } from './task/task-day-graph/task-day-graph.module'
import { ExpenseDateGraphModule } from './expense/expense-date-graph/expense-date-graph.module'
import { ExpenseDayGraphModule } from './expense/expense-day-graph/expense-day-graph.module'

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
    TableColumnModule,
    UnitModule,
    TaskStatusModule,
    TaskWorkflowModule,
    TaskWorkflowStatusModule,
    TaskWorkflowStatusPermissionModule,
    // TaskModule,
    TaskDayGraphModule,
    TaskDateGraphModule,
    // ExpenseModule,
    ExpenseDateGraphModule,
    ExpenseDayGraphModule
  ],
})
export class AppModule {}
