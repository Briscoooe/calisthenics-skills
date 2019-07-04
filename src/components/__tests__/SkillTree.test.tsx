import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SkillTree from "../SkillTree";
import MockLocalStorage from "../mocks/mockLocalStorage";
import uuid4 from "uuid/v4";

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

function renderComponent(id: string) {
  return render(
    <SkillTree id={id} title="borderlands" data={mockSkillTreeData} />
  );
}

describe("SkillTree", () => {
  let currentId: string;

  beforeEach(() => {
    currentId = uuid4();

    const defaultStoreContents = {
      [`skills-${currentId}`]: JSON.stringify({})
    };

    // @ts-ignore
    window.localStorage = new MockLocalStorage(defaultStoreContents);
  });

  afterEach(cleanup);

  it("renders the correct number of SkillNodes", () => {
    const { queryAllByTestId } = renderComponent(currentId);

    expect(queryAllByTestId(/item-/).length).toBe(3);
  });

  it("should activate the first style on click", async () => {
    const { getByTestId } = renderComponent(currentId);

    const topSkillNode = getByTestId("item-one");

    fireEvent.click(topSkillNode);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");
  });

  it("should deactivate the first style on secondclick", async () => {
    const id = uuid4();
    currentId = id;

    const { getByTestId } = renderComponent(id);

    const topSkillNode = getByTestId("item-one");

    fireEvent.click(topSkillNode);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(topSkillNode);

    expect(topSkillNode).toHaveClass("SkillNode");
    expect(topSkillNode).not.toHaveClass("SkillNode SkillNode--selected");
  });

  it("should successfully selected all nodes when clicked in succession", async () => {
    const id = uuid4();
    currentId = id;

    const { getByTestId } = renderComponent(id);

    const topSkillNode = getByTestId("item-one");
    const middleSkillNode = getByTestId("item-two");
    const bottomSkillNode = getByTestId("item-three");

    fireEvent.click(topSkillNode);

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(middleSkillNode);

    expect(middleSkillNode).toHaveClass("SkillNode SkillNode--selected");

    fireEvent.click(bottomSkillNode);

    expect(bottomSkillNode).toHaveClass("SkillNode SkillNode--selected");
  });

  it("should not select a node whose dependencies are not selected", async () => {
    const id = uuid4();
    currentId = id;

    const { getByTestId } = renderComponent(id);

    const middleSkillNode = getByTestId("item-two");

    fireEvent.click(middleSkillNode);

    expect(middleSkillNode).not.toHaveClass("SkillNode SkillNode--selected");
    expect(middleSkillNode).not.toHaveStyle(`background-color: #f44336`);
  });

  it("should load the correct skills that are saved to localstorage", () => {
    const defaultSkills = {
      "item-one": "selected",
      "item-two": "unlocked",
      "item-three": "locked"
    };

    window.localStorage.setItem(
      `skills-${currentId}`,
      JSON.stringify(defaultSkills)
    );

    const { getByTestId } = renderComponent(currentId);

    const topSkillNode = getByTestId("item-one");
    const middleSkillNode = getByTestId("item-two");
    const bottomSkillNode = getByTestId("item-three");

    expect(topSkillNode).toHaveClass("SkillNode SkillNode--selected");
    expect(middleSkillNode).toHaveClass("SkillNode SkillNode--unlocked");
    expect(bottomSkillNode).toHaveClass("SkillNode SkillNode--locked");
  });
});
