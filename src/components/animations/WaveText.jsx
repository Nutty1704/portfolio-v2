"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const WaveText = ({ id }) => {
  useGSAP(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const split = new SplitText(element, {
      type: 'chars',
      charsClass: 'char',
      wordDelimiter: ' ', // This helps with spacing
    });

    // Filter out any empty or break elements
    const validChars = split.chars.filter(char => 
      char.textContent.trim() !== '' && 
      char.tagName !== 'BR'
    );

    const tl = gsap.timeline({ defaults: { ease: 'sine.inOut', yoyo: true, repeat: 1 } });

    validChars.forEach((char, i) => {
      tl.to(char, {
        y: '-=10px',
        scale: 1.15,
        duration: 0.1,
      }, '<0.05');
    })
  }, [id]);

  return null;
}

export default WaveText