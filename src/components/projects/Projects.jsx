import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { Github } from "lucide-react";
import Link from "next/link";
import { links } from "@/data/me";
import ProjectDeck from "./ProjectDeck";

const Projects = () => {
  return (
    <section id='projects' className="w-full min-h-[105vh] py-20 lg:py-24 relative">
      <SectionHeader
        title={"Featured Projects"}
        subtitle={"Here are some projects I've worked on recently"}
      />

      {/* project cards */}
      <ProjectDeck />

      {/* link to github */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <Button
          variant="outline"
          size="lg"
          btnClass="!border-gray-300 !hover:border-gray-300 hover:bg-gray-100"
        >
          <Link href={links.github} rel="noreferrer noopener" target="_blank" className="flex items-center gap-3.5">
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
