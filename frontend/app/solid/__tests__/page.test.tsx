import React from "react";
import { render } from "@testing-library/react";
import Page from "../page";  // Replace with the correct path to your component

describe("<Page />", () => {
  it("renders without crashing", () => {
    render(<Page />);
  });
});
