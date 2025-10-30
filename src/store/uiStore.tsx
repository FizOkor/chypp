import { create } from "zustand";
import { menuItems } from "@/config/menuItems";

type View = (typeof menuItems)[number]["id"];

interface UIState {
  currentView: View;
  selectedItem: any;
  mobileBackBtnClicked: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setCurrentView: (view: View) => void;
  setSelectedItem: (item: any) => void;
  setMobileBackBtnClicked: (clicked: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  currentView: "chats",
  selectedItem: null,
  mobileBackBtnClicked: false,
  isMenuOpen: true,

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setCurrentView: (view) => set({ currentView: view, selectedItem: null }),
  setSelectedItem: (item) => set({ selectedItem: item }),
  setMobileBackBtnClicked: (bool) => set({ mobileBackBtnClicked: bool }),
}));
