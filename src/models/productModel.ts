import { ResultSetHeader } from 'mysql2'; 
import connection from './connection';
import Product from '../interface/productInterface';

export async function getByName(name:string): Promise<Product> {
  const query = 'SELECT * FROM MedievalStore.Products WHERE name = ?';
  const value = [name];

  const [result] = await connection.execute(query, value);
  const [findName] = result as Product[];

  return findName || null;
}

export async function getById(orderId: number): Promise<number[]> {
  const query = 'SELECT * FROM MedievalStore.Products WHERE orderId = ?';
  const value = [orderId];

  const [result] = await connection.execute(query, value) as unknown as Product[][];
  return result.map(({ id }) => id);
}

export async function create(product: Product): Promise<Product> {
  const { name, amount } = product;

  const query = 'INSERT INTO MedievalStore.Products (name, amount) VALUES (?,?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct = { id, name, amount };
  return newProduct;
}

export async function getAllProducts(): Promise<Product[]> {
  const query = 'SELECT * FROM MedievalStore.Products';
  const [result] = await connection.execute(query);
  return result as Product[];
}