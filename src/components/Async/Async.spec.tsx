import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import Async from ".";

describe("Async component", () => {
  it("renders correctly", async () => {
    const { debug } = render(<Async />);

    expect(screen.getByText("Hello Bro")).toBeInTheDocument();

    // 2 options
    // 1 - expect(await screen.findByText("Button")).toBeInTheDocument()
    /* 2 - await waitFor(() => {
       return expect( expect(screen.getByText("Button")).toBeInTheDocument()
       )
     }) */
    // 3 - await waitForElementToBeRemoved(screen.queryByText("Button"));
  });
});
