"use server";
import { connectToDatabase } from "@/lib/mongodb";
import Project from "@/lib/mongodb/models/projects.models";

export async function createProjects(obj) {
  try {
    await connectToDatabase();
    const project = await Project.create(obj);
    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    console.log(error);
  }
}
