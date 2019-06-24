import React from "react";
import { render, cleanup } from "@testing-library/react";
import SkillEdge from "../SkillEdge";
import SkillContext, { SkillProvider } from "../../context/SkillContext";

interface Props {
  startingState: string[];
  startingIds: string[];
}

interface Context {
  updateSkillState: Function;
}

class ContextSetter extends React.Component<Props> {
  static contextType = SkillContext;

  constructor(props: Props, context: Context) {
    super(props);

    props.startingIds.map((id, i) => {
      context.updateSkillState(id, props.startingState[i]);

      return null;
    });
  }

  render() {
    return null;
  }
}

function renderComponent(nextNodeIds: string[], startingState: string[]) {
  let updateState: Function | null;

  const api = render(
    <SkillProvider>
      <ContextSetter startingState={startingState} startingIds={nextNodeIds} />
      <SkillEdge nextNodeIds={nextNodeIds} />
    </SkillProvider>
  );

  return {
    ...api,
    updateState() {
      return updateState;
    }
  };
}

describe("SkillEdge", () => {
  afterEach(cleanup);

  it("should be inactive if the next node is unlocked", async () => {
    const startingIds = ["123"];
    const startingState = ["unlocked"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge--active");
  });

  it("should be inactive if the next node is locked", () => {
    const startingIds = ["123"];
    const startingState = ["unlocked"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge--active");
  });

  it("should be inactive if one of many of the next nodes are not selected", () => {
    const startingIds = ["123", "234"];
    const startingState = ["unlocked", "selected"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge--active");
  });

  it("should be active if the next node is selected", () => {
    const startingIds = ["123"];
    const startingState = ["selected"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).toHaveClass("SkillEdge SkillEdge--active");
  });

  it("should be active if all of the next nodes are selected", () => {
    const startingIds = ["123"];
    const startingState = ["selected"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).toHaveClass("SkillEdge SkillEdge--active");
  });

  it("should have a class of unlocked if all next nodes are not locked", () => {
    const startingIds = ["123", "234", "456"];
    const startingState = ["selected", "unlocked", "selected"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).toHaveClass("SkillEdge SkillEdge--unlocked");
  });

  it('should not have a class of unloocked if one of the next nodes are locked', () => {
    const startingIds = ["234", '345', '456'];
    const startingState = ["selected", "unlocked", "locked"];

    const { getByTestId } = renderComponent(startingIds, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge SkillEdge--unlocked");
  })
});
