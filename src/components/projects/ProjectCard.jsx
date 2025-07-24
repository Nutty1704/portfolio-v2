import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { techLogos } from "@/data/me";

const ProjectCard = ({ project, className, id }) => {
  return (
    <div id={id} className={`${className}`}>
      <Card className="w-[500px] h-[750px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-200 !pt-0">
        {/* Image Section */}
        <div className="relative h-[60%] overflow-hidden">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
        </div>
        {/* Content Section */}
        <CardContent className="flex flex-col justify-between flex-1 p-6 gap-4 relative">
          <div className="flex flex-col gap-4">
            {/* Title + Links */}
            <CardTitle className="flex items-start justify-between">
              <h3 className="text-lg font-semibold leading-snug line-clamp-2">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </CardTitle>
            {/* Description p */}
            <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-5">
              {project.des}
            </CardDescription>
          </div>
          {/* Tech Stack */}
          {/* <div className="flex flex-wrap gap-2 mt-auto">
            {["Next.js", "TypeScript", "Prisma", "Socket.io"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
              >
                {tech}
              </Badge>
            ))}
          </div> */}

          {/* elegant dark */}
          {/* <div className="flex flex-wrap gap-2 mt-4">
            {project.skills.map((skill) => {
              const tech = techLogos[skill];
              return (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <img src={tech.logo} alt={tech.name} className="w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div> */}

          {/* elegant light */}
          <div className="flex flex-wrap gap-1.5 mt-3 hidden">
            {project.skills.map((skill) => {
              const tech = techLogos[skill];
              return (
                <div
                  key={skill}
                  className="group flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100"
                  />
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* with tooltip minimal */}
          <div className="flex items-center gap-2 mt-4 ">
            {project.skills.map((skill) => {
              const tech = techLogos[skill];
              return (
                <div
                  key={skill}
                  className="group relative"
                  title={tech.name} // Simple tooltip
                >
                  <div className="w-8 h-8 p-1.5 bg-white/90 backdrop-blur border border-gray-200/60 rounded-lg hover:bg-white hover:shadow-md hover:scale-110 transition-all duration-200 cursor-pointer">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  {/* Optional custom tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* year text */}
          <div className="font-inter text-gray-400 text-sm absolute -bottom-4 right-4 z-10">
            {project.year}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
