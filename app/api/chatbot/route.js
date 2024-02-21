import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
export async function POST(req) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const pathName = path.resolve();
  try {
    const { prompt } = await req.json();

    const myFile = fs.readFileSync(pathName + "/sumit.txt", "utf8");
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: ` You are my assitant. That answer question for vistors who vists my website. Address me as MR Sumit.${myFile}`,
        },
        { role: "user", content: "Who is sumit Mahat." },
        {
          role: "assistant",
          content:
            "mr sumit is a Experienced Web Developer looking forward to obtaining a full-time job working as a Web Developer to develop, maintain and design websites.  Hands on experience in creating and developing multiple web applications using various web technologies.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const { message } = completion.choices[0];
    return NextResponse.json({
      response: message.content,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}
