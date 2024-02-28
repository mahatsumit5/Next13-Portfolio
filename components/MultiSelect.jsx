import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { createTags, getAlltags } from "../lib/actions/tags.action";
import { useDispatch, useSelector } from "react-redux";
import { openToast } from "../redux/toastSlice";
import { motion } from "framer-motion";
const TagComponent = ({ dropDownOpen, setSelectedTags, selectedTags }) => {
  if (!dropDownOpen) {
    return null;
  }

  const dispatch = useDispatch();
  const titleRef = useRef();
  const [inputOpen, setInputOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleClick = async (type) => {
    ("use server");
    switch (type) {
      case "open":
        if (!titleRef.current?.value) {
          setInputOpen(true);
          const { status, message, tags } = await getAlltags();
          if (status === "success") {
            setSkills(tags);
          } else {
            dispatch(
              openToast({ variant: "error", message: "Error getting  data" })
            );
          }
        } else {
          // to do submit here

          const { status, message, tag } = await createTags({
            name: titleRef.current.value,
          });
          if (status === "success") {
            setInputOpen(false);
            setSkills((prevState) => [...prevState, tag]);
          } else {
            dispatch(openToast({ variant: status, message }));
          }
        }

        break;
      case "close":
        setInputOpen(false);
        break;
    }
  };

  return (
    <motion.div
      className="bg-slate-500 rounded-md px-1 py-4 mt-2 flex flex-col gap-4"
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex gap-2 flex-wrap">
        {skills.map(({ _id, name }) => (
          <span key={_id} className="mt-2">
            <input
              className="hidden"
              value={name}
              type="checkbox"
              id={_id}
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setSelectedTags([...selectedTags, { _id, name: value }]);
                } else {
                  console.log("remove item");
                }
              }}
            />
            {!selectedTags.filter((item) => item._id === _id).length && (
              <label
                htmlFor={_id}
                className="p-2 rounded-full text-white bg-slate-400 font-extrabold selection:border-red-700  hover:cursor-pointer hover:bg-slate-600"
              >
                {name}
              </label>
            )}
          </span>
        ))}
      </div>
      {inputOpen && (
        <div className=" grid w-full relative">
          <input
            name="tags"
            placeholder="Title"
            className="bg-slate-600 p-2 focus:outline-none text-white rounded-lg shadow-sm placeholder:text-white"
            ref={titleRef}
          />
          <IoMdClose
            color="white"
            size={20}
            className="absolute right-1 top-2 z-50 hover:cursor-pointer "
            onClick={() => {
              handleClick("close");
            }}
          />
        </div>
      )}
      <span
        className="grid text-center bg-red-600 text-white p-2 rounded-md w-full hover:cursor-pointer hover:bg-red-800"
        onClick={() => {
          handleClick("open");
        }}
      >
        Add new tag
      </span>
    </motion.div>
  );
};
const MultiSelect = ({ handleOnChange }) => {
  const { currentProject } = useSelector((store) => store.menuStore);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  useEffect(() => {
    if (!currentProject?._id) {
      return;
    }
    setSelectedTags(currentProject.tags);
  }, [currentProject]);
  useEffect(() => {
    handleOnChange({
      target: {
        name: "tags",
        value: selectedTags,
      },
    });
  }, [selectedTags]);
  return (
    <>
      <div className="grid relative ">
        <span className="bg-slate-500 text-white p-2 rounded-md flex gap-3 flex-wrap pr-5">
          {dropDownOpen ? (
            <FaArrowUp
              color="white"
              className="absolute right-2 top-4"
              onClick={() => setDropDownOpen(false)}
            />
          ) : (
            <FaArrowDown
              color="white"
              className="absolute right-2 top-4"
              onClick={() => setDropDownOpen(true)}
            />
          )}
          {!selectedTags.length && "Select technologies used"}
          {selectedTags.map(({ _id, name }) => (
            <span
              className="p-2 bg-slate-400 rounded-full text-sm font-bold w-fit text-center hover:cursor-pointer hover:bg-slate-600 "
              key={_id}
              onClick={(e) => {
                setSelectedTags(
                  selectedTags.filter((item) => item._id !== _id)
                );
              }}
            >
              {name}
            </span>
          ))}
        </span>
        <TagComponent
          dropDownOpen={dropDownOpen}
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
      </div>
    </>
  );
};

export default MultiSelect;
