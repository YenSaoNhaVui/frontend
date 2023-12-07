import { StaticData } from "@/interfaces";
import { getStatic } from "@/service";
import { create } from "zustand";

type StaticStore = {
  staticData: StaticData | undefined;
  initStaticData: () => Promise<void>;
};

export const useStatic = create<StaticStore>((set) => ({
  staticData: {} as any,
  initStaticData: async () => {
    const data = await getStatic();
    set(() => ({ staticData: data }));
  },
}));
