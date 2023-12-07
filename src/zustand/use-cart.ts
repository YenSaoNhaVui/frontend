import { Product, Variant } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProductCart {
  product: Product;
  variant: Variant;
  quantity: number;
}

type Cart = {
  productCarts: ProductCart[];
  setProductCarts: (productCarts: ProductCart[]) => void;
  addProductCarts: (productCart: ProductCart) => void;
  removeProductCarts: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalPrice: () => number;
};
export const useCart = create<Cart>()(
  persist(
    (set, get) => ({
      productCarts: [],
      setProductCarts: (productCarts: ProductCart[]) => set(() => ({ productCarts })),

      addProductCarts: (productCart: ProductCart) =>
        set(({ productCarts }) => {
          const product = productCarts.find(
            (item) =>
              item.product.id == productCart.product.id &&
              JSON.stringify(item.variant) == JSON.stringify(productCart.variant)
          );
          if (product) {
            if (product.quantity) product.quantity = 0;
            product.quantity += productCart.quantity;
          } else productCarts.push(productCart);
          console.log(productCarts);
          return { productCarts: [...productCarts] };
        }),

      updateQuantity: (id: number, quantity: number) =>
        set(({ productCarts }) => {
          if (productCarts[id].quantity + quantity > 0) productCarts[id].quantity += quantity;
          return { productCarts: [...productCarts] };
        }),

      removeProductCarts: (id: number) =>
        set(({ productCarts }) => ({ productCarts: [...productCarts.filter((_, i) => i != id)] })),

      getTotalPrice: () => {
        let totalPrice = 0;
        get().productCarts.forEach(
          (item) => (totalPrice += (item?.variant?.listPrice ?? 0) * item.quantity)
        );
        return totalPrice;
      },
    }),
    {
      name: "cart",
    }
  )
);
