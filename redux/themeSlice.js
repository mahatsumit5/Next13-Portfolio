import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

const { reducer, actions } = themeSlice;
export const { setTheme } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
