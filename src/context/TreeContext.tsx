import * as React from "react";

interface Props {
  children: JSX.Element;
}

interface State {
  treeWidths: number[];
}

interface ITreeContext {
  treeWidths: number[];
  updateTreeWidths: Function;
}

const TreeContext = React.createContext<ITreeContext>({
  treeWidths: [],
  updateTreeWidths: () => null
});

export class TreeProvider extends React.Component<Props, State> {
  state = {
    treeWidths: []
  };

  updateTreeWidths = (depth: number) => {
    this.setState((prevState: State) => {
      const { treeWidths } = prevState;

      if (typeof treeWidths[depth] === "undefined") {
        treeWidths[depth] = 0;
      }

      treeWidths[depth] += 1;

      return {
        treeWidths
      };
    });
  };

  render() {
    const { treeWidths } = this.state;

    return (
      <TreeContext.Provider
        value={{ treeWidths, updateTreeWidths: this.updateTreeWidths }}
      >
        {this.props.children}
      </TreeContext.Provider>
    );
  }
}

export default TreeContext;
