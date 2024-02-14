"use client";
import { setModal } from "@/redux/useMenuSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { setEditModal, resetModal } from "../redux/useMenuSlice";
import Image from "next/image";

const EditModal = ({ children, type }) => {
  const dispatch = useDispatch();
  const { editModal } = useSelector((store) => store.menuStore);
  const { currentProject } = useSelector((store) => store.menuStore);
  function handleClose() {
    dispatch(resetModal());
  }
  if (!editModal) {
    return null;
  }
  return (
    <AnimatePresence>
      <div className="fixed bg-black/60 z-50 h-full  w-full  top-0 left-0 backdrop-filter backdrop-blur-sm ">
        <Image
          src={currentProject.image}
          fill
          alt="image"
          className="object-cover overflow-hidden filter blur-md"
        />
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1   w-[90vw] md:w-[70vw]  lg:w-fit rounded-lg  bg-gray-200 z-50  transition-all  flex justify-center"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <span className="absolute h-[5vh] top-1 right-1  ">
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
          {type === "edit" ? (
            <div className="block mt-[6vh] h-[88vh] z-10 overflow-y-auto ">
              {children}
            </div>
          ) : (
            <>
              <h1>are you sure want to delete this projects?</h1>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditModal;
