import { NextResponse } from "next/server";
import {
  deleteSkillsById,
  getActiveSkills,
  getAllSkills,
} from "../../../lib/actions/skills.action";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const skills =
    status === "all" ? await getAllSkills() : await getActiveSkills();
  return NextResponse.json({ skills });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const response = await deleteSkillsById(id);
  return NextResponse.json({ deleteItem: response });
}
