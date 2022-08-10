import Order from '../interface/orderInterface';
import * as orderModel from '../models/orderModel';

export default async function getOrders(): Promise<Order[]> {
  const data = await orderModel.default();
  return data;
}