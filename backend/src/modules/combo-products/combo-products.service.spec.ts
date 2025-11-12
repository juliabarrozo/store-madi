import { Test, TestingModule } from '@nestjs/testing';
import { ComboProductsService } from './combo-products.service';

describe('ComboProductsService', () => {
  let service: ComboProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComboProductsService],
    }).compile();

    service = module.get<ComboProductsService>(ComboProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
