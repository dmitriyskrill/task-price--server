import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskDateGraphService {
  constructor(private prisma: PrismaService) {}

   
}
