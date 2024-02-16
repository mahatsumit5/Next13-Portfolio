import { openToast } from "../redux/toastSlice";
import { getActiveSkills, getAllSkills } from "../lib/axios";
import { setActiveSkills, setAllSkills } from "../redux/dataSlice";
export const getAllSkillsAction = () => async (dispatch) => {
  const { skills } = await getAllSkills();
  if (skills.length) {
    dispatch(setAllSkills(skills));
  } else {
    dispatch(openToast({ message: "No Skills Found", variant: "error" }));
  }
};
export const getActiveSkillsAction = () => async (dispatch) => {
  const { skills } = await getActiveSkills();
  if (skills.length) {
    dispatch(setActiveSkills(skills));
  } else {
    dispatch(openToast({ message: "No Skills Found", variant: "error" }));
  }
};
