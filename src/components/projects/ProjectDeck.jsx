import { projects } from "@/data/me";
import ProjectCard from "./ProjectCard";
import ProjectAnimations from "./ProjectAnimations";

const rotations = [
  "rotate-[2deg]",
  "rotate-[5deg]",
  "rotate-[7deg]",
  "rotate-[9deg]",
  "rotate-[11deg]",
];

const ProjectDeck = () => {
  return (
    <div id='projects-deck' className="relative z-20 w-full -mt-5 lg:mt-3 2xl:py-20 overflow-visible min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] 2xl:min-h-[75vh]">
      <ProjectAnimations ids={projects.map((project) => project.id)} />
      <div className="hidden lg:block">
        <ProjectCard.placeholder />
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            id={project.id}
            className={`absolute-center ${
              i % 2 === 0 ? rotations[i % 7] : "-" + rotations[i % 7]
            }`}
          />
        ))}
      </div>
      <div className="lg:hidden my-3">
        <ProjectCard.placeholder />
        {projects.slice(-3).reverse().map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            id={`${project.id}-mob`}
            className={`absolute-center -translate-x-1/2`}
            style={{ transform: `translateY(${i*6}%)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDeck;
