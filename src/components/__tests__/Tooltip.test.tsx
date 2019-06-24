import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "../Tooltip";
import { getIsElementInWindow } from "../../helpers";

jest.mock("../../helpers", () => ({
  getIsElementInWindow: jest.fn()
}));

function renderComponent() {
  return render(<Tooltip />);
}

describe("Tooltip component", () => {
  it("should render the placeholder text if none is provider", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("Title")).toBeTruthy();
    expect(queryByText("Some information")).toBeTruthy();
  });

  it("should render the tooltip at normal height if contained within the window", () => {
    // getIsElementInWindow.mockReturnValueOnce()
  });
});
