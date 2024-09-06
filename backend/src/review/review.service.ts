import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductReview } from './review.schema';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ProductReviewService {
  constructor(@InjectModel(ProductReview.name) private reviewModel: Model<ProductReview>) {}

  async createReview(createReviewDto: CreateReviewDto): Promise<ProductReview> {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }

  async getReviewsByProduct(productId: string): Promise<ProductReview[]> {
    return this.reviewModel.find({ product: productId }).exec();
  }
}
