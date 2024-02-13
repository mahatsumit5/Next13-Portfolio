import React, { useState } from "react";
import { addProjects } from "@/lib/axios";
import { OurUploadButton } from "../uploader";
import { createProjects } from "@/lib/actions/projects.actions";
const ProjectForm = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async () => {
    try {
      const res = await createProjects(form);
      if (res._id) {
        setForm({});
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
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Project Name"
        type="text"
        onChange={handleOnChange}
        name="name"
        value={form.name}
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Website Url "
        type="url"
        onChange={handleOnChange}
        name="chrome"
        value={form.chrome}
      />
      <input
        className="focus:outline-none  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none"
        placeholder="Github Url"
        type="url"
        onChange={handleOnChange}
        name="githubUrl"
        value={form.gthubUrl}
      />
      <span className="">
        <OurUploadButton setForm={setForm} form={form} />
      </span>

      <textarea
        className="  shadow-lg p-3 rounded-lg bg-rose-400 placeholder:text-white text-white active:border-none h-32"
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
