import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNumber()
  netAmount: number;

  @IsString()
  startDate: string;

  @IsNumber()
  @IsOptional()
  installmentsCount?: number;

  @IsNumber()
  @IsOptional()
  percentagePerMonth?: number;

  @IsString()
  @IsOptional()
  frequency?: string;
}

export class MarkAsPaidDto {
  @IsString()
  amountPaid: string;

  @IsString()
  @IsOptional()
  remarks?: string;
}

export class UpdateScheduleDto {
  @IsNumber()
  @IsOptional()
  amount?: number;

  @IsString()
  @IsOptional()
  dueDate?: string;
}
