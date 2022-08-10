import { Request, Response } from 'express';
import * as orderModel from '../models/orderModel';

export default async function getAllOrders(_req: Request, res: Response) {
  try {
    const data = await orderModel.default();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}