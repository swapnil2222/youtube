import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    nextPageToken: "",
  },
  reducers: {
    setNextPageToken(state, action) {
        console.log('action', action);
      state.nextPageToken = action.payload;
    },
  },
});
export const {setNextPageToken} = videoSlice.actions;
export default videoSlice.reducer;
