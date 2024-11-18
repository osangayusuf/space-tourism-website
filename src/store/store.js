import { create } from "zustand";
import { useLocation } from "react-router-dom";


export const useStore = create((set) => ({
  currentPage: "/", // Initial page
  setCurrentPage: async () => {
    const page = useLocation.pathname;
    set({ currentPage: page });
  },
}));
