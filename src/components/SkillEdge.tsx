import React, { useContext } from "react";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";

interface Props {
  nextNodeIds: string[];
}

function SkillEdge({ nextNodeIds }: Props) {
  const { skills } = useContext(SkillContext);
  const isActive = nextNodeIds.every(id => skills[id] === "selected");

  return (
    <div
      data-testid="skill-edge"
      className={`SkillEdge ${isActive ? "SkillEdge--active" : ""}`}
    />
  );
}

export default SkillEdge;
