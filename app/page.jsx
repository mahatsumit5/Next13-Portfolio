"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopButton from "@/components/TopButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActiveProjectsAction } from "../actions/projects.actions";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveProjectsAction());
  }, []);
  return (
    <div className="flex flex-col h-full ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <TopButton />
    </div>
  );
};

export default Home;
