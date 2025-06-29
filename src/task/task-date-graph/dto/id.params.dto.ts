import { IsNotEmpty } from 'class-validator';

export class IdParamDto {
  @IsNotEmpty()
  id: string;
} 