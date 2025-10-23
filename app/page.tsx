import AboutMe from "./components/AboutMe";
import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Statement from "./components/Statement";

export default function Home() {
  return (
    <>
    <HomeHero />
    <AboutMe />
    <Projects />
    <Statement />
    <Contact />
    </>
  );
}
