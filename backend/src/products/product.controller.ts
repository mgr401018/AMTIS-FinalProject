import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get()
  async findOne(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Post()
    async create(@Body() post: any): Promise<Product> {
      console.log(post)
      return await this.productService.create(post)
    }
  
  @Put()
    async update(id: string, post: Product): Promise<Product> {
      return await this.productService.update(id, post);
    }
  @Delete(':id')
    async delete(@Param('id') id: any): Promise<Product> {
      return await this.productService.delete(id);
    }
}
