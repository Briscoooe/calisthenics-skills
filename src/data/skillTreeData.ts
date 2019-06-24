import { BarbellIcon } from "../icons";
import { Skill } from "../models";

const skillTreeData: Skill[] = [
  {
    id: "item-one",
    previousNodeIds: [],
    icon: BarbellIcon,
    tooltipDescription:
      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
    tooltipTitle: "Phasewalker"
  },
  {
    id: "item-two",
    previousNodeIds: ["item-one"],
    icon: BarbellIcon,
    tooltipDescription:
      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
    tooltipTitle: "Phasewalker"
  },
  {
    id: "item-three",
    previousNodeIds: ["item-two"],
    icon: BarbellIcon,
    tooltipDescription:
      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
    tooltipTitle: "Phasewalker"
  }
];

export default skillTreeData;
