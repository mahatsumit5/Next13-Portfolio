import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopButton from "@/components/TopButton";
import { getProjects } from "@/lib/actions/projects.actions.js";

const Home = async () => {
  const proejcts = await getProjects();
  console.log(proejcts);
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <TopButton />
    </>
  );
};

export default Home;
