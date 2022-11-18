import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("should render SearchBar component", () => {
    const props = {
      input: "inputValue",
      handleChange: () => {},
      name: "article",
      placeholder: "Search article...",
    };

    render(<SearchBar {...props} />);

    expect(
      screen.getByPlaceholderText("Search article...")
    ).toBeInTheDocument();
  });

  it("should change input value", async () => {
    const props = {
      input: "",
      handleChange: () => {},
      name: "article",
      placeholder: "Search article...",
    };

    render(<SearchBar {...props} />);

    const input = screen.getByPlaceholderText("Search article...");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "brazil");

    expect(input).toHaveValue("brazil");
  });
});
