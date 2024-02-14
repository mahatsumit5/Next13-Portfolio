"use client";
import LoginForm from "@/components/form/LoginForm";
import ProjectForm from "@/components/form/ProjectForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomTable from "@/components/Table";
import CustomModal from "../../components/CustomModal";
import { useSelector } from "react-redux";
const page = () => {
  const { isModalOpen } = useSelector((store) => store.menuStore);
  const [formToDisplay, setFormToDisplay] = useState("login");
  const router = useRouter();
  // Redirect to login if user is already logged in
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      setFormToDisplay("login");
      return;
    }
    setFormToDisplay("ProjectTable");
  }, []);

  const form = {
    login: <LoginForm setFormToDisplay={setFormToDisplay} />,
    Projects: <ProjectForm setFormToDisplay={setFormToDisplay} />,
    ProjectTable: <CustomTable />,
    Skills: <>this is skills</>,
  };
  return (
    <div className="flex justify-center mt-5 flex-col gap-2 items-center">
      <div className="flex justify-start w-full gap-3 p-5 flex-wrap">
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
            setFormToDisplay("ProjectTable");
          }}
        >
          Projects
        </button>
        <button
          className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
          onClick={() => {
            setFormToDisplay("Skills");
          }}
        >
          Skills
        </button>
        <button
          className="p-1 bg-red-600 text-white  rounded-md hover:bg-red-700"
          onClick={() => {
            setFormToDisplay("Projects");
          }}
        >
          Create new project
        </button>
      </div>
      <div className="p-5">{form[formToDisplay]}</div>
      {isModalOpen && <CustomModal />}
    </div>
  );
};

export default page;
