"use client";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { resetModal } from "../../redux/useMenuSlice";

const Modal = ({ children }) => {
  const overlayref = useRef();
  const modalRef = useRef();
  const dispatch = useDispatch();
  const { currentProject } = useSelector((store) => store.menuStore);
  function handleClose() {
    dispatch(resetModal());
  }

  return (
    <AnimatePresence>
      <div
        className="fixed bg-black/50 z-50 h-full  w-full  top-0 left-0 backdrop-filter backdrop-blur-sm  "
        id="overlay"
        ref={overlayref}
      >
        <Image
          src={currentProject.image}
          fill
          alt="image"
          className="object-cover overflow-hidden filter blur-md"
        />
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4   w-[90vw] md:w-[70vw]  lg:w-fit rounded-lg max-h-[95vh] min-h-[25vh] bg-gray-200 z-50  transition-all  flex justify-center dark:bg-slate-600"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <span className="absolute h-[5vh] top-1 right-2   ">
            <button
              onClick={handleClose}
              className=" rounded-full bg-red-400 p-1 hover:scale-110 transition-all"
            >
              <MdClose
                size={20}
                color="white"
                className="hover:scale-110 transition-all"
              />
            </button>
          </span>

          <div
            className="flex mt-[4vh] w-auto justify-center  overflow-y-auto "
            onClick={() => {}}
            ref={modalRef}
            id="modal"
          >
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
