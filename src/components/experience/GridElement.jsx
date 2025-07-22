import React from "react";

const GridElement = ({ title, subtitle, dateText, description, color }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-0 items-center pb-1.5">
        <div className={`bg-${color} h-4 w-4 rounded-full`} />
        <div className={`h-full w-[2px] bg-${color} rounded-full opacity-30`} />
      </div>
      <div className="space-y-2 flex-1">
        <h4 className="text-lg font-semibold text-gray-900">
          {title}
        </h4>
        <p className={`text-${color} font-medium`}>{subtitle}</p>
        <p className="text-sm text-gray-500">{dateText}</p>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GridElement;
