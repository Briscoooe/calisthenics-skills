import React, { useContext } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";
import { SELECTED_STATE, LOCKED_STATE } from "./constants";

interface Props {
  topXPosition: number;
  topYPosition: number;
  nextNodeId: string;
}

interface LineProps {
  dataAttrs: {
    [key: string]: string;
  };
  topXPosition: number;
  topYPosition: number;
  className: string;
}

function Line({ dataAttrs, className, topXPosition, topYPosition }: LineProps) {
  return (
    <div
      {...dataAttrs}
      className={className}
      style={{ top: topXPosition, left: topYPosition }}
    />
  );
}

function SkillEdge({ nextNodeId, topXPosition, topYPosition }: Props) {
  const { skills } = useContext(SkillContext);
  const isActive = skills[nextNodeId] === SELECTED_STATE;
  const isUnlocked = skills[nextNodeId] !== LOCKED_STATE;

  return (
    <div className="SkillEdge__container">
      <Line
        dataAttrs={{ "data-testid": "skill-edge" }}
        topXPosition={topXPosition}
        topYPosition={topYPosition}
        className={classnames("SkillEdge", {
          "SkillEdge--active": isActive,
          "SkillEdge--unlocked": isUnlocked
        })}
      />
    </div>
  );
}

export default SkillEdge;
