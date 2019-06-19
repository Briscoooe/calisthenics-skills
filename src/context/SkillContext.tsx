import * as React from "react";

interface State {
  skills: Skills;
}

interface ISkillContext {
  skills: Skills;
  updateSkillState: Function;
}

interface Skills {
  [key: string]: string;
}

const SkillContext = React.createContext<ISkillContext>({
  skills: {},
  updateSkillState: () => null
});

export class SkillProvider extends React.Component<{}, State> {
  state = {
    skills: {}
  };

  updateSkillState = (key: string, updatedState: string) => {
    this.setState((prevState: State) => {
      return {
        skills: {
          ...prevState.skills,
          [key]: updatedState
        }
      };
    });
  };

  render() {
    return (
      <SkillContext.Provider
        value={{
          skills: this.state.skills,
          updateSkillState: this.updateSkillState
        }}
      >
        {this.props.children}
      </SkillContext.Provider>
    );
  }
}

export default SkillContext;
