import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ProductReviewController {
  constructor(private readonly reviewService: ProductReviewService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get('product/:productId')
  async findByProduct(@Param('productId') productId: string) {
    return this.reviewService.getReviewsByProduct(productId);
  }
}
