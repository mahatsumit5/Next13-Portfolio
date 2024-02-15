import { getActiveProjects, getProjects } from "../lib/axios";
import { setActiveProjects, setAllProjects } from "../redux/projectSlice";
import { openToast } from "../redux/toastSlice";

export const getProjectsAction = () => async (dispatch) => {
  const { projects } = await getProjects();
  if (projects.length) {
    dispatch(setAllProjects(projects));
  } else {
    dispatch(openToast({ message: "No Projects Found", variant: "error" }));
  }
};
export const getActiveProjectsAction = () => async (dispatch) => {
  const { projects } = await getActiveProjects();
  if (projects.length) {
    dispatch(setActiveProjects(projects));
  } else {
    dispatch(openToast({ message: "No Projects Found", variant: "error" }));
  }
};
