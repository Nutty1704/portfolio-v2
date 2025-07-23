"use client";

import React from "react";
import AnimatedButton from "../ui/animated-button/AnimatedButton";
import { Mail } from "lucide-react";
import gsap from "gsap";

const CTA = () => {
  const handleClick = () => {
    gsap.to(window, {
      duration: 1.3,
      scrollTo: '#contact',
      ease: "power2.inOut",
    });
  };

  return (
    <AnimatedButton id={"hero-gitouch-btn"} size="lg" delay={0.65}>
      <div onClick={handleClick} className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <span>Get In Touch</span>
      </div>
    </AnimatedButton>
  );
};

export default CTA;
