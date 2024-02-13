import { setModal } from "@/redux/useMenuSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { AiFillChrome, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import Chrome from "../public/chrome.svg";
import git from "../public/github.svg";
const CustomModal = () => {
  const { currentProject } = useSelector((store) => store.menuStore);
  const { name, description, chrome, image, githubUrl, technologies } =
    currentProject;
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setModal({ show: false }));
  }
  return (
    <AnimatePresence>
      <div className="fixed bg-black/60 z-50 h-full  w-full  top-0 right-0 backdrop-filter backdrop-blur-sm ">
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   w-[90vw] md:w-[70vw]  lg:w-[50vw] rounded-lg p-4 bg-gray-200 z-50  transition-all"
          initial={{ height: 0 }}
          animate={{ height: "90vh" }}
          transition={{ duration: 0.2 }}
        >
          <span className="flex justify-between py-4">
            <h1 className=" text-xl font-bold line-clamp-1">{name}</h1>
            <button
              onClick={handleClose}
              className=" rounded-full bg-red-400 p-1 hover:scale-110 transition-all"
            >
              <MdClose
                size={24}
                color="white"
                className="hover:scale-110 transition-all"
              />
            </button>
          </span>

          <span>
            <iframe
              src={chrome}
              title="website"
              loading="lazy"
              width={"100%"}
              height={500}
              referrerPolicy="unsafe-url"
            ></iframe>
          </span>
          <span>
            <h3 className="text-justify text-md font-sans pt-5">
              {description}
            </h3>
            <p className="text-left text-sm font-light">{technologies}</p>
          </span>
          <div className="flex gap-2 items-center w-full mt-2">
            <a
              href={githubUrl}
              target="_blank"
              className="text-dark-blue p-1 rounded-full text-xl"
            >
              <Image src={git} alt="Github Link" height={24} width={24} />
            </a>

            <a
              href={chrome}
              target="_blank"
              className="text-dark-blue hover:underline text-2xl"
            >
              <Image src={Chrome} alt="chrome.svg" height={24} width={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CustomModal;
