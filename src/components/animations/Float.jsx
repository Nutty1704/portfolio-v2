"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const getAnimProperties = (xOffset, yOffset, moveSpeed) => {
  const distance = Math.sqrt(
    Math.pow(Math.abs(xOffset), 2) + Math.pow(Math.abs(yOffset), 2)
  );
  const duration = Math.ceil(distance / moveSpeed);

  const x = xOffset < 0 ? `-=${xOffset * -1}px` : `+=${xOffset}px`;
  const y = yOffset < 0 ? `-=${yOffset * -1}px` : `+=${yOffset}px`;

  return { x, y, duration };
};

const Float = ({ elementId, maxStepX = 30, maxStepY = 27, moveSpeed = 5 }) => {
  // get random offset based on step size
  const getRandomPoint = () => {
    const targetX = gsap.utils.random(-maxStepX, maxStepX);
    const targetY = gsap.utils.random(-maxStepY, maxStepY);

    return { ...getAnimProperties(targetX, targetY, moveSpeed), targetX, targetY };
  };

  // animate float
  useGSAP(() => {
    if (!elementId) return;

    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Float: Element with id "${elementId}" not found`);
      return;
    }

    // loop animation infintely
    const tl = gsap.timeline({ repeat: -1 });

    // store total offset so final point can be calculated
    let xOffset = 0;
    let yOffset = 0;

    // add 3 random points
    Array.from({ length: 3 })
      .fill(null)
      .forEach((_) => {
        const { targetX, targetY, ...animProperties } = getRandomPoint();

        tl.to(element, {
          ...animProperties,
          ease: "sine.inOut",
        });
        xOffset += targetX;
        yOffset += targetY;
      });

    tl.to(element, {
      ...getAnimProperties(xOffset * -1, yOffset * -1, moveSpeed), // multiply by -1 so the offset can be compensated for in final point
      ease: "sine.inOut",
    });
  }, [elementId]);

  return null;
};

export default Float;
