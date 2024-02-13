import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopButton from "@/components/TopButton";
import { getProjects } from "@/lib/actions/projects.actions";
import { useSelector } from "react-redux";

const Home = async () => {
  const projects = await getProjects();
  return (
    <div className="flex flex-col h-full ">
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />

      <TopButton />
    </div>
  );
};

export default Home;
