import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function transformSortBigIntToNumber(value: any): any {
	if (Array.isArray(value)) {
		return value.map(transformSortBigIntToNumber);
	}

	if (value && typeof value === 'object') {
		const newObj: any = {};
		for (const key in value) {
			if (key === 'sort' && typeof value[key] === 'bigint') {
				newObj[key] = Number(value[key]);
			} else {
				newObj[key] = transformSortBigIntToNumber(value[key]);
			}
		}
		return newObj;
	}

	return value;
}

@Injectable()
export class SortInterceptor implements NestInterceptor {
	intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map(data => transformSortBigIntToNumber(data))
		);
	}
}