import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { BarbellIcon } from "../icons";

function SkillTree() {
  return (
    <React.Fragment>
      <p>Skill Tree Demo</p>
      <SkillNode id="item-one" previousNodeIds={[]} icon={BarbellIcon} />
      <SkillEdge nextNodeIds={["item-two"]} />
      <SkillNode id="item-two" previousNodeIds={["item-one"]} icon={BarbellIcon} />
      <SkillEdge nextNodeIds={["item-three"]} />
      <SkillNode id="item-three" previousNodeIds={["item-two"]} icon={BarbellIcon} />
    </React.Fragment>
  );
}

export default SkillTree;
