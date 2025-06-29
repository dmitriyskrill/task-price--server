import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class IdParamsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;
} 