import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  message: "",
  variant: "success", // success | error | warning | info
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, { payload }) => {
      const { message, variant } = payload;
      state.isOpen = true;
      state.variant = variant;
      state.message = message;
    },
    closeToast: (state, { payload }) => {
      state.isOpen = false;
      state.message = "";
    },
  },
});

const { reducer, actions } = toastSlice;
export const { openToast, closeToast } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
