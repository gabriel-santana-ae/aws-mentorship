import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { createQuoteMock } from './mocks/create-quote-mock';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

describe('QuotesController', () => {
  let controller: QuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [QuotesController],
      providers: [
        QuotesService,
        {
          provide: getRepositoryToken(Quote),
          useValue: {
            save: jest.fn(() => createQuoteMock()),
          },
        },
      ],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
