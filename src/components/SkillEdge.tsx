import React, { useContext } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";
import { SELECTED_STATE } from "./constants";

interface Props {
  nextNodeIds: string[];
}

function SkillEdge({ nextNodeIds }: Props) {
  const { skills } = useContext(SkillContext);
  const isActive = nextNodeIds.every(id => skills[id] === SELECTED_STATE);

  return (
    <div
      data-testid="skill-edge"
      className={classnames("SkillEdge", {
        "SkillEdge--active": isActive
      })}
  />
  );
}

export default SkillEdge;
