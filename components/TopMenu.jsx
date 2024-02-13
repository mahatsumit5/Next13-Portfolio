"use client";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/useMenuSlice";
import { Kaushan_Script } from "next/font/google";
const lobster_font = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const TopMenu = () => {
  const { isOpen } = useSelector((store) => store.menuStore);
  const dispatch = useDispatch();
  return (
    <div
      className="px-[40px] bg-light-bg py-4 z-10 max-xs:px-[20px] "
      id="home"
    >
      <div className="top-menu ">
        <div className="flex justify-between items-center w-full md:hidden ">
          <div className="">
            <div className="flex gap-10 w-full">
              <Link href="/">
                <h1
                  className={`${lobster_font.className} text-2xl text-dark-red`}
                >
                  Sumit Mahat
                </h1>
              </Link>
            </div>
            <div
              className="text-2xl z-50 "
              onClick={() => {
                dispatch(toggleMenu(!isOpen));
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 1 : 0, type: "inertia" }}
                transition={{ duration: 0.6 }}
                className="fixed top-[0.7rem] right-[0.8rem] z-50 px-1 py-1 bg-dark-red rounded-full  text-white"
              >
                <AiOutlineClose />
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: isOpen ? 0 : 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-[0.7rem] right-[0.8rem] z-50 px-1 py-1"
              >
                <RiMenu3Fill />
              </motion.div>
            </div>
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
            href="../assets/resume.pdf"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            target="_blank"
            className="bg-dark-red text-white px-4 py-1 rounded-md hover:bg-dark-red/75 flex gap-2"
            download
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
