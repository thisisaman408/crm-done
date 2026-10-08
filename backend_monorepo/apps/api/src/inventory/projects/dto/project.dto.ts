import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class ProjectQueryDto {
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isCpProject?: any; // The service logic explicitly handles 'true' or true
}

export class CreateProjectDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  builderId?: string;

  @IsOptional()
  @IsString()
  builderName?: string;

  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isCpProject?: any; // Service logic: data.isCpProject === 'true' || data.isCpProject === true

  @IsOptional()
  @IsString()
  type?: any;

  @IsOptional()
  @IsString()
  status?: any;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  description?: string;

  // Other project fields can be strictly added as needed when expanding the API
}

export class AssignProjectDto {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  sourcingManagerIds?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  closingManagerIds?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  salesExecIds?: string[];
}
