import { createUser, getUser } from "@/lib/actions/user.actions";
import { checkPassword } from "@/utils/bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const user = await getUser(body.email);
    if (!user) {
      throw new Error("Email not found");
    }
    const response = checkPassword(body.password, user.password);
    if (response) {
      user.password = undefined;
      return NextResponse.json({ status: "success", user });
    }
    throw new Error("Your password does not match");
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
export async function GET(request) {
  try {
    return NextResponse.json({ msg: "Hello from server" });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
