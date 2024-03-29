import React, { useEffect } from "react";
import SkillModal from "../modal/SkillModal";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/useMenuSlice";
import Image from "next/image";
import { getAllSkillsAction } from "../../actions/skills.action";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Skills = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((store) => store.dataStore);
  useEffect(() => {
    dispatch(getAllSkillsAction());
  }, []);
  function openModal(item, type) {
    switch (type) {
      case "new skill":
        return dispatch(setModal({ show: true, type, data: item }));
      case "edit skill":
        return dispatch(setModal({ show: true, type, ...item }));
      case "delete skill":
        return dispatch(
          setModal({
            show: true,
            type,

            ...item,
          })
        );
    }
  }
  return (
    <div className="flex flex-col items-start gap-5 bg-admin-svg w-full p-2 dark:bg-slate-900">
      {/* table */}
      <div className="w-full  bg-white shadow-md rounded-xl  gap-2 ">
        {/* Header */}
        <span className="  w-full flex  justify-between ">
          <h1 className="font-bold text-center border-r p-2 bg-slate-400 w-full">
            Status
          </h1>
          <h1 className="font-bold text-center border-r p-2 bg-slate-400 w-full">
            Title
          </h1>
          <h1 className="font-bold text-center border-r p-2 bg-slate-400 w-full">
            Image
          </h1>
          <h1 className="font-bold text-center border-r p-2 bg-slate-400 w-full">
            Action
          </h1>
        </span>
        {/* body */}
        {skills.map((item) => (
          <div
            className=" p-2 w-full flex  justify-between gap-2 dark:bg-slate-900"
            key={item._id}
          >
            {/* Status */}
            <div className="flex justify-center  border-r w-full">
              <div className="grid items-center ">
                <span
                  className={
                    item.status === "Active"
                      ? " p-2 rounded-md bg-green-600 text-white font-bold dark:bg-green-900"
                      : "p-2 rounded-md bg-red-600 dark:bg-red-900 text-white"
                  }
                >
                  {item.status}
                </span>
              </div>
            </div>
            {/* name */}
            <div className="flex justify-center border-r w-full">
              <div className="grid items-center ">
                <span className="p-2  text-md md:text-lg font-extrabold bg-slate-400 rounded-md text-white">
                  {item.title}
                </span>
              </div>
            </div>
            {/* image */}
            <div className=" relative flex justify-center  w-full dark:bg-slate-600 dark:rounded-md">
              <Image src={item.image} alt="" fill />
            </div>
            {/* action */}
            <div className="flex justify-center flex-col  gap-2 w-full">
              {" "}
              <button
                className=" hover:scale-110 transition-all p-2 rounded-lg border-2 border-red-600 font-bold dark:border-gray-600 dark:text-white w-full flex justify-center"
                onClick={() => {
                  openModal(item, "edit skill");
                }}
              >
                <CiEdit size={25} /> Edit
              </button>
              <button
                className=" hover:scale-110 transition-all p-2 rounded-lg bg-red-600 text-white font-bold dark:bg-red-900 w-full flex justify-center"
                onClick={() => {
                  openModal(item, "delete skill");
                }}
              >
                <MdDelete size={25} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <SkillModal />
    </div>
  );
};

export default Skills;
