import React, { useEffect, useState } from "react";

import { OurUploadButton } from "../uploader";
import { createProjects, updateProjects } from "@/lib/actions/projects.actions";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { resetModal } from "../../redux/useMenuSlice";
import { openToast } from "../../redux/toastSlice";
import { MdClose } from "react-icons/md";
import {
  getActiveProjectsAction,
  getProjectsAction,
} from "../../actions/projects.actions";
const initialState = {
  name: "",
  description: "",
  image: "",
  chrome: "",
  githubUrl: "",
  status: "Inactive",
};
const ProjectForm = () => {
  const dispatch = useDispatch();
  const { currentProject, formModal, title } = useSelector(
    (store) => store.menuStore
  );
  const [form, setForm] = useState(
    currentProject?._id ? currentProject : initialState
  );
  useEffect(() => {
    setForm(currentProject);
  }, [currentProject]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async (e) => {
    try {
      ("use server");
      const { status, message, data } = currentProject?._id
        ? await updateProjects(form)
        : await createProjects(form);
      dispatch(
        openToast({
          variant: status,
          message: message,
        })
      );
      if (status === "success") {
        resetfunction();
      }
    } catch (error) {
      dispatch(
        openToast({
          variant: "error",
          message: error.message,
        })
      );
    }
  };
  function resetfunction() {
    dispatch(resetModal());
    setForm({});
    dispatch(getProjectsAction());
    dispatch(getActiveProjectsAction());
  }
  if (!formModal) {
    return null;
  }
  return (
    <div className="fixed bg-black/60 z-50 h-full  w-full  top-0 left-0 backdrop-filter backdrop-blur-md ">
      <motion.form
        action={handleClick}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full md:h-fit z-50 transition-all flex flex-col justify-between p-4 rounded-md bg-slate-300/75 gap-2 w-full md:w-[500px] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="flex justify-between ">
          <h1 className="text-xl font-bold">{title}</h1>{" "}
          <button
            onClick={() => {
              dispatch(resetModal());
            }}
          >
            <MdClose
              size={20}
              color="black"
              className="hover:scale-125 transition-all"
            />
          </button>
        </span>
        <div className="inline-flex items-center">
          <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-blue-600 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              onChange={(e) => {
                const { checked } = e.target;
                setForm({ ...form, status: checked ? "Active" : "Inactive" });
              }}
              defaultChecked={form.status === "Active" ? true : false}
              defaultValue={form.status === "Active" ? true : false}
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            >
              <div
                className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>{" "}
        <input
          className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-500 placeholder:text-white text-white active:border-none"
          placeholder="Project Name"
          type="text"
          onChange={handleOnChange}
          name="name"
          value={form.name}
          required
        />
        <input
          className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-500 placeholder:text-white text-white active:border-none"
          placeholder="Website Url "
          type="url"
          onChange={handleOnChange}
          name="chrome"
          value={form.chrome}
          required
        />
        <input
          className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-500 placeholder:text-white text-white active:border-none"
          placeholder="Github Url"
          type="url"
          onChange={handleOnChange}
          name="githubUrl"
          value={form.githubUrl}
          required
        />
        <textarea
          className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-500 placeholder:text-white text-white active:border-none h-32"
          placeholder="Description"
          type="text"
          onChange={handleOnChange}
          name="description"
          value={form.description}
          rows={8}
          required
        />
        <span className="relative">
          <OurUploadButton setForm={setForm} form={form} dispatch={dispatch} />
          {title !== "Edit project" && form?.image && (
            <Image
              src={form.image}
              alt="selected image"
              className="rounded-md object-cover absolute inset-0 w-full h-full"
              fill
            />
          )}{" "}
        </span>
        <button
          className="w-full p-2 border-1 rounded-md bg-red-600 disabled:bg-red-300 text-white"
          type="submit"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default ProjectForm;
