import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <section id="hero" className='min-h-screen w-screen grid lg:grid-cols-2 px-6 pb-8 pt-[17%] sm:py-8 gap-6 sm:gap-0 lg:p-10 2xl:p-16 2xl:max-w-[96rem] mx-auto'>
      <HeroTitle containerClass='flex items-end row-span-1 justify-center lg:justify-start lg:pl-[15%] lg:row-span-2' />
      <HeroImg containerClass='h-full w-full row-span-1 lg:row-span-4 flex items-center justify-center lg:pb-[10%]' />
      <HeroText containerClass='flex items-start row-span-1 justify-center lg:justify-start lg:pl-[15%] pt-4 lg:row-span-2' />
    </section>
  );
};

export default Hero;
