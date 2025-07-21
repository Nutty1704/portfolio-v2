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
    <div className="relative w-full py-20 overflow-visible min-h-[75vh] my-12">
      <div className="hidden lg:block">
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
        <ProjectAnimations ids={projects.map((project) => project.id)} />
      </div>
    </div>
  );
};

export default ProjectDeck;
