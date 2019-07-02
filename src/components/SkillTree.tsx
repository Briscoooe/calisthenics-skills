import React from "react";
import { Skill } from "../models";
import SkillTreeSegment from "./SkillTreeSegment";
import "./SkillTree.css";

interface Props {
  data: Skill[];
  title: string;
}

const defaultParentPosition = {
  bottom: 0,
  center: 0
};

function SkillTree({ data, title }: Props) {
  return (
    <div className="SkillTree__container">
      <h2 className="SkillTree__title">{title}</h2>
      <div className="SkillTree">
        {data.map(skill => {
          return (
            <SkillTreeSegment
              key={skill.id}
              parentPosition={defaultParentPosition}
              skill={skill}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkillTree;
