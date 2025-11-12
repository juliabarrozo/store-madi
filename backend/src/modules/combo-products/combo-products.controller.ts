import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComboProductsService } from './combo-products.service';
import { CreateComboProductDto } from './dto/create-combo-product.dto';
import { UpdateComboProductDto } from './dto/update-combo-product.dto';

@Controller('combo-products')
export class ComboProductsController {
  constructor(private readonly comboProductsService: ComboProductsService) {}

  @Post()
  create(@Body() createComboProductDto: CreateComboProductDto) {
    return this.comboProductsService.create(createComboProductDto);
  }

  @Get()
  findAll() {
    return this.comboProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comboProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComboProductDto: UpdateComboProductDto) {
    return this.comboProductsService.update(+id, updateComboProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comboProductsService.remove(+id);
  }
}
