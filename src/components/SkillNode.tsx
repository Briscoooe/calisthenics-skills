import React, { Children } from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import { LOCKED_STATE, UNLOCKED_STATE, SELECTED_STATE } from "./constants";
import Tooltip from "./Tooltip";
import Icon from "./ui/Icon";
import "./SkillNode.css";
import SkillTreeSegment from "./SkillTreeSegment";
import { Skill, ParentPosition } from "../models";

interface Props {
  id: string;
  childData: Skill[];
  parentNodeId?: string;
  icon: string;
  tooltipTitle?: string;
  tooltipDescription?: string;
}

interface State {
  currentState: string;
  showTooltip: boolean;
}

interface Context {
  skills: {
    [key: string]: string;
  };
}

class SkillNode extends React.Component<Props, State> {
  static contextType = SkillContext;
  private skillNodeRef: React.RefObject<HTMLDivElement>;
  
  private parentPosition: ParentPosition = {
    bottom: 0,
    center: 0
  };

  constructor(props: Props, context: Context) {
    super(props);

    const skillState = context.skills[props.id];
    this.skillNodeRef = React.createRef();

    this.state = {
      currentState: skillState,
      showTooltip: false
    };
  }

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

    return this.context.updateSkillState(this.props.id, state);
  };

  componentDidMount() {
    const {
      bottom,
      left,
      right
    } = this.skillNodeRef.current!.getBoundingClientRect();

    this.parentPosition = {
      bottom,
      center: (right - left) / 2 + left
    };

    if (this.props.parentNodeId) {
      return this.updateState(LOCKED_STATE);
    }

    return this.updateState(UNLOCKED_STATE);
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
    const { currentState, showTooltip } = this.state;
    const {
      icon,
      childData,
      tooltipTitle,
      tooltipDescription,
      id
    } = this.props;

    return (
      <React.Fragment>
        <div
          data-testid="skill-node"
          className={classnames("SkillNode__overlay", {
            "SkillNode__overlay--selected": currentState === SELECTED_STATE
          })}
        >
          <div
            onClick={this.handleClick}
            ref={this.skillNodeRef}
            data-testid={this.props.id}
            onMouseEnter={() => this.setState({ showTooltip: true })}
            onMouseLeave={() => this.setState({ showTooltip: false })}
            className={classnames("SkillNode", {
              "SkillNode--selected": currentState === SELECTED_STATE,
              "SkillNode--unlocked": currentState === UNLOCKED_STATE,
              "SkillNode--locked": currentState === LOCKED_STATE
            })}
          >
            <Icon title="node-icon" src={icon} containerWidth={250} />
          </div>
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
        {childData.length > 0 && (
          <div className="children" style={{ display: "flex" }}>
            <SkillTreeSegment
              parentPosition={this.parentPosition}
              data={childData}
              parentNodeId={id}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SkillNode;
