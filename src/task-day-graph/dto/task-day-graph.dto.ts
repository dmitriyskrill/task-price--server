import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsOptional,
  IsISO8601
} from 'class-validator';

export class TaskDayGraphDto {
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
  readonly day: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly amount: string;

  @IsBoolean()
  @ApiProperty()
  @IsNotEmpty()
  readonly isFact: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly taskId: string;
}



export class UpdateTaskDayGraphDto {
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
  readonly day?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly amount?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  readonly isFact?: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly taskId?: string;
}
