import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";

import App from "../App";
import { server } from "../mocks/server";
import { renderWithContext } from "../test-utils";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("should render App without crash", () => {
    renderWithContext(<App />);
    const title = screen.getByText("NYT Article Search");

    expect(title).toBeInTheDocument();
  });

  it("should search for articles", async () => {
    renderWithContext(<App />);

    const input = screen.getByPlaceholderText("Search article...");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "brazil");

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText(
          "What Does an F1 Race in Brazil Lack? A Brazilian Driver."
        )
      ).toBeInTheDocument();
    });
    expect(screen.getAllByTestId("articleItem")).toHaveLength(10);
  });
});
