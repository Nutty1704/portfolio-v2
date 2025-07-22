"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const getAnimProperties = (xOffset, yOffset, moveSpeed) => {
  const distance = Math.sqrt(
    Math.pow(Math.abs(xOffset), 2) + Math.pow(Math.abs(yOffset), 2)
  );
  const duration = Math.ceil(distance / moveSpeed);

  const x = xOffset < 0 ? `-=${xOffset * -1}px` : `+=${xOffset}px`;
  const y = yOffset < 0 ? `-=${yOffset * -1}px` : `+=${yOffset}px`;

  return { x, y, duration };
};

const Float = ({ 
  elementId, 
  parentId, 
  maxStepX = 30, 
  maxStepY = 27, 
  moveSpeed = 5,
  disabled = false,
  ease = 'sine.inOut' 
}) => {
  const timelineRef = useRef(null);

  // get random offset based on step size
  const getRandomPoint = () => {
    const targetX = gsap.utils.random(-maxStepX, maxStepX);
    const targetY = gsap.utils.random(-maxStepY, maxStepY);

    return { ...getAnimProperties(targetX, targetY, moveSpeed), targetX, targetY };
  };

  // create the animation timeline
  const createAnimation = (element) => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // loop animation infinitely
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
          ease,
        });
        xOffset += targetX;
        yOffset += targetY;
      });

    tl.to(element, {
      ...getAnimProperties(xOffset * -1, yOffset * -1, moveSpeed),
      ease,
    });

    timelineRef.current = tl;
    return tl;
  };

  // animate float with optimization
  useGSAP(() => {
    if (!elementId || !parentId || disabled) return;

    const element = document.getElementById(elementId);
    const parent = document.getElementById(parentId);
    
    if (!element) {
      console.warn(`Float: Element with id "${elementId}" not found`);
      return;
    }
    
    if (!parent) {
      console.warn(`Float: Parent with id "${parentId}" not found`);
      return;
    }

    // Create the animation
    const timeline = createAnimation(element);

    // pause animations when not in view to save processing power
    ScrollTrigger.create({
      trigger: parent,
      start: "top bottom",
      end: "bottom top",        
      onEnter: () => timeline?.play(),
      onLeave: () => timeline?.pause(),
      onEnterBack: () => timeline?.play(),
      onLeaveBack: () => timeline?.pause(),
    });
  }, [elementId, parentId]);

  return null;
};

export default Float;