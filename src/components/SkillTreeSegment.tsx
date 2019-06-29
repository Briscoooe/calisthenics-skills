import React, { useRef, useEffect } from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { Skill, ParentPosition, ChildPosition } from "../models";

interface Props {
  skill: Skill;
  parentPosition: ParentPosition;
  parentNodeId?: string;
}

function SkillTreeSegment({ skill, parentNodeId, parentPosition }: Props) {
  const skillNodeRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
  );

  const childPosition: React.MutableRefObject<ChildPosition> = useRef({
    top: 0,
    center: 0
  });

  useEffect(() => {
    const { top, left, width } = skillNodeRef.current!.getBoundingClientRect();

    childPosition.current = {
      top,
      center: left + width / 2
    };
  }, []);

  return (
    <div>
      {parentNodeId && (
        <SkillEdge
          position={{
            topX: parentPosition.center,
            topY: parentPosition.bottom,
            bottomX: childPosition.current.center,
            bottomY: childPosition.current.top
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
