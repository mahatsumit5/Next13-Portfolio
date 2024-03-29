"use client";
import ProjectCard from "./ProjectCard";
// import { projects } from "@/constants/projects";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import Modal from "./modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActiveProjects } from "../lib/axios";
import ProjectView from "./modal/ProjectView";

const Projects = () => {
  const { viewModal } = useSelector((store) => store.menuStore);
  const { activeProjects } = useSelector((store) => store.projectStore);

  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white dark:bg-slate-900"
      id="projects"
    >
      <div className="max-w-[1250px] m-auto">
        <SectionTitle title={"Projects"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {activeProjects?.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              githubUrl={project.githubUrl}
              image={project.image}
              chrome={project.chrome}
              description={project.description}
              technologies={project.technologies}
              tags={project.tags}
            />
          ))}
          {viewModal && (
            <Modal>
              <ProjectView />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
