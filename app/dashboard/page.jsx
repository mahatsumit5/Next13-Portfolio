"use client";
import React, { useState } from "react";
import ProjectForm from "@/components/form/ProjectForm";
import CustomTable from "@/components/Table";
import PrivatePage from "../../components/PrivatePage";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { setModal } from "@/redux/useMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import Skills from "@/components/skills/Skills";
import Modal from "../../components/modal/Modal";
import DeleteConfirmation from "../../components/modal/DeleteConfirmation";
import { IoIosAdd } from "react-icons/io";
export default function page() {
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const dispatch = useDispatch();
  const [componentsState, setComponents] = useState("Skills");
  const { deleteModal } = useSelector((store) => store.menuStore);
  const components = {
    ProjectTable: <CustomTable />,
    Skills: <Skills />,
  };

  return (
    <>
      <div className="flex justify-between dark:bg-slate-900">
        <span className="flex flex-col w-full gap-3 p-5 ">
          <span className="flex justify-between">
            <button
              className="p-2 border-red-400  border-solid border-2  w-[150px]  rounded-lg hover:bg-red-400 hover:text-white"
              onClick={() => {
                router.push("/");
              }}
            >
              Back
            </button>
            <button
              className="p-2 w-[150px]   bg-red-500 text-white rounded-md hover:bg-red-400"
              onClick={() => {
                removeCookie("token");
                router.push("/login");
              }}
            >
              Logout
            </button>
          </span>

          <span className="flex w-full justify-between border-2 rounded-lg mt-2 bg-slate-200 dark:bg-slate-600">
            <button
              className="p-2  border-r  border-2   text-base  w-full"
              onClick={() => {
                setComponents("ProjectTable");
              }}
            >
              Projects
            </button>
            <button
              className="p-1     text-base  w-full"
              onClick={() => {
                setComponents("Skills");
              }}
            >
              Skills
            </button>
          </span>
          <span className="text-right">
            <button
              className="p-2 bg-red-400 text-white  rounded-full hover:scale-110 transition duration-75 ease-in-out text-2xl"
              onClick={() => {
                dispatch(
                  setModal({
                    show: true,
                    type:
                      componentsState === "ProjectTable"
                        ? "new project"
                        : "new skill",
                  })
                );
              }}
            >
              <IoIosAdd />
            </button>
          </span>
        </span>
      </div>
      <div className="min-h-screen  flex justify-center">
        {components[componentsState]}
        <ProjectForm />
        {deleteModal.isOpen && (
          <Modal>
            <DeleteConfirmation />
          </Modal>
        )}
      </div>
    </>
  );
}
