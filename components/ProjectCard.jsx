"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/useMenuSlice";

const ProjectCard = ({
  name,
  githubUrl,
  image,
  description,
  technologies,
  chrome,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  function handleopen() {
    dispatch(
      setModal({
        show: true,
        type: "view",
        name,
        githubUrl,
        image,
        description,
        technologies,
        chrome,
      })
    );
  }
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: "-10vh" }}
        animate={{ y: isInView ? 0 : "-10vh" }}
        transition={{ duration: 0.5 }}
        className="mb-4 p-4  rounded-lg shadow-md bg-light-bg hover:cursor-pointer hover:shadow-lg relative dark:bg-slate-600"
        onMouseEnter={(e) => setHovered(true)}
        onMouseLeave={(e) => setHovered(false)}
      >
        <h3 className=" text-dark-blue text-xl font-semibold dark:text-white">
          {name}
        </h3>
        <div className="h-[180px] w-full overflow-hidden mt-5">
          <img
            src={image}
            alt={`${name} Image`}
            className="mb-2 rounded  "
            style={{ objectFit: "fill" }}
          />
        </div>
        {hovered && (
          <motion.div
            className="absolute top-0 right-0 rounded-md transition-all  h-full w-full flex justify-center items-center bg-slate-400/50 backdrop-filter backdrop-blur-sm z-10"
            initial={{ translateX: -70 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.1 }}
          >
            <button
              className="text-white font-bold border-2 p-2 rounded-full flex gap-2"
              onClick={handleopen}
            >
              Open
            </button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectCard;
