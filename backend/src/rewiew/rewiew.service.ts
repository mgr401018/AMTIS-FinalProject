import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchema } from 'src/products/product.schema';
import { Review } from './review.schema';


@Injectable()
export class ProductReviewService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

  async createReview(createReview: any): Promise<Review> {
    const createdReview = new this.reviewModel(createReview);
    return createdReview.save();
  }

  async getReviewsByProduct(productId: string): Promise<Review[]> {
    return this.reviewModel.find({ productId }).exec();
  }
}