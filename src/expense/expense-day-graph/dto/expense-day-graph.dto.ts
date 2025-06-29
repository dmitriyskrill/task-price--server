import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsOptional,
  IsISO8601
} from 'class-validator';

export class ExpenseDayGraphDto {
  @IsInt()
  @ApiProperty()
  @IsNotEmpty()
  readonly day: number;

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
  readonly expenseId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly ownerId: string;

}



export class UpdateExpenseDayGraphDto {
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
  @IsInt()
  @ApiProperty()
  readonly amount?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  readonly isFact?: boolean;

  @IsOptional()
  @IsString()
  readonly expenseId?: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly endpoint: string
} 