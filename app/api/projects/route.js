process.noDeprecation = true;

import { createProjects } from "@/lib/actions/projects.actions";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path, { join } from "path";
import os from "os";
import uploadFile from "@/utils/s3";
export async function POST(req) {
  const __dirname = path.resolve();
  const tempDir = os.homedir();
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
    const image = join(tempDir, file.name);
    await writeFile(image, buffer);
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
  return NextResponse.json({ msg: "Hello from server" });
}
