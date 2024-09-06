import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  short_description: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  quality: number;

  @Prop()
  mark_as_new: boolean;

  @Prop()
  cover_photo: string;

  @Prop()
  sizes: string;

  @Prop()
  colors: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);