import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  async create(@Body() createQuoteDto: CreateQuoteDto) {
    return await this.quotesService.create(createQuoteDto);
  }

  @Get()
  async findAll() {
    return await this.quotesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.quotesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuoteDto: UpdateQuoteDto,
  ) {
    return await this.quotesService.update(+id, updateQuoteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.quotesService.remove(+id);
  }
}
