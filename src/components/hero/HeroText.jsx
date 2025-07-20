import React from "react";
import Button from "../ui/Button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { links } from "@/data/me";
import SocialLinks from "../SocialLinks";

const HeroText = ({ containerClass }) => {
  return (
    <div className={`${containerClass}`}>
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
            Fullstack Developer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Recent Computer Science graduate passionate about creating
            innovative web applications. I specialize in React, Node.js, and
            modern web technologies to build scalable solutions.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button size="lg" btnClass={"flex items-center gap-2"}>
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            btnClass={"flex items-center gap-2"}
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </Button>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroText;
