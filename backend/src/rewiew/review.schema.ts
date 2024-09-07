import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Review extends Document {
  @Prop({ required: true, type: String, ref: 'Product' })
  productId: string;

  @Prop({ required: true, type: String, ref: 'User' })
  userId: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ type: String, minlength: 2, maxlength: 256 })
  ProductReview: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
