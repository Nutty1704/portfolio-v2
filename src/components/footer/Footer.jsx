import React from "react";
import SocialLinks from "../SocialLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id='footer' className="bg-primary text-white sticky bottom-0 w-full -z-10 overflow-x-hidden h-[450px]">
      <div className="w-full h-full pt-16 pb-8 px-8 flex flex-col items-center justify-end gap-6 relative">
        <div className="bg-black/30 absolute inset-0" />
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md shrink-0">
            <Image
              src="/profile.jpg"
              alt="Abhijit Upadhyay - Fullstack Developer"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-mono font-bold leading-tight">
              You made it to the footer — let&apos;s connect!
            </div>
          </div>
        </div>
        <div className="z-10">
          <div className="text-center space-y-3">
            <p className="">
              © 2025 Abhijit Upadhyay. Built with Next.js, Tailwind CSS, and
              GSAP.
            </p>
            <div className="flex justify-center">
              <SocialLinks linkClass={"!text-gray-300 hover:!text-gray-50"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
