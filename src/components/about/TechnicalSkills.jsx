import {
  backendDataSkills,
  cloudPlatformSkills,
  engineeringSkills,
  languageSkills,
} from "@/data/me";
import { Code2, Cloud, Database, Wrench } from "lucide-react";
import React from "react";
import Skills from "./Skills";

const TechnicalSkills = () => {
  return (
    <div id='my-skills-container' className="space-y-8">
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">Technical Skills</h3>

      <div className="space-y-5">
        <Skills Icon={Code2} title='Languages' skills={languageSkills} iconClass={'text-blue-600'} />
        <Skills Icon={Cloud} title='Cloud & Platform' skills={cloudPlatformSkills} iconClass={'!text-green-600'} />
        <Skills Icon={Database} title='Backend & Data' skills={backendDataSkills} iconClass={'text-purple-600'} />
        <Skills Icon={Wrench} title='Engineering' skills={engineeringSkills} iconClass={'text-orange-600'} />
      </div>
    </div>
  );
};

export default TechnicalSkills;
