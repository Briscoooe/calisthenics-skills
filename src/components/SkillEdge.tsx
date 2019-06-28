import React, { useContext } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillEdge.css";
import { SELECTED_STATE, LOCKED_STATE } from "./constants";

interface Props {
  fromPosition: number;
  nextNodeId: string;
}

interface LineProps {
  dataAttrs: {
    [key: string]: string;
  };
  fromPosition: number;
  className: string;
}

// for now assume that I want to just get the center value. So i will pass to and from, the center values from the parent and the child.

// how to do this cleanly?
// I can pass the id directly through the props, that might be messy and clunky, and might require a restructure of the data structure.

// props will include starting position
// drawing a line from one element to another.
// find a starting point.

// get top point of element
// update the

// try generating an SVG line.? not good

// update the skill context to keep track of the position for each element?
// pass down the prev node id aswell (if poss)

// import the line from the UI library.

function Line({ dataAttrs, className, fromPosition }: LineProps) {
  return <div {...dataAttrs} className={className} />;
}

function SkillEdge({ nextNodeId, fromPosition }: Props) {
  // console.log("fromPosition", fromPosition);
  const { skills } = useContext(SkillContext);
  const isActive = skills[nextNodeId] === SELECTED_STATE;
  const isUnlocked = skills[nextNodeId] !== LOCKED_STATE;

  return (
    <div className="SkillEdge__container">
      <Line
        dataAttrs={{ "data-testid": "skill-edge" }}
        fromPosition={fromPosition}
        className={classnames("SkillEdge", {
          "SkillEdge--active": isActive,
          "SkillEdge--unlocked": isUnlocked
        })}
      />
    </div>
  );
}

export default SkillEdge;
