import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './orders.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() order: Order): Promise<Order> {
    return this.ordersService.createOrder(order);
  }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.getOrderById(id);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() order: Order): Promise<Order> {
    return this.ordersService.updateOrder(id, order);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<Order> {
    return this.ordersService.deleteOrder(id);
  }
}