"use client";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const TopMenu = () => {
  const [isOpen, toggleMenu] = useState(false);

  return (
    <div className="px-[40px] bg-light-bg py-4 z-10 max-xs:px-[20px]" id="home">
      <div className="top-menu ">
        <div className="flex justify-between items-center w-full md:hidden">
          <div className="flex gap-10 w-full">
            <Link href="/">
              <h1 className="font-bold text-3xl text-dark-red">S.Mahat</h1>
            </Link>
          </div>
          <div
            className="text-2xl z-50"
            onClick={() => {
              toggleMenu(!isOpen);
            }}
          >
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>
        <div className="top-menu-info-container">
          <div className="flex md:gap-10 flex-col md:flex-row">
            <div className="flex gap-1 items-center text-sm font-bold">
              <MdEmail color="red" />
              <span className="text-dark-blue">mahatsumit5@gmail.com</span>
            </div>
          </div>
          <motion.a
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            target="_blank"
            className="bg-dark-red text-white px-4 py-1 rounded-md hover:bg-dark-red/75 flex gap-2"
          >
            <AiOutlineDownload size={"20px"} className="font-bold" /> Download
            CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
