"use client";
import React, { useState } from "react";
import ProjectForm from "@/components/form/ProjectForm";
import CustomTable from "@/components/Table";
import PrivatePage from "../../components/PrivatePage";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { setModal } from "@/redux/useMenuSlice";
import { useDispatch } from "react-redux";

export default function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [componentsState, setComponents] = useState("ProjectTable");
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const components = {
    ProjectTable: <CustomTable />,
    Skills: <>this is skills</>,
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
        {/* <span className="p-5">
          <button
            className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
            onClick={() => {
              removeCookie("token");
              router.push("/login");
            }}
          >
            Logout
          </button>
        </span> */}
      </div>
      <div className="min-h-screen  flex justify-center">
        {components[componentsState]}
        <ProjectForm />
      </div>
    </>
  );
}
