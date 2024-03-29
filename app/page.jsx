"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopButton from "@/components/TopButton";
import ChatButton from "@/components/chatBot/ChatButton";
import ChatMessage from "@/components/chatBot/ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveProjectsAction } from "../actions/projects.actions";
import Toast from "../components/toast/Toast";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveProjectsAction());
  }, []);
  return (
    <div className="flex flex-col h-full overflow-hidden dark:bg-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <TopButton />
      <Toast />
      <ChatButton />
      <ChatMessage />
    </div>
  );
};

export default Home;
