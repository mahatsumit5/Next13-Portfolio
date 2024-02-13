import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import { addProjects } from "@/lib/axios";
const ProjectForm = () => {
  const [form, setForm] = useState({});
  const [files, setFiles] = useState();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async () => {
    try {
      const formDt = new FormData();
      for (let key in form) {
        formDt.append(key, form[key]);
      }

      formDt.append("image", files);

      const res = await addProjects(formDt);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      action={handleClick}
      className=" border-2 border-slate-800 shadow-xl p-6 rounded-xl flex flex-col gap-5 w-[350px] border-1"
      encType="multipart/form-data"
      method="post"
    >
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Project Name"
        type="text"
        onChange={handleOnChange}
        name="name"
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Website Url "
        type="url"
        onChange={handleOnChange}
        name="chrome"
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Github Url"
        type="url"
        onChange={handleOnChange}
        name="githubUrl"
      />
      <input
        className=" block p-3 w-full text-md text-white border border-gray-300 rounded-lg cursor-pointer bg-rose-400 focus:outline-none   "
        type="file"
        onChange={(e) => {
          setFiles(e.target.files[0]);
        }}
        name="image"
        max={1}
      />
      <textarea
        className="  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none h-32"
        placeholder="Description"
        type="text"
        onChange={handleOnChange}
        name="description"
      />
      <button
        className="w-full p-2 border-1 rounded-md bg-red-600 disabled:bg-red-300 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
