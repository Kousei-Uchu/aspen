import AboutMe from "./components/AboutMe";
import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Statement from "./components/Statement";
import Topography from "./components/TopographicAnimation";
import BandDivider from "./components/BandDivider";

export default function Home() {
  return (
    <>
      <div className="band band-walnut"><HomeHero /></div>
      <div className="band band-walnut"><AboutMe /></div>
      <BandDivider from="walnut" to="forest" variant={0} />
      <div className="band band-forest"><Projects /></div>
      <BandDivider from="forest" to="walnut" variant={1} />
      <div className="band band-walnut"><Statement /></div>
      <BandDivider from="walnut" to="moss" variant={2} />
      <div className="band band-moss"><Contact /></div>
      <BandDivider from="moss" to="walnut" variant={1} />
      <div className="band band-walnut"><Topography /></div>
    </>
  );
}
