"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export const animConfig = {
  trigger: '#hero',
  start: 'bottom top',
  end: 'bottom top-50px',
}

const NavbarAnimations = () => {
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
        x: '-=90px',
        duration: 0.5,
        ease: 'power2.inOut'
      },
      '-=0.3'
    )
  }, []);

  return <></>;
};

export default NavbarAnimations;
