import { persist } from "zustand";
import { create } from "zustand/middleware";
export const useMenuStore = create()(
  persist(
    (set) => ({
      isOpen: false,
      toggleMenu: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),
      closeMobileMenu: () =>
        set((state) => ({
          isOpen: false,
        })),
    }),
    { name: "menu-store" }
  )
);
