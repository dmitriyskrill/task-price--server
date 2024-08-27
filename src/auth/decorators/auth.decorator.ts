import { applyDecorators, UseGuards } from '@nestjs/common';
import { Access } from '@prisma/client';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { AccessesGuard } from '../guards/accesses.guard';
import { Accesses } from './accesses.decorator';

export const Auth = (accesses: Access | Access[] = [Access.PROFILE]) => {
  if (!Array.isArray(accesses)) {
    accesses = [accesses];
  }
  return applyDecorators(
    Accesses(...accesses),
    UseGuards(JwtAuthGuard, AccessesGuard),
  );
};
