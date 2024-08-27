import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Access, User } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class AccessesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const accesses = this.reflector.get<Access[]>(
      'accesses',
      context.getHandler(),
    );
    if (!accesses) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as User;

    const hasAccess = () =>
      user.accesses.some((access) => accesses.includes(access));
    if (!hasAccess()) {
      throw new ForbiddenException('У тебя нет прав!');
    }

    return true;
  }
}
