import React from "react";
import classnames from "classnames";
import { throttle, Cancelable, isEmpty } from "lodash";
import SkillContext from "../context/SkillContext";
import { LOCKED_STATE, UNLOCKED_STATE, SELECTED_STATE } from "./constants";
import Tooltip from "./Tooltip";
import "./SkillNode.css";
import SkillTreeSegment from "./SkillTreeSegment";
import { Skill, ParentPosition } from "../models";
import { Dictionary } from "../models/utils";
import IconNode from "./ui/IconNode";

interface Props {
  skill: Skill;
  parentNodeId?: string;
}

interface State {
  currentState: string;
  showTooltip: boolean;
  parentPosition: ParentPosition;
}

interface Context {
  skills: Dictionary<string>;
}

class SkillNode extends React.Component<Props, State> {
  static contextType = SkillContext;
  private skillNodeRef: React.RefObject<HTMLDivElement>;
  private throttledResize: (() => void) & Cancelable;
  private childWidth: number = 0;

  constructor(props: Props, context: Context) {
    super(props);

    const { id } = props.skill;

    const skillState = context.skills[id];
    this.skillNodeRef = React.createRef();
    this.throttledResize = throttle(this.handleResize, 200);

    this.state = {
      currentState: skillState,
      showTooltip: false,
      parentPosition: {
        bottom: 0,
        center: 0
      }
    };
  }

  calculatePosition = () => {
    const {
      bottom,
      left,
      right
    } = this.skillNodeRef.current!.getBoundingClientRect();

    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    this.setState({
      parentPosition: {
        bottom: bottom + scrollY,
        center: (right - left) / 2 + left + scrollX
      }
    });
  };

  handleResize = () => {
    this.calculatePosition();
  };

  handleClick = () => {
    const { currentState } = this.state;

    if (currentState === LOCKED_STATE) {
      return null;
    }

    if (currentState === UNLOCKED_STATE) {
      return this.updateState(SELECTED_STATE);
    }

    return this.updateState(UNLOCKED_STATE);
  };

  updateState = (state: string) => {
    this.setState({
      currentState: state
    });

    return this.context.updateSkillState(this.props.skill.id, state);
  };

  componentDidMount() {
    this.calculatePosition();
    this.childWidth = this.skillNodeRef.current!.clientWidth;

    window.addEventListener("resize", this.throttledResize);

    if (isEmpty(this.context.skills)) {
      if (this.props.parentNodeId) {
        return this.updateState(LOCKED_STATE);
      }

      return this.updateState(UNLOCKED_STATE);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.throttledResize);
  }

  componentDidUpdate() {
    const { currentState } = this.state;
    const { parentNodeId } = this.props;

    const parentNodeIsSelected =
      !parentNodeId || this.context.skills[parentNodeId] === SELECTED_STATE;

    if (currentState === UNLOCKED_STATE && !parentNodeIsSelected) {
      return this.updateState(LOCKED_STATE);
    }

    if (!parentNodeIsSelected) {
      return null;
    }

    if (currentState === LOCKED_STATE && parentNodeIsSelected) {
      return this.updateState(UNLOCKED_STATE);
    }
  }

  render() {
    const { currentState, showTooltip, parentPosition } = this.state;
    const { children, tooltipTitle, tooltipDescription, id } = this.props.skill;

    // SkillNode__overlay needs width depending on the prop
    // SkillNode needs width depending on the prop
    // Everything else remains the same

    return (
      <React.Fragment>
        <div
          data-testid="skill-node"
          className={classnames("SkillNode__overlay", {
            "SkillNode__overlay--selected": currentState === SELECTED_STATE
          })}
        >
          {"icon" in this.props.skill ? (
            <IconNode
              handleClick={this.handleClick}
              handleMouseEnter={() => this.setState({ showTooltip: true })}
              handleMouseLeave={() => this.setState({ showTooltip: false })}
              id={id}
              currentState={currentState}
              skill={this.props.skill}
              ref={this.skillNodeRef}
            />
          ) : (
            <div ref={this.skillNodeRef}>Heyy there </div>
          )}
          <div className="SkillNode__tooltip-placeholder">
            {showTooltip && (
              <div
                onMouseEnter={() => this.setState({ showTooltip: true })}
                onMouseLeave={() => this.setState({ showTooltip: false })}
              >
                <Tooltip
                  tooltipTitle={tooltipTitle}
                  tooltipDescription={tooltipDescription}
                />
              </div>
            )}
          </div>
        </div>
        {children.length > 0 && (
          <div className="children" style={{ display: "flex" }}>
            {children.map(skill => {
              return (
                <SkillTreeSegment
                  key={skill.id}
                  parentPosition={parentPosition}
                  skill={skill}
                  parentNodeId={id}
                />
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SkillNode;
