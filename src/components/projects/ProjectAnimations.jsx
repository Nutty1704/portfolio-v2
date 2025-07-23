"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

const getMovement = (i, cardWidth, start, gap, center) =>
  start - center + cardWidth / 2 + i * (cardWidth + gap);

const ProjectAnimations = ({ ids, pinContainerId = "projects" }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isSmall = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (isMobile) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${pinContainerId}`,
        start: "top+=50px top",
        end: "+=1200px",
        scrub: true,
        pin: true,
      },
    });

    const reversedIds = [...ids].reverse().map((id) => `#${id}`);
    const center = window.innerWidth / 2;
    const start = 50;
    const cardWidth = document
      .getElementById(ids[0])
      .getBoundingClientRect().width;
    const gap = 25;

    // Calculate how far the last card needs to move to be fully visible
    const viewportWidth = window.innerWidth;

    const spreadSize =
      2 * start + ids.length * cardWidth + (ids.length - 1) * gap; // when configuring for size < viewport width, ensure spread size doesn't include start/end padding
    const moveDistance = Math.max(0, spreadSize - viewportWidth);

    tl.to(reversedIds, {
      x: (i) => getMovement(i, cardWidth, start, gap, center),
      rotate: 0,
      ease: "power1.out",
      stagger: 0.1,
      duration: 2,
    });

    tl.to(reversedIds, {
      x: `-=${moveDistance}`, // Move till rightmost card is in view
      ease: "power1.out",
      duration: 1,
    });
  }, []);

  useGSAP(() => {
    if (!isMobile) return;

    const mobIds = ids
      .slice(-3)
      .reverse()
      .map((id) => `#${id}-mob`);

    const animationScrollDistance = mobIds.length * 500;

    // Pin the container starting when it reaches the top
    ScrollTrigger.create({
      trigger: `#${pinContainerId}`,
      start: "top top",
      end: `+=${animationScrollDistance * 0.9}px`,
      pin: true,
    });

    // Start animation when container reaches 20%
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${pinContainerId}`,
        start: `top ${isSmall ? 'top' : '10%'}`,
        end: `+=${animationScrollDistance}px`,
        scrub: true,
      },
    });

    mobIds.forEach((id, i) => {
      tl.from(id, {
        yPercent: 100,
        duration: 2,
        ease: "power2.out",
      }).from(
        id,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      );
    });
  }, []);

  return null;
};

export default ProjectAnimations;
