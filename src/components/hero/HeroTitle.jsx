import React from "react";
import Badge from "../ui/Badge";

const HeroTitle = ({ containerClass }) => {
  return (
    <div className={`${containerClass}`}>
      <div className="flex flex-col gap-4">
        <Badge>Available for hire</Badge>
        <Title />
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <>
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:hidden">
        Hi, I'm <span className="text-primary">Abhijit Upadhyay</span>
      </h1>
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight hidden lg:block">
        Hi, I'm <span className="text-primary">Abhijit <br /> Upadhyay</span>
      </h1>
    </>
  );
};

export default HeroTitle;
