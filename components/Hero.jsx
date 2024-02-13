"use client";

import Image from "next/image";
import Link from "next/link";

import "@/app/animations.css";
import CustomTypewriter from "./typewriter/Typewriter";

export const Hero = () => {
  return (
    <section className="w-full  h-fit bg-light-bg relative px-[40px] py-10 max-xs:px-[20px]">
      <div className="flex items-center justify-between h-full max-w-[1250px] mx-auto max-md:flex-col max-md:gap-10">
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div
            className="text-4xl lg:text-6xl flex flex-col gap-4
"
          >
            <h1 className="font-bold"> Hi, I'm Sumit </h1>

            <span className="  font-bold text-dark-red mt-2">
              <CustomTypewriter />
            </span>
            <h2 className="font-bold">From Sydney, Australia</h2>
            <p className="mt-5 text-xl">
              Full stack Developer. Coffee-fueled coder. Embracing new tech with
              a smile
            </p>
          </div>
          <div className="flex gap-4 max-md:justify-center">
            <Link href="#projects">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/hero.png"
            width={300}
            height={300}
            alt="sumit mahat"
            className="z-10 rounded-full border-solid border-4 border-red-200 shadow-lg"
          />
        </div>
      </div>
      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};
