import Button from "../ui/Button";
import { Download } from "lucide-react";
import SocialLinks from "../SocialLinks";
import Link from "next/link";
import CTA from "./CTA";

const HeroText = ({ containerClass }) => {
  return (
    <div data-scroll data-scroll-speed="-0.03" className={`${containerClass}`}>
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
          <CTA />
          {/* download resume btn */}
          <Button id={"hero-dlres-btn"} size="lg" variant="outline">
            <Link
              href="resume.pdf"
              download="AbhijitUpadhyay_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </Link>
          </Button>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroText;
