import { links } from "@/data/me";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const LinkBadge = ({ label, Icon, link, linkText }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel='noopener noreferrer'
      className="flex items-center gap-4 w-fit"
    >
      <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{ label }</p>
        <p className="text-gray-600">{ linkText || link }</p>
      </div>
    </Link>
  );
};

const GetInTouch = () => {
  return (
    <div id='contact-get-in-touch' className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Get In Touch
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8 md:px-16 lg:px-0">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello, I'd love to hear from you. Let's create something
          amazing together!
        </p>
      </div>

      <div className="space-y-4">
        <LinkBadge label='Email' Icon={Mail} link={links.mail} linkText={links.mail.split(':')[1]} />
        <LinkBadge label='LinkedIn' Icon={Linkedin} link={links.linkedin} />
        <LinkBadge label='GitHub' Icon={Github} link={links.github} />
      </div>
    </div>
  );
};

export default GetInTouch;
