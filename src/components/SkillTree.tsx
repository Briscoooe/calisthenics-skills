import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";

function SkillTree() {
  return (
    <React.Fragment>
      <p>Skill Tree Demo</p>
      <SkillNode id="item-one" previousNodeIds={[]} />
      <SkillEdge nextNodeIds={["item-two"]} />
      <SkillNode id="item-two" previousNodeIds={["item-one"]} />
      <SkillEdge nextNodeIds={["item-three"]} />
      <SkillNode id="item-three" previousNodeIds={["item-two"]} />
    </React.Fragment>
  );
}

export default SkillTree;
