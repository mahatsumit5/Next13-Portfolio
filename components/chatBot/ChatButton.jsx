import Image from "next/image";
import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setChatBot } from "../../redux/chatbotSlice";
const ChatButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      className=" fixed bottom-[3.2rem] right-[0.7rem] z-50  h-[50px] w-[50px] "
      onClick={() => {
        dispatch(setChatBot(true));
      }}
    >
      <Image
        src={"assets/bot.svg"}
        fill
        className="object-cover animate-bounce hover:cursor-pointer"
      />
    </div>
  );
};

export default ChatButton;
