import { backendSkills, frontendSkills, otherSkills } from "@/data/me";
import { Code, Database, Globe } from "lucide-react";
import React from "react";
import Skills from "./Skills";

const TechnicalSkills = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Technical Skills</h3>

      <div className="space-y-5">
        <Skills Icon={Globe} title='Frontend' skills={frontendSkills} iconClass={'text-blue-600'} />
        <Skills Icon={Database} title='Backend' skills={backendSkills} iconClass={'text-green-600'} />
        <Skills Icon={Code} title='Tools & Others' skills={otherSkills} iconClass={'text-purple-600'} />
      </div>
    </div>
  );
};

export default TechnicalSkills;
