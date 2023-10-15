"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarMenuLinks } from "@/constants/sidebarMenu";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const SideMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const handleLinkclick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <section
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
            <p className="font-bold text-dark-blue">Sumit Mahat</p>
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
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillLinkedin />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillGithub />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillInstagram />
              </a>
            </div>
            <p className="max-md:hidden">
              Copyright 2023 Sumit Mahat.All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideMenu;
