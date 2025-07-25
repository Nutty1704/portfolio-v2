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

const ProjectCard = ({ project, className, id, style }) => {
  return (
    <div id={id} className={`${className}`} style={style}>
      <Card className="w-[95vw] lg:w-[50vw] h-[55vh] lg:h-[70vh] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-gray-200 !py-0">
        {/* Full Image Background with Overlay Content */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Content Overlay */}
          <CardContent className="absolute inset-0 flex flex-col justify-end px-6 py-3 text-white">
            <div className="flex flex-col gap-4">
              {/* Title + Links */}
              <CardTitle className="flex items-start justify-between">
                <h3 className="text-xl font-semibold leading-snug line-clamp-2 text-white">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </CardTitle>
              
              {/* Description */}
              <CardDescription className="text-sm text-gray-200 leading-relaxed line-clamp-4 mb-2">
                <div className="hidden lg:block">{project.des}</div>
                <div className="lg:hidden">{project.mediumDes}</div>
              </CardDescription>
              
              {/* Tech Stack */}
              <div className="flex items-center gap-2 mt-2">
                {project.skills.map((skill) => {
                  const tech = techLogos[skill];
                  return (
                    <div key={skill} className="group relative" title={tech.name}>
                      <div className="w-8 h-8 p-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-white/20 hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100"
                        />
                      </div>
                      {/* Custom tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Year text */}
              <div className="font-inter text-gray-300 text-sm mt-2 text-right">
                {project.year}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

ProjectCard.placeholder = () => {
  return (
    <div aria-hidden inert className="w-[95vw] lg:w-[50vw] h-[55vh] lg:h-[70vh]" />
  )
}

export default ProjectCard;