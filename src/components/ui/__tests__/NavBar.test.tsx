import React from "react";
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import NavBar from "../NavBar";

function renderComponent() {
  return render(
    <NavBar>
      <li>Hey there</li>
    </NavBar>
  );
}

describe("NavBar component", () => {
  afterEach(cleanup);

  it("should add the hidden class on scroll", () => {
    const { getByTestId } = renderComponent();

    const listItem = getByTestId("navbar-item");

    expect(listItem).not.toHaveClass("NavBar__list--hidden");

    act(() => {
      // @ts-ignore
      window.scrollY = 200;
      fireEvent.scroll(document, { target: { scrollY: 0 } });
    });

    expect(listItem).toHaveClass("NavBar__list--hidden");
  });

  it("should not add the class if the page hasn't scrolled past the threshold", () => {
    const { getByTestId } = renderComponent();

    const listItem = getByTestId("navbar-item");

    expect(listItem).not.toHaveClass("NavBar__list--hidden");

    act(() => {
      // @ts-ignore
      window.scrollY = 50;
      fireEvent.scroll(document, { target: { scrollY: 0 } });
    });

    expect(listItem).not.toHaveClass("NavBar__list--hidden");
  });
});
