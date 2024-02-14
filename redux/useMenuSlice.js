import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  isModalOpen: false,
  currentProject: {},
  editModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
    setEditModal: (state, { payload }) => {
      const { show, ...rest } = payload;
      state.editModal = show;
      state.currentProject = rest;
    },
    setModal: (state, { payload }) => {
      const { show, ...rest } = payload;
      state.isModalOpen = show;
      state.currentProject = rest;
    },
    resetModal: (state, { payload }) => {
      (state.currentProject = {}), (state.isModalOpen = false);
      state.editModal = false;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu, setModal, setEditModal, resetModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
