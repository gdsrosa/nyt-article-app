import { rest } from "msw";
import { articleList } from "./articleList";

export const handlers = [
  rest.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=brazil&api-key=${process.env.REACT_APP_API_KEY}&page=0`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(articleList));
    }
  ),
];
