"use client"

import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import LocomotiveScroll from "locomotive-scroll";
import { useLayoutEffect } from "react"


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MorphSVGPlugin);

const Initialize = () => {

  useLayoutEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <></>
  )
}

export default Initialize