import { create } from "zustand";

export const useLayoutStore = create((set) => ({
  sidebarOpen: true,
  contextPanelOpen: false,
  setContextPanelOpen: (open: any) => set({ contextPanelOpen: open }),
}));
