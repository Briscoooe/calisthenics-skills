import React from "react";
import { Skill } from "../models";
import SkillTreeSegment from "./SkillTreeSegment";
import "./SkillTree.css";

interface Props {
  data: Skill[];
  title: string;
}

function SkillTree({ data, title }: Props) {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div className="SkillTree">
        <SkillTreeSegment parentBottomPosition={0} data={data} />
      </div>
    </React.Fragment>
  );
}

export default SkillTree;
