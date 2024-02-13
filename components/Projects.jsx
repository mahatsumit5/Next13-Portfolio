"use client";
import ProjectCard from "./ProjectCard";
// import { projects } from "@/constants/projects";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import CustomModal from "./CustomModal";
import { useSelector } from "react-redux";

const Projects = ({ projects }) => {
  const { isModalOpen } = useSelector((store) => store.menuStore);
  if (!projects.length) {
    return <h1 className="px-[40px] text-2xl ">No projects available</h1>;
  }
  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-[1250px] m-auto">
        <SectionTitle title={"Projects"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              githubUrl={project.githubUrl}
              image={project.image}
              chrome={project.chrome}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
          {isModalOpen && <CustomModal />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
