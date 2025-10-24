import AboutMe from "./components/AboutMe";
import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Statement from "./components/Statement";
import Topography from "./components/TopographicAnimation";

export default function Home() {
  return (
    <>
    <HomeHero />
    <AboutMe />
    <Projects />
    <Statement />
    <Contact />
    <Topography />
    </>
  );
}
