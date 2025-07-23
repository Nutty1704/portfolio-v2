"use client";

import { animationBreakpoint } from "@/app/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const contactSectionId = "contact";
const leftId = "contact-get-in-touch";
const rightId = "contact-card";

const ContactAnimations = () => {
  const isMobile = useMediaQuery({ maxWidth: animationBreakpoint });

  // get in touch animatons
  useGSAP(() => {
    const card = document.getElementById(rightId);

    const headerSplit = new SplitText(`#${leftId} h3`, {
      type: "words, chars",
    });

    const paragraphSplit = new SplitText(`#${leftId} .anim-lines`, {
      type: "lines",
    });

    const targetsScale = Array.from(
      document.querySelectorAll(`#${leftId} .anim-swipe-scale`)
    );
    const targetsOpacity = Array.from(
      document.querySelectorAll(`#${leftId} .anim-swipe-opacity`)
    );

    targetsScale.forEach((target) => {
      const parentWidth = target.parentElement.offsetWidth;
      gsap.set(target, {
        x: parentWidth * 0.9,
        scale: 0,
      });
    });

    targetsOpacity.forEach((target) => {
      gsap.set(target, {
        clipPath: "inset(0 0 0 100%)",
        opacity: 0,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${contactSectionId}`,
        start: "top center",
      },
    });

    tl.addLabel("leftHeaderAnimation")
      .from(headerSplit.chars, {
        opacity: 0,
        y: 20,
        x: -10,
        duration: 0.1,
        ease: "back.out",
        stagger: 0.04,
      })
      .addLabel("leftParagraphAnimation")
      .from(paragraphSplit.lines, {
        opacity: 0,
        y: 20,
        delay: 0.15,
        duration: 0.23,
        ease: "back.out",
        stagger: 0.08,
      })
      .addLabel("cardMoveInAnimation")
      .from(
        card,
        isMobile
          ? {
              // Mobile: simple fade with slight scale
              opacity: 0,
              scale: 0.95,
              duration: 0.65,
              ease: "power2.out",
            }
          : {
              // Desktop: slide up from bottom
              yPercent: 100,
              opacity: 0,
              duration: 1,
              ease: "circ.out",
            },
        isMobile ? "leftParagraphAnimation" : "-=0.1"
      );

    // swipe animations
    targetsScale.forEach((scTarget, i) => {
      const opTarget = targetsOpacity[i];

      // scale up the logo
      tl.to(
        scTarget,
        {
          scale: 1,
          rotate: -16,
          ease: "back.out",
          duration: 0.18,
        },
        i === 0 ? "<0.05" : "-=0.25"
      );

      // move logo left
      tl.to(
        scTarget,
        {
          x: 0,
          rotate: 0,
          duration: 0.93,
          ease: "power2.out",
        },
        "<0.13"
      );

      // adjust clip path to reveal from right
      tl.to(
        opTarget,
        {
          clipPath: "inset(0 0 0 0%)",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      );
    });
  }, []);

  return null;
};

export default ContactAnimations;
