import { SetMetadata } from '@nestjs/common';
import { Access } from '@prisma/client';

export const Accesses = (...accesses: Access[]) =>
  SetMetadata('accesses', accesses);
