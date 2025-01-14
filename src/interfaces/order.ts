import { Product, Variant } from ".";

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
  productId?: number;
  quantity: number;
  variant: Variant;
  slug: string;
  product?: Product;
  order?: Order;
}
