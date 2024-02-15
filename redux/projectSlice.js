import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  projects: [],
  activeProjects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setAllProjects: (state, { payload }) => {
      state.projects = payload;
    },
    setActiveProjects: (state, { payload }) => {
      state.activeProjects = payload;
    },
  },
});

const { reducer, actions } = projectSlice;
export const { setAllProjects, setActiveProjects } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
