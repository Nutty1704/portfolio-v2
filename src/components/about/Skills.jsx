import React from "react";
import Badge from "../ui/Badge";

const Skills = ({ Icon, title, skills, containerClass, iconClass }) => {
  return (
    <div className={`${containerClass}`}>
      <h4 className="font-inter font-medium text-gray-900 mb-2 flex items-center gap-2.5">
        <Icon className={`h-4 w-4 text-primary ${iconClass}`} />
        { title }
      </h4>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
