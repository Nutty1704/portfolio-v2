import React from "react";
import GridElement from "./GridElement";
import TimelineAnimation from "./TimelineAnimation";

const GridColumn = ({ id, title, columnInfo = [], color }) => {
  return (
    <div id={id}>
      <TimelineAnimation columnId={id} />
      <h3 className="anim-title text-2xl font-semibold text-gray-900 mb-8">{title}</h3>
      <div className="space-y-8">
        {columnInfo.map((col, i) => (
          <GridElement
            key={i}
            title={col.title}
            subtitle={col.subtitle}
            description={col.description}
            dateText={col.dateText}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default GridColumn;
