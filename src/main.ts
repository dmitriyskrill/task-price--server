import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configApp } from './config';
import { Logger } from '@nestjs/common';


const bootstrap = async () => {
  const app: NestApplication= await NestFactory.create(AppModule); 
  configApp(app);
  await app.listen(process.env.PORT || 4200);

  Logger.log(`Server started on port ${process.env.PORT || 4200}`, 'Bootstrap');

}
bootstrap()