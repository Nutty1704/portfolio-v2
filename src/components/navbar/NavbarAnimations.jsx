"use client";

import { animationBreakpoint } from "@/app/config";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";


export const animConfig = {
  trigger: '#hero',
  start: 'bottom 4%',
  end: 'bottom 4%-50px',
}

const navBtnsContainerId = 'nav-bar-btns-container';

const NavbarAnimations = () => {
  const isMobile = useMediaQuery({ maxWidth: animationBreakpoint });

  // handles transition between navbar and hamburger
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        ...animConfig,
        toggleActions: "play none reverse none",
      },
    });

    tl.to(
      "#navbar",
      {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      },
      []
    );

    tl.to(
      '.hamburger-btn', {
        x: isMobile ? '-=75px' : '-=90px',
        duration: 0.5,
        ease: 'power2.inOut'
      },
      '-=0.3'
    )
  }, []);

  // handles nav bar buttons overlay/hover animation
  useGSAP(() => {
    const navButtons = Array.from(document.querySelectorAll(`#${navBtnsContainerId} .anim-nav-buttons`));
    const overlay = document.querySelector(".anim-nav-overlay");
    const container = document.getElementById(navBtnsContainerId);

    // Start positioned off-screen to the left
    gsap.set(overlay, {
      "--l": "100%",
      "--r": "-5%",
    });

    const handleMouseEnter = (e) => {
      const overlayWidth = overlay.getBoundingClientRect().width;
      const overlayLeft = overlay.getBoundingClientRect().left;
      const rect = e.target.getBoundingClientRect();

      const leftPercent = ((rect.left - overlayLeft) * 100) / overlayWidth;
      const widthPercent = (rect.width * 100) / overlayWidth;

      console.log();

      gsap.to(overlay, {
        "--l": `${leftPercent}%`,
        "--r": `${100 - (leftPercent + widthPercent)}%`,
        duration: 0.3,
        delay: 0.15,
        ease: "back.out",
      });
    };

    const handleContainerMouseLeave = (e) => {
      gsap.to(overlay, {
        "--l": '100%',
        '--r': '-5%',
        duration: 0.3,
        delay: 0.2,
        ease: 'power3.in'
      });
    }

    navButtons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
    });

    container.addEventListener('mouseleave', handleContainerMouseLeave);

    return () => {
      navButtons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
      });
      container.removeEventListener('mouseleave', handleContainerMouseLeave);
    };
  }, []);

  return <></>;
};

export default NavbarAnimations;
