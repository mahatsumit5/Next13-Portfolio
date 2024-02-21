import axios from "axios";
const projecturl = "/api/projects";
const skillUrl = "/api/skills";

export const addProjects = async (projectsData) => {
  try {
    const { data } = await axios.post(projecturl, projectsData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getActiveProjects = async () => {
  try {
    const { data } = await axios.get(projecturl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProjects = async () => {
  try {
    const { data } = await axios.get(`${projecturl}?status=all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getActiveSkills = async () => {
  try {
    const { data } = await axios.get(skillUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllSkills = async () => {
  try {
    const { data } = await axios.get(`${skillUrl}?status=all`);
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
export const deleteSkill = async (id) => {
  try {
    const { data } = await axios.delete(`${skillUrl}?id=${id}`);
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

export const askQuestion = async (question) => {
  try {
    const { data } = await axios.post("api/chatbot", { prompt: question });
    return data;
  } catch (error) {
    console.log(error);
  }
};
