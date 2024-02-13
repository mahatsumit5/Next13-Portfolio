"use client";
import LoginForm from "@/components/form/LoginForm";
import ProjectForm from "@/components/form/ProjectForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [formToDisplay, setFormToDisplay] = useState("login");
  // Redirect to login if user is already logged in
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      setFormToDisplay("login");
      return;
    }
    setFormToDisplay("Projects");
  }, []);

  const form = {
    login: <LoginForm setFormToDisplay={setFormToDisplay} />,
    Projects: <ProjectForm />,
  };
  return (
    <div className="flex justify-center mt-5 flex-col gap-2 items-center">
      <div className="flex justify-start w-full">
        <button
          className="border-2 p-2 border-red-200 rounded-lg"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>{" "}
      {form[formToDisplay]}
    </div>
  );
};

export default page;
