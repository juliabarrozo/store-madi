import { Injectable } from '@nestjs/common';
import { CreateComboProductDto } from './dto/create-combo-product.dto';
import { UpdateComboProductDto } from './dto/update-combo-product.dto';

@Injectable()
export class ComboProductsService {
  create(createComboProductDto: CreateComboProductDto) {
    return 'This action adds a new comboProduct';
  }

  findAll() {
    return `This action returns all comboProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comboProduct`;
  }

  update(id: number, updateComboProductDto: UpdateComboProductDto) {
    return `This action updates a #${id} comboProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} comboProduct`;
  }
}
