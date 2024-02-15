import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  viewModal: false,
  currentProject: {},
  formModal: false,
  deleteModal: false,
  title: "",
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
      state.currentProject = rest;
      switch (type) {
        case "view":
          state.viewModal = show;
          return;
        case "edit":
          state.formModal = show;
          state.title = "Edit project";
          return;
        case "new project":
          state.formModal = show;
          state.title = "New project";
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
      state.formModal = false;
      state.viewModal = false;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu, setModal, resetModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
