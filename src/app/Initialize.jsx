"use client";

import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import LocomotiveScroll from "locomotive-scroll";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MorphSVGPlugin);

const Initialize = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useLayoutEffect(() => {
    // Only initialize Locomotive Scroll on desktop
    if (!isMobile) {
      const scroll = new LocomotiveScroll({
        smooth: true,
      });
    }
  }, []);

  return <></>;
};

export default Initialize;
