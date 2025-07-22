"use client"

import { useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";

// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);

const MorphIcon = ({ isOpen }) => {
  const hamburgerPaths = {
    line1: "M3,6 L21,6",
    line2: "M3,12 L21,12", 
    line3: "M3,18 L21,18"
  };

  const xPaths = {
    line1: "M6,6 L18,18",
    line2: "M12,12 L12,12", // Middle line disappears
    line3: "M18,6 L6,18",
  };

  const svgRef = useRef(null);

  useGSAP(() => {
    const paths = svgRef.current.querySelectorAll('path');
    const [line1, line2, line3] = paths;

    if (isOpen) {
      // Morph to X
      gsap.to([line1, line2, line3], {
        duration: 0.4,
        ease: "power2.inOut",
        morphSVG: function(index) {
          const morphPaths = [xPaths.line1, xPaths.line2, xPaths.line3];
          return morphPaths[index];
        }
      });
      
      gsap.to(line2, {
        duration: 0.2,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.1
      });
    } else {
      // Morph back to hamburger
      gsap.to([line1, line2, line3], {
        duration: 0.4,
        ease: "power2.inOut",
        morphSVG: function(index) {
          const morphPaths = [hamburgerPaths.line1, hamburgerPaths.line2, hamburgerPaths.line3];
          return morphPaths[index];
        }
      });
      
      gsap.to(line2, {
        duration: 0.2,
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1
      });
    }
  }, [isOpen]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3,6 L21,6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M3,12 L21,12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M3,18 L21,18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default MorphIcon;