import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha'
import { AuthModule } from '@/auth/auth.module'
import { getGoogleRecaptchaConfig } from './config/google-recaptcha.config'
import { UserModule } from '@/user/user.module'
import { TableColumnModule } from '@/table-column/table-column.module'
import { UnitModule } from './unit/unit.module'
import { TaskTypeModule } from '@/task-type/task-type.module'
import { TaskStatusModule } from '@/task-status/task-status.module'
import { TaskWorkflowModule } from '@/task-workflow/task-workflow.module'
import { TaskWorkflowStatusModule } from '@/task-workflow-status/task-workflow-status.module'
import { TaskWorkflowStatusPermissionModule } from '@/task-workflow-status-permission/task-workflow-status-permission.module'

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
    TaskTypeModule
    // TaskModule,
    // TaskDayGraphModule,
    // TaskDateGraphModule,
    // ExpenseModule,
  ],
})
export class AppModule {}
