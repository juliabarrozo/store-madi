import { Test, TestingModule } from '@nestjs/testing';
import { ComboProductsController } from './combo-products.controller';
import { ComboProductsService } from './combo-products.service';

describe('ComboProductsController', () => {
  let controller: ComboProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComboProductsController],
      providers: [ComboProductsService],
    }).compile();

    controller = module.get<ComboProductsController>(ComboProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
