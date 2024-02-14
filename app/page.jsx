import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import TopButton from "@/components/TopButton";

const Home = async () => {
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
