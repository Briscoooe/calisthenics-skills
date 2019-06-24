import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill } from "../models";

interface Props {
  data: Skill[];
}

function SkillTree(props: Props) {
  return (
    <React.Fragment>
      {props.data.map(skill => {
        if (skill.previousNodeIds.length === 0) {
          return (
            <SkillNode
              key={skill.id}
              id={skill.id}
              icon={skill.icon}
              previousNodeIds={[]}
              tooltipTitle={skill.tooltipTitle}
              tooltipDescription={skill.tooltipDescription}
            />
          );
        } else {
          return (
            <React.Fragment key={skill.id}>
              <SkillEdge nextNodeIds={[skill.id]} />
              <SkillNode
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                previousNodeIds={skill.previousNodeIds}
                tooltipTitle={skill.tooltipTitle}
                tooltipDescription={skill.tooltipDescription}
              />
            </React.Fragment>
          );
        }
      })}
    </React.Fragment>
  );
}

export default SkillTree;
