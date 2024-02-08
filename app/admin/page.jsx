"use client";
import LoginForm from "@/components/form/LoginForm";
import ProjectForm from "@/components/form/ProjectForm";
import { useEffect, useState } from "react";

const page = () => {
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
  return <div className="flex justify-center mt-5">{form[formToDisplay]}</div>;
};

export default page;
