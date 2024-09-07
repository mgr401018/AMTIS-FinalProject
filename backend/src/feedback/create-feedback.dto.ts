import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @Length(2, 256)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(2, 256)
  email: string;

  @IsNotEmpty()
  @Length(2, 256)
  subject: string;

  @IsNotEmpty()
  @Length(2, 2048)
  message: string;
}
