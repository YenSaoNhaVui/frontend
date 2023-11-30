import { Product } from ".";

export interface Order {
  id: number;

  name: string;
  identity: string;

  createdAt: Date;
  viewed: boolean;

  totalPrice: number;

  products: OrdersProducts[];
}

export interface OrdersProducts {
  quantity: number;
  weight: number;

  product: Product;
  order: Order;
}
