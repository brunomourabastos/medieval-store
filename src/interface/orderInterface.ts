interface Order {
  id: number; // tive que retirar o ? do id pois não estava aceitando no orderModel. Tipo estava aceitando indefinido.
  userId: number;
  productsIds: number[];
}

export default Order;