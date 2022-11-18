import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "articles/:article",
    element: <Article />,
  },
]);

export default router;
