import { Code, Database } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { RiAngularjsLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import Float from "../animations/Float";

const floaters = [
  {
    className: "bg-blue-100 top-[15%] right-[13%]",
    Icon: Code,
    iconClass: "h-6 w-6 text-blue-600",
  },
  {
    className: "bottom-[17%] left-[14%] bg-green-100",
    Icon: Database,
    iconClass: "h-6 w-6 text-green-600",
  },
  {
    className: "bg-blue-100 top-[8%] left-[15%] w-15 h-15",
    Icon: FaReact,
    iconClass: "h-8 w-8 text-blue-600",
  },
  {
    className: "bg-green-100 bottom-[25%] right-[-5%] w-15 h-15",
    Icon: FaNodeJs,
    iconClass: "h-8 w-8 text-green-600",
  },
  {
    className: "bg-gray-800 bottom-[4%] right-[17%] w-12 h-12",
    Icon: RiNextjsLine,
    iconClass: "h-7 w-7 text-white",
  },
  {
    className: "bg-red-100 top-[39%] left-[-7%] !w-9 !h-9",
    Icon: RiAngularjsLine,
    iconClass: "h-6 w-6 text-red-400",
  },
  {
    className: "bg-yellow-100 top-[-8%] left-[57%] w-13 h-13",
    Icon: FaCss3Alt,
    iconClass: "h-7 w-7 text-yellow-600",
  },
  {
    className: "bg-yellow-100 bottom-[-5%] right-[57%] w-9 h-9",
    Icon: AiOutlinePython,
    iconClass: "h-6 w-6 text-yellow-600",
  },
];

const HeroImg = ({ containerClass }) => {
  return (
    <div data-scroll data-scroll-speed="0.08" className={`${containerClass}`}>
      <div className="flex justify-center items-center">
        <div className="relative lg:p-15">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Abhijit Upadhyay - Fullstack Developer"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating elements for animation */}
          {floaters.map(({ className, Icon, iconClass }, i) => (
            <Floater id={`floater-${i}`} key={i} className={className}>
              <Float elementId={`floater-${i}`} parentId={'hero'} moveSpeed={6} />
              <Icon className={iconClass} />
            </Floater>
          ))}
        </div>
      </div>
    </div>
  );
};

const Floater = ({ children, id, className }) => (
  <div
    id={id}
    className={`absolute w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ${className}`}
  >
    {children}
  </div>
);

export default HeroImg;
