import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  viewModal: false,
  currentProject: {},
  editModal: false,
  deleteModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
    setModal: (state, { payload }) => {
      const { show, type, ...rest } = payload;
      console.log(rest);
      state.currentProject = rest;
      switch (type) {
        case "view":
          state.viewModal = show;
          return;
        case "edit":
          state.editModal = show;
          return;

        case "delete":
          state.deleteModal = true;
          return;

        default:
          break;
      }
    },

    resetModal: (state, { payload }) => {
      state.currentProject = {};
      state.deleteModal = false;
      state.editModal = false;
      state.viewModal = false;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu, setModal, resetModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
