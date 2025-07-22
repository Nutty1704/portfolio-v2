"use client";

import { animationBreakpoint } from "@/app/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";


export const animConfig = {
  trigger: '#hero',
  start: 'bottom 4%',
  end: 'bottom 4%-50px',
}

const NavbarAnimations = () => {
  const isMobile = useMediaQuery({ maxWidth: animationBreakpoint });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        ...animConfig,
        toggleActions: "play none reverse none",
      },
    });

    tl.to(
      "#navbar",
      {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      },
      []
    );

    tl.to(
      '.hamburger-btn', {
        x: isMobile ? '-=75px' : '-=90px',
        duration: 0.5,
        ease: 'power2.inOut'
      },
      '-=0.3'
    )
  }, []);

  return <></>;
};

export default NavbarAnimations;
