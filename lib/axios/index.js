import axios from "axios";
const projecturl = "/api/projects";

export const addProjects = async (projectsData) => {
  try {
    const { data } = await axios.post(projecturl, projectsData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProjects = async () => {
  try {
    const { data } = await axios.get(projecturl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteProject = async (id) => {
  try {
    const { data } = await axios.delete(`${projecturl}?id=${id}`);
    //TODO: fix this line to take in the id of the project you want to delete
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
