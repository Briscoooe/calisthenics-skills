import { BarbellIcon } from "../icons";
import { Skill } from "../models";

const skillTreeData: Skill[] = [
  {
    id: "vertical-row",
    icon: BarbellIcon,
    tooltipDescription:
      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
    tooltipTitle: "Vertical Row",
    children: [
      {
        id: "incline-row",
        icon: BarbellIcon,
        tooltipDescription:
          "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
        tooltipTitle: "Incline Row",
        children: [
          {
            id: "row",
            icon: BarbellIcon,
            tooltipDescription:
              "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
            tooltipTitle: "Row",
            children: [
              {
                id: "wide-row",
                icon: BarbellIcon,
                tooltipDescription:
                  "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                tooltipTitle: "Wide Row",
                children: [
                  {
                    id: "archer-row",
                    icon: BarbellIcon,
                    tooltipDescription:
                      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                    tooltipTitle: "Archer Row",
                    children: [
                      {
                        id: "archer-in-row",
                        icon: BarbellIcon,
                        tooltipDescription:
                          "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                        tooltipTitle: "Archer Incline Row",
                        children: [
                          {
                            id: "str-oa-row",
                            icon: BarbellIcon,
                            tooltipDescription:
                              "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                            tooltipTitle: "Straddle One Arm Row",
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "tuck-front-lever",
                    icon: BarbellIcon,
                    tooltipDescription:
                      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                    tooltipTitle: "Tuck Front Lever",
                    children: [
                      {
                        id: "archer-in-row",
                        icon: BarbellIcon,
                        tooltipDescription:
                          "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                        tooltipTitle: "Archer Incline Row",
                        children: []
                      },
                      {
                        id: "str-oa-row",
                        icon: BarbellIcon,
                        tooltipDescription:
                          "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
                        tooltipTitle: "Straddle One Arm Row",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default skillTreeData;
