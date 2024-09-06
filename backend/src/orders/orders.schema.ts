import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  customerName: string;

  @Prop({ type: [{ name: String, price: Number, quantity: Number }] })
  items: { name: string; price: number; quantity: number }[];

  @Prop({ default: 0 })
  totalAmount: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);