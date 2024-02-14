import {
  createProjects,
  getProjects,
  deleteProject,
} from "@/lib/actions/projects.actions";
import { NextResponse } from "next/server";

import uploadFile from "@/utils/s3";
export async function POST(req) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const chrome = data.get("chrome");
    const githubUrl = data.get("githubUrl");
    const description = data.get("description");
    if (!file?.name) {
      throw new Error("Please select a file.");
    }

    const { Location } = await uploadFile({ ...file, path: image });
    const newProjects = await createProjects({
      name,
      chrome,
      githubUrl,
      description,
      image: Location,
    });
    if (newProjects?._id) {
      return NextResponse.json({ status: "success", newProjects });
    }
    throw new Error("Unable to create new projects");
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
export async function GET(request) {
  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const response = await deleteProject(id);
  return NextResponse.json({ deleteItem: response });
}
