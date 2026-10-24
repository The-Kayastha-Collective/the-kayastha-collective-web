import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";

import {
  navigation,
  footer,
  hero,
  about,
  missionVision,
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Navbar content={navigation} />

      <main id="main-content">
        <Hero content={hero} />
        <About content={about} />
        <MissionVision content={missionVision} />
      </main>

      <Footer content={footer} />
    </>
  );
}
