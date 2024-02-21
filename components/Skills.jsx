import { skills } from "@/constants/skills";
import Image from "next/image";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle.js/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getActiveSkillsAction } from "../actions/skills.action";

export const Skills = () => {
  const dispatch = useDispatch();
  const { activeSkills } = useSelector((store) => store.dataStore);

  useEffect(() => {
    dispatch(getActiveSkillsAction());
  }, []);
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white dark:bg-slate-900"
      id="skills"
    >
      <div className="max-w-[1250px] mx-auto">
        <SectionTitle title={"Skills"} />
      </div>
      <div className="grid md:grid-cols-5 gap-5 sm:grid-cols-4 grid-cols-2  mt-10 ">
        {activeSkills.map((skill) => (
          <div
            key={skill.id}
            className="p-4 shadow-md rounded-lg text-center flex flex-col items-center hover:animate-pulse hover:bg-slate-200  justify-center dark:bg-slate-600 dark:hover:bg-slate-400"
          >
            <Image src={skill.image} alt={skill.title} height={80} width={80} />
            <span className="font-bold">{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
