"use client";
import { createProjects } from "@/actions/projects.action";
import { createSkill, getAllSkills } from "@/actions/skills.actions";

const page = () => {
  const handleClick = async () => {
    const skillObj = {
      title: "React",
      color: "#3b82f6",
      icon: "BiLogoReact",
    };
    const result = await createSkill(skillObj);
    console.log(result);
  };

  const createProject = async () => {
    const obj = {
      image: "../assets/projects/evently.png",
      name: "Evently",
      description:
        "This website is built on NEXT14 using zod validation. I have used mongoDb as my database option along with cleark for user signup purpose.",
      chrome: "https://next14-evently-mahatsumit5.vercel.app/",
      githubUrl: "https://github.com/mahatsumit5/Evently-NExt14",
    };
    await createProjects(obj);
  };
  return (
    <div className="flex h-100 ">
      <form action="" className=" border-black">
        <input placeholder="title" className="border-b-light-red" />
      </form>
    </div>
  );
};

export default page;
