import React, { useContext, useEffect } from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill } from "../models";
import TreeContext from "../context/TreeContext";

interface Props {
  data: Skill[];
  depth: number;
  parentNodeId?: string;
}

function SkillTreeSegment({ data, parentNodeId, depth }: Props) {
  const { updateTreeWidths } = useContext(TreeContext);

  useEffect(() => {
    updateTreeWidths(depth);
  }, []);

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
                <SkillTreeSegment
                  depth={depth + 1}
                  data={skill.children}
                  parentNodeId={skill.id}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default SkillTreeSegment;
