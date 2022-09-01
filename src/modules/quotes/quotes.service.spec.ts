import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { createQuoteMock } from './mocks/create-quote-mock';
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
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

    service = module.get<QuotesService>(QuotesService);
  });

  it('should create a new quote', async () => {
    const data = { author: 'Gabriel', text: 'Lorem' };
    expect(service.create).toBeDefined();
    expect(await service.create(data)).toEqual(createQuoteMock());
  });
});
