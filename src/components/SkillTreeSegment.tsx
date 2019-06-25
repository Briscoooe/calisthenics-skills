import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill } from "../models";

interface Props {
  data: Skill[];
  parentNodeId?: string;
}

function SkillTreeSegment({ data, parentNodeId }: Props) {
  return (
    <React.Fragment>
      {data.map(skill => {
        return (
          <React.Fragment key={skill.id}>
            <SkillNode
              id={skill.id}
              icon={skill.icon}
              parentNodeId={parentNodeId}
              tooltipTitle={skill.tooltipTitle}
              tooltipDescription={skill.tooltipDescription}
            />
            {skill.children.length > 0 && (
              <React.Fragment>
                <SkillEdge nextNodeIds={skill.children.map(({ id }) => id)} />
                <SkillTreeSegment data={skill.children} parentNodeId={skill.id} />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default SkillTreeSegment;