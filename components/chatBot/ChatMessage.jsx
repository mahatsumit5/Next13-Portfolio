import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { setChat, setChatBot, setMessage } from "../../redux/chatbotSlice";
import { askQuestion } from "../../lib/axios/index";
import Image from "next/image";
import LoadingTypewriter from "../typewriter/LoadingTypewriter";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-200%" },
};
const initialQuestions = [
  { id: 1, question: "What is your name?" },
  { id: 2, question: "Where is Sumit from?" },
  { id: 3, question: "What are his skills?" },
];

const ChatMessage = () => {
  const botRef = useRef();
  const [initial, setInitail] = useState(true);
  const [question, setQuestion] = useState("");
  const { isOpen, questions, messages } = useSelector((store) => store.chat);
  const dispatch = useDispatch();

  async function handleSubmit(question) {
    setInitail(false);
    dispatch(setChat({ question }));

    const { response } = await askQuestion(question);
    dispatch(setMessage(response));
  }
  return (
    <motion.div
      className=" fixed right:0 sm:right-[1rem] s bottom-0 sm:bottom-[3rem] h-full sm:h-[500px] bg-gray-200 z-50 w-full  sm:w-[350px]  rounded-md flex flex-col gap-3 dark:bg-slate-800"
      initial={{ opacity: 0, y: "-50%" }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      ref={botRef}
    >
      <div className="flex justify-between w-full p-4 bg-dark-red rounded-lg">
        <p className="font-bold text-white">ChatBot</p>
        <button
          className=" rounded-full bg-red-400 p-1 hover:scale-110 transition-all"
          onClick={() => {
            dispatch(setChatBot(false));
          }}
        >
          <MdClose
            size={20}
            color="white"
            className="hover:scale-110 transition-all"
          />
        </button>
      </div>
      <div className="px-4 flex flex-col gap-2 overflow-y-auto relative mb-16">
        {/* initial */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="relative h-[50px] w-[50px]">
              <Image src={"/assets/bot.svg"} fill />
            </span>
            <span className="bg-slate-100 p-2 rounded-lg text-sm dark:bg-slate-600">
              Hi, I am sumit helpful assitant. How can I help you today?
            </span>
          </div>
          {initial ? (
            <>
              {" "}
              {initialQuestions.map(({ id, question }) => (
                <button
                  className="w-full text-left bg-slate-100 p-2 rounded-lg text-sm hover:scale-105 transition-all duration-200 dark:bg-slate-600"
                  key={id}
                  value={question}
                  onClick={(e) => {
                    handleSubmit(e.target.value);
                  }}
                >
                  {question}
                </button>
              ))}
            </>
          ) : null}
        </div>
        {/* message */}
        {questions.map((item, index) => (
          <div
            className="h-full flex justify-center flex-1 flex-col gap-2"
            key={index}
          >
            <div className="flex gap-2">
              <span className="bg-slate-100 p-2 rounded-lg text-sm dark:bg-slate-600 w-full">
                {item.question}
              </span>{" "}
              <span className="relative h-[50px] w-[50px]">
                <Image src={"/assets/avatar.svg"} fill />
              </span>
            </div>
            <div className="flex gap-2">
              <span className="relative h-[50px] w-[50px]">
                <Image src={"/assets/bot.svg"} fill />
              </span>

              {!messages[index] ? (
                <span className="bg-slate-100 p-2 rounded-lg text-sm dark:bg-slate-600 w-full ">
                  <LoadingTypewriter />
                </span>
              ) : (
                <span className="bg-slate-100 p-2 rounded-lg text-sm dark:bg-slate-600 w-full max-h-72 overflow-y-auto text-justify ">
                  {messages[index]}
                </span>
              )}
            </div>
          </div>
        ))}

        {/* inbox */}
        <div className="fixed bottom-2 w-full p-2 flex gap-2 left-0">
          <input
            className="w-5/6 bg-slate-400 rounded-md focus:outline-dark-red placeholder:text-gray-300 p-2 text-white"
            placeholder="Enter your question"
            name="question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <button
            className="w-1/6 bg-dark-red text-white font-bold p-2 rounded-lg disabled:bg-red-300"
            disabled={!question}
            onClick={() => {
              handleSubmit(question);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
