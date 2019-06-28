import React from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import { LOCKED_STATE, UNLOCKED_STATE, SELECTED_STATE } from "./constants";
import Tooltip from "./Tooltip";
import Icon from "./ui/Icon";
import "./SkillNode.css";

interface Props {
  id: string;
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

  constructor(props: Props, context: Context) {
    super(props);

    const skillState = context.skills[props.id];

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
    const { icon, tooltipTitle, tooltipDescription } = this.props;

    return (
      <div className="SkillNode__container">
        <div
          onMouseEnter={() => this.setState({ showTooltip: true })}
          onMouseLeave={() => this.setState({ showTooltip: false })}
          data-testid="skill-node"
          className={classnames("SkillNode__overlay", {
            "SkillNode__overlay--selected": currentState === SELECTED_STATE
          })}
        >
          <div
            onClick={this.handleClick}
            data-testid={this.props.id}
            className={classnames("SkillNode", {
              "SkillNode--selected": currentState === SELECTED_STATE,
              "SkillNode--unlocked": currentState === UNLOCKED_STATE,
              "SkillNode--locked": currentState === LOCKED_STATE
            })}
          >
            <Icon title="node-icon" src={icon} containerWidth={250} />
          </div>
          {showTooltip && (
            <Tooltip
              tooltipTitle={tooltipTitle}
              tooltipDescription={tooltipDescription}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SkillNode;
