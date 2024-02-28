import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Chrome from "@/public/chrome.svg";
import git from "@/public/github.svg";
const ProjectView = () => {
  const { currentProject } = useSelector((store) => store.menuStore);
  const { name, description, chrome, image, githubUrl, technologies, tags } =
    currentProject;
  console.log(currentProject);
  return (
    <div className="w-full h-full ">
      <span className="flex justify-between py-1">
        <h1 className=" text-xl font-bold line-clamp-1">{name}</h1>
      </span>
      <div className="relative h-72  rounded-md w-full">
        {/* <iframe
          src={chrome}
          title="website"
          loading="lazy"
          width={"100%"}
          height={500}
          referrerPolicy="unsafe-url"
        ></iframe> */}
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover rounded-md"
        />
      </div>
      <span>
        <h3 className="text-justify text-sm  pt-5 font-normal  text-gray-600 dark:text-white">
          {description}
        </h3>
        <p className="text-left text-sm font-light">{technologies}</p>
      </span>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map(({ _id, name }) => (
          <span
            className="bg-gray-400 px-2 py-1 text-slate-900 rounded-full text-xs font-bold dark:bg-slate-800 dark:text-white"
            key={_id}
          >
            {name}
          </span>
        ))}
      </div>
      <div className="flex gap-2  justify-between w-full mt-2">
        <a
          href={githubUrl}
          target="_blank"
          className="  rounded-lg  flex gap-2 w-full justify-center items-center border-2 bg-slate-300 p-2 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
        >
          <Image src={git} alt="Github Link" height={24} width={24} />{" "}
          <p className="text-base">Code</p>
        </a>

        <a
          href={chrome}
          target="_blank"
          className="  border-2 bg-slate-300 rounded-lg flex gap-2 w-full justify-center  items-center p-2 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
        >
          <Image src={Chrome} alt="chrome.svg" height={24} width={24} />{" "}
          <p className="text-base">Website</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectView;
