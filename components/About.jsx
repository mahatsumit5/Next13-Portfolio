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
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto">
        <SectionTitle title={"About Me"} />
        <div className="mt-7">
          <motion.div
            ref={ref}
            className="mt-6 text-gray-600 text--[20px] leading-10 text-justify"
            initial={{ x: "-20vw" }}
            animate={{ x: isInView ? 0 : "-20vw" }}
            transition={{ duration: 1 }}
          >
            I am an IT graduate with a deep enthusiasm for Software Development,
            holding expertise in web technologies. My academic background,
            including a Bachelor's degree, combined with ongoing professional
            development, has equipped me with a strong technical skill set. I am
            dedicated to keeping pace with industry trends, making me
            well-prepared to contribute to cutting-edge projects as a Software
            Engineer. My proficiency in both technical and soft skills positions
            me as a valuable asset, ready to drive innovation and make a
            positive impact in this dynamic field.
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
