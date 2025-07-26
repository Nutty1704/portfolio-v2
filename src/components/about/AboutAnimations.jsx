"use client";

import { animationBreakpoint } from "@/app/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

const journeyId = "my-journey-container";
const skillsId = "my-skills-container";
const skillsContainerClass = "anim-skills";

const AboutAnimations = () => {
  const isMobile = useMediaQuery({ maxWidth: animationBreakpoint });

  const animateHeader = (tl, elements, sequence) => {
    tl.from(
      elements,
      {
        opacity: 0,
        y: 20,
        x: -10,
        duration: 0.1,
        ease: "back.out",
        stagger: 0.04,
      },
      sequence
    );
  };

  const animateJourney = (tl) => {
    const headerSplit = new SplitText(`#${journeyId} h3`, { type: "chars" });
    const paragraphSplit = new SplitText(`#${journeyId} p`, {
      type: "lines",
    });

    tl.addLabel("journeyHeadingAnimation");

    animateHeader(tl, headerSplit.chars);

    tl.addLabel("leftParagraphAnimation").from(paragraphSplit.lines, {
      opacity: 0,
      y: 20,
      delay: 0.15,
      duration: 0.23,
      ease: "back.out",
      stagger: 0.08,
    });
  };

  const animateSkills = (tl) => {
    const headerSplit = new SplitText(`#${skillsId} h3`, { type: "chars" });

    animateHeader(tl, headerSplit.chars, "journeyHeadingAnimation");

    const skillContainers = document.querySelectorAll(
      `.${skillsContainerClass}`
    );

    skillContainers.forEach((container, i) => {
      const heading = container.querySelector("h4");
      const skills = container.querySelectorAll("div");

      // All headings start at the same time as left paragraphs
      tl.from(
        heading,
        {
          y: -20,
          opacity: 0,
          duration: 0.23,
          ease: "back.out",
        },
        "leftParagraphAnimation"
      );

      // Skills animate right after their heading, but use relative timing
      tl.from(
        skills,
        {
          opacity: 0,
          y: -20,
          stagger: 0.08,
          duration: 0.1,
          ease: "back.out",
        },
        `leftParagraphAnimation+=${0.12 + i * 0.05}`
      );
    });
  };

  useGSAP(() => {
    if (isMobile) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 40%",
      },
    });

    animateJourney(tl);

    animateSkills(tl);
  });

  return null;
};

export default AboutAnimations;
