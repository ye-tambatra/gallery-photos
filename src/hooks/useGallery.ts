import { create } from "zustand";
import { Photo } from "../types";

type Store = {
  items: Photo[];
  setItems: (items: Photo[]) => void;
};
const useGallery = create<Store>()((set) => ({
  items: [],

  setItems(items) {
    set({
      items: [...items],
    });
  },
}));

export { useGallery };
