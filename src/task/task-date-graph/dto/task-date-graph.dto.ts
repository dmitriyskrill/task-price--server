import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsOptional,
  IsISO8601
} from 'class-validator';

export class TaskDateGraphDto {
  @IsOptional()
  @IsISO8601()
  @ApiProperty()
  readonly createdAt?: Date;

  @IsOptional()
  @IsISO8601()
  @ApiProperty()
  readonly updatedAt?: Date;

  @IsInt()
  @ApiProperty()
  @IsNotEmpty()
  readonly date: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly amount: number;

  @IsBoolean()
  @ApiProperty()
  @IsNotEmpty()
  readonly isFact: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly taskId: string;
}



export class UpdateTaskDateGraphDto {
  @IsOptional()
  @IsISO8601()
  @ApiProperty() 
  readonly createdAt?: Date;

  @IsOptional()
  @IsISO8601()
  @ApiProperty()
  readonly updatedAt?: Date;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  readonly date?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  readonly amount?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  readonly isFact?: boolean;

  @IsOptional()
  @IsString()
  readonly taskId?: string;
}
