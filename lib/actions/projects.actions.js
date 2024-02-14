"use server";
import { connectToDatabase } from "../mongodb";
import Project from "../mongodb/models/projects.models";

export const getProjects = async () => {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.log(error);
  }
};
export const createProjects = async (obj) => {
  try {
    await connectToDatabase();

    const projects = await Project.create(obj);

    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteProject = async (id) => {
  try {
    await connectToDatabase();

    const projects = await Project.deleteOne({ _id: id });

    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    throw new Error(error.message);
  }
};
