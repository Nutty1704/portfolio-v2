import React from "react";
import Button from "../Button";
import AnimateFill from "./AnimateFill";

const AnimatedButton = ({ id, size, children, delay=0 }) => {
  return (
    <Button
      id={id}
      size={size}
      btnClass="!bg-background relative overflow-hidden border border-gray-300"
    >
      <AnimateFill btnId={id} delay={delay} />
      <div className="anim-bg bg-primary w-[200%] h-full absolute left-[100%] -translate-x-1/2 top-[100%] z-10 rounded-[50%]" />
      <div className="anim-content relative z-20 text-foreground transition-colors duration-300 delay-300">
        {children}
      </div>
    </Button>
  );
};

export default AnimatedButton;
