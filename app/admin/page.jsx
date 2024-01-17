"use client";
import { createProjects } from "@/actions/projects.action";
import { createSkill, getAllSkills } from "@/actions/skills.actions";
import { upload } from "@/utils/multer";
import { Box, Button, TextField, Typography } from "@mui/material";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [form, setForm] = useState({});
  const [files, setFiles] = useState();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async () => {
    if (files?.length) {
      const formdt = new FormData();
      formdt.append("icon", files);
      try {
        await fetch("/api/upload", {
          method: "POST",
          body: formdt,
        });
      } catch (error) {
        console.log(error);
      }
      return;
    }
    return;
    const result = await createSkill(form);
    console.log(result);
  };

  const createProject = async () => {
    const obj = {
      image: "../assets/projects/evently.png",
      name: "Evently",
      description:
        "This website is built on NEXT14 using zod validation. I have used mongoDb as my database option along with cleark for user signup purpose.",
      chrome: "https://next14-evently-mahatsumit5.vercel.app/",
      githubUrl: "https://github.com/mahatsumit5/Evently-NExt14",
    };
    await createProjects(obj);
  };
  return (
    <div className="flex justify-center mt-2 ">
      <form
        action={handleClick}
        className="shadow-lg p-5 rounded-xl flex flex-col gap-5
      "
      >
        <Typography variant="h4">Skills</Typography>
        <TextField
          label="Title"
          name="title"
          type="text"
          onChange={handleOnChange}
        />
        <TextField
          label="Color"
          name="color"
          type="color"
          defaultValue={"#000000"}
          onChange={handleOnChange}
        />
        <TextField
          label="icon"
          name="icon"
          type="file"
          onChange={(e) => {
            setFiles(e.target.files);
          }}
          id="icon"
          className="hidden"
        />
        <Box
          sx={{
            height: 150,
            width: 250,
            display: "flex",
            position: "relative",
            border: 1,
          }}
        >
          <Image />
          <UploadButton>
            <label htmlFor="icon">Select file</label>
          </UploadButton>
        </Box>
        <div className="grid">
          <Button variant="outlined" type="submit">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
