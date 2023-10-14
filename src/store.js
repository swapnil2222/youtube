import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slices/sidebarSlice";
import videoReducer from "./slices/videoSlice";

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    video: videoReducer
  },
});
