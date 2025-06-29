import { NestApplication } from "@nestjs/core";
import { RequestMethod, ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from 'dotenv';
dotenv.config();
const configApp = (app: NestApplication) => {
    app.setGlobalPrefix('api', {
    exclude: [
      { path: 'auth/google', method: RequestMethod.GET },
      { path: 'auth/google/redirect', method: RequestMethod.GET },
      { path: 'auth/github', method: RequestMethod.GET },
      { path: 'auth/github/redirect', method: RequestMethod.GET },
      { path: 'verify-email', method: RequestMethod.GET },
    ],
  });
  
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Financial Balance Helper')
    .setDescription('The Financial Balance Helper API description')
    .setVersion('1.0')
     .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token', 
    )
    .build(); 
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, documentFactory());

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

}

export { configApp };
