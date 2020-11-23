import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchResults } from "./SearchResults";

jest.mock("../react_TrackList/TrackList");

describe("SearchResults", () => {
  describe("renders child", () => {
    test("header element", () => {
      // Setup
      const { getByRole } = render(<SearchResults />);

      // Exercise
      const heading = getByRole("heading");

      // Verify
      expect(heading).toBeInTheDocument();
      expect(heading).toMatchInlineSnapshot(`
        <h2>
          Results
        </h2>
      `);
    });

    test("TrackList component", () => {
      // Setup
      const { debug } = render(<SearchResults />);

      // Exercise
      const trackListComponent = screen.getByTestId("TrackList");

      // Verify
      expect(trackListComponent).toBeInTheDocument();
      expect(trackListComponent.textContent).toMatch(/Mock\s?TrackList/);
    });
  });
});

