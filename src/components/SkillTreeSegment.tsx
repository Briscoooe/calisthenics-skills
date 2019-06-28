import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill } from "../models";

interface Props {
  data: Skill[];
  parentBottomPosition: number;
  parentNodeId?: string;
}

function SkillTreeSegment({ data, parentNodeId, parentBottomPosition }: Props) {
  return (
    <React.Fragment>
      {data.map(skill => {
        return (
          <div key={skill.id}>
            {parentNodeId && (
              <SkillEdge fromPosition={parentBottomPosition} nextNodeId={skill.id} />
            )}
            <SkillNode
              id={skill.id}
              icon={skill.icon}
              parentNodeId={parentNodeId}
              tooltipTitle={skill.tooltipTitle}
              tooltipDescription={skill.tooltipDescription}
              childData={skill.children}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default SkillTreeSegment;
