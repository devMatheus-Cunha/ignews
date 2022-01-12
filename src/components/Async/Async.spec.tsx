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
    render(<Async />);

    expect(screen.getByText("Hello Bro")).toBeInTheDocument();

    // 3 options
       expect(await screen.findByText("Button")).toBeInTheDocument()
    /* 2 - await waitFor(() => {
       return expect( expect(screen.getByText("Button")).toBeInTheDocument()
       )
     }) */
    // 3 - await waitForElementToBeRemoved(screen.queryByText("Button"));
  });
});
