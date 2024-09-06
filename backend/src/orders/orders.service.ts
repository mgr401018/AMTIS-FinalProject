import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './orders.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  async createOrder(order: Order): Promise<Order> {
    order.totalAmount = this.calculateTotalAmount(order.items);
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async getOrderById(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async updateOrder(id: string, order: Order): Promise<Order> {
    order.totalAmount = this.calculateTotalAmount(order.items);
    return this.orderModel.findByIdAndUpdate(id, order, { new: true }).exec();
  }

  async deleteOrder(id: string): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }

  private calculateTotalAmount(items: { name: string; price: number; quantity: number }[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}