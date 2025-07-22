"use client";

import { animationBreakpoint } from "@/app/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Magnetic = ({ id, xThreshold = 0.1, yThreshold = 0.1, scaleBoostPercent = 3 }) => {
  if ( xThreshold < 0 || xThreshold > 1 || yThreshold < 0 || yThreshold > 1 ) {
    throw Error('Threshold values must be between 0 and 1')
  }

  const isMobile = useMediaQuery({ maxWidth: animationBreakpoint });

  useGSAP(() => {
    if (isMobile) return;

    const element = document.getElementById(id);
    if (!element) {
      console.warn("Element not found:", id);
      return;
    }

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: ( 1 + 0.01 * scaleBoostPercent ),
        duration: 0.75,
        ease: 'back.out'
      });
    }

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * xThreshold;
      const deltaY = (e.clientY - centerY) * yThreshold;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);

  return null;
};

export default Magnetic;
