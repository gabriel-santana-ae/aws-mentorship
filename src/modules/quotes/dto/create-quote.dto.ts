import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  author: string;
}
