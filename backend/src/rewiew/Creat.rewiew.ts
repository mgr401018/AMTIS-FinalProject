import { IsInt, IsString, Min, Max, Length, IsOptional } from 'class-validator';

export class CreateReview {
  @IsInt()
  @Min(1)
  @Max(5)
  value: number;

  @IsOptional()
  @IsString()
  @Length(2, 256)
  comment?: string;

  product: string;  // Product ID
}