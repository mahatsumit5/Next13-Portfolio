"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sidebarMenuLinks } from "@/constants/sidebarMenu";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Socialcons from "./social/Socialcons";
import { useSelector } from "react-redux";
const SideMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { isOpen } = useSelector((store) => store.menuStore);
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const handleLinkclick = (link) => {
    setActiveLink(link);
  };
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
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

  return (
    <>
      <motion.section
        initial={{ y: "-100vh" }}
        animate={{ y: isOpen ? 0 : "-100vh" }}
        transition={{ duration: 0.5 }}
        className={`side-menu border-r ${
          isOpen ? "max-lg:block" : "max-md:hidden"
        }`}
      >
        <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
          <div className="flex justify-center items-center flex-col gap-2 rounded-full ">
            <Image
              src="/assets/hero.png"
              width={100}
              height={100}
              alt="sumit"
            />
            <p className="font-bold text-dark-blue">Sumit Mahat </p>
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
                  className={`relative flex justify-center items-center rounded-lg p-3 ${
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
    </>
  );
};

export default SideMenu;
