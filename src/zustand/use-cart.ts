import { Product, Variant } from "@/interfaces";
import { create } from "zustand";

interface ProductCart {
  product: Product;
  variant: Variant;
  quantity: number;
}

type Cart = {
  productCarts: ProductCart[];
  setProductCarts: (productCarts: ProductCart[]) => void;
  addProductCarts: (productCart: ProductCart) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

export const useCart = create<Cart>()((set) => ({
  productCarts: [],
  setProductCarts: (productCarts: ProductCart[]) => set(() => ({ productCarts })),
  addProductCarts: (productCart: ProductCart) =>
    set(({ productCarts }) => {
      const product = productCarts.find((item) => item.product.id == productCart.product.id);
      if (product) {
        if (product.quantity) product.quantity += productCart.quantity;
        else product.quantity = productCart.quantity;
      } else productCarts.push(productCart);
      return { productCarts: [...productCarts] };
    }),
  updateQuantity: (id: number, quantity: number) =>
    set(({ productCarts }) => {
      if (productCarts[id].quantity + quantity > 0) productCarts[id].quantity += quantity;
      return { productCarts: [...productCarts] };
    }),
}));
