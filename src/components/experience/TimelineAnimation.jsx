"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const TimelineAnimation = ({ columnId }) => {
  // Get all required elements
  const getElements = (columnId) => {
    const selector = (className) =>
      Array.from(document.querySelectorAll(`#${columnId} ${className}`));

    return {
      dots: selector(".anim-circle"),
      lines: selector(".anim-line"),
      textContainers: selector(".anim-text"),
    };
  };

  const animateSegment = (tl, dot, line, container, i) => {
    const labelName = `dot${i}Spawnned`;
    // Animate dot
    tl.from(
      dot,
      {
        scale: 0,
        duration: 0.4,
        ease: "back.out",
      },
      `+=${i !== 0 ? 0.15 : 0.08}`
    ).addLabel(labelName);

    // Animate line
    tl.from(line, {
      height: "0%",
      duration: 0.63,
      ease: "linear",
    });

    // Animate text content for this point
    const heading = container.querySelector("h4");
    const paragraphs = Array.from(container.querySelectorAll("p"));

    const animConfig = {
      y: 25,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    };

    // animate heading
    tl.from(heading, animConfig, `${labelName}-=0.25`);

    // Animate title and dates
    tl.from(paragraphs.slice(0, -1), {
      ...animConfig,
      stagger: 0.1,
    }, '>');

    // Animate description
    const lastParagraph = paragraphs[paragraphs.length - 1];
    const splitText = new SplitText(lastParagraph, { type: "lines" });

    tl.from(splitText.lines, {
      ...animConfig,
      stagger: 0.1,
    }, '>');
  };

  useGSAP(() => {
    if (!columnId) return;

    const { dots, lines, textContainers } = getElements(columnId);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${columnId}`,
        start: "top 90%",
      },
    });

    // Animate title
    tl.from(`#${columnId} .anim-title`, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }).addLabel("titleCompleted");

    // Animate dots, lines and text in sequence
    dots.forEach((dot, i) => {
      const line = lines[i];
      const container = textContainers[i];

      if (!line || !container) return;

      animateSegment(tl, dot, line, container, i);
    });
  }, [columnId]);

  return null;
};

export default TimelineAnimation;
