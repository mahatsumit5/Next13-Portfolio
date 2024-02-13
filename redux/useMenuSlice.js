import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  isModalOpen: false,
  currentProject: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
    setModal: (state, { payload }) => {
      console.log(payload);
      const { show, ...rest } = payload;
      state.isModalOpen = show;
      state.currentProject = rest;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu, setModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
