import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import wait from "waait";
import SkillTree from "../SkillTree";
import { SkillProvider } from "../../context/SkillContext";

const mockSkillTreeData = [
  {
    id: "item-one",
    icon: "./222",
    tooltipDescription:
      "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
    tooltipTitle: "Phasewalker",
    children: [
      {
        id: "item-two",
        icon: "./222",
        tooltipDescription:
          "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
        tooltipTitle: "Phasewalker",
        children: [
          {
            id: "item-three",
            icon: "./222",
            tooltipDescription:
              "Lilith's Action Skill is Phasewalk, which allows her to turn invisible and increase her running speed. Upon entering and exiting Phasewalk, Lilith releases a Phase Blast that damages enemies around her. While in Phasewalk, Lilith cannot shoot, jump, or collect loot, and a melee attack will cause her to exit Phasewalk.",
            tooltipTitle: "Phasewalker",
            children: []
          }
        ]
      }
    ]
  }
];

function renderComponent() {
  return render(
    <SkillProvider>
      <SkillTree title="borderlands" data={mockSkillTreeData} />
    </SkillProvider>
  );
}

describe("SkillTree", () => {
  afterEach(cleanup);

  it("renders the correct number of SkillNodes", () => {
    const { queryAllByTestId } = renderComponent();

    expect(queryAllByTestId(/item-/).length).toBe(3);
  });

  it("should activate the first style on click", async () => {
    const { getByTestId } = renderComponent();

    const topSkillNode = getByTestId("item-one");

    fireEvent.click(topSkillNode);

    await wait(0);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");
  });

  it("should deactivate the first style on secondclick", async () => {
    const { getByTestId } = renderComponent();

    const topSkillNode = getByTestId("item-one");

    fireEvent.click(topSkillNode);

    await wait(0);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(topSkillNode);

    await wait(0);

    expect(topSkillNode).toHaveClass("SkillNode");
    expect(topSkillNode).not.toHaveClass("SkillNode SkillNode--selected");
  });

  it("should successfully selected all nodes when clicked in succession", async () => {
    const { getByTestId } = renderComponent();

    const topSkillNode = getByTestId("item-one");
    const middleSkillNode = getByTestId("item-two");
    const bottomSkillNode = getByTestId("item-three");

    fireEvent.click(topSkillNode);

    await wait(0);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(middleSkillNode);

    await wait(0);

    expect(middleSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(bottomSkillNode);

    await wait(0);

    expect(bottomSkillNode).toHaveClass("SkillNode SkillNode--selected");
  });

  it("should not select a node whose dependencies are not selected", async () => {
    const { getByTestId } = renderComponent();

    const middleSkillNode = getByTestId("item-two");

    fireEvent.click(middleSkillNode);

    await wait(0);

    expect(middleSkillNode).not.toHaveClass("SkillNode SkillNode--selected");
    expect(middleSkillNode).not.toHaveStyle(`background-color: #f44336`);
  });
});
