import { create } from "zustand";

const NUMBER_OF_HISTORY = 6;

type Store = {
  items: string[];
  push: (item: string) => void;
};
const useHistory = create<Store>()((set) => ({
  items: ["Car", "Bird", "Paris", "Flyers", "Bike"],

  push(item) {
    set((state) => {
      const newHistory = [item, ...state.items];
      if (newHistory.length > NUMBER_OF_HISTORY) newHistory.pop();
      return {
        items: newHistory,
      };
    });
  },
}));

export { useHistory };
