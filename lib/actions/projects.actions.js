"use server";
import { connectToDatabase } from "../mongodb";
import Project from "../mongodb/models/projects.models";

export const getActiveProjects = async () => {
  try {
    await connectToDatabase();
    const projects = await Project.find({ status: "Active" });

    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.log(error);
  }
};
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

    const project = await Project.create(obj);

    if (project?._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "Your project has been created",
          data: project,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error creating new project.",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
export const updateProjects = async (obj) => {
  try {
    const { _id, ...rest } = obj;
    await connectToDatabase();

    const projects = await Project.findByIdAndUpdate(
      obj._id,
      { ...rest },
      { new: true }
    );
    if (projects?._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "Your project has been updated.",
          data: projects,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error updating  the project.",
        })
      );
    }
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
