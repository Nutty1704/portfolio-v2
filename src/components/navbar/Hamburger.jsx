"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "./Navbar";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animConfig } from "./NavbarAnimations";
import NavItem from "./NavItem";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const btnTl = useRef(null); // timeline ref

  // create timeline once upon mount and trigger it using buttons
  useGSAP(() => {
    btnTl.current = gsap.timeline({
      paused: true,
      onStart: () => setShowMenu(true), // render menu items
      onReverseComplete: () => setShowMenu(false), // remove menu items so resizing is correct
    });

    btnTl.current
      .to("#hamburger", {
        // nav element -> change rounding
        borderRadius: "5%",
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(
        "#hamburger", // nav element -> expand
        {
          height: "+=200px",
          width: "+=150px",
          duration: 0.7,
          ease: "power2.inOut",
        },
        0
      );
  }, []);

  // menu items animation
  useGSAP(() => {
    if (showMenu && isOpen) {
      gsap.from("#hamburger-list li", {
        // list items -> fade in
        x: "50px",
        opacity: 0,
        delay: 0.5,
        duration: 0.4,
        stagger: 0.15,
        ease: "power1.inOut",
        label: "menu-items-animate-in",
        overwrite: true,
      });
    } else if (showMenu && !isOpen) {
      gsap.to("#hamburger-list li", {
        // list items -> fade out
        x: "50px",
        opacity: 0,
        duration: 0.25,
        stagger: -0.1,
        ease: "power1.inOut",
        label: "menu-items-animate-out",
        overwrite: true,
      });
    }
  }, [showMenu, isOpen]);

  // trigger animation
  useEffect(() => {
    if (!btnTl.current) return;

    if (isOpen) {
      btnTl.current.play();
    } else {
      const tm = setTimeout(() => {
        btnTl.current.reverse();
      }, 400);

      return () => clearTimeout(tm);
    }
  }, [isOpen]);

  // close the menu if the navbar comes into view (sync with navigation animations)
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: animConfig.trigger,
      start: animConfig.end,
      onEnter: () => setIsOpen(false),
      onEnterBack: () => setIsOpen(false),
    });
  }, []);

  return (
    <>
      {/* menu button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hamburger-btn fixed top-5 z-[60] text-primary-foreground right-[-60px] p-4 rounded-full"
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      <nav
        id="hamburger"
        aria-hidden
        className="hamburger-btn fixed top-5 right-[-60px] min-w-15 min-h-15 bg-primary text-primary-foreground p-4 z-50 flex items-center overflow-hidden"
      >
        {showMenu && (
          <ul id="hamburger-list" className="space-y-3 pl-2">
            {links.map(({ text, href }) => (
              <NavItem key={href} text={text} href={href} className='text-lg font-semibold tracking-wider' />
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Hamburger;
