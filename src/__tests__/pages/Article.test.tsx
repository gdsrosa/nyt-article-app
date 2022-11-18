import { screen } from "@testing-library/react";
import Article from "../../pages/Article";
import { renderWithContext } from "../../test-utils";

describe("Article Page", () => {
  it("should render Article properly", () => {
    renderWithContext(<Article />);
    const seeFullArticle = screen.getByText("See full article");

    expect(seeFullArticle).toBeInTheDocument();
  });
});
