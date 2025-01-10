import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configApp } from './config';

const bootstrap = async () => {
  const app: NestApplication= await NestFactory.create(AppModule); 
  configApp(app);
  await app.listen(process.env.PORT || 4200);
}
bootstrap();
