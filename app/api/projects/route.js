process.noDeprecation = true;

import { createProjects } from "@/lib/actions/projects.actions";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path, { join } from "path";
export async function POST(req) {
  const __dirname = path.resolve();

  try {
    const data = await req.formData();
    const file = data.get("image");
    const name = data.get("name");
    const chrome = data.get("chrome");
    const githubUrl = data.get("githubUrl");
    const description = data.get("description");

    if (!file?.name) {
      throw new Error("Please select a file.");
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const image = join("/tmp", __dirname, "public/assets/projects", file.name);
    console.log("this is imageurl", image);
    await writeFile(image, buffer);
    const newProjects = await createProjects({
      name,
      chrome,
      githubUrl,
      description,
      image,
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
  return NextResponse.json({ msg: "Hello from server" });
}
