import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductReviewService } from './rewiew.service';
import { CreateReview } from './Creat.rewiew';


@Controller('reviews')
export class ProductReviewController {
  constructor(private readonly reviewService: ProductReviewService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReview) {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get('product/:productId')
  async findByProduct(@Param('productId') productId: string) {
    return this.reviewService.getReviewsByProduct(productId);
  }
}