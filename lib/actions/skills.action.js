"use server";

import { connectToDatabase } from "../mongodb";
import Skill from "../mongodb/models/skills.model";

export const createSkills = async (obj) => {
  try {
    await connectToDatabase();

    const skill = await Skill.create(obj);

    if (skill?._id) {
      return JSON.parse(
        JSON.stringify({
          status: "success",
          message: "Your skill has been created",
          data: skill,
        })
      );
    } else {
      return JSON.parse(
        JSON.stringify({
          status: "error",
          message: "Error creating new skill.",
        })
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
