import React, { useContext } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";
import { SELECTED_STATE, LOCKED_STATE } from "./constants";

interface Props {
  nextNodeId: string;
}

function SkillEdge({ nextNodeId }: Props) {
  const { skills } = useContext(SkillContext);
  const isActive =  skills[nextNodeId] === SELECTED_STATE;
  const isUnlocked = skills[nextNodeId] !== LOCKED_STATE;

  return (
    <div
      data-testid="skill-edge"
      className={classnames("SkillEdge", {
        "SkillEdge--active": isActive,
        "SkillEdge--unlocked": isUnlocked
      })}
    />
  );
}

export default SkillEdge;
