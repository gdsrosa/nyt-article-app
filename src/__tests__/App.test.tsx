import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import { renderWithContext } from "../test-utils";

describe("App", () => {
  it("should render App without crash", () => {
    renderWithContext(<App />);
    const title = screen.getByText("NYT Article Search");

    expect(title).toBeInTheDocument();
  });

  fit("should search for articles", async () => {
    renderWithContext(<App />);
    // change on input
    const input = screen.getByPlaceholderText("Search article...");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "brazil");

    // click to make search
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();

    // assert if we got 10 articles as results
    await waitFor(() => {
      expect(screen.getByTestId("articleList")).toBeInTheDocument();
    });
  });
});
