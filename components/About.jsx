"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white "
      id="about"
    >
      <div className="max-w-[1240px] mx-auto">
        <SectionTitle title={"About Me"} />
        <div className="mt-7">
          <motion.div
            ref={ref}
            className="mt-6 text-gray-600 text-[16px] leading-10 text-justify"
            initial={{ x: "-20vw" }}
            animate={{ x: isInView ? 0 : "-20vw" }}
            transition={{ duration: 1 }}
          >
            Innovative and results-driven Web Developer with a passion for
            crafting immersive digital experiences. Armed with a Bachelor's
            degree in Information Technology and hands-on training from a
            prestigious Coding Bootcamp, I bring a wealth of expertise in both
            front-end and back-end development. Proficient in a multitude of
            technologies including React, Node.js, and MongoDB, I thrive in
            dynamic environments where creativity meets technical precision.
            With a proven track record of delivering high-quality web
            applications and a keen eye for detail, I am adept at transforming
            complex ideas into elegant, user-friendly solutions. My
            collaborative nature, strong problem-solving skills, and commitment
            to staying at the forefront of industry trends make me an invaluable
            asset to any development team. Ready to leverage my skills and
            experience to drive innovation and exceed expectations as a Web
            Developer.
          </motion.div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="w-full" ref={ref2}>
          <ul className="flex justify-between flex-col gap-5 md:flex-row">
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.9 }}
            >
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  5+
                </h3>
                <span className="uppercase"> Projects</span>
              </div>
            </motion.li>
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  Graduate
                </h3>
                <span className="uppercase"> Software Developer</span>
              </div>
            </motion.li>

            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  2 years
                </h3>
                <span className="uppercase"> Experience</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
