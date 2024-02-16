import { skills } from "@/constants/skills";
import Image from "next/image";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import { useDispatch } from "react-redux";
import { getActiveSkillsAction } from "../actions/skills.action";

export const Skills = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveSkillsAction());
  }, []);
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-[1250px] mx-auto">
        <SectionTitle title={"Skills"} />
      </div>
      <div className="grid md:grid-cols-5 gap-5 sm:grid-cols-4 grid-cols-2  mt-10 ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-4 shadow-sm rounded-md text-center flex flex-col items-center hover:shadow-2xl justify-center"
          >
            <skill.icon
              className={`text-6xl `}
              style={{ color: `${skill.color}` }}
            />
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
