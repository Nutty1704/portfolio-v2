"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const NotFound = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    // Circle animation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // breathing effect
    gsap.to(circleRef.current, {
      scale: 1.1,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Text glitch effect function
    const glitchText = () => {
      const tl = gsap.timeline();

      // animate between -2 and 2 on x and y
      tl.to(textRef.current, {
        x: Math.random() * 4 - 2,
        y: Math.random() * 4 - 2,
        duration: 0.1,
        ease: "power2.inOut",
      })
        .to(textRef.current, {
          x: Math.random() * 4 - 2,
          y: Math.random() * 4 - 2,
          duration: 0.1,
          ease: "power2.inOut",
        })
        .to(textRef.current, {
          x: 0,
          y: 0,
          duration: 0.1,
          ease: "power2.inOut",
        });

      // Add color glitch
      tl.to(
        {},
        {
          duration: 0.3,
          onUpdate: function () {
            const progress = this.progress();
            if (progress > 0.2 && progress < 0.8) {
              textRef.current.style.textShadow = `
              2px 0 #ff0040,
              -2px 0 #00ff80,
              0 0 20px #155dfc
            `;
            } else {
              textRef.current.style.textShadow = "0 0 20px #155dfc";
            }
          },
        },
        0
      );
    };

    // Trigger glitch every 3-5 seconds
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        glitchText();
      }
    }, Math.random() * 2000 + 3000);

    // Initial entrance animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 0.7, y: 0, duration: 1, delay: 0.8 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center overflow-hidden font-mono text-white">
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated Circle Container */}
        <div className="relative w-72 h-72 mb-10">
          <svg
            ref={circleRef}
            className="w-full h-full filter drop-shadow-[0_0_20px_#155dfc]"
            viewBox="0 0 300 300"
          >
            {/* Outer rotating circle */}
            <circle
              cx="150"
              cy="150"
              r="140"
              fill="none"
              stroke="#155dfc"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20 10"
              className="animate-spin origin-center"
              style={{ animationDuration: "20s" }}
            />

            {/* Inner circle */}
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="rgba(21, 93, 252, 0.1)"
              stroke="#155dfc"
              strokeWidth="1"
            />

            {/* Additional decorative circles */}
            <circle
              cx="150"
              cy="150"
              r="100"
              fill="none"
              stroke="rgba(21, 93, 252, 0.3)"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
          </svg>

          {/* 404 Text in center */}
          <div
            ref={textRef}
            className="absolute-center text-6xl font-bold text-primary select-none z-10 text-shadow-primary"
            style={{
              textShadow: "0 0 20px",
              fontFamily: "Courier New, monospace",
            }}
          >
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8">
          <h1 ref={titleRef} className="text-2xl mb-3 opacity-0">
            Well, this is awkward... 😅
          </h1>
          <p ref={subtitleRef} className="text-base opacity-0">
            The page you wanted ghosted harder than your last Tinder match
          </p>
        </div>

        {/* Home Button */}
        <button
          ref={buttonRef}
          className="cursor-pointer bg-gradient-to-r from-primary to-primary-darker hover:from-primary-darker-darker hover:to-primary
                   px-8 py-3 rounded-full text-white font-medium transition-all duration-300 
                   hover:scale-105 hover:shadow-[0_0_20px_rgba(21,93,252,0.5)] opacity-0
                   relative overflow-hidden group"
          onClick={() => (window.location.href = "/")}
        >
          <span className="relative z-10">Go Back Home</span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         -translate-x-full group-hover:translate-x-full transition-transform duration-500"
          ></div>
        </button>
      </div>

      {/* Background particles effect */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotFound;
