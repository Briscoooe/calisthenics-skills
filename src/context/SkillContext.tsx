import * as React from "react";

interface State {
  skills: Skills;
}

interface ISkillContext {
  skills: Skills;
  updateSkillState: (key: string, updatedState: string) => void;
}

interface Skills {
  [key: string]: string;
}

const SkillContext = React.createContext<ISkillContext>({
  skills: {},
  updateSkillState: () => undefined
});

export class SkillProvider extends React.Component<{}, State> {
  state = {
    skills: {}
  };

  updateSkillState = (key: string, updatedState: string): void => {
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
