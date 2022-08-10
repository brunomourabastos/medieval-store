import { RowDataPacket } from 'mysql2';
import Order from '../interface/orderInterface';
import connection from './connection';
import * as productModel from './productModel';

export default async function getAllOrders(): Promise<Order[]> {
  const query = `SELECT MedievalStore.Orders.id as id,
  MedievalStore.Users.id as userId
  FROM MedievalStore.Orders JOIN MedievalStore.Users ON MedievalStore.Orders.userId = MedievalStore.Users.id`;
  const [result] = await connection.execute(query) as RowDataPacket[]; // coloquei Rowdatapacket pois não estava aceitando .map

  const orders = Promise.all(result.map(async ({ id, userId }: Order) => {
    const product = await productModel.getById(id);
    return { id, userId, productsIds: product };
  }));

  return orders as unknown as Order[];
}