import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const { reducer, actions } = loadingSlice;
export const { setLoading } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
