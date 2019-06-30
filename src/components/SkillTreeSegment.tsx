import React, { useRef, useEffect, useState } from "react";
import { throttle, Cancelable } from "lodash";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill, ParentPosition, ChildPosition } from "../models";

interface Props {
  skill: Skill;
  parentPosition: ParentPosition;
  parentNodeId?: string;
}

const defaultParentPosition: ChildPosition = {
  top: 0,
  center: 0
};

function SkillTreeSegment({ skill, parentNodeId, parentPosition }: Props) {
  const [childPosition, setChildPosition] = useState(defaultParentPosition);
  const skillNodeRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
  );

  useEffect(() => {
    function handleResize() {
      const {
        top,
        left,
        width
      } = skillNodeRef.current!.getBoundingClientRect();

      const scrollY = window.scrollY;

      setChildPosition({
        top: top + scrollY,
        center: left + width / 2
      });
    }

    window.addEventListener("resize", throttle(handleResize, 250));
    handleResize();

    return function cleanup() {
      window.removeEventListener("resize", throttle(handleResize));
    };
  }, []);

  return (
    <div>
      {parentNodeId && (
        <SkillEdge
          position={{
            topX: parentPosition.center,
            topY: parentPosition.bottom,
            bottomX: childPosition.center,
            bottomY: childPosition.top
          }}
          nextNodeId={skill.id}
        />
      )}
      <div ref={skillNodeRef}>
        <SkillNode
          id={skill.id}
          icon={skill.icon}
          parentNodeId={parentNodeId}
          tooltipTitle={skill.tooltipTitle}
          tooltipDescription={skill.tooltipDescription}
          childData={skill.children}
        />
      </div>
    </div>
  );
}

export default SkillTreeSegment;
