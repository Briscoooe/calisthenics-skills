import React from "react";
import classnames from "classnames";
import SkillContext from "../context/SkillContext";
import "./SkillNode.css";
import { LOCKED_STATE, UNLOCKED_STATE, SELECTED_STATE } from "./constants";
import Tooltip from "./Tooltip";

interface Props {
  id: string;
  previousNodeIds: string[];
  icon: string;
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
    const nodeDependencies = this.props.previousNodeIds.length;

    if (nodeDependencies > 0) {
      return this.updateState(LOCKED_STATE);
    }

    return this.updateState(UNLOCKED_STATE);
  }

  componentDidUpdate() {
    const { currentState } = this.state;

    const prevNodesAreSelected = this.props.previousNodeIds.every(prevId => {
      if (this.context.skills[prevId] !== SELECTED_STATE) {
        return false;
      }

      return true;
    });

    if (currentState === UNLOCKED_STATE && !prevNodesAreSelected) {
      return this.updateState(LOCKED_STATE);
    }

    if (!prevNodesAreSelected) {
      return null;
    }

    if (currentState === LOCKED_STATE && prevNodesAreSelected) {
      return this.updateState(UNLOCKED_STATE);
    }
  }

  render() {
    const { currentState, showTooltip } = this.state;
    const { icon } = this.props;

    return (
      <div
        onMouseEnter={() => this.setState({ showTooltip: true })}
        onMouseLeave={() => this.setState({ showTooltip: false })}
        style={{ position: "relative" }}
      >
        <div
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
            <img alt="node-icon" src={icon} className="SkillNode__icon" />
          </div>
        </div>
        {showTooltip && <Tooltip />}
      </div>
    );
  }
}

export default SkillNode;
