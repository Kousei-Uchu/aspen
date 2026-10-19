import AboutMe from "./components/AboutMe";
import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Statement from "./components/Statement";
import Topography from "./components/TopographicAnimation";

export default function Home() {
  return (
    <>
      <div className="band band-walnut"><HomeHero /></div>
      <div className="band band-walnut"><AboutMe /></div>
      <div className="band band-forest"><Projects /></div>
      <div className="band band-walnut"><Statement /></div>
      <div className="band band-moss"><Contact /></div>
      <div className="band band-walnut"><Topography /></div>
    </>
  );
}
