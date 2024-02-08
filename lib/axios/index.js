import axios from "axios";
const projecturl = "/api/projects";

export const addProjects = async (projectsData) => {
  try {
    console.log(projectsData);
    const { data } = await axios.post(projecturl, projectsData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const { data } = await axios.post("/api/user", user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
