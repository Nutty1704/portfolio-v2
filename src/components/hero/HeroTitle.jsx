import React from "react";
import Badge from "../ui/Badge";
import WaveTextAnim from "../animations/WaveText";

const HeroTitle = ({ containerClass }) => {
  return (
    <div className={`${containerClass}`}>
      <div className="flex flex-col gap-4">
        <Badge containerClass='px-3 py-1 !text-sm'>Available for hire</Badge>
        <Title />
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight md:hidden">
        Hi, I'm <span id='hero-name-mobile' className="text-primary">Abhijit Upadhyay</span>
      </h1>
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight hidden md:block">
        Hi, I'm <span id='hero-name' className="text-primary">Abhijit <br /> Upadhyay</span>
        <WaveTextAnim id='hero-name' />
      </h1>
    </>
  );
};

export default HeroTitle;
