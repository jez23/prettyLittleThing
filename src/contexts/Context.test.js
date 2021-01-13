import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ConstProvider } from "../contexts/Context";

afterEach(cleanup);

describe("Render context", () => {
  test("should render the context component", () => {
    render(<ConstProvider></ConstProvider>);
  });
});
