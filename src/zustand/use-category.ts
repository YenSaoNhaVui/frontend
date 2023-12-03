import { Category } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CategoryZustand = {
  categories: Category[];
  isLoading: boolean;
  setProductCarts: (categories: Category[]) => void;
};
export const useCategory = create<CategoryZustand>()(
  persist(
    (set) => ({
      categories: [],
      isLoading: true,
      setProductCarts: (categories: Category[]) => set(() => ({ categories, isLoading: false })),
    }),
    {
      name: "categories",
    }
  )
);
