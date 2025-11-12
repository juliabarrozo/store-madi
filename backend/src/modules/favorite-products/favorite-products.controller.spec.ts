import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteProductsController } from './favorite-products.controller';
import { FavoriteProductsService } from './favorite-products.service';

describe('FavoriteProductsController', () => {
  let controller: FavoriteProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteProductsController],
      providers: [FavoriteProductsService],
    }).compile();

    controller = module.get<FavoriteProductsController>(FavoriteProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
