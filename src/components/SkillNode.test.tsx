import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SkillNode from "./SkillNode";
import { BarbellIcon } from "../icons";

function renderComponent() {
  return render(
    <SkillNode id="test-node" previousNodeIds={[]} icon={BarbellIcon} />
  );
}

describe("SkillNode component", () => {
  it("should show and hide the tooltip on mouseenter and mouseleave", () => {
    const { getByTestId, queryByText } = renderComponent();

    const skillNode = getByTestId('skill-node');

    fireEvent.mouseEnter(skillNode);

    expect(queryByText('Hey there')).toBeTruthy();

    fireEvent.mouseLeave(skillNode);

    expect(queryByText('Hey there')).toBeNull();
  });
});
