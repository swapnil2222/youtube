import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isPanelOpen: true,
  },
  reducers: {
    togglePanel(state) {
      state.isPanelOpen = !state.isPanelOpen;
    },
    closePanel(state) {
      state.isPanelOpen = false;
    },
  },
});

export const { togglePanel, closePanel } = sidebarSlice.actions;
export default sidebarSlice.reducer;
