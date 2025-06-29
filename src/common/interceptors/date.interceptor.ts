import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function transformDatesToISO(value: any): any {
	if (Array.isArray(value)) {
		return value.map(transformDatesToISO);
	}

	if (value && typeof value === 'object') {
		const newObj: any = {};
		for (const key in value) {
			if (value[key] instanceof Date) {
				newObj[key] = value[key].toISOString();
			} else if (value[key] && typeof value[key] === 'object') {
				newObj[key] = transformDatesToISO(value[key]);
			} else {
				newObj[key] = value[key];
			}
		}
		return newObj;
	}

	return value;
}

@Injectable()
export class DateInterceptor implements NestInterceptor {
	intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map(data => transformDatesToISO(data))
		);
	}
} 