import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from "../../redux/useMenuSlice";
import { MdClose } from "react-icons/md";
import { OurUploadButton } from "../uploader";
import Image from "next/image";
import Spinner from "../Spinner";
import { createSkills, updateSKill } from "../../lib/actions/skills.action";
import { openToast } from "../../redux/toastSlice";
import {
  getActiveSkillsAction,
  getAllSkillsAction,
} from "../../actions/skills.action";
import { setLoading } from "../../redux/loading";
const initialState = {
  status: "",
  image: "",
  title: "",
};
const SkillModal = () => {
  const { title, skillModal, currentSkill } = useSelector(
    (state) => state.menuStore
  );
  const [form, setForm] = useState(
    currentSkill?._id ? currentSkill : initialState
  );
  useEffect(() => {
    setForm(currentSkill);
  }, [currentSkill]);

  const dispatch = useDispatch();
  function handleOnChange(e) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }
  async function handleSubmit(e) {
    try {
      ("use server");
      dispatch(setLoading(true));
      const { status, message, data } = currentSkill?._id
        ? await updateSKill(form)
        : await createSkills(form);
      dispatch(
        openToast({
          variant: status,
          message: message,
        })
      );
      if (status === "success") {
        dispatch(resetModal());
        dispatch(getAllSkillsAction());
        dispatch(getActiveSkillsAction());
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      dispatch(
        openToast({
          variant: "error",
          message: error.message,
        })
      );
    }
  }
  if (!skillModal) {
    return null;
  }
  return (
    <div className="fixed bg-black/10 z-40 h-full  w-full  top-0 left-0 backdrop-filter backdrop-blur-md ">
      {title !== "Edit project" && form?.image && (
        <Image
          src={form.image ? form.image : currentSkill.image}
          alt="selected image"
          className="rounded-md object-cover absolute inset-0 w-full h-full filter "
          fill
          onClick={() => {
            dispatch(resetModal());
          }}
        />
      )}
      <motion.form
        action={(e) => {
          handleSubmit(e);
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit md:h-fit z-50 transition-all flex flex-col justify-start p-4 rounded-md bg-slate-300 gap-2 w-full md:w-[500px]  dark:bg-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="flex justify-between ">
          <h1 className="text-xl font-bold">{title}</h1>{" "}
          <button
            className="rounded-full bg-red-700 p-2 text-white hover:scale-125 transition-all"
            onClick={() => {
              dispatch(resetModal());
            }}
          >
            <MdClose
              size={20}
              color="white"
              className="hover:scale-125 transition-all"
            />
          </button>
        </span>
        <div className=" flex gap-2 items-center">
          <p className="font-bold">Status</p>
          <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-blue-600 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              onChange={(e) => {
                const { checked } = e.target;
                setForm({ ...form, status: checked ? "Active" : "Inactive" });
              }}
              defaultChecked={currentSkill?.status === "Active" ? true : false}
              // defaultValue={form.status === "Active" ? true : false}
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
        <label className="font-bold">Title</label>
        <input
          className="focus:outline-none  shadow-lg p-3 rounded-lg bg-slate-500 placeholder:text-white text-white active:border-none"
          placeholder="Title "
          type="text"
          onChange={handleOnChange}
          name="title"
          value={form.title}
          required
        />
        {form.status && form.title && (
          <AnimatePresence>
            <motion.span
              className="relative"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <OurUploadButton
                setForm={setForm}
                form={form}
                dispatch={dispatch}
              />
            </motion.span>
          </AnimatePresence>
        )}
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

export default SkillModal;
