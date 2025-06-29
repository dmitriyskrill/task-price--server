import { NestApplication, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { configApp } from './config'
import { Logger } from '@nestjs/common'
import { SortInterceptor } from './common/interceptors/sort.interceptor'
import { DateInterceptor } from './common/interceptors/date.interceptor'

const bootstrap = async () => {
	const app: NestApplication = await NestFactory.create(AppModule)
	app.useGlobalInterceptors(new SortInterceptor(), new DateInterceptor())
	configApp(app)
	await app.listen(process.env.PORT || 4200)

	Logger.log(`Server started on port ${process.env.PORT || 4200}`, 'Bootstrap')
}
bootstrap()
