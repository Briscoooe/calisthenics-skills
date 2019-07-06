import React from "react";
import classnames from "classnames";
import { SELECTED_STATE, UNLOCKED_STATE, LOCKED_STATE } from "../constants";
import { Skill } from "../../models";
import Icon from "./Icon";

interface Props {
  handleClick: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  id: string;
  currentState: string;
  skill: Skill;
}

const IconNode = React.forwardRef(function IconNode(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    id,
    currentState,
    skill
  } = props;

  return (
    <div
      onClick={handleClick}
      ref={ref}
      data-testid={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classnames("SkillNode", {
        "SkillNode--selected": currentState === SELECTED_STATE,
        "SkillNode--unlocked": currentState === UNLOCKED_STATE,
        "SkillNode--locked": currentState === LOCKED_STATE
      })}
    >
      {"icon" in skill ? (
        <Icon title="node-icon" src={skill.icon} containerWidth={60} />
      ) : (
        <div>hey</div>
      )}
    </div>
  );
});

export default IconNode;
