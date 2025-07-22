import { links } from "@/data/me";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const LinkElement = ({ Icon, href, className }) => (
  <Link
    href={href}
    target='_blank'
    rel="noreferrer noopener"
    className={`text-gray-400 hover:text-gray-600 transition-colors ${className}`}
  >
    <Icon className="h-6 w-6" />
  </Link>
);

const SocialLinks = ({ linkClass }) => {
  return (
    <div className="flex gap-6">
      <LinkElement className={linkClass} Icon={Github} href={links.github} />
      <LinkElement className={linkClass} Icon={Linkedin} href={links.linkedin} />
      <LinkElement className={linkClass} Icon={Mail} href={links.mail} />
    </div>
  );
};

export default SocialLinks;
