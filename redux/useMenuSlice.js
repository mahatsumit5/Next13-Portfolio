import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  viewModal: false,
  currentProject: {},
  formModal: false,
  deleteModal: {
    isOpen: false,
    type: "",
  },
  title: "",
  skillModal: false,
  currentSkill: {},
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

      switch (type) {
        case "view":
          state.viewModal = show;
          state.currentProject = rest;

          return;
        case "edit":
          state.formModal = show;
          state.title = "Edit project";
          state.currentProject = rest;

          return;
        case "new project":
          state.formModal = show;
          state.title = "New project";
          return;
        case "new skill":
          state.skillModal = show;
          state.title = "Add Skills";
          return;
        case "edit skill":
          state.skillModal = show;
          state.title = "Edit Skills";
          state.currentSkill = rest;
          return;

        case "delete project":
          state.deleteModal.isOpen = true;
          state.deleteModal.type = type;
          state.currentProject = rest;

          return;
        case "delete skill":
          state.deleteModal.isOpen = true;
          state.deleteModal.type = type;
          state.currentSkill = rest;
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
      state.skillModal = false;
      state.currentSkill = {};
      state.deleteModal = {};
      state.title = "";
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu, setModal, resetModal } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
