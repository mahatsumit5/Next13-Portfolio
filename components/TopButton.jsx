"use client";

import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
const TopButton = () => {
  const [isScrolling, setIsscrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        console.log("is cssssss");
        setIsscrolling(true);
      } else {
        setIsscrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` ${
        isScrolling
          ? " fixed bottom-[0.5rem] right-[0.7rem] z-50 bg-dark-red rounded-full px-3 py-3 shadow-2xl transition-all duration-700"
          : ""
      }`}
    >
      <a href="#home">
        <BiUpArrow color="white" />
      </a>
    </div>
  );
};

export default TopButton;
