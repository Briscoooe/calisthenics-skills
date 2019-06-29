import React, { useContext } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";
import { SELECTED_STATE, LOCKED_STATE } from "./constants";
import Line from "./ui/Line";

interface Props {
  position: {
    topX: number;
    topY: number;
    bottomX: number;
    bottomY: number;
  };
  nextNodeId: string;
}

function SkillEdge({ nextNodeId, position }: Props) {
  const { skills } = useContext(SkillContext);
  const isActive = skills[nextNodeId] === SELECTED_STATE;
  const isUnlocked = skills[nextNodeId] !== LOCKED_STATE;

  return (
    <div className="SkillEdge__container">
      <Line
        {...position}
        dataAttrs={{ "data-testid": "skill-edge" }}
        className={classnames("SkillEdge", {
          "SkillEdge--active": isActive,
          "SkillEdge--unlocked": isUnlocked
        })}
      />
    </div>
  );
}

export default SkillEdge;
