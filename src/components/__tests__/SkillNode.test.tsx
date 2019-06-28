import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SkillNode from "../SkillNode";
import { BarbellIcon } from "../../icons";

function renderComponent() {
  return render(
    <SkillNode
      childData={[]}
      id="test-node"
      icon={BarbellIcon}
      tooltipTitle="Hey there"
      tooltipDescription="Description"
    />
  );
}

describe("SkillNode component", () => {
  afterEach(cleanup)

  it("should show and hide the tooltip on mouseenter and mouseleave", () => {
    const { getByTestId, queryByText } = renderComponent();

    const skillNode = getByTestId("test-node");

    fireEvent.mouseEnter(skillNode);

    expect(queryByText("Hey there")).toBeTruthy();
    expect(queryByText("Description")).toBeTruthy();

    fireEvent.mouseLeave(skillNode);

    expect(queryByText("Hey there")).toBeNull();
    expect(queryByText("Description")).toBeNull();
  });

  it("should still show and hide the tooltip when hovering over the tool tip", () => {
    const { getByTestId, queryByText } = renderComponent();

    const skillNode = getByTestId("test-node");
    
    fireEvent.mouseEnter(skillNode);
    
    expect(queryByText("Hey there")).toBeTruthy();
    expect(queryByText("Description")).toBeTruthy();
    
    const tooltipContainer = getByTestId("tooltip-container");
    
    fireEvent.mouseEnter(tooltipContainer);

    expect(queryByText("Hey there")).toBeTruthy();
    expect(queryByText("Description")).toBeTruthy();

    fireEvent.mouseLeave(tooltipContainer);

    expect(queryByText("Hey there")).toBeNull();
    expect(queryByText("Description")).toBeNull();
  });
});
