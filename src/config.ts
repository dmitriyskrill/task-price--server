import { NestApplication } from "@nestjs/core";
import { RequestMethod } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

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
    .build(); 
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, documentFactory());

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });
}

export { configApp };
