// src/dto/create-event.dto.ts
import { IsString, IsDateString, IsOptional, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  @IsUrl()
  pictureUrl?: string;

  @IsOptional()
  @IsUrl()
  videoUrl?: string;
}
