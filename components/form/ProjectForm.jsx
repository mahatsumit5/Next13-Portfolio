import React, { useState } from "react";
import { addProjects } from "@/lib/axios";
import { OurUploadButton } from "../uploader";
import { createProjects } from "@/lib/actions/projects.actions";
import Image from "next/image";
const initialState = {
  name: "",
  description: "",
  image: "",
  chrome: "",
  githubUrl: "",
};
const ProjectForm = ({ setFormToDisplay }) => {
  const [form, setForm] = useState({
    name: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async (e) => {
    try {
      ("use server");

      const res = await createProjects(form);
      if (res._id) {
        setForm({});
        setFormToDisplay("ProjectTable");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      action={handleClick}
      className=" shadow-xl p-6 rounded-xl flex flex-col gap-5 w-[350px] md:w-[500px] border-1"
      method="post"
    >
      <h1 className="text-2xl font-bold ">Add new project.</h1>
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-300 placeholder:text-white text-white active:border-none"
        placeholder="Project Name"
        type="text"
        onChange={handleOnChange}
        name="name"
        value={form.name}
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-300 placeholder:text-white text-white active:border-none"
        placeholder="Website Url "
        type="url"
        onChange={handleOnChange}
        name="chrome"
        value={form.chrome}
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-300 placeholder:text-white text-white active:border-none"
        placeholder="Github Url"
        type="url"
        onChange={handleOnChange}
        name="githubUrl"
        value={form.gthubUrl}
      />
      <span className="relative">
        <OurUploadButton setForm={setForm} form={form} />
        {form?.image && (
          <Image
            src={form.image}
            alt="selected image"
            className="rounded-md object-cover absolute inset-0 w-full h-full"
            fill
          />
        )}{" "}
      </span>

      <textarea
        className="  shadow-lg p-3 rounded-lg bg-slate-300 placeholder:text-white text-white active:border-none h-32"
        placeholder="Description"
        type="text"
        onChange={handleOnChange}
        name="description"
        value={form.description}
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
