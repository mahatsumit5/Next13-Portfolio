import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  skills: [],
  activeSkills: [],
};

const skillslice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    setAllSkills: (state, { payload }) => {
      state.skills = payload;
    },
    setActiveSkills: (state, { payload }) => {
      state.activeSkills = payload;
    },
  },
});

const { reducer, actions } = skillslice;
export const { setAllSkills, setActiveSkills } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
