import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  async create(@Body() dto: CreateQuoteDto) {
    return await this.quotesRepository.save(dto);
  }

  async findAll() {
    return await this.quotesRepository.find();
  }

  async findOne(id: number): Promise<Quote> {
    return await this.quotesRepository.findOneBy({ id });
  }

  async update(id: number, @Body() dto: UpdateQuoteDto) {
    const quote = await this.quotesRepository.findOneBy({ id });
    if (!quote) throw new Error(`Could not find quote with id ${id}.`);

    return this.quotesRepository.save({
      ...quote,
      ...dto,
    });
  }

  async remove(id: number) {
    const affectedData = await this.quotesRepository.delete(id);
    if (affectedData.affected === 0) {
      throw new Error(`Could not find quote with id ${id}.`);
    }

    return null;
  }
}
