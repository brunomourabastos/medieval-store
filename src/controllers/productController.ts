import { Request, Response } from 'express';
import { create, getAllProduct } from '../services/productService';
import Product from '../interface/productInterface';

export default async function createProduct(req: Request, res: Response) {
  try {
    const product = req.body as Product;
    const { status, data, error } = await create(product);
    if (error) { return res.status(status).json({ error }); }
    return res.status(status).json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts(_req: Request, res: Response) {
  try {
    const { status, data } = await getAllProduct();
    return res.status(status).json(data);
  } catch (error) {
    console.log(error);
  }
}