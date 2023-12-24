"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Skill from "@/lib/mongodb/models/skills.model";

export async function createSkill(skillObj) {
  try {
    await connectToDatabase();
    const skill = await Skill.create(skillObj);
    return JSON.parse(JSON.stringify(skill));
  } catch (error) {
    console.log(error);
  }
}

export async function getAllSkills() {
  try {
    await connectToDatabase();
    const skills = await Skill.find();
    return JSON.parse(JSON.stringify(skills));
  } catch (error) {
    console.log(error);
  }
}
