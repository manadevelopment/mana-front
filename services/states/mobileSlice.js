import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
  name: "isMobile",
  initialState: {
    value: undefined,
  },
  reducers: {
    setIsMobile: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobile } = mobileSlice.actions;

export default mobileSlice.reducer;
