import React from "react";
import MyJourney from "./MyJourney";
import TechnicalSkills from "./TechnicalSkills";
import SectionHeader from "../ui/SectionHeader";
import AboutAnimations from "./AboutAnimations";

const subtitle = "Software engineer focused on building reliable production systems across backend, platform, and full-stack development."

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[50vh] bg-background-secondary py-20 lg:py-24"
    >
      <AboutAnimations />
      <div className="container mx-auto max-w-6xl px-8 lg:px-4">
        {/* headline */}
        <SectionHeader title={'About Me'} subtitle={subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <MyJourney />
          <TechnicalSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
