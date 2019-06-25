import React from "react";
import { Skill } from "../models";
import SkillTreeSegment from "./SkillTreeSegment";

interface Props {
  data: Skill[];
  title: string;
}

function SkillTree({ data, title }: Props) {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <SkillTreeSegment data={data} />
    </React.Fragment>
  );
}

export default SkillTree;
