import { Category } from "@/interfaces";
import { create } from "zustand";

type CategoryZustand = {
  categories: Category[];
  isLoading: boolean;
  setProductCarts: (categories: Category[]) => void;
};

export const useCategory = create<CategoryZustand>((set) => ({
  categories: [],
  isLoading: true,
  setProductCarts: (categories: Category[]) =>
    set(() => ({
      categories: [{ id: -1, title: "Tất cả", products: [] }, ...categories],
      isLoading: false,
    })),
}));
