import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill, ParentPosition } from "../models";

interface Props {
  data: Skill[];
  parentPosition: ParentPosition;
  parentNodeId?: string;
}

function SkillTreeSegment({ data, parentNodeId, parentPosition }: Props) {
  return (
    <React.Fragment>
      {data.map(skill => {
        return (
          <div key={skill.id}>
            {parentNodeId && (
              <SkillEdge
                topXPosition={parentPosition.bottom}
                topYPosition={parentPosition.center}
                nextNodeId={skill.id}
              />
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
