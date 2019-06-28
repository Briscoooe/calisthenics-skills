import React from "react";
import { render, cleanup } from "@testing-library/react";
import SkillEdge from "../SkillEdge";
import SkillContext, { SkillProvider } from "../../context/SkillContext";

interface Props {
  startingState: string;
  startingId: string;
}

interface Context {
  updateSkillState: (startingId: string, startingState: string) => void;
}

class ContextSetter extends React.Component<Props> {
  static contextType = SkillContext;

  constructor(props: Props, context: Context) {
    super(props);

    context.updateSkillState(props.startingId, props.startingState);
  }

  render() {
    return null;
  }
}

function renderComponent(nextNodeId: string, startingState: string) {
  let updateState: Function | void;

  const api = render(
    <SkillProvider>
      <ContextSetter startingState={startingState} startingId={nextNodeId} />
      <SkillEdge nextNodeId={nextNodeId} />
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
    const startingId = "123";
    const startingState = "unlocked";

    const { getByTestId } = renderComponent(startingId, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge--active");
  });

  it("should be inactive if the next node is locked", () => {
    const startingId = "123";
    const startingState = "unlocked";

    const { getByTestId } = renderComponent(startingId, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).not.toHaveClass("SkillEdge--active");
  });

  it("should be active if the next node is selected", () => {
    const startingId = "123";
    const startingState = "selected";

    const { getByTestId } = renderComponent(startingId, startingState);

    const skillEdge = getByTestId("skill-edge");

    expect(skillEdge).toHaveClass("SkillEdge SkillEdge--active");
  });
});
