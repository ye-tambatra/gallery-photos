import { create } from "zustand";

const NUMBER_OF_HISTORY = 6;

type Store = {
  items: string[];
  push: (item: string) => void;
};
const useHistory = create<Store>()((set) => ({
  items: ["Car", "Bird", "Paris", "Flowers", "Bike"],

  push(item) {
    set((state) => {
      const index = state.items.findIndex(
        (e) => e.toLocaleLowerCase() === item.toLocaleLowerCase()
      );

      let newHistory = [...state.items];

      if (index === -1) {
        newHistory.unshift(item);
        if (newHistory.length > NUMBER_OF_HISTORY) newHistory.pop();
      } else {
        newHistory.splice(index, 1);
        newHistory.unshift(item);
      }

      return {
        items: newHistory,
      };
    });
  },
}));

export { useHistory };
