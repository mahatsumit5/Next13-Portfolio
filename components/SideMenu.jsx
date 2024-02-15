"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sidebarMenuLinks } from "@/constants/sidebarMenu";
import { AnimatePresence, motion } from "framer-motion";
import Socialcons from "./social/Socialcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/useMenuSlice";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const SideMenu = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState(null);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.menuStore);
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  console.log(cookies);
  const handleLinkclick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY < 350) {
      setActiveLink(sidebarMenuLinks[0]);
    }
    if (scrollY > 350 && scrollY < 850) {
      setActiveLink(sidebarMenuLinks[1]);
    }

    if (scrollY > 850 && scrollY < 1200) {
      setActiveLink(sidebarMenuLinks[2]);
    }
    if (scrollY > 1200 && scrollY < 2000) {
      setActiveLink(sidebarMenuLinks[3]);
    }
    if (scrollY > 2000) {
      setActiveLink(sidebarMenuLinks[4]);
    }
  }, [scrollY]);

  const detectSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [screenSize]);

  useEffect(() => {
    if (screenSize < 1024) {
    }
    if (screenSize < 768) {
      dispatch(toggleMenu(false));
      return;
    }
    dispatch(toggleMenu(true));
  }, [screenSize]);

  return (
    <>
      <AnimatePresence>
        <motion.section
          initial={{ y: "-100vh", opacity: 0, width: "100%" }}
          animate={{
            y: isOpen ? 0 : "-100vh",
            opacity: isOpen ? 1 : 0,
            width: screenSize < 1024 ? "150px" : "300px",
          }}
          transition={{ duration: 0.5 }}
          className="side-menu border-r dark:bg-slate-700 "
        >
          <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
            <div className="flex justify-center items-center flex-col gap-2 rounded-full ">
              <Image
                src="/assets/profile.JPG"
                width={200}
                height={200}
                alt="sumit"
                className="border-solid border-4 border-gray-200 shadow-lg rounded-full"
              />
              <p className="font-bold ">Sumit Mahat </p>
            </div>

            <div>
              {sidebarMenuLinks.map((link) => {
                const isActive = activeLink === link;
                return (
                  <motion.a
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: link.duration }}
                    whileHover={{ scale: 1.2 }}
                    key={link.label}
                    href={`${link.route}`}
                    className={`relative flex justify-center items-center rounded-lg p-3 font-extrabold ${
                      isActive ? "bg-dark-red text-white" : ""
                    }`}
                    onClick={() => {
                      handleLinkclick(link);
                    }}
                  >
                    <p> {link.label}</p>
                  </motion.a>
                );
              })}
              {cookies?.token && (
                <motion.button
                  className="relative flex justify-center items-center rounded-lg p-3 font-extrabold"
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    removeCookie("token");
                    router.push("/login");
                  }}
                >
                  Logout
                </motion.button>
              )}
            </div>
            <div className="flex items-center flex-col justify-center text-center">
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
                <Socialcons />
              </div>
              <p className="max-md:hidden">
                Copyright 2023 Sumit Mahat.All rights reserved
              </p>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
