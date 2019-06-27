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
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {data.map(skill => {
        return (
          <div className="node" key={skill.id}>
              <div>
              {parentNodeId && <SkillEdge nextNodeId={skill.id} />}
              <SkillNode
                id={skill.id}
                icon={skill.icon}
                parentNodeId={parentNodeId}
                tooltipTitle={skill.tooltipTitle}
                tooltipDescription={skill.tooltipDescription}
              />
            </div>
            {skill.children.length > 0 && (
              <div className="children">
                <SkillTreeSegment
                  depth={depth + 1}
                  data={skill.children}
                  parentNodeId={skill.id}
                />
              </div>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default SkillTreeSegment;
