import React from "react";
import SkillModal from "../modal/SkillModal";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/useMenuSlice";

const Skills = () => {
  const dispatch = useDispatch();
  function openModal() {
    dispatch(
      setModal({
        show: true,
        type: "new skill",
        title: "My skills",
      })
    );
  }
  return (
    <div className="flex flex-col items-start gap-5 bg-admin-svg w-full p-2">
      <span>
        <button
          className="border-2 p-4 font-bold rounded-lg bg-red-600 text-white shadow-xl hover:bg-red-700 "
          onClick={openModal}
        >
          Add Skills
        </button>
      </span>
      <div className="w-full p-5 bg-white shadow-md rounded-xl overflow-hidden">
        // Todo Create a table to dispalay data make this a table
      </div>

      <SkillModal />
    </div>
  );
};

export default Skills;
