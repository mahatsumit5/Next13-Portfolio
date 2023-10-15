"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto">
        <SectionTitle title={"About Me"} />
        <div className="mt-7">
          <motion.div
            ref={ref}
            className="mt-6 text-gray-600 text--[20px] leading-10"
            initial={{ x: "-20vw" }}
            animate={{ x: isInView ? 0 : "-20vw" }}
            transition={{ duration: 1 }}
          >
            Software Engineer Graduate dedicated to improving skills through
            hands-on learning and development work. Proficient in mobile and
            desktop development environments. Adept at using HTML5, JavaScript
            and other programming languages to produce clean code.
            Well-organized and collaborative team player with strong
            communication and analytical abilities.
          </motion.div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="w-full">
          <ul className="flex justify-between flex-col gap-5 md:flex-row">
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView ? 0 : "-30vw" }}
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
              animate={{ x: isInView ? 0 : "-30vw" }}
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
              animate={{ x: isInView ? 0 : "-30vw" }}
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
