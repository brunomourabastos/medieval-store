import Product from '../interface/productInterface';
import * as productModel from '../models/productModel';

export async function create(product: Product) {
  const productExists = await productModel.getByName(product.name);
  if (productExists) return { status: 400, error: { message: 'Produto já cadastrado' } };  

  const data = await productModel.create(product);
  return { status: 201, data };
}

export async function getAllProduct() {
  const data = await productModel.getAllProducts();
  return { status: 200, data };
}
