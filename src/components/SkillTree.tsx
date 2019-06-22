import React from "react";
import SkillNode from "./SkillNode";
import SkillEdge from "./SkillEdge";
import { BarbellIcon } from "../icons";

const tooltipTitle = "Phasewalker";
const tooltipDescription =
  "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.";

function SkillTree() {
  return (
    <React.Fragment>
      <SkillNode
        id="item-one"
        previousNodeIds={[]}
        icon={BarbellIcon}
        tooltipTitle={tooltipTitle}
        tooltipDescription={tooltipDescription}
      />
      <SkillEdge nextNodeIds={["item-two"]} />
      <SkillNode
        id="item-two"
        previousNodeIds={["item-one"]}
        icon={BarbellIcon}
      />
      <SkillEdge nextNodeIds={["item-three"]} />
      <SkillNode
        id="item-three"
        previousNodeIds={["item-two"]}
        icon={BarbellIcon}
      />
    </React.Fragment>
  );
}

export default SkillTree;
