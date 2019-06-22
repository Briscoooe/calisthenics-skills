import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "../Tooltip";

function renderComponent() {
  return render(<Tooltip />);
}

describe("Tooltip component", () => {
  it("should render the placeholder text if none is provider", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("Title")).toBeTruthy();
    expect(queryByText("Some information")).toBeTruthy();
  });
});
