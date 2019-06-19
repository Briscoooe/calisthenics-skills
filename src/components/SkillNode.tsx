import React from "react";
import SkillContext from "../context/SkillContext";
import "./SkillNode.css";

interface Props {
  id: string;
  previousNodeIds: string[];
}

interface State {
  currentState: string;
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
      currentState: skillState
    };
  }

  handleClick = () => {
    const { currentState } = this.state;

    if (currentState === "locked") {
      return null;
    }

    if (currentState === "unlocked") {
      return this.updateState("selected");
    }

    return this.updateState("unlocked");
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
      return this.updateState("locked");
    }

    return this.updateState("unlocked");
  }

  componentDidUpdate() {
    const { currentState } = this.state;

    const prevNodesAreSelected = this.props.previousNodeIds.every(prevId => {
      if (this.context.skills[prevId] !== "selected") {
        return false;
      }

      return true;
    });

    if (currentState === "unlocked" && !prevNodesAreSelected) {
      return this.updateState("locked");
    }

    if (!prevNodesAreSelected) {
      return null;
    }

    if (currentState === "locked" && prevNodesAreSelected) {
      return this.updateState("unlocked");
    }
  }

  render() {
    const { currentState } = this.state;
    const isSelected = currentState === "selected";

    return (
      <div
        onClick={this.handleClick}
        data-testid={this.props.id}
        className={`SkillNode ${isSelected ? "SkillNode--selected" : ""}`}
      />
    );
  }
}

export default SkillNode;
