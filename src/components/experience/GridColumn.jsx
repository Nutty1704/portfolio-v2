import React from "react";
import GridElement from "./GridElement";

const GridColumn = ({ title, columnInfo = [], color }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">{title}</h3>
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
