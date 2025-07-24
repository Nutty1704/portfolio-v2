import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { techLogos } from "@/data/me";

export default function MobileProjectCard({ project, className = "", style, id }) {
  return (
    <div id={id} className={`${className} w-full`} style={style}>
      <Card className="w-full md:w-[75vw] mx-auto bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 !p-0">
        {/* Horizontal Layout Container */}
        <div className="flex flex-col h-[55vh]">
          {/* Image Section - Left Side */}
          <div className="relative h-3/5 flex-shrink-0 overflow-hidden">
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300" />
          </div>

          {/* Content Section - Right Side */}
          <CardContent className="flex-1 p-3 sm:p-4 flex flex-col justify-between relative">
            {/* Header with Title and Links */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="flex-1">
                <h3 className="text-base font-semibold leading-tight line-clamp-2 text-gray-900">
                  {project.title}
                </h3>
              </CardTitle>
              <div className="flex gap-2 flex-shrink-0">
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-2 flex-1">
              {project.des}
            </CardDescription>

            {/* Bottom Row: Tech Stack + Year */}
            <div className="flex items-center justify-between mt-auto">
              {/* Tech Stack Icons */}
              <div className="flex items-center gap-1.5">
                {project.skills?.map((skill) => {
                  const tech = techLogos[skill];
                  return (
                    <div
                      key={skill}
                      className="group relative"
                      title={tech.name}
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 p-1 bg-white/90 backdrop-blur border border-gray-200/60 rounded-md hover:bg-white hover:shadow-sm hover:scale-105 transition-all duration-200">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Year */}
              <div className="text-sm text-gray-400 font-medium">
                {project.year}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
