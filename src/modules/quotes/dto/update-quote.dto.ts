import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { CreateQuoteDto } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  author: string;
}
