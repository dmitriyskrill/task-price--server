import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha';
import { AuthModule } from '@/auth/auth.module';
import { getGoogleRecaptchaConfig } from './config/google-recaptcha.config';
import { UserModule } from '@/user/user.module';
import { TaskModule } from '@/task/task.module';
import { TimeBlockModule } from '@/time-block/time-block.module';
import { TimerModule } from '@/timer/timer.module';

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
    TimeBlockModule,
    TimerModule
  ],
})
export class AppModule {}
