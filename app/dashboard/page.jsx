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
export default function page() {
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
      <div className="flex justify-between overflow-hidden">
        <span className="flex justify-start w-full gap-3 p-5 ">
          <button
            className="p-1 border-2  border-red-300 text-red-600 rounded-md hover:bg-red-400"
            onClick={() => {
              router.back();
            }}
          >
            Back
          </button>
          <button
            className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
            onClick={() => {
              setComponents("ProjectTable");
            }}
          >
            Projects
          </button>
          <button
            className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
            onClick={() => {
              setComponents("Skills");
            }}
          >
            Skills
          </button>
          <button
            className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
            onClick={() => {
              dispatch(
                setModal({
                  show: true,
                  type: "new project",
                })
              );
            }}
          >
            New project
          </button>
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
