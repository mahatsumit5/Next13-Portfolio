import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Chrome from "@/public/chrome.svg";
import git from "@/public/github.svg";
const ProjectView = () => {
  const { currentProject } = useSelector((store) => store.menuStore);
  const { name, description, chrome, image, githubUrl, technologies } =
    currentProject;
  return (
    <div className="w-full h-full ">
      <span className="flex justify-between py-4">
        <h1 className=" text-xl font-bold line-clamp-1">{name}</h1>
      </span>
      <span>
        <iframe
          src={chrome}
          title="website"
          loading="lazy"
          width={"100%"}
          height={400}
          referrerPolicy="unsafe-url"
        ></iframe>
      </span>
      <span>
        <h3 className="text-justify text-sm  pt-5 font-normal">
          {description}
        </h3>
        <p className="text-left text-sm font-light">{technologies}</p>
      </span>
      <div className="flex gap-2  justify-between w-full mt-2">
        <a
          href={githubUrl}
          target="_blank"
          className="  rounded-lg  flex gap-2 w-full justify-center items-center border-2 bg-slate-300 p-2 hover:bg-slate-400"
        >
          <Image src={git} alt="Github Link" height={24} width={24} />{" "}
          <p className="text-base">Code</p>
        </a>

        <a
          href={chrome}
          target="_blank"
          className="  border-2 bg-slate-300 rounded-lg flex gap-2 w-full justify-center  items-center p-2 hover:bg-slate-400"
        >
          <Image src={Chrome} alt="chrome.svg" height={24} width={24} />{" "}
          <p className="text-base">Website</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectView;
