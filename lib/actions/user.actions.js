"use server";

import { connectToDatabase } from "../mongodb";
import User from "../mongodb/models/user.models";

export const createUser = async (user) => {
  try {
    await connectToDatabase();
    const res = await User.create(user);
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async (email) => {
  try {
    await connectToDatabase();
    const res = await User.findOne({ email: email });
    return JSON.parse(JSON.stringify(res));
  } catch (error) {
    console.log(error);
  }
};
