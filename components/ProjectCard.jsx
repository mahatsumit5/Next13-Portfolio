"use client";
import {
  AiFillYoutube,
  AiFillEye,
  AiFillChrome,
  AiOutlineGithub,
} from "react-icons/ai";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({
  name,
  githubUrl,
  image,

  deployed,
  youtubeUrl,
  chrome,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ y: "-10vh" }}
      animate={{ y: isInView ? 0 : "-10vh" }}
      transition={{ duration: 0.5 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg"
    >
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src={image}
          alt={`${name} Image`}
          className="mb-2 rounded  "
          style={{ objectFit: "fill" }}
        />
      </div>
      <h3 className="mt-4 text-dark-blue">{name}</h3>
      <div className="flex gap-2 items-center w-full">
        <a
          href={githubUrl}
          target="_blank"
          className="text-dark-blue p-1 rounded-full text-xl"
        >
          <AiOutlineGithub className="text-2xl" />
        </a>

        <a
          href={chrome}
          target="_blank"
          className="text-dark-blue hover:underline text-2xl"
        >
          <AiFillChrome />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
